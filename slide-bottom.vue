<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSlideContext } from '@slidev/client'
import fileDefaults from './ribbon.json'

// Footer ribbon rendered inside every slide (slide-bottom layer: per-slide $page and
// $frontmatter, so it is also correct in print/export mode).
// Values: ribbon.json (project-wide) ← headmatter `ribbon:` (per deck) ← slide frontmatter
// (`section:`, `ribbonTitle:`, `hideRibbon: true`).
// The right-hand button opens a navigator with every slide (thumbnail from public/thumbs/N.jpg
// when present, otherwise number + title); clicking a tile jumps to that slide.

const { $page, $slidev, $frontmatter } = useSlideContext()

const cfg = computed<any>(() => $slidev.configs)
const r = computed<any>(() => ({ ...(fileDefaults as any), ...((cfg.value as any).ribbon ?? {}) }))

const total = computed(() => $slidev.nav.total)
const section = computed(() => r.value.showSection === false ? '' : (($frontmatter as any)?.section ?? ''))

function cleanTitle(t: unknown) {
  return String(t ?? '').replace(/\$([^$]+)\$/g, '$1').replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '')
}

const slideTitle = computed(() => {
  if (r.value.showSlideTitle === false) return ''
  const route = $slidev.nav.slides?.[$page.value - 1] as any
  return cleanTitle(($frontmatter as any)?.ribbonTitle ?? route?.meta?.slide?.title ?? '')
})
const occasion = computed(() => [r.value.event, r.value.place, r.value.date].filter(Boolean).join(' · '))
const progress = computed(() => total.value ? ($page.value / total.value) * 100 : 0)
const show = computed(() => {
  const hidden: number[] = r.value.hideOnPages ?? [1]
  return !hidden.includes($page.value) && !($frontmatter as any)?.hideRibbon
})

// ── navigator ──────────────────────────────────────────────────────────────
const base = (import.meta as any).env?.BASE_URL ?? '/'
const open = ref(false)
const failed = ref<Record<number, boolean>>({})
const slides = computed(() => ($slidev.nav.slides ?? []).map((s: any, i: number) => {
  const fm = s?.meta?.slide?.frontmatter ?? {}
  return {
    no: i + 1,
    title: cleanTitle(fm.ribbonTitle ?? s?.meta?.slide?.title ?? ''),
    section: fm.section ?? '',
    // Per-deck: the three presentations share this component and this folder,
    // so each names its own thumbnail directory in its headmatter `ribbon:`.
    thumb: `${base}${r.value.thumbsDir ?? 'thumbs'}/${i + 1}.jpg`,
  }
}))
function go(no: number) {
  open.value = false
  $slidev.nav.go(no)
}
</script>

<template>
  <footer v-if="show" class="ribbon">
    <div v-if="r.showProgress !== false" class="ribbon-progress" :style="{ width: progress + '%' }" />
    <div class="ribbon-zone ribbon-left">
      <span class="ribbon-title">{{ r.title ?? cfg.title }}</span>
      <template v-if="r.author"><span class="ribbon-sep">·</span><span>{{ r.author }}</span></template>
    </div>
    <div class="ribbon-zone ribbon-center">
      <span v-if="section" class="ribbon-section">{{ section }}</span>
      <span v-if="section && slideTitle" class="ribbon-sep">›</span>
      <span v-if="slideTitle" class="ribbon-slide">{{ slideTitle }}</span>
    </div>
    <div class="ribbon-zone ribbon-right">
      <span v-if="occasion" class="ribbon-occasion">{{ occasion }}</span>
    </div>
    <div v-if="r.showPage !== false" class="ribbon-pages">
      <span class="ribbon-page">{{ $page }}</span><span class="ribbon-sep slash">/</span><span>{{ total }}</span>
    </div>
    <div class="ribbon-nav" @mouseenter="open = true" @mouseleave="open = false">
      <button class="ribbon-nav-btn" type="button" aria-label="Ir a una diapositiva" title="Todas las diapositivas" @click.stop="open = !open">▦</button>
      <Transition name="navpop">
        <div v-if="open" class="navpop">
          <div class="navpop-head">Diapositivas · pulsa para ir</div>
          <div class="navpop-grid">
            <button v-for="s in slides" :key="s.no" type="button" :class="{ tile: true, current: s.no === $page }" @click.stop="go(s.no)">
              <img v-if="!failed[s.no]" :src="s.thumb" :alt="'Diapositiva ' + s.no" @error="failed[s.no] = true" />
              <div v-else class="tile-blank">{{ s.no }}</div>
              <div class="tile-cap">
                <span class="tile-no">{{ s.no }}</span>
                <span class="tile-title">{{ s.title || s.section }}</span>
              </div>
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </footer>
</template>

