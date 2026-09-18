// Text sheet for the deck: pull every editable line of slides.md into TEXT.md (one line per text,
// grouped by slide, each with an id), and push edited lines back.
//
//   node tools/text.mjs extract   → TEXT.md + .text-map.json
//   node tools/text.mjs apply     → rewrites slides.md from TEXT.md, reports every change
//
// Rules: edit only the words after the id; keep $math$, [marks]{.class}, <br> and {{ }} as they are;
// one line per id (no line breaks inside); do not add or remove ids. Structure (cards, clicks,
// bullets) is not editable here.
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { createHash } from 'node:crypto'

const SLIDES = 'slides.md'
const SHEET = 'TEXT.md'
const MAP = '.text-map.json'

const load = async () => (await import('@slidev/parser/fs')).load(process.cwd(), SLIDES)
const hash = s => createHash('sha1').update(s).digest('hex').slice(0, 12)

// A line is "text" if, after removing tags and MDC markers, something readable remains.
function textOf(raw) {
  const t = raw.trim()
  if (!t) return null
  if (/^---$/.test(t)) return null
  if (/^\|?[\s:|-]+\|?$/.test(t)) return null                       // table separator
  if (/^<\/?v-clicks?>$/.test(t)) return null
  if (/^:{2,}/.test(t)) {                                              // MDC block open/close
    const m = t.match(/title="([^"]*)"/)                             // …unless it carries a title
    return m ? { prefix: t.slice(0, m.index + 7), text: m[1], suffix: t.slice(m.index + 7 + m[1].length) } : null
  }
  const stripped = t.replace(/<[^>]+>/g, '').replace(/\{\{[^}]*\}\}/g, '').trim()
  if (!stripped) return null
  // split a leading heading / list marker so the sheet shows only the words
  const lead = raw.match(/^(\s*)(#{1,6}\s+|[-*]\s+|\d+\.\s+)?/)
  const prefix = lead[0]
  return { prefix, text: raw.slice(prefix.length), suffix: '' }
}

function clean(title) {
  return String(title ?? '').replace(/\$([^$]+)\$/g, '$1').replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '').trim()
}

async function extract() {
  const src = readFileSync(SLIDES, 'utf8')
  const lines = src.split('\n')
  const deck = await load()
  const map = { source: hash(src), items: {} }
  let out = ['# Textos de la presentación', '',
    '> Edita solo las palabras después del id. Conserva `$…$`, `[…]{.clase}`, `<br>` y `{{ }}`.',
    '> Una línea por id; no añadas ni quites ids. Aplicar: `npm run text:apply`.', '']
  deck.slides.forEach((s, i) => {
    const no = i + 1
    const fm = s.frontmatter ?? {}
    out.push(`## ${no} · ${clean(fm.ribbonTitle ?? s.title ?? fm.section ?? '')}`.trimEnd(), '')
    let k = 0
    // 0-based line indices into the file: contentStart skips the frontmatter, end is exclusive
    for (let ln = s.source.contentStart; ln < s.source.end; ln++) {
      const raw = lines[ln]
      const t = textOf(raw)
      if (!t) continue
      k++
      const id = `${no}.${k}`
      map.items[id] = { line: ln, prefix: t.prefix, suffix: t.suffix, text: t.text }
      out.push(`${id}  ${t.text}`)
    }
    out.push('')
  })
  writeFileSync(SHEET, out.join('\n'))
  writeFileSync(MAP, JSON.stringify(map, null, 1))
  console.log(`${SHEET}: ${Object.keys(map.items).length} textos en ${deck.slides.length} diapositivas`)
}

async function apply() {
  if (!existsSync(MAP)) { console.error('no hay .text-map.json: ejecuta primero `npm run text`'); process.exit(1) }
  const map = JSON.parse(readFileSync(MAP, 'utf8'))
  const src = readFileSync(SLIDES, 'utf8')
  const lines = src.split('\n')
  const moved = hash(src) !== map.source
  const sheet = readFileSync(SHEET, 'utf8').split('\n')
  const edits = {}
  for (const l of sheet) {
    const m = l.match(/^(\d+\.\d+)  (.*)$/)
    if (m) edits[m[1]] = m[2]
  }
  const changes = [], problems = []
  for (const [id, it] of Object.entries(map.items)) {
    if (!(id in edits)) { problems.push(`${id}: falta en ${SHEET}`); continue }
    const text = edits[id]
    if (text === it.text) continue
    const orig = it.prefix + it.text + it.suffix
    let ln = it.line
    if (lines[ln] !== orig) {                          // the file moved: find the original line nearby
      const near = lines.findIndex((x, i) => x === orig && Math.abs(i - it.line) < 400)
      if (near < 0) { problems.push(`${id}: no encuentro el original «${it.text.slice(0, 50)}»`); continue }
      ln = near
    }
    lines[ln] = it.prefix + text + it.suffix
    changes.push(`${id}  ${it.text}\n     → ${text}`)
  }
  const unknown = Object.keys(edits).filter(id => !(id in map.items))
  if (unknown.length) problems.push(`ids desconocidos: ${unknown.join(', ')}`)
  if (changes.length) writeFileSync(SLIDES, lines.join('\n'))
  console.log(changes.length ? `${changes.length} cambios:\n` + changes.join('\n') : 'sin cambios')
  if (moved) console.log('(slides.md había cambiado desde la extracción; se buscó cada línea por su texto)')
  if (problems.length) { console.log('\nAvisos:\n' + problems.join('\n')); process.exitCode = 2 }
  if (changes.length) await extract()                 // keep the sheet and the map in sync
}

const cmd = process.argv[2]
if (cmd === 'extract') await extract()
else if (cmd === 'apply') await apply()
else { console.error('uso: node tools/text.mjs extract | apply'); process.exit(2) }
