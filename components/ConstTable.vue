<script setup lang="ts">
// The exam's table of data and constants, marked step by step.
//   ::const-table{name="constantes-2026" :clicks="$clicks"}
//   ::
// Reads data/<name>.json: cells (row-major, `columns` per row, KaTeX in `tex`) and steps
// ({at: click, tag, cls, keys}). At click ≥ at, each listed cell gets class `cls` and a small tag.
import { computed } from 'vue'

const props = defineProps<{ name: string; clicks: number }>()
const files = import.meta.glob('../data/*.json', { eager: true, import: 'default' }) as Record<string, any>
const data = computed(() => files[`../data/${props.name}.json`])

const marks = computed(() => {
  const m: Record<string, { cls: string[]; tags: string[] }> = {}
  for (const s of data.value?.steps ?? []) {
    if (props.clicks < s.at) continue
    for (const k of s.keys) {
      m[k] ??= { cls: [], tags: [] }
      m[k].cls.push(s.cls)
      m[k].tags.push(s.tag)
    }
  }
  return m
})
</script>

<template>
  <div v-if="data" class="consttab">
    <div class="consttab-title">{{ data.title }}</div>
    <div class="consttab-grid" :style="{ gridTemplateColumns: `repeat(${data.columns}, minmax(0, 1fr))` }">
      <div v-for="c in data.cells" :key="c.k" :class="['cell', ...(marks[c.k]?.cls ?? [])]">
        <kx :tex="c.tex" />
        <span v-if="marks[c.k]" class="tags"><span v-for="t in marks[c.k].tags" :key="t" class="tag">{{ t }}</span></span>
      </div>
    </div>
  </div>
  <div v-else class="consttab-missing">data/{{ name }}.json no encontrado</div>
</template>
