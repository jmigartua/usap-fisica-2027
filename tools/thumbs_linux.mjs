// Build the ribbon navigator's thumbnails for every deck in decks.json, from a
// build served locally. Replaces tools/thumbs.mjs on anything that is not macOS:
// the slidev PNG exporter drives a Playwright version this machine may not have,
// and `sips` (which thumbs.mjs uses to resize) is macOS only.
//
//   npx serve dist -l 4173     # or: python3 -m http.server 4173 --directory dist
//   node tools/thumbs_linux.mjs
//
// DECK_ORIGIN may carry the base path too, so the thumbnails can be taken from
// a build made with the real prefix:
//   DECK_ORIGIN=http://localhost:4180/usap-fisica-2027 node tools/thumbs_linux.mjs
import { chromium } from 'playwright-chromium'
import { readFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const origin = process.env.DECK_ORIGIN ?? 'http://localhost:4173'
const decks = JSON.parse(readFileSync('decks.json', 'utf8')).decks.filter(d => !d.draft)
const b = await chromium.launch({ executablePath: process.env.CHROMIUM ?? '/opt/pw-browsers/chromium' })
const p = await (await b.newContext({ viewport: { width: 640, height: 360 } })).newPage()

for (const [deckIndex, d] of decks.entries()) {
  // Same rule as build_all.mjs: the first non-draft deck owns the site root.
  const sub = deckIndex === 0 ? '' : '/' + d.out.replace(/\.md$/, '')
  const out = join('public', d.thumbs)
  rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true })
  const n = d.blocks.length
  for (let i = 1; i <= n; i++) {
    await p.goto(`${origin}${sub}/index.html#/${i}`, { waitUntil: 'networkidle' })
    await p.waitForTimeout(700)
    await p.screenshot({ path: join(out, `${i}.jpg`), type: 'jpeg', quality: 72 })
  }
  console.log(`${d.out.padEnd(16)} ${n} thumbs -> ${out}`)
}
await b.close()
