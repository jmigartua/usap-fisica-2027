<script setup lang="ts">
// A panel that is not part of the argument: the presenter opens it only if
// someone in the room asks "and what if the band were wider?". Hidden by
// default so it never competes with the figure, and toggled by a button rather
// than by a click step, so it can be opened at any point of the slide and shut
// again without disturbing where the reveals have got to.
import { onMounted, onUnmounted, ref } from 'vue'

withDefaults(defineProps<{ label?: string; open?: boolean }>(), {
  label: 'Ajustar la banda',
  open: false,
})
const shown = ref(false)

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && shown.value) { shown.value = false; e.stopPropagation() }
}
onMounted(() => window.addEventListener('keydown', onKey, true))
onUnmounted(() => window.removeEventListener('keydown', onKey, true))
</script>

<template>
  <div class="toolpanel" :class="{ 'is-open': shown }">
    <button
      class="toolpanel-btn"
      type="button"
      :aria-expanded="shown"
      :aria-label="label"
      :title="label"
      @click.stop="shown = !shown"
    >
      <span class="toolpanel-ico">{{ shown ? '×' : '⚙' }}</span>
      <span class="toolpanel-lab">{{ label }}</span>
    </button>
    <Transition name="toolpanel-fade">
      <div v-if="shown" class="toolpanel-body" @click.stop>
        <slot />
      </div>
    </Transition>
  </div>
</template>
