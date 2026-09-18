<script setup lang="ts">
// Inline KaTeX for values computed at run time (the Markdown $…$ is rendered at build time).
//   <kx tex="150" />   or   <kx :tex="`${lo}\\text{–}${hi}`" />
import { computed } from 'vue'
import katex from 'katex'

const props = defineProps<{ tex: string | number }>()
const html = computed(() => katex.renderToString(String(props.tex), { throwOnError: false, output: 'html' }))
</script>

<template>
  <span class="kx" v-html="html" />
</template>
