import { defineAppSetup } from '@slidev/types'
import { band, hi, lo } from '../composables/band'

// Exposes the target band to slide templates: {{ $band.mean }}, {{ $lo }}, {{ $hi }}
// ($lo and $hi are getters so the computed values arrive unwrapped in {{ }} and :props)
export default defineAppSetup(({ app }) => {
  app.config.globalProperties.$band = band
  Object.defineProperty(app.config.globalProperties, '$lo', { get: () => lo.value })
  Object.defineProperty(app.config.globalProperties, '$hi', { get: () => hi.value })
})
