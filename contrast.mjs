// Text that survives the theme: sample the computed colour of every visible text
// node against the colour actually painted behind it, and report anything under
// the WCAG AA threshold for its size. Catches the case this change is most
// likely to produce — an accent tuned for navy left sitting on white.
import { chromium } from 'playwright-chromium'
const origin = 'http://localhost:4173'
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } })
const p = await ctx.newPage()
const theme = process.env.DARK === '1' ? 'dark' : 'light'
await p.goto(`${origin}/usap-fisica-2027/`, { waitUntil: 'networkidle' })
await p.evaluate(t => localStorage.setItem('slidev-color-schema', t), theme)

const probe = async (path, n) => {
  await p.goto('about:blank')
  await p.goto(`${origin}${path}#/${n}`, { waitUntil: 'networkidle' }); await p.waitForTimeout(900)
  for (let i = 0; i < 12; i++) { await p.keyboard.press('ArrowRight'); await p.waitForTimeout(110)
    if (!(await p.evaluate(() => location.hash)).startsWith(`#/${n}`)) { await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(450); break } }
  await p.waitForTimeout(400)
  return p.evaluate(() => {
    const lum = (c) => { const f = c.map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4 })
      return 0.2126 * f[0] + 0.7152 * f[1] + 0.0722 * f[2] }
    const parse = (s) => { const m = s.match(/[\d.]+/g); return m ? m.slice(0, 3).map(Number).concat(m[3] !== undefined ? +m[3] : 1) : null }
    const over = (fg, bg) => { const a = fg[3]; return [0,1,2].map(i => fg[i] * a + bg[i] * (1 - a)) }
    const bgOf = (el) => { let e = el, acc = [255,255,255]
      const chain = []
      while (e && e !== document.documentElement) { const c = parse(getComputedStyle(e).backgroundColor); if (c && c[3] > 0) chain.push(c); e = e.parentElement }
      const rootBg = parse(getComputedStyle(document.body).backgroundColor)
      acc = rootBg && rootBg[3] > 0 ? rootBg.slice(0,3) : (document.documentElement.classList.contains('dark') ? [16,26,46] : [244,246,250])
      for (const c of chain.reverse()) acc = over(c, acc)
      return acc }
    const slide = [...document.querySelectorAll('.slidev-layout')].find(e => e.getBoundingClientRect().height > 10)
    const out = []
    for (const el of slide.querySelectorAll('*')) {
      if (![...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1)) continue
      const st = getComputedStyle(el)
      if (st.display === 'none' || st.visibility === 'hidden' || Number(st.opacity) < 0.35) continue
      const r = el.getBoundingClientRect(); if (r.height === 0 || r.width === 0) continue
      const fg = parse(st.color); if (!fg) continue
      const bg = bgOf(el)
      const L1 = lum(over(fg, bg)), L2 = lum(bg)
      const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
      const px = parseFloat(st.fontSize), bold = Number(st.fontWeight) >= 700
      const need = (px >= 24 || (px >= 18.66 && bold)) ? 3.0 : 4.5
      if (ratio < need) out.push({ r: +ratio.toFixed(2), need, px: +px.toFixed(1),
        t: el.textContent.trim().slice(0, 34), c: st.color, cls: (el.className || '').toString().slice(0, 26) })
    }
    return out
  })
}
let total = 0
for (const [path, n] of [['/usap-fisica-2027/', 9], ['/usap-fisica-2027/enunciados/', 12],
                         ['/usap-fisica-2027/hallazgos/', 15], ['/usap-fisica-2027/bilingue/', 9]]) {
  for (let i = 1; i <= n; i++) {
    const hits = await probe(path, i)
    for (const h of hits) { total++; console.log(`  ${theme} ${path}${i}  ${h.r} < ${h.need}  ${h.px}px  ${h.cls.padEnd(26)} «${h.t}»  ${h.c}`) }
  }
}
console.log(`${theme}: ${total ? total + ' low-contrast text runs' : 'no text below its AA threshold'}`)
await b.close()
