// Assemble the presentations from the pool of slides in bloques/.
//
// Why a pool and not one file per deck: four of the slides are wanted by two or
// three decks at once (the statement-length slide, the 2026 paper table, the
// constants table, the links slide). Kept as copies they would drift, which is
// the one failure this project has already had — the deck once carried a figure
// the dossier had fixed three days earlier. One copy, assembled.
//
// LAYOUT. bloques/<deck>/NN-<name>.md, numbered by the slide's position in that
// deck, so the folder listing IS the running order and slide 5 is the file that
// starts with 05. A slide used by more than one deck cannot have one number, so
// its text lives once in bloques/comun/<name>.md and each deck holds a numbered
// pointer file whose first line is `-> comun/<name>.md`. That keeps every deck
// folder free of holes while the text still exists in exactly one place.
//
// The numbers are derived, not authoritative: decks.json owns the order, and
// this script renames files whose prefix no longer matches it, reporting each
// rename. So reordering a deck is one edit in decks.json, and the filenames
// catch up by themselves.
//
// A block file is `<frontmatter YAML>` then a line of `...` then the body. The
// manifest may override section / ribbonTitle / class / transition per deck,
// because the same slide is an annexe in one presentation and the argument
// itself in another.
import { readFileSync, writeFileSync, readdirSync, renameSync, watch } from 'node:fs'
import { join, dirname } from 'node:path'

const root = process.cwd()
const POOL = 'bloques'
const manifest = JSON.parse(readFileSync(join(root, 'decks.json'), 'utf8'))
const base = readFileSync(join(root, 'headmatter/_base.yml'), 'utf8').trimEnd()

