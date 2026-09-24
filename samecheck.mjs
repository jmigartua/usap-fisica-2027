// Do the two informativas say the same thing in Spanish?
//
// Compares, slide by slide, the visible text of the monolingual deck against
// the Spanish (left) half of the bilingual one. Reading the two sources side by
// side is not enough: what matters is what each deck puts on the screen after
// every reveal, which is where a heading kept from the old wording, or a card
// that never appears, would hide.
import { chromium } from 'playwright-chromium'
const origin = process.env.DECK_ORIGIN ?? 'http://localhost:4173'
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage()

const norm = (t) => t.replace(/\s+/g, ' ').replace(/[·•]/g, '·').trim()

async function textOf(path, n, half) {
  await p.goto('about:blank')
  await p.goto(`${origin}${path}#/${n}`, { waitUntil: 'networkidle' }); await p.waitForTimeout(1200)
  for (let i = 0; i < 12; i++) { await p.keyboard.press('ArrowRight'); await p.waitForTimeout(120)
    if (!(await p.evaluate(() => location.hash)).startsWith(`#/${n}`)) { await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(500); break } }
  await p.waitForTimeout(400)
  return p.evaluate((half) => {
    const slide = [...document.querySelectorAll('.slidev-layout')].find(e => e.getBoundingClientRect().height > 10)
    if (!half) return slide.innerText
    // the Spanish half: every text-bearing element left of the midline
    const sb = slide.getBoundingClientRect(), mid = sb.left + sb.width / 2
    const out = []
    const walk = (el) => {
      for (const c of el.children) {
        const q = c.getBoundingClientRect()
        if (q.width === 0 || q.height === 0) continue
        if (q.right <= mid + 2) out.push(c.innerText)
        else if (q.left < mid) walk(c)
      }
    }
    walk(slide)
    return out.join('\n')
  }, half)
}

const pairs = [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8]]
let bad = 0
for (const [a, c] of pairs) {
  const mono = norm(await textOf('/usap-fisica-2027/', a, false))
  const bili = norm(await textOf('/usap-fisica-2027/bilingue/', c, true))
  const wordsOf = (t) => new Set(t.toLowerCase().match(/[\p{L}\p{N}]{4,}/gu) ?? [])
  const A = wordsOf(mono), B = wordsOf(bili)
  const onlyMono = [...A].filter(w => !B.has(w))
  const onlyBili = [...B].filter(w => !A.has(w))
  const ok = onlyMono.length === 0 && onlyBili.length === 0
  if (!ok) bad++
  console.log(`  slide ${a}  ${ok ? 'same wording' : 'DIFFERS'}`)
  if (onlyMono.length) console.log(`      only in the informativa : ${onlyMono.join(' ')}`)
  if (onlyBili.length) console.log(`      only in the bilingual ES: ${onlyBili.join(' ')}`)
}
console.log(bad ? `${bad} slide(s) differ` : 'the two decks say the same in Spanish, slide for slide')
await b.close()