<style scoped>
.ribbon {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 1.55rem;
  display: grid;
  grid-template-columns: minmax(0, 31%) minmax(0, 1fr) minmax(0, 26%) auto auto;
  align-items: center;
  gap: 1rem;
  padding: 0 1.1rem 0 1.4rem;
  font-family: 'Roboto', 'Inter', system-ui, sans-serif;
  font-weight: 400;
  font-size: 0.6rem;
  letter-spacing: 0.02em;
  color: var(--muted);
  background: var(--ribbon-bg);
  border-top: 1px solid var(--line);
  backdrop-filter: blur(6px);
  z-index: 5;
  pointer-events: none;
}
.ribbon-progress {
  position: absolute; top: -1px; left: 0; height: 1px;
  background: linear-gradient(90deg, var(--teal), var(--amber));
  transition: width 400ms ease;
}
.ribbon-zone { min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ribbon-left { justify-self: stretch; text-align: left; }
.ribbon-center { justify-self: stretch; text-align: center; }
.ribbon-right { justify-self: stretch; text-align: right; }
.ribbon-pages { white-space: nowrap; font-variant-numeric: tabular-nums; }
.ribbon-title { color: var(--fg-2); font-weight: 400; }
.ribbon-section { color: var(--teal); text-transform: uppercase; letter-spacing: 0.12em; font-size: 0.56rem; }
.ribbon-slide { color: var(--fg-2); }
.ribbon-page { color: var(--amber); font-weight: 400; }
.ribbon-sep { margin: 0 0.4rem; opacity: 0.5; }
.ribbon-sep.slash { margin: 0 0.2rem; }

/* navigator */
.ribbon-nav { position: relative; pointer-events: auto; display: grid; place-items: center; height: 100%; padding: 0 0.1rem; }
.ribbon-nav-btn {
  width: 1.15rem; height: 1.15rem; border-radius: 4px; padding: 0;
  border: 1px solid rgba(var(--teal-rgb), 0.45); background: rgba(var(--teal-rgb), 0.08);
  color: var(--teal); font-size: 0.72rem; line-height: 1; cursor: pointer;
  transition: background .2s ease;
}
.ribbon-nav-btn:hover { background: rgba(var(--teal-rgb), 0.22); }
.navpop {
  position: absolute; right: 0; bottom: 1.45rem; width: 46rem; max-width: 92vw;
  background: var(--ink-3); border: 1px solid rgba(var(--teal-rgb), 0.4); border-radius: 12px;
  box-shadow: var(--shadow-lg); padding: 0.55rem 0.65rem 0.6rem;
  text-align: left; z-index: 300;
}
.navpop::after { content: ''; position: absolute; left: 0; right: 0; bottom: -0.5rem; height: 0.5rem; }
.navpop-head { font-size: 0.56rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--teal); margin: 0 0 0.4rem 0.1rem; }
.navpop-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.4rem; }
.tile {
  display: block; padding: 0; border: 1px solid var(--line); border-radius: 6px; overflow: hidden;
  background: var(--surface-2); cursor: pointer; color: var(--fg-2); text-align: left; font: inherit;
  transition: border-color .2s ease, transform .2s ease;
}
.tile:hover { border-color: var(--amber); transform: translateY(-1px); }
.tile.current { border-color: var(--teal); box-shadow: inset 0 0 0 1px var(--teal); }
.tile img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }
.tile-blank { display: grid; place-items: center; width: 100%; aspect-ratio: 16 / 9; font-size: 1.2rem; color: var(--amber); background: var(--surface); }
.tile-cap { display: flex; gap: 0.3rem; align-items: baseline; padding: 0.22rem 0.35rem 0.26rem; font-size: 0.52rem; line-height: 1.2; }
.tile-no { color: var(--amber); font-variant-numeric: tabular-nums; flex: none; }
.tile-title { color: var(--fg-2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.navpop-enter-active, .navpop-leave-active { transition: opacity .16s ease, transform .16s ease; }
.navpop-enter-from, .navpop-leave-to { opacity: 0; transform: translateY(4px); }
@media print { .ribbon-nav { display: none; } }
</style>
