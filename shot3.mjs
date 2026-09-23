import { chromium } from 'playwright-chromium'
import { mkdirSync } from 'node:fs'
const O = process.env.DECK_ORIGIN ?? 'http://localhost:4180'
const [sub, tag, ...pages] = process.argv.slice(2)
mkdirSync('shots3', { recursive: true })
const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium' })
const p = await (await b.newContext({viewport:{width:1280,height:720},deviceScaleFactor:1.5})).newPage()
for (const n of pages){
  await p.goto(`${O}${sub}/index.html#/${n}`,{waitUntil:'networkidle'}); await p.waitForTimeout(900)
  for(let i=0;i<22;i++){ await p.keyboard.press('ArrowRight'); await p.waitForTimeout(90)
    if(!(await p.evaluate(()=>location.hash)).startsWith(`#/${n}`)){ await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(400); break } }
  await p.waitForTimeout(400)
  await p.screenshot({path:`shots3/${tag}-${String(n).padStart(2,'0')}.png`})
}
await b.close()
