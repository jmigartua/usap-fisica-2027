transition: slide-up
section: "El cambio"
...
[El único cambio]{.kicker}

# Enunciados más cortos

::::div{.grid.grid-cols-5.gap-6.mt-2}

:::div{.col-span-3}

::div{.note}
Longitud de los enunciados de 2026, en palabras, sin los pesos de cada apartado:
::

::word-bars{:rows='[["A1",295],["B1",408],["C1",150],["C2",242],["D1",163],["D2",214]]' :total="408" :sums='[["C1+C2",392],["D1+D2",377]]' :short='["B1′",90]' :target="$clicks >= 5"}
::

:::div{v-click="5"}

::band-controls
::

::band-totals{:read="1472" :answered="[1016, 1159]" :n-read="6" :n-answered="4"}
::

:::

::div{.note.mt-1 v-click="2"}
B1′: la manera habitual (anexo) · C1+C2, D1+D2: lo que lee quien tiene opción
::

:::

:::div{.col-span-2}

::div{.card.teal v-click="3"}
### Se conserva
- contexto real, da sentido al problema
- datos y tabla de constantes
- verbos, en cada apartado
- rúbrica y pesos
::

::div{.card.coral.mt-2 v-click="4"}
### Se recorta
- narrativa
- preguntas repetidas entre apartados
- instrucciones de formato redundantes
::

::div{.card.lime.mt-2 v-click="5"}
### Objetivo 2027
<kx :tex="`${$lo}\\text{–}${$hi}`" /> palabras · media <kx :tex="$band.mean" />
::

:::

::::
