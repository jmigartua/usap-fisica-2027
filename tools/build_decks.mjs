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
  head += `\nribbon:\n  title: ${JSON.stringify(deck.ribbonTitle)}\n  thumbsDir: ${JSON.stringify(deck.thumbs)}\n`

  let doc = head
  blocks.forEach(({ b, ...over }, n) => {
    const blk = pool.get(b)
    if (!blk) throw new Error(`${deck.out}: no block "${b}"`)
    used.add(b)
    let fm = blk.fm
    for (const [k, v] of Object.entries(over)) fm = setKey(fm, k, v)
    doc += n === 0 ? `\n---\n${blk.body}\n` : `\n---\n${fm}\n---\n${blk.body}\n`
  })
  writeFileSync(join(root, deck.out), doc)
  console.log(`${deck.out.padEnd(16)} ${String(blocks.length).padStart(2)} slides`)
}

const unused = [...pool.keys()].filter(k => !used.has(k)).sort()
if (unused.length) console.log('unused blocks:', unused.join(', '))
