import { chromium } from 'playwright-chromium'
const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium' })
for (const [sub, n] of [['', 8], ['/enunciados', 11], ['/hallazgos', 14]]) {
  const p = await (await b.newContext({viewport:{width:1280,height:720}})).newPage()
  const bad = []
  p.on('response', r => { if (r.status() >= 400) bad.push(r.status()+' '+r.url()) })
  const errs = []; p.on('pageerror', e => errs.push(e.message))
  await p.goto(`http://localhost:4173${sub}/index.html#/2`, { waitUntil: 'networkidle' })
  await p.waitForTimeout(800)
  // open the navigator and count tiles with a loaded thumbnail
  // Slide 1 hides the ribbon (ribbon.json hideOnPages), so check from slide 2.
  // The navigator opens on mouseenter, so hover — a click would open it and
  // then immediately toggle it shut again. Several ribbons live in the DOM;
  // hover the one that is actually laid out.
  for (const e of await p.$$('.ribbon-nav')) {
    const bb = await e.boundingBox()
    if (bb && bb.width > 4) { await p.mouse.move(bb.x + bb.width/2, bb.y + bb.height/2); break }
  }
  await p.waitForTimeout(1600)
  const r = await p.evaluate(() => {
    const imgs = [...document.querySelectorAll('.navpop img')]
    return { tiles: imgs.length, loaded: imgs.filter(i => i.naturalWidth > 0).length,
             sample: imgs[0]?.getAttribute('src') ?? '' }
  })
  console.log(`${(sub||'/').padEnd(12)} slides ${n}  navigator tiles ${r.tiles} loaded ${r.loaded}  ${r.sample.replace('http://localhost:4173','')}`)
  if (bad.length) console.log('   HTTP errors:', [...new Set(bad)].slice(0,5))
  if (errs.length) console.log('   page errors:', [...new Set(errs)].slice(0,3))
  await p.close()
}
await b.close()
