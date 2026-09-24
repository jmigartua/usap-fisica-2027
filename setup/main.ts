import { defineAppSetup } from '@slidev/types'
import { useDarkMode } from '@slidev/client'
import { band, hi, lo } from '../composables/band'

// Exposes the target band to slide templates: {{ $band.mean }}, {{ $lo }}, {{ $hi }}
// ($lo and $hi are getters so the computed values arrive unwrapped in {{ }} and :props)
//
// And sets the colour scheme. The headmatter says `colorSchema: auto`, which is
// what keeps Slidev's toggle (press `d`) alive — pinning it to `light` would
// disable the toggle outright. But `auto` means "follow the operating system",
// and the room's projector does not have an opinion about the presenter's
// system setting, so on a first visit we choose light ourselves. Slidev stores
// the answer under `slidev-color-schema`; once that key exists it is the
// viewer's own choice and we leave it alone, so a deliberate switch to dark
// survives a reload.
export default defineAppSetup(({ app }) => {
  app.config.globalProperties.$band = band
  Object.defineProperty(app.config.globalProperties, '$lo', { get: () => lo.value })
  Object.defineProperty(app.config.globalProperties, '$hi', { get: () => hi.value })

  if (typeof window !== 'undefined') {
    let chosen: string | null = null
    try { chosen = window.localStorage.getItem('slidev-color-schema') } catch { /* private mode */ }
    if (chosen === null || chosen === 'auto') {
      const { isDark } = useDarkMode()
      isDark.value = false
      try { window.localStorage.setItem('slidev-color-schema', 'light') } catch { /* private mode */ }
    }
  }
})
