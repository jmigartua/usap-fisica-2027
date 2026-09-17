<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

defineProps<{ title: string }>()

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
    :aria-label="'Saberes básicos: ' + title"
    title="Saberes básicos del bloque"
    @click.stop="open = true"
  >
    +
  </button>
  <Transition name="saber-fade">
    <div v-if="open" class="saber-overlay" @click.self="open = false">
      <div class="saber-modal" role="dialog" :aria-label="title">
        <div class="saber-head">
          <div>
            <div class="saber-kicker">Saberes básicos · orientaciones 2025/26, § 2</div>
            <div class="saber-title">{{ title }}</div>
          </div>
          <button class="saber-close" type="button" aria-label="Cerrar" @click="open = false">×</button>
        </div>
        <div class="saber-body">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>
