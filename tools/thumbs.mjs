// Build public/thumbs/N.jpg (320 px wide) from the PNG export in png/N.png.
// Run after `npm run export:png`; macOS `sips` does the resizing.
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const src = 'png'
const out = join('public', 'thumbs')
if (!existsSync(src)) {
  console.error('no png/ folder: run `npm run export:png` first')
  process.exit(1)
}
rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })
const files = readdirSync(src).filter(f => /^\d+\.png$/.test(f)).sort((a, b) => parseInt(a) - parseInt(b))
for (const f of files) {
  const n = f.replace('.png', '')
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '70', '-Z', '320', join(src, f), '--out', join(out, `${n}.jpg`)], { stdio: 'ignore' })
}
console.log(`thumbs: ${files.length} files in ${out}`)
