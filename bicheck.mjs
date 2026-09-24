// What the ribbon actually says, and whether the cover is Basque only.
import { chromium } from 'playwright-chromium'
const total = Number(process.argv[3] ?? 9), path = process.argv[2]
const origin = process.env.DECK_ORIGIN ?? 'http://localhost:4173'
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage()
// Words that must not appear anywhere on the cover, nor in any ribbon.
const spanish = ['bilingüe', 'bilingue', 'Reunión', 'coordinación', 'curso', 'Física', 'Misma', 'Coordinación', 'edición', 'cambia']
for (let n = 1; n <= total; n++) {
  await p.goto(`${origin}${path}#/${n}`, { waitUntil: 'networkidle' })
  await p.waitForTimeout(1400)
  const r = await p.evaluate(() => {
    const rb = [...document.querySelectorAll('footer.ribbon')].find(e => e.getBoundingClientRect().height > 4)
    const slide = [...document.querySelectorAll('.slidev-layout')].find(e => e.getBoundingClientRect().height > 10)
    const z = s => rb?.querySelector(s)?.textContent?.trim() ?? ''
    return {
      left: z('.ribbon-title') + (z('.ribbon-left span:last-child') && rb?.querySelector('.ribbon-left')?.textContent.trim() || ''),
      leftAll: rb?.querySelector('.ribbon-left')?.textContent.replace(/\s+/g, ' ').trim() ?? '(no ribbon)',
      center: rb?.querySelector('.ribbon-center')?.textContent.replace(/\s+/g, ' ').trim() ?? '',
      right: rb?.querySelector('.ribbon-right')?.textContent.replace(/\s+/g, ' ').trim() ?? '',
      text: slide?.innerText.replace(/\s+/g, ' ').trim() ?? '',
    }
  })
  const ribbonText = [r.leftAll, r.center, r.right].join(' | ')
  const hitsRibbon = spanish.filter(w => ribbonText.includes(w))
  console.log(`  ${String(n).padStart(2)}  ${ribbonText}`)
  if (hitsRibbon.length) console.log(`       ⚠ Spanish left in the ribbon: ${hitsRibbon.join(', ')}`)
  if (n === 1) {
    const hits = spanish.filter(w => r.text.includes(w))
    console.log(`       cover text: ${r.text.slice(0, 200)}`)
    console.log(hits.length ? `       ⚠ Spanish left on the cover: ${hits.join(', ')}` : '       cover is Basque only ✓')
  }
}
await b.close()
