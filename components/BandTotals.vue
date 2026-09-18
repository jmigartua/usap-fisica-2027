<script setup lang="ts">
// Table: what a student reads / answers in 2026 (fixed) against the target band (live).
//   ::band-totals{:read="1472" :answered="[1016, 1159]" :n-read="6" :n-answered="4"}
//   ::
import { computed } from 'vue'
import { useBand } from '../composables/band'

const props = defineProps<{
  read: number                    // 2026 words read, options included
  answered: [number, number]      // 2026 words of the four answered problems, min and max
  nRead: number                   // statements a student reads (6)
  nAnswered: number               // statements a student answers (4)
}>()
const { band, lo, hi } = useBand()
const r = (x: number) => Math.round(x)
const rows = computed(() => [
  { what: 'Lee, opciones incluidas', fixed: String(props.read), mean: r(props.nRead * band.mean), lo: r(props.nRead * lo.value), hi: r(props.nRead * hi.value) },
  { what: 'Responde, cuatro problemas', fixed: `${props.answered[0]}\\text{–}${props.answered[1]}`, mean: r(props.nAnswered * band.mean), lo: r(props.nAnswered * lo.value), hi: r(props.nAnswered * hi.value) },
])
</script>

<template>
  <table class="bandtot">
    <thead>
      <tr><th>Palabras por alumno</th><th>2026</th><th>objetivo · media</th><th>mínimo</th><th>máximo</th></tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.what">
        <td>{{ row.what }}</td>
        <td><kx :tex="row.fixed" /></td>
        <td class="mean"><kx :tex="row.mean" /></td>
        <td><kx :tex="row.lo" /></td>
        <td><kx :tex="row.hi" /></td>
      </tr>
    </tbody>
  </table>
</template>
