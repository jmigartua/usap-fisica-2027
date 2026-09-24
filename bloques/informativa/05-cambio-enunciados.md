transition: slide-up
section: "El cambio"
class: wide
...
[El cambio]{.kicker}

# Enunciados más cortos

::::div{.grid.grid-cols-5.gap-6.mt-3}

:::div{.col-span-3}

::div{.note}
Longitud de los enunciados de 2026, en palabras
::

::word-bars{:rows='[["A1",295],["B1",408],["C1",150],["C2",242],["D1",163],["D2",214]]' :total="408" :sums='[["C1+C2",392],["D1+D2",377]]' :target="$clicks >= 3"}
::

:::

:::div{.col-span-2}

::tool-panel{label="Ajustar la banda"}
::band-controls
::

::band-totals{:read="1472" :answered="[1016, 1159]" :n-read="6" :n-answered="4"}
::
::

::div{.card.teal.mt-4 v-click="1"}
### Se conserva
contexto · datos y constantes · verbos · rúbrica
::

::div{.card.coral.mt-3 v-click="2"}
### Se recorta
narrativa · repeticiones · formato
::

:::

::::

::div{.note-line.mt-3.text-center v-click="3"}
**Objetivo 2027** — <kx :tex="`${$lo}\\text{–}${$hi}`" /> palabras · media <kx :tex="$band.mean" />
::
