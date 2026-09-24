<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

// `kicker` / `aria` / `close` are props so the bilingual deck can open the same
// modal in Basque on its right-hand half; the Spanish decks get the defaults.
withDefaults(defineProps<{
  title: string
  kicker?: string
  aria?: string
  close?: string
}>(), {
  kicker: 'Saberes básicos · orientaciones 2025/26, § 2',
  aria: 'Saberes básicos',
  close: 'Cerrar',
})

const open = ref(false)

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) {
    open.value = false
    e.stopPropagation()
  }
}

onMounted(() => window.addEventListener('keydown', onKey, true))
onUnmounted(() => window.removeEventListener('keydown', onKey, true))
</script>

<template>
  <button
    class="saber-btn"
    type="button"
    :aria-label="aria + ': ' + title"
    :title="aria"
    @click.stop="open = true"
  >
    +
  </button>
  <Transition name="saber-fade">
    <div v-if="open" class="saber-overlay" @click.self="open = false">
      <div class="saber-modal" role="dialog" :aria-label="title">
        <div class="saber-head">
          <div>
            <div class="saber-kicker">{{ kicker }}</div>
            <div class="saber-title">{{ title }}</div>
          </div>
          <button class="saber-close" type="button" :aria-label="close" @click="open = false">×</button>
        </div>
        <div class="saber-body">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>
