// The links slide, checked in every deck.
//
// The links are absolute on purpose. Written as relative paths they worked in
// the build and not in `npm run dev`, where the dev server answers every path
// with the same presentation — so the link looked broken in exactly the place
// the deck gets edited. Absolute means: same behaviour in dev, in the build and
// on Pages. This checks the href of each anchor, the QR image beside it, and
// that each deck marks itself and only itself as "estás aquí".
import { chromium } from 'playwright-chromium'
const O = process.env.DECK_ORIGIN ?? 'http://localhost:4180'
const B = '/usap-fisica-2027'
const WANT = {
  'lk-informativa': 'https://jmigartua.github.io/usap-fisica-2027/',
  'lk-enunciados':  'https://jmigartua.github.io/usap-fisica-2027/enunciados/',
  'lk-hallazgos':   'https://jmigartua.github.io/usap-fisica-2027/hallazgos/',
}
const DECKS = [['', 9, 'lk-informativa'], ['/enunciados', 12, 'lk-enunciados'], ['/hallazgos', 15, 'lk-hallazgos']]
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
let bad = 0
for (const [sub, last, mine] of DECKS) {
  const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage()
  await p.goto(`${O}${B}${sub}/index.html#/${last}`, { waitUntil: 'networkidle' })
  await p.waitForTimeout(900)
  const r = await p.$$eval('.slidev-layout', els => {
    const s = els.find(e => e.getBoundingClientRect().height > 10)
    const cards = [...s.querySelectorAll('.lk')].map(c => ({
      key: [...c.classList].find(k => k.startsWith('lk-')),
      href: c.querySelector('a')?.getAttribute('href') ?? null,
      qr: c.querySelector('.qr img')?.getAttribute('src') ?? null,
      qrOk: (c.querySelector('.qr img') || {}).naturalWidth > 0,
      here: getComputedStyle(c.querySelector('.lk-here')).display !== 'none',
    }))
    return { cards, layoutClasses: [...s.classList].filter(k => k.startsWith('here-')) }
  })
  const hereOn = r.cards.filter(c => c.here).map(c => c.key)
  const hrefOk = r.cards.every(c => c.href === WANT[c.key])
  const qrOk = r.cards.every(c => c.qrOk && c.qr.includes(c.key.replace('lk-', 'qr-')))
  const markOk = hereOn.length === 1 && hereOn[0] === mine
  console.log(`${(sub || '/informativa').padEnd(13)} cards ${r.cards.length}  hrefs ${hrefOk ? 'ok' : 'WRONG'}  qr ${qrOk ? 'ok' : 'WRONG'}  «estás aquí» on ${hereOn.join(',') || '(none)'} ${markOk ? '' : '<-- WRONG'}`)
  if (!hrefOk) r.cards.forEach(c => { if (c.href !== WANT[c.key]) console.log(`    ${c.key}: ${c.href}`) })
  if (!qrOk) r.cards.forEach(c => { if (!c.qrOk || !c.qr.includes(c.key.replace('lk-', 'qr-'))) console.log(`    ${c.key}: qr ${c.qr} loaded=${c.qrOk}`) })
  if (!(hrefOk && qrOk && markOk)) bad++
  await p.close()
}
await b.close()
console.log(bad ? `${bad} deck(s) wrong` : 'the links slide is right in all three')
process.exit(bad ? 1 : 0)
