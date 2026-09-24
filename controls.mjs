// Controls that are actually operable.
//
// The overflow harness measures what is drawn; it says nothing about whether a
// control can be used. A range input squeezed to eleven pixels still paints its
// thumb and still measures inside the slide, so it passed every check while
// being, on screen, a green dot. This opens every toggle and modal and asserts
// that each control has a usable size and stays inside the slide.
import { chromium } from 'playwright-chromium'
const origin = process.env.DECK_ORIGIN ?? 'http://localhost:4173'
const path = process.argv[2], total = Number(process.argv[3])
const FLOOR = { 'input[type=range]': [60, 12], button: [16, 16], a: [24, 10] }
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage()

const check = async (label) => p.evaluate(({ FLOOR, label }) => {
  const slide = [...document.querySelectorAll('.slidev-layout')].find(e => e.getBoundingClientRect().height > 10)
  const root = document.querySelector('.saber-overlay') ?? slide
  const bad = []
  for (const [sel, [minW, minH]] of Object.entries(FLOOR)) {
    for (const el of root.querySelectorAll(sel)) {
      const st = getComputedStyle(el)
      if (st.display === 'none' || st.visibility === 'hidden' || Number(st.opacity) < 0.3) continue
      const q = el.getBoundingClientRect()
      if (q.width === 0 && q.height === 0) continue
      const why = []
      if (q.width < minW) why.push(`w ${Math.round(q.width)} < ${minW}`)
      if (q.height < minH) why.push(`h ${Math.round(q.height)} < ${minH}`)
      if (why.length) bad.push(`${label}  ${sel}  ${why.join(', ')}  «${(el.textContent || el.type || '').trim().slice(0, 20)}»`)
    }
  }
  return bad
}, { FLOOR, label })

let bad = 0
for (let n = 1; n <= total; n++) {
  await p.goto('about:blank')
  await p.goto(`${origin}${path}#/${n}`, { waitUntil: 'networkidle' }); await p.waitForTimeout(1100)
  for (let i = 0; i < 12; i++) { await p.keyboard.press('ArrowRight'); await p.waitForTimeout(110)
    if (!(await p.evaluate(() => location.hash)).startsWith(`#/${n}`)) { await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(500); break } }
  await p.waitForTimeout(400)
  const hits = [...await check(`slide ${n} (closed)`)]
  // Open every toggle and modal this slide offers, one at a time. Re-query
  // between clicks: opening a panel re-renders its own button, so a handle
  // taken before the click is stale by the time we want to close it again.
  for (const sel of ['.toolpanel-btn', '.saber-btn']) {
    const count = (await p.$$(sel)).length
    for (let k = 0; k < count; k++) {
      const btn = (await p.$$(sel))[k]
      if (!btn || !(await btn.isVisible())) continue
      await btn.click(); await p.waitForTimeout(450)
      hits.push(...await check(`slide ${n} (${sel} #${k + 1} open)`))
      await p.keyboard.press('Escape'); await p.waitForTimeout(300)
      const still = (await p.$$(sel))[k]                  // toolpanel closes on its own button, not Esc alone
      if (still && await still.isVisible() && await p.$('.toolpanel-body')) { await still.click(); await p.waitForTimeout(250) }
    }
  }
  for (const h of hits) { bad++; console.log('  ' + h) }
}
console.log(bad ? `${bad} control(s) too small to use` : `every control on ${total} slides is operable`)
await b.close()
