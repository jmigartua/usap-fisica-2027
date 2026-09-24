// Assemble the three presentations from the one pool of slides in bloques/.
//
// Why a pool and not three files: three of the slides are wanted by two decks
// at once (the statement-length target, the 2026 paper table, the constants
// table). Kept as three copies they would drift, which is the one failure this
// project has already had — the deck once carried a figure the dossier had
// fixed three days earlier. One copy, assembled.
//
// A block file is `<frontmatter YAML>` then a line of `...` then the body. The
// manifest may override section / ribbonTitle / class / transition per deck,
// because the same slide is an annexe in one presentation and the argument
// itself in another.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const manifest = JSON.parse(readFileSync(join(root, 'decks.json'), 'utf8'))
const base = readFileSync(join(root, 'headmatter/_base.yml'), 'utf8').trimEnd()

const pool = new Map()
for (const f of readdirSync(join(root, 'bloques')).filter(f => f.endsWith('.md'))) {
  const raw = readFileSync(join(root, 'bloques', f), 'utf8')
  // A block with no frontmatter — the covers — opens with the separator itself.
  const m = raw.match(/(^|\n)\.\.\.\n/)
  if (!m) throw new Error(`bloques/${f}: no "..." separator`)
  pool.set(f.replace(/\.md$/, ''), {
    fm: raw.slice(0, m.index).trim(),
    body: raw.slice(m.index + m[0].length).replace(/\n+$/, ''),
  })
}

function setKey(fm, key, value) {
  const line = `${key}: ${/^[\w-]+$/.test(String(value)) ? value : JSON.stringify(value)}`
  const re = new RegExp(`^${key}:.*$`, 'm')
  return re.test(fm) ? fm.replace(re, line) : (fm ? fm + '\n' + line : line)
}

const used = new Set()
for (const deck of manifest.decks) {
  const blocks = deck.blocks.map(x => (typeof x === 'string' ? { b: x } : x))
  let head = base
  head = head.replace(/^title:.*$/m, `title: ${JSON.stringify(deck.title)}`)
  head = head.replace(/^info: \|\n(?:  .*\n)+/m,
    `info: |\n  ## ${deck.title}\n  ${deck.info}\n  Generada por tools/build_decks.mjs desde bloques/ — no editar a mano.\n`)
  // Ribbon: the deck's own title and thumbnail directory, plus any further
  // ribbon field the manifest overrides for this deck alone (the bilingual deck
  // carries a Basque occasion, the Spanish ones the project-wide one).
  const ribbon = { title: deck.ribbonTitle, thumbsDir: deck.thumbs, ...(deck.ribbon ?? {}) }
  head += '\nribbon:\n' + Object.entries(ribbon)
    .map(([k, v]) => `  ${k}: ${JSON.stringify(v)}`).join('\n') + '\n'

  let doc = head
  blocks.forEach(({ b, ...over }, n) => {
    const blk = pool.get(b)
    if (!blk) throw new Error(`${deck.out}: no block "${b}"`)
    used.add(b)
    let fm = blk.fm
    for (const [k, v] of Object.entries(over)) fm = setKey(fm, k, v)
    doc += n === 0 ? `\n---\n${blk.body}\n` : `\n---\n${fm}\n---\n${blk.body}\n`
  })
  // A banner, because the one thing that has actually cost work in this project
  // is someone editing the generated file and losing it on the next assembly.
  // It has to live INSIDE the headmatter as YAML comments: Slidev requires the
  // frontmatter fence to be the first thing in the file, so an HTML comment
  // above it would break the parse.
  const banner = [
    '# ===========================================================================',
    '#  GENERATED FILE — DO NOT EDIT   ·   FITXATEGI SORTUA — EZ EDITATU',
    '#',
    `#  ${deck.out} is assembled by tools/build_decks.mjs from bloques/ + decks.json.`,
    '#  Anything typed here is destroyed by the next `npm run decks`.',
    '#  Edit the block instead:',
    ...blocks.map(b => `#    bloques/${b.b}.md`),
    '# ===========================================================================',
  ].join('\n')
  doc = doc.replace(/^---\n/, `---\n${banner}\n`)
  writeFileSync(join(root, deck.out), doc)
  console.log(`${deck.out.padEnd(16)} ${String(blocks.length).padStart(2)} slides`)
}

const unused = [...pool.keys()].filter(k => !used.has(k)).sort()
if (unused.length) console.log('unused blocks:', unused.join(', '))
