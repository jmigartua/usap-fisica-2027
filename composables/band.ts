// Shared state for the target word band: centre and width, in words.
// Read by WordBars (band position), BandControls (sliders), BandTotals (table) and, through
// app.config.globalProperties.$band (setup/main.ts), by any {{ }} expression in slides.md.
import { computed, reactive, watch } from 'vue'

const KEY = 'usap-band'
const defaults = { mean: 162, width: 25 }

function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) ?? 'null')
    if (saved && Number.isFinite(saved.mean) && Number.isFinite(saved.width)) return { ...defaults, ...saved }
  } catch {}
  return { ...defaults }
}

export const band = reactive({
  ...restore(),
  reset() { Object.assign(band, defaults) },
})

export const lo = computed(() => Math.round(band.mean - band.width / 2))
export const hi = computed(() => Math.round(band.mean + band.width / 2))

watch(() => [band.mean, band.width], ([mean, width]) => {
  try { localStorage.setItem(KEY, JSON.stringify({ mean, width })) } catch {}
})

export function useBand() {
  return { band, lo, hi }
}