export function assemble() {
  // ── the pool ────────────────────────────────────────────────────────────────
  const walk = (dir) => readdirSync(join(root, dir), { withFileTypes: true }).flatMap(e =>
    e.isDirectory() ? walk(join(dir, e.name)) : (e.name.endsWith('.md') ? [join(dir, e.name)] : []))

  const files = walk(POOL)
  const NUMBERED = /^(\d{2})-(.+)\.md$/
  const stemOf = (rel) => {
    const f = rel.split('/').pop()
    const m = f.match(NUMBERED)
    return m ? m[2] : f.replace(/\.md$/, '')
  }
  const isPointer = (text) => {
    const first = text.split('\n').find(l => l.trim() !== '')
    const m = first?.match(/^->\s*(\S+)\s*$/)
    return m ? m[1] : null
  }

  // name -> { path, pointerTo } for every file in the pool
  const byPath = new Map()
  for (const rel of files) byPath.set(rel, readFileSync(join(root, rel), 'utf8'))

  function resolve(rel, seen = new Set()) {
    if (seen.has(rel)) throw new Error(`${rel}: pointer loop`)
    const text = byPath.get(rel)
    if (text === undefined) throw new Error(`${rel}: no such block`)
    const to = isPointer(text)
    if (!to) return { rel, text }
    seen.add(rel)
    return resolve(join(POOL, to), seen)
  }

  // A deck's block may be named in decks.json by bare name ("enlaces") or by its
  // path; bare names are looked up inside that deck's folder first, then comun/.
  const folderOf = (out) => out.replace(/\.md$/, '') === 'slides' ? 'informativa' : out.replace(/\.md$/, '')
  function locate(name, out) {
    const cands = files.filter(f => stemOf(f) === name)
    const own = cands.find(f => dirname(f) === join(POOL, folderOf(out)))
    const pick = own ?? cands.find(f => dirname(f) === join(POOL, 'comun')) ?? cands[0]
    if (!pick) throw new Error(`${out}: no block "${name}" anywhere under ${POOL}/`)
    return pick
  }

  // ── keep the numbers honest ─────────────────────────────────────────────────
  const renames = []
  for (const deck of manifest.decks) {
    const blocks = deck.blocks.map(x => (typeof x === 'string' ? { b: x } : x))
    blocks.forEach(({ b }, n) => {
      const rel = locate(b, deck.out)
      const want = join(POOL, folderOf(deck.out), `${String(n + 1).padStart(2, '0')}-${stemOf(rel)}.md`)
      if (rel !== want && dirname(rel) === dirname(want)) {
        // renameSync overwrites silently. Two blocks in one folder cannot share a
        // stem, so this should be unreachable — which is exactly when a silent
        // overwrite would cost a slide nobody could get back.
        if (byPath.has(want)) throw new Error(`renumbering would overwrite ${want} with ${rel}`)
        renameSync(join(root, rel), join(root, want))
        byPath.set(want, byPath.get(rel)); byPath.delete(rel)
        files[files.indexOf(rel)] = want
        renames.push(`${rel}  ->  ${want}`)
      }
    })
  }
  if (renames.length) {
    console.log('renumerados (decks.json manda en el orden):')
    for (const r of renames) console.log('  ' + r)
  }

  // ── assemble ────────────────────────────────────────────────────────────────
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
      `info: |\n  ## ${deck.title}\n  ${deck.info}\n  Generada por tools/build_decks.mjs desde ${POOL}/ — no editar a mano.\n`)
    const ribbon = { title: deck.ribbonTitle, thumbsDir: deck.thumbs, ...(deck.ribbon ?? {}) }
    head += '\nribbon:\n' + Object.entries(ribbon)
      .map(([k, v]) => `  ${k}: ${JSON.stringify(v)}`).join('\n') + '\n'

    let doc = head
    const sources = []
    blocks.forEach(({ b, ...over }, n) => {
      const entry = locate(b, deck.out)
      const { rel, text } = resolve(entry)
      used.add(rel)
      const m = text.match(/(^|\n)\.\.\.\n/)
      if (!m) throw new Error(`${rel}: no "..." separator`)
      let fm = text.slice(0, m.index).trim()
      const body = text.slice(m.index + m[0].length).replace(/\n+$/, '')
      for (const [k, v] of Object.entries(over)) fm = setKey(fm, k, v)
      // `blockSrc` rides in the frontmatter so the slide can name its own source
      // file on screen while developing — see slide-bottom.vue. The cover's
      // frontmatter is the headmatter, so it cannot carry one.
      //
      // NOT `src`: that is a reserved Slidev key that *imports another markdown
      // file as the slide's content*. Naming it `src` quietly pulled each block
      // file back into its own slide, and eight slides overflowed.
      if (n > 0) fm = setKey(fm, 'blockSrc', rel === entry ? rel : `${entry} -> ${rel}`)
      sources.push(`${String(n + 1).padStart(2, '0')}  ${entry}${rel === entry ? '' : `  ->  ${rel}`}`)
      doc += n === 0 ? `\n---\n${body}\n` : `\n---\n${fm}\n---\n${body}\n`
    })

    // The banner has to live INSIDE the headmatter as YAML comments: Slidev
    // requires the frontmatter fence to be the first thing in the file, so an
    // HTML comment above it would break the parse.
    const banner = [
      '# ===========================================================================',
      '#  GENERATED FILE — DO NOT EDIT   ·   FITXATEGI SORTUA — EZ EDITATU',
      '#',
      `#  ${deck.out} is assembled by tools/build_decks.mjs from ${POOL}/ + decks.json.`,
      '#  Anything typed here is destroyed by the next `npm run decks`.',
      '#  Edit the slide instead — number = slide number:',
      ...sources.map(s => `#    ${s}`),
      '# ===========================================================================',
    ].join('\n')
    doc = doc.replace(/^---\n/, `---\n${banner}\n`)
    writeFileSync(join(root, deck.out), doc)
    console.log(`${deck.out.padEnd(16)} ${String(blocks.length).padStart(2)} slides`)
  }

  const unused = files.filter(f => !used.has(f) && !isPointer(byPath.get(f))).sort()
  if (unused.length) console.log('bloques sin usar:', unused.join(', '))
}

// ── watch ──────────────────────────────────────────────────────────────────
// Slidev watches the entry file (bilingue.md), not bloques/. Without this the
// dev server shows whatever the last `npm run decks` produced, so editing a
// block while the server runs changes nothing on screen — you edit the right
// file and the page sits there. Re-assembling on every change closes that gap:
// the entry file changes, and Slidev hot-reloads it.
export function watchPool() {
  let timer = null, running = false
  const run = () => {
    if (running) return
    running = true
    try { assemble() } catch (e) { console.error('\n  ' + e.message + '\n') }
    running = false
  }
  const bump = () => { clearTimeout(timer); timer = setTimeout(run, 120) }
  // Renumbering renames files inside the pool, which fires the watcher again;
  // the debounce collapses that into one extra harmless pass.
  watch(join(root, POOL), { recursive: true }, bump)
  watch(join(root, 'decks.json'), bump)
  console.log(`vigilando ${POOL}/ y decks.json — cada cambio vuelve a montar`)
}

const invokedDirectly = process.argv[1] && process.argv[1].endsWith('build_decks.mjs')
if (invokedDirectly) {
  assemble()
  if (process.argv.includes('--watch')) watchPool()
}
