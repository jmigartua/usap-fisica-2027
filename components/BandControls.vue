<script setup lang="ts">
// Two sliders that set the target band (shared state in composables/band.ts).
//   ::band-controls{:mean-range="[60, 300]" :width-range="[0, 120]"}
//   ::
import { useBand } from '../composables/band'

withDefaults(defineProps<{ meanRange?: [number, number]; widthRange?: [number, number] }>(), {
  meanRange: () => [60, 300],
  widthRange: () => [0, 120],
})
const { band, lo, hi } = useBand()
</script>

<template>
  <div class="bandctl" @click.stop @keydown.stop>
    <label>
      <span class="bandctl-lab">media</span>
      <input v-model.number="band.mean" type="range" :min="meanRange[0]" :max="meanRange[1]" step="1" />
      <kx :tex="band.mean" class="bandctl-val" />
    </label>
    <label>
      <span class="bandctl-lab">anchura</span>
      <input v-model.number="band.width" type="range" :min="widthRange[0]" :max="widthRange[1]" step="1" />
      <kx :tex="band.width" class="bandctl-val" />
    </label>
    <div class="bandctl-out">
      banda <kx :tex="`${lo}\\text{–}${hi}`" /> palabras
      <button type="button" class="bandctl-reset" title="Volver a 150–175" @click="band.reset()">↺</button>
    </div>
  </div>
</template>
