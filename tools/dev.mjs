// Dev server for one deck, with the pool watched.
//
//   node tools/dev.mjs bilingue.md [...slidev args]
//
// Slidev watches the entry file it was given. That file is generated from
// bloques/, so on its own the dev server shows whatever the last assembly
// produced and editing a block does nothing visible — which is exactly how a
// morning gets lost. This runs the assembler in watch mode alongside Slidev, in
// one process group, so editing a block re-assembles the entry file and the
// page hot-reloads. Ctrl-C stops both.
import { spawn } from 'node:child_process'
import { assemble, watchPool } from './build_decks.mjs'

const [deck, ...rest] = process.argv.slice(2)
if (!deck) { console.error('uso: node tools/dev.mjs <deck.md> [args de slidev]'); process.exit(1) }

assemble()
watchPool()

const slidev = spawn('npx', ['slidev', deck, ...rest], { stdio: 'inherit' })
const bye = (sig) => { if (!slidev.killed) slidev.kill(sig); process.exit(0) }
process.on('SIGINT', () => bye('SIGINT'))
process.on('SIGTERM', () => bye('SIGTERM'))
slidev.on('exit', (code) => process.exit(code ?? 0))
