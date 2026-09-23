// Load the three decks exactly as GitHub Pages will serve them — under the
// repository path, not at a server root — and record every request that fails.
// A base-path mistake shows up here and nowhere else.
import { chromium } from 'playwright-chromium'
const ORIGIN = 'http://localhost:4180'
const BASE = '/usap-fisica-2027'
// Slide counts come from the manifest, not from a number typed here: a deck
// that gains a slide must not leave this check quietly measuring the old one.
import { readFileSync } from 'node:fs'
const decks = JSON.parse(readFileSync('decks.json', 'utf8')).decks.map(d => {
  const name = d.out.replace(/\.md$/, '')
  return [name === 'slides' ? '' : '/' + name, d.blocks.length, d.thumbs.split('/').pop()]
})
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
let fail = 0
for (const [sub, n, tag] of decks) {
  const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage()
  const bad = [], errs = []
  p.on('response', r => { if (r.status() >= 400) bad.push(`${r.status()} ${r.url().replace(ORIGIN, '')}`) })
  p.on('pageerror', e => errs.push(e.message))
  for (let i = 1; i <= n; i++) {
    await p.goto(`${ORIGIN}${BASE}${sub}/#/${i}`, { waitUntil: 'networkidle' })
    await p.waitForTimeout(350)
    for (let k = 0; k < 22; k++) {
      await p.keyboard.press('ArrowRight'); await p.waitForTimeout(60)
      if (!(await p.evaluate(() => location.hash)).startsWith(`#/${i}`)) break
    }
    await p.waitForTimeout(150)
  }
  // every image the deck ever showed must have pixels
  await p.goto(`${ORIGIN}${BASE}${sub}/#/2`, { waitUntil: 'networkidle' }); await p.waitForTimeout(500)
  const navs = await p.$$('.ribbon-nav')
  for (const e of navs) { const bb = await e.boundingBox(); if (bb && bb.width > 4) { await p.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2); break } }
  await p.waitForTimeout(1600)
  const th = await p.evaluate(() => { const i = [...document.querySelectorAll('.navpop img')]; return { n: i.length, ok: i.filter(x => x.naturalWidth > 0).length } })
  const u = [...new Set(bad)]
  console.log(`${tag.padEnd(12)} ${String(n).padStart(2)} slides · thumbs ${th.ok}/${th.n} · ${u.length ? u.length + ' HTTP FAILURES' : 'no failed requests'}${errs.length ? ' · ' + errs.length + ' page errors' : ''}`)
  u.slice(0, 6).forEach(x => console.log('    ' + x))
  ;[...new Set(errs)].slice(0, 3).forEach(x => console.log('    JS ' + x))
  if (u.length || errs.length || th.ok !== th.n) fail++
  await p.close()
}
// where the links slide points, in each deck
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage()
console.log('')
for (const [sub, n, tag] of decks) {
  await p.goto(`${ORIGIN}${BASE}${sub}/#/${n}`, { waitUntil: 'networkidle' }); await p.waitForTimeout(800)
  const hrefs = await p.$$eval('.slidev-layout', els => {
    const s = els.find(e => e.getBoundingClientRect().height > 10)
    return [...s.querySelectorAll('.lk a')].map(a => a.getAttribute('href'))
  })
  console.log(`links slide in ${tag}:`)
  hrefs.forEach(h => console.log('  ' + h))
}
await b.close()
process.exit(fail ? 1 : 0)
