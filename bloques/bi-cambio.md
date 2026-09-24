transition: slide-up
class: dense bi-bg
ribbonTitle: "Aldaketa"
...
::::div{.bi2.rows-2.mb-1}

[El único cambio]{.kicker}

# Enunciados más cortos

[Aldaketa bakarra]{.kicker}

# Enuntziatu laburragoak

::::

::::div{.bi2.rows-2.mt-1}

::div{.note}
Longitud de los enunciados de 2026, en palabras
::

::word-bars{:rows='[["A1",295],["B1",408],["C1",150],["C2",242],["D1",163],["D2",214]]' :total="408" :sums='[["C1+C2",392],["D1+D2",377]]' :target="$clicks >= 3"}
::

::div{.note}
2026ko enuntziatuen luzera, hitzetan
::

::tool-panel{label="Ajustar la banda · Banda doitu"}
::band-controls
::

::band-totals{:read="1472" :answered="[1016, 1159]" :n-read="6" :n-answered="4"}
::
::

::::

::::div{.bi2.rows-1.mt-2}

:::div{.grid.grid-cols-2.gap-3}

::div{.card.teal v-click="1"}
### Se conserva
contexto · datos y constantes · verbos · rúbrica
::

::div{.card.coral v-click="2"}
### Se recorta
narrativa · repeticiones · formato
::

:::

:::div{.grid.grid-cols-2.gap-3}

::div{.card.teal v-click="1"}
### Mantentzen da
testuingurua · datuak eta konstanteak · aditzak · errubrika
::

::div{.card.coral v-click="2"}
### Moztu egiten da
narratiba · errepikapenak · formatua
::

:::

::::

::div{.note-line.mt-2.nolang.text-center v-click="3"}
**Objetivo 2027 · 2027ko helburua** — <kx :tex="`${$lo}\\text{–}${$hi}`" /> palabras · hitz  ·  media · batez beste <kx :tex="$band.mean" />
::
