// Does each click reveal the Spanish and the Basque twin at the same step?
//
// The bug this catches: with `grid-auto-flow: column` the source order is "all
// ES, then all EU", so a bare `v-click` numbers the four Spanish cards 1–4 and
// the four Basque ones 5–8. The Basque half then lags four presses behind, which
// is exactly what nobody in the room can follow. Explicit `v-click="k"` pins the
// pair to one step; this harness proves it, per slide and per step, by counting
// revealed objects on each side of the slide's midline.
import { chromium } from 'playwright-chromium'
const [path, total] = [process.argv[2], Number(process.argv[3])]
const origin = process.env.DECK_ORIGIN ?? 'http://localhost:4173'
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage()

const sides = () => p.evaluate(() => {
  const slide = [...document.querySelectorAll('.slidev-layout')].find(e => e.getBoundingClientRect().height > 10)
  if (!slide) return null
  const sb = slide.getBoundingClientRect(), mid = sb.left + sb.width / 2
  let l = 0, r = 0
  // Only objects that a click can reveal: Slidev leaves the others untouched.
  for (const el of slide.querySelectorAll('.card, .section-title, .chip-row, .sum3')) {
    const st = getComputedStyle(el)
    if (st.display === 'none' || st.visibility === 'hidden' || Number(st.opacity) < 0.5) continue
    const q = el.getBoundingClientRect()
    if (q.height === 0) continue
    if (el.closest('.card') !== el && el.closest('.card')) continue   // don't count nested
    if (el.closest('.nolang')) continue   // objects kept once, centred: they straddle the midline by design
    ;(q.left + q.width / 2 < mid ? (l++) : (r++))
  }
  return { l, r }
})

let bad = 0
for (let n = 1; n <= total; n++) {
  await p.goto(`${origin}${path}#/${n}`, { waitUntil: 'networkidle' })
  await p.waitForTimeout(450)
  const trace = []
  for (let step = 0; step < 14; step++) {
    const s = await sides()
    if (!s) break
    trace.push(`${s.l}/${s.r}`)
    if (s.l !== s.r) bad++
    await p.keyboard.press('ArrowRight')
    await p.waitForTimeout(160)
    if (!(await p.evaluate(() => location.hash)).startsWith(`#/${n}`)) break
  }
  const off = trace.filter(t => t.split('/')[0] !== t.split('/')[1])
  console.log(`  ${String(n).padStart(2)}  ${trace.join(' → ').padEnd(46)} ${off.length ? 'OUT OF STEP: ' + off.join(',') : 'in step'}`)
}
console.log(bad ? `${bad} step(s) out of sync` : 'every click reveals both halves together')
await b.close()
