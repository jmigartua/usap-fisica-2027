import { chromium } from 'playwright-chromium'
import { mkdirSync } from 'node:fs'
const origin = process.env.DECK_ORIGIN ?? 'http://localhost:4173'
const path = process.env.DECK_PATH ?? '/usap-fisica-2027/'
const dir = process.env.OUT ?? 'shots_bi'
const dark = process.env.DARK === '1'
mkdirSync(dir, { recursive: true })
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const ctx = await b.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 2 })
const p = await ctx.newPage()
if (dark) { await p.goto(`${origin}${path}`, { waitUntil: 'networkidle' })
  await p.evaluate(() => localStorage.setItem('slidev-color-schema', 'dark')) }
for (const n of process.argv[2].split(',').map(Number)) {
  // about:blank first: navigating from `…/#/4` to `…/#/5` is a same-document
  // hash change, so the app never re-reads the colour preference (or anything
  // else) and the screenshot silently shows the previous theme.
  await p.goto('about:blank')
  await p.goto(`${origin}${path}#/${n}`, { waitUntil: 'networkidle' }); await p.waitForTimeout(1300)
  for (let i = 0; i < 12; i++) { await p.keyboard.press('ArrowRight'); await p.waitForTimeout(130)
    if (!(await p.evaluate(() => location.hash)).startsWith(`#/${n}`)) { await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(600); break } }
  await p.waitForTimeout(600)
  await p.screenshot({ path: `${dir}/${String(n).padStart(2,'0')}${dark?'-dark':''}.png` })
}
await b.close()
