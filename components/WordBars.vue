<script setup lang="ts">
// Horizontal word-count bars with an optional target band. Usage from Markdown (MDC):
//   ::word-bars{:rows='[["A1",295],["B1",408]]' :total="408" :short='["B1′",90]' :sums='[["C1+C2",392]]' :target="$clicks >= 5"}
//   ::
// The band comes from the shared state (composables/band.ts) unless `band` is given explicitly.
// rows appear at click `from` (default 1), sums and the short row one click later; `target` dims the
// amber bars and shows the band. Sum rows show the band doubled (two statements read).
import { computed } from 'vue'
import { useBand } from '../composables/band'

const props = defineProps<{
  rows: [string, number][]
  total: number
  from?: number
  short?: [string, number]
  sums?: [string, number][]
  band?: [number, number]
  target?: boolean
}>()
const shared = useBand()
const lo = computed(() => props.band ? props.band[0] : shared.lo.value)
const hi = computed(() => props.band ? props.band[1] : shared.hi.value)
const clamp = (x: number) => Math.max(0, Math.min(100, x))
const pct = (n: number) => `${clamp((n / props.total) * 100)}%`
const bandStyle = (k: number) => {
  const a = clamp((k * lo.value / props.total) * 100)
  const b = clamp((k * hi.value / props.total) * 100)
  return { left: `${a}%`, width: `${Math.max(0, b - a)}%` }
}
</script>

<template>
  <div :class="{ bars: true, target: !!target }">
    <div v-for="[lab, n] in rows" :key="lab" class="bar-row" v-click="from ?? 1">
      <div class="lab">{{ lab }}</div>
      <div class="track">
        <div class="bar" :style="{ width: pct(n) }"></div>
        <div class="band" :style="bandStyle(1)"></div>
      </div>
      <div class="val">{{ n }}</div>
    </div>
    <div v-for="[lab, n] in (sums ?? [])" :key="lab" class="bar-row sum" v-click="(from ?? 1) + 1">
      <div class="lab">{{ lab }}</div>
      <div class="track">
        <div class="bar sumbar" :style="{ width: pct(n) }"></div>
        <div class="band" :style="bandStyle(2)"></div>
      </div>
      <div class="val">{{ n }}</div>
    </div>
    <div v-if="short" class="bar-row" v-click="(from ?? 1) + 1">
      <div class="lab teal-lab">{{ short[0] }}</div>
      <div class="track"><div class="bar short" :style="{ width: pct(short[1]) }"></div></div>
      <div class="val">{{ short[1] }}</div>
    </div>
  </div>
</template>
