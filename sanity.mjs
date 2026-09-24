// A rendered slide, not just a URL that answered 200: the measurement harness
// reports "all clear" for a page whose JavaScript never ran, because it finds
// no slide to measure. This checks a slide actually exists and carries text.
import { chromium } from 'playwright-chromium'
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage()
const bad = []
for (const spec of process.argv.slice(2)) {
  const [path, n] = spec.split('#')
  await p.goto(`http://localhost:4173${path}#/${n}`, { waitUntil: 'networkidle' }); await p.waitForTimeout(1200)
  const r = await p.evaluate(() => {
    const s = [...document.querySelectorAll('.slidev-layout')].find(e => e.getBoundingClientRect().height > 10)
    return { found: !!s, chars: s ? s.innerText.trim().length : 0, theme: document.documentElement.className }
  })
  const ok = r.found && r.chars > 20
  if (!ok) bad.push(path)
  console.log(`  ${ok ? 'ok ' : 'DEAD'} ${path.padEnd(34)} slide ${n}  ${r.chars} chars  html.class="${r.theme}"`)
}
console.log(bad.length ? `${bad.length} deck(s) did not render` : 'every deck renders')
await b.close()
