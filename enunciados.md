---
theme: default
title: "Los enunciados, problema a problema"
titleTemplate: '%s · Coordinación'
info: |
  ## Los enunciados, problema a problema
  Material de apoyo: de dónde salen las palabras de más en un enunciado y cómo se quitan.
  Generada por tools/build_decks.mjs desde bloques/ — no editar a mano.
author: Asier Lopez-Eiguren, J. M. Igartua
lang: es
colorSchema: dark
aspectRatio: 16/9
canvasWidth: 980
fonts:
  sans: Roboto
  serif: Roboto
  mono: Roboto Mono
  weights: '300,400,500,700'
transition: slide-left
routerMode: hash
drawings:
  persist: false
mdc: true
htmlAttrs:
  lang: es
ribbon:
  title: "Física 2027 · Los enunciados"
  thumbsDir: "thumbs/enunciados"

---
[USaP · Física · Cómo se escribe la prueba · edición 2027]{.kicker}

::div{.cover-title}
Los enunciados,<br>problema a problema
::

::div{.cover-sub}
De dónde salen las palabras de más y cómo se quitan sin tocar<br>la rúbrica, las competencias ni el nivel.
::

::div{.cover-meta}
**Material de apoyo** · acompaña a *Física 2027: nada cambia*<br>Asier Lopez-Eiguren (EHU) · J. M. Igartua (EHU) · curso 2026–27
::

---
transition: slide-up
section: "El objetivo"
ribbonTitle: "La banda objetivo"
---
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

---
transition: fade
section: "El punto de partida"
class: dense
ribbonTitle: "La prueba de 2026"
---
[Anexo · por si se pregunta]{.kicker}

# 2026 de un vistazo

| Bloque | Problema | Tema | Reparto a) + b) + c) | Palabras |
|:--|:--|:--|:--|--:|
| A · sin opción | A1 | Campo gravitatorio: satélite en órbita geoestacionaria y caída sobre la Tierra | $1.00 + 1.00 + 0.50$ | $295$ |
| B · sin opción | B1 | Inducción electromagnética: espira en campo variable y en modo generador | $0.50 + 1.00 + 1.00$ | $408$ |
| C · opción a | C1 | Ondas estacionarias y sonido: cuerda de violín, nivel en decibelios | $0.50 + 1.00 + 1.00$ | $150$ |
| C · opción b | C2 | Óptica geométrica: lente proyectora, aumento y tipo de imagen | $1.00 + 0.50 + 1.00$ | $242$ |
| D · opción a | D1 | Efecto fotoeléctrico: potencial de frenado, función trabajo, metal oxidado | $0.50 + 1.00 + 1.00$ | $163$ |
| D · opción b | D2 | Desintegración radiactiva: datación por carbono-14 | $1.00 + 0.50 + 1.00$ | $214$ |

::div{.note.mt-3}
Cada problema, $2.50$ · subapartados de $0.25$ o $0.50$, con su contenido en el solucionario

Palabras: enunciado en castellano, sin los pesos
::

---
transition: slide-left
section: "Cómo se llegó a 2026"
class: dense
---
<div class="kicker">Anexo · problema 2 de 2026 · de izquierda a derecha: cómo se llegó al enunciado de 2026</div>

# Del enunciado habitual al de 2026, paso a paso

<div class="stages">
<div :class="{ stage: true, active: $clicks === 0, past: $clicks > 0 }">
<div class="stage-t">0 · Habitual</div>
<div class="stage-w">

$90$ palabras

</div>
<div class="stage-d">

define, escribe, calcula: lo de siempre

</div>
</div>
<div class="stage-arrow">→</div>
<div :class="{ stage: true, active: $clicks === 1, past: $clicks > 1 }">
<div class="stage-t">1 · Competencial</div>
<div class="stage-w">

$178$ palabras

</div>
<div class="stage-d">

añade justificar y decidir

</div>
</div>
<div class="stage-arrow">→</div>
<div :class="{ stage: true, active: $clicks === 2, past: $clicks > 2 }">
<div class="stage-t">2 · Desglosado</div>
<div class="stage-w">

$244$ palabras

</div>
<div class="stage-d">

cada cálculo, por configuración

</div>
</div>
<div class="stage-arrow">→</div>
<div :class="{ stage: true, active: $clicks === 3 }">
<div class="stage-t">3 · 2026, como salió</div>
<div class="stage-w">

$408$ palabras

</div>
<div class="stage-d">

narrativa e instrucciones · muy largo

</div>
</div>
</div>

<div class="panel" v-show="$clicks === 3">

Una estación meteorológica instalada en una zona de montañosa aislada de la red eléctrica alimenta sus sensores con un microgenerador electromagnético. El dispositivo consiste en una espira circular plana de radio $R = 6.0$ cm, montada sobre un eje de giro dentro de un campo magnético uniforme. Durante las pruebas de laboratorio, el equipo de ingeniería ensaya el prototipo en dos configuraciones:

- **Configuración I** (caracterización): La espira permanece fija, inicialmente situada en el plano $XY$. Un electroimán genera un campo magnético $\vec{B}$ dirigido en el sentido positivo del eje $OZ$, cuyo módulo varía con el tiempo según $B(t) = 3t^2$ ($B$ en teslas, $t$ en segundos).
- **Configuración II** (modo generador): El campo magnético, de módulo constante $B_0 = 8.0$ mT, está creado por imanes permanentes y dirigido en el sentido positivo del eje $OZ$. La espira gira alrededor del eje $OY$ con velocidad angular constante $\omega = 60$ rad/s, partiendo del plano $XY$ en el instante $t = 0$.

**a)** Para diseñar el sistema de detección de la señal eléctrica del generador, los ingenieros necesitan conocer los fundamentos de la inducción electromagnética. ($0.50$ puntos)
1. Expresa matemáticamente el flujo del campo magnético a través de una superficie plana inmersa en un campo uniforme. Escribe su expresión matemática e indica el significado de cada magnitud. ($0.25$ puntos)
2. Enuncia la ley de Faraday-Lenz de la inducción electromagnética y explica el significado físico del signo negativo en la expresión de la fuerza electromotriz inducida. ($0.25$ puntos)

**b)** Configuración I, Caracterización, electroimán variable ($1.00$ punto)
1. Justifica que, cuando el dispositivo está en esta configuración, el ángulo entre $\vec{B}$ y el vector unitario normal a la espira, $\hat{n}$, es constante, e indica su valor. Escribe la expresión del flujo magnético a través de la espira en función del tiempo. ($0.25$ puntos)
2. Deduce, aplicando la ley de Faraday, la expresión de la fuerza electromotriz inducida en la espira en función del tiempo. ($0.25$ puntos)
3. Calcula el valor numérico de la fem inducida en el instante $t = 7.0$ ms. Expresa los resultados en notación científica con dos decimales e indica sus unidades. ($0.50$ puntos)

**c)** Configuración II, modo generador ($1.00$ punto)
1. Escribe la expresión del flujo magnético a través de la espira en función del tiempo y, a partir de ella, deduce la expresión de la fem inducida. Calcula el valor de la fem en el instante $t = 7.0$ ms. ($0.50$ puntos)
2. Las especificaciones técnicas del sensor meteorológico exigen que el generador proporcione una fem máxima de al menos $0.50$ mV. Indica si el prototipo actual cumple este requisito. ($0.50$ puntos)

</div>

<div class="panel" v-show="$clicks === 2">

Una espira circular plana de radio $R = 6.0$ cm, montada sobre un eje de giro, está dentro de un campo magnético uniforme. Se ensaya en dos configuraciones:

- **Configuración I:** la espira permanece fija en el plano $XY$. El campo $\vec{B}$, dirigido en el sentido positivo del eje $OZ$, varía con el tiempo según $B(t) = 3t^2$ ($B$ en teslas, $t$ en segundos).
- **Configuración II:** el campo, de módulo constante $B_0 = 8.0$ mT, está dirigido en el sentido positivo del eje $OZ$. La espira gira alrededor del eje $OY$ con velocidad angular constante $\omega = 60$ rad/s, partiendo del plano $XY$ en $t = 0$.

**a)** ($0.50$ puntos)
1. Expresa el flujo del campo magnético a través de una superficie plana en un campo uniforme e indica el significado de cada magnitud. ($0.25$ puntos)
2. Enuncia la ley de Faraday-Lenz y explica el significado físico del signo negativo. ($0.25$ puntos)

**b)** Configuración I ($1.00$ punto)
1. Justifica que el ángulo entre $\vec{B}$ y la normal a la espira es constante e indica su valor. Escribe el flujo magnético a través de la espira en función del tiempo. ($0.25$ puntos)
2. Deduce, aplicando la ley de Faraday, la fem inducida en función del tiempo. ($0.25$ puntos)
3. Calcula la fem inducida en $t = 7.0$ ms. ($0.50$ puntos)

**c)** Configuración II ($1.00$ punto)
1. Escribe el flujo magnético en función del tiempo y deduce la fem inducida. Calcula la fem en $t = 7.0$ ms. ($0.50$ puntos)
2. El sensor exige una fem máxima de al menos $0.50$ mV. Indica si el prototipo cumple este requisito. ($0.50$ puntos)

</div>

<div class="panel" v-show="$clicks === 1">

Una espira circular plana de radio $R = 6.0$ cm está en un campo magnético uniforme dirigido en el sentido positivo del eje $OZ$.

- **Configuración I:** la espira permanece fija en el plano $XY$ y el campo varía según $B(t) = 3t^2$ ($B$ en teslas, $t$ en segundos).
- **Configuración II:** el campo es constante, $B_0 = 8.0$ mT, y la espira gira alrededor del eje $OY$ con $\omega = 60$ rad/s, partiendo del plano $XY$ en $t = 0$.

**a)** Expresa el flujo del campo magnético a través de una superficie plana en un campo uniforme, indicando el significado de cada magnitud. Enuncia la ley de Faraday-Lenz y explica el significado físico del signo negativo. ($0.50$ puntos)

**b)** Configuración I: justifica el ángulo entre $\vec{B}$ y la normal a la espira, escribe el flujo en función del tiempo, deduce la fem inducida y calcula su valor en $t = 7.0$ ms. ($1.00$ punto)

**c)** Configuración II: deduce la fem inducida en función del tiempo, calcula su valor en $t = 7.0$ ms e indica si la fem máxima alcanza los $0.50$ mV que exige el sensor. ($1.00$ punto)

</div>

<div class="panel compact" v-show="$clicks === 0">

Espira circular plana de radio $R = 6.0$ cm en un campo magnético uniforme según $OZ$. **I:** espira fija en el plano $XY$, $B(t) = 3t^2$ (SI). **II:** $B_0 = 8.0$ mT; la espira gira en torno a $OY$ con $\omega = 60$ rad/s, desde el plano $XY$ en $t = 0$.

**a)** Define el flujo magnético y enuncia la ley de Faraday-Lenz, explicando el signo. ($0.50$)

**b)** En I, escribe $\varepsilon(t)$ y calcula $\varepsilon$ en $t = 7.0$ ms. ($1.00$)

**c)** En II, escribe $\varepsilon(t)$, calcula $\varepsilon(7.0\ \mathrm{ms})$ y $\varepsilon_{\max}$. ($1.00$)

</div>

<div class="note mt-2" v-click="3">

De lo habitual a lo competencial, con narrativa y repeticiones · $408$ palabras, demasiado largo · misma rúbrica en las cuatro versiones

</div>

---
transition: fade
section: "Cómo debió ser"
class: dense tight
---
<div class="kicker">Anexo · ingeniería inversa · paso 3 → 2 · problema 2 completo</div>

# De «2026, como salió» a «como debería haber sido...»

<div :class="{ head: true, dim: $clicks >= 1 && $clicks < 32, hl: $clicks >= 30 && $clicks < 32, renewed: $clicks >= 32 }">
<div class="head-tag">Contexto y configuraciones · común a las cuatro versiones</div>
<div v-show="$clicks < 32">

Una estación meteorológica instalada en una zona de montañosa aislada de la red eléctrica alimenta sus sensores con un microgenerador electromagnético. El dispositivo consiste en una espira circular plana de radio $R = 6.0$ cm, montada sobre un eje de giro dentro de un campo magnético uniforme. Durante las pruebas de laboratorio, el equipo de ingeniería ensaya el prototipo en dos configuraciones:

- **Configuración I** (caracterización): La espira permanece fija, inicialmente situada en el plano $XY$. Un electroimán genera un campo magnético $\vec{B}$ dirigido en el sentido positivo del eje $OZ$, cuyo módulo varía con el tiempo según $B(t) = 3t^2$ ($B$ en teslas, $t$ en segundos).
- **Configuración II** (modo generador): El campo magnético, de módulo constante $B_0 = 8.0$ mT, está creado por imanes permanentes y dirigido en el sentido positivo del eje $OZ$. La espira gira alrededor del eje $OY$ con velocidad angular constante $\omega = 60$ rad/s, partiendo del plano $XY$ en el instante $t = 0$.

</div>
<div v-show="$clicks >= 32">

Un microgenerador consiste en una espira circular plana de radio $R = 6.0$ cm que puede girar en torno a un eje, dentro de un campo magnético uniforme. Se ensaya en dos configuraciones:

- **Configuración I:** espira fija en el plano $XY$; campo según $+OZ$, con $B(t) = 3t^2$ (SI).
- **Configuración II:** campo constante $B_0 = 8.0$ mT según $+OZ$; la espira gira alrededor del eje $OY$ con $\omega = 60$ rad/s, partiendo del plano $XY$ en $t = 0$.

</div>
</div>

<div class="grid grid-cols-9 gap-4 mt-2">
<div class="col-version target col-span-4">
<div class="col-tag teal-tag">2 · Sin narrativa · se va construyendo · <span class="wc">{{ [0, 156, 156, 156, 167, 167, 167, 167, 215, 215, 215, 215, 215, 215, 215, 215, 255, 255, 255, 271, 271, 271, 296, 296, 296, 339, 339, 367, 367, 367, 367, 367, 287][Math.min($clicks, 32)] }} palabras</span> <span class="wc-save" v-show="$clicks >= 4">· ahorro {{ [0, 0, 0, 0, 12, 12, 12, 12, 21, 21, 21, 21, 21, 21, 21, 21, 31, 31, 31, 36, 36, 36, 39, 39, 39, 41, 41, 41, 41, 41, 41, 41, 121][Math.min($clicks, 32)] }}</span></div>

<div class="ghost arrive" v-click="1">

Contexto y configuraciones: se mantienen.

</div>

<div class="arrive" v-click="4">

**a)** Los ingenieros necesitan conocer los fundamentos de la inducción electromagnética. <span class="pts">($0.50$ puntos)</span>

</div>

<div class="arrive" v-click="8">

1. Escribe la expresión matemática <span :class="{ 'm-flux': true, on: $clicks >= 14 }">del flujo de un campo magnético uniforme a través de una superficie plana</span>, y explica el significado físico de cada magnitud. <span class="pts">($0.25$ puntos)</span>
2. Enuncia la ley de Faraday-Lenz, y explica el significado del signo negativo en <span :class="{ 'm-fem': true, on: $clicks >= 14 }">la f.e.m. inducida</span>. <span class="pts">($0.25$ puntos)</span>

</div>

<div :class="{ arrive: true, nota: true, 'nota-dim': $clicks >= 15 }" v-click="13">
<div class="nota-tag">nota · no forma parte del enunciado</div>

En **b)** y **c)** se pide lo mismo dos veces, una por configuración: <span class="m-flux on">el flujo $\Phi(t)$</span>, <span class="m-fem on">la f.e.m. inducida $\varepsilon(t)$</span> y <span class="m-val on">su valor en $t = 7.0$ ms</span>.

</div>

<div class="arrive" v-click="16">

**b)** Configuración I <span class="pts">($1.00$ punto)</span>
1. Justifica que <span class="m-comp">el ángulo entre $\vec{B}$ y el vector unitario normal a la espira, $\hat{n}$, es constante</span>, e indica su valor. Escribe la expresión del flujo magnético a través de la espira en función del tiempo. <span class="pts">($0.25$ puntos)</span>

</div>

<div class="arrive" v-click="19">

2. Deduce la expresión de la fuerza electromotriz inducida en la espira en función del tiempo. <span class="pts">($0.25$ puntos)</span>

</div>

<div class="arrive" v-click="22">

3. Calcula el valor numérico de la f.e.m. inducida en $t = 7.0$ ms; <span class="m-comp">expresa el resultado en notación científica y con dos decimales</span>. <span class="pts">($0.50$ puntos)</span>

</div>

<div class="arrive" v-click="25">

**c)** Configuración II <span class="pts">($1.00$ punto)</span>
1. Escribe la expresión del flujo magnético a través de la espira en función del tiempo y, a partir de ella, deduce la expresión de la fem inducida. Calcula el valor de la fem en el instante $t = 7.0$ ms. <span class="pts">($0.50$ puntos)</span>

</div>

<div class="arrive" v-click="27">

2. Las especificaciones técnicas del sensor meteorológico exigen que el generador proporcione una fem máxima de al menos $0.50$ mV. <span class="m-comp">Indica si el prototipo actual cumple este requisito.</span> <span class="pts">($0.50$ puntos)</span>

</div>

</div>
<div class="col-version source col-span-5">
<div class="col-tag">3 · 2026, como salió · <span class="wc">408 palabras</span> · referencia fija</div>

<div :class="{ q: true, hl: $clicks >= 2 && $clicks < 4, dim: $clicks >= 4 }">

**a)** Para diseñar el sistema de detección de la señal eléctrica del generador, los ingenieros necesitan conocer los fundamentos de la inducción electromagnética. ($0.50$ puntos)

</div>

<div :class="{ q: true, hl: $clicks >= 5 && $clicks < 8, dim: $clicks >= 8 }">

1. Expresa matemáticamente <span :class="{ 'm-flux': true, on: $clicks >= 14 }">el flujo del campo magnético a través de una superficie plana inmersa en un campo uniforme</span>. Escribe su expresión matemática e indica el significado de cada magnitud. ($0.25$ puntos)
2. Enuncia la ley de Faraday-Lenz de la inducción electromagnética y explica el significado físico del signo negativo en <span :class="{ 'm-fem': true, on: $clicks >= 14 }">la expresión de la fuerza electromotriz inducida</span>. ($0.25$ puntos)

</div>

<div :class="{ marked: $clicks >= 13 }">

<div :class="{ q: true, hl: ($clicks >= 9 && $clicks < 13) || ($clicks >= 16 - 2 && $clicks < 16), dim: $clicks >= 16 }">

**b)** Configuración I, Caracterización, electroimán variable ($1.00$ punto)
1. Justifica que, cuando el dispositivo está en esta configuración, el ángulo entre $\vec{B}$ y el vector unitario normal a la espira, $\hat{n}$, es constante, e indica su valor. <span class="m-flux">Escribe la expresión del flujo magnético a través de la espira en función del tiempo.</span> ($0.25$ puntos)

</div>

<div :class="{ q: true, hl: ($clicks >= 9 && $clicks < 13) || ($clicks >= 17 && $clicks < 19), dim: $clicks >= 19 }">

2. <span class="m-fem">Deduce, aplicando la ley de Faraday, la expresión de la fuerza electromotriz inducida en la espira en función del tiempo.</span> ($0.25$ puntos)

</div>

<div :class="{ q: true, hl: ($clicks >= 9 && $clicks < 13) || ($clicks >= 20 && $clicks < 22), dim: $clicks >= 22 }">

3. <span class="m-val">Calcula el valor numérico de la fem inducida en el instante $t = 7.0$ ms.</span> Expresa los resultados en notación científica con dos decimales e indica sus unidades. ($0.50$ puntos)

</div>

<div :class="{ q: true, hl: ($clicks >= 9 && $clicks < 13) || ($clicks >= 24 && $clicks < 25), dim: $clicks >= 25 }">

**c)** Configuración II, modo generador ($1.00$ punto)
1. <span class="m-flux">Escribe la expresión del flujo magnético a través de la espira en función del tiempo</span> y, a partir de ella, <span class="m-fem">deduce la expresión de la fem inducida</span>. <span class="m-val">Calcula el valor de la fem en el instante $t = 7.0$ ms.</span> ($0.50$ puntos)

</div>

<div :class="{ q: true, hl: ($clicks >= 9 && $clicks < 13) || ($clicks >= 26 && $clicks < 27), dim: $clicks >= 27 }">

2. Las especificaciones técnicas del sensor meteorológico exigen que el generador proporcione una fem máxima de al menos $0.50$ mV. Indica si el prototipo actual cumple este requisito. ($0.50$ puntos)

</div>

</div>

</div>
</div>

<div class="spot-wrap" v-click="[2, 4]">
<div :class="{ spot: true, 'spot-before': $clicks < 2, 'spot-after': $clicks >= 4 }">
<div class="spot-tag">a) · enfocar → tachar → pasar</div>

**a)** <span :class="{ cut: $clicks >= 3 }">Para diseñar el sistema de detección de la señal eléctrica del generador,</span> <span :class="{ keep: $clicks >= 3 }">los ingenieros necesitan conocer los fundamentos de la inducción electromagnética.</span> ($0.50$ puntos)

</div>
</div>

<div class="spot-wrap" v-click="[5, 8]">
<div :class="{ spot: true, two: true, 'spot-before': $clicks < 5, 'spot-after': $clicks >= 8 }">
<div class="spot-tag">a) 1 y 2 · enfocar → reescribir → tachar → pasar</div>

1. <span :class="{ cut: $clicks >= 6 }">Expresa matemáticamente el flujo del campo magnético a través de una superficie plana inmersa en un campo uniforme. Escribe su expresión matemática e indica el significado de cada magnitud.</span> <span :class="{ add: true, on: $clicks >= 6 }">Escribe la expresión matemática del flujo de un campo magnético uniforme a través de una superficie plana, y explica el significado físico de cada magnitud.</span> ($0.25$ puntos)
2. <span :class="{ keep: $clicks >= 7 }">Enuncia la ley de Faraday-Lenz</span> <span :class="{ cut: $clicks >= 7 }">de la inducción electromagnética</span> <span :class="{ keep: $clicks >= 7 }">y explica el significado</span> <span :class="{ cut: $clicks >= 7 }">físico</span> <span :class="{ keep: $clicks >= 7 }">del signo negativo en</span> <span :class="{ cut: $clicks >= 7 }">la expresión de la fuerza electromotriz</span> <span :class="{ add: true, on: $clicks >= 7 }">la f.e.m.</span> <span :class="{ keep: $clicks >= 7 }">inducida.</span> ($0.25$ puntos)

</div>
</div>

<div class="spot-wrap" v-click="[9, 13]">
<div :class="{ spot: true, wide: true, 'spot-before': $clicks < 9, 'spot-after': $clicks >= 13 }">
<div class="spot-tag">b) y c) · enfocar → marcar flujo → marcar f.e.m. → marcar valor en $t$ → pasar la nota</div>

**b)** Configuración I, Caracterización, electroimán variable ($1.00$ punto)
1. Justifica que, cuando el dispositivo está en esta configuración, el ángulo entre $\vec{B}$ y el vector unitario normal a la espira, $\hat{n}$, es constante, e indica su valor. <span :class="{ 'm-flux': true, on: $clicks >= 10 }">Escribe la expresión del flujo magnético a través de la espira en función del tiempo.</span> ($0.25$ puntos)
2. <span :class="{ 'm-fem': true, on: $clicks >= 11 }">Deduce, aplicando la ley de Faraday, la expresión de la fuerza electromotriz inducida en la espira en función del tiempo.</span> ($0.25$ puntos)
3. <span :class="{ 'm-val': true, on: $clicks >= 12 }">Calcula el valor numérico de la fem inducida en el instante $t = 7.0$ ms.</span> Expresa los resultados en notación científica con dos decimales e indica sus unidades. ($0.50$ puntos)

**c)** Configuración II, modo generador ($1.00$ punto)
1. <span :class="{ 'm-flux': true, on: $clicks >= 10 }">Escribe la expresión del flujo magnético a través de la espira en función del tiempo</span> y, a partir de ella, <span :class="{ 'm-fem': true, on: $clicks >= 11 }">deduce la expresión de la fem inducida</span>. <span :class="{ 'm-val': true, on: $clicks >= 12 }">Calcula el valor de la fem en el instante $t = 7.0$ ms.</span> ($0.50$ puntos)
2. Las especificaciones técnicas del sensor meteorológico exigen que el generador proporcione una fem máxima de al menos $0.50$ mV. Indica si el prototipo actual cumple este requisito. ($0.50$ puntos)

</div>
</div>

<div class="spot-wrap" v-click="[14, 16]">
<div :class="{ spot: true, two: true, 'spot-before': $clicks < 14, 'spot-after': $clicks >= 16 }">
<div class="spot-tag">b) 1 · enfocar → tachar → pasar</div>

**b) 1.** <span :class="{ keep: $clicks >= 15 }">Justifica que</span><span :class="{ cut: $clicks >= 15 }">, cuando el dispositivo está en esta configuración,</span> <span :class="{ keep: $clicks >= 15 }">el ángulo entre $\vec{B}$ y el vector unitario normal a la espira, $\hat{n}$, es constante, e indica su valor. Escribe la expresión del flujo magnético a través de la espira en función del tiempo.</span> ($0.25$ puntos)

</div>
</div>

<div class="spot-wrap" v-click="[17, 19]">
<div :class="{ spot: true, two: true, 'spot-before': $clicks < 17, 'spot-after': $clicks >= 19 }">
<div class="spot-tag">b) 2 · enfocar → tachar → pasar</div>

**b) 2.** <span :class="{ keep: $clicks >= 18 }">Deduce</span><span :class="{ cut: $clicks >= 18 }">, aplicando la ley de Faraday,</span> <span :class="{ keep: $clicks >= 18 }">la expresión de la fuerza electromotriz inducida en la espira en función del tiempo.</span> ($0.25$ puntos)

</div>
</div>

<div class="spot-wrap" v-click="[20, 22]">
<div :class="{ spot: true, two: true, 'spot-before': $clicks < 20, 'spot-after': $clicks >= 22 }">
<div class="spot-tag">b) 3 · enfocar → tachar y reescribir → pasar</div>

**b) 3.** <span :class="{ keep: $clicks >= 21 }">Calcula el valor numérico de la</span> <span :class="{ cut: $clicks >= 21 }">fem</span> <span :class="{ add: true, on: $clicks >= 21 }">f.e.m.</span> <span :class="{ keep: $clicks >= 21 }">inducida en</span> <span :class="{ cut: $clicks >= 21 }">el instante</span> <span :class="{ keep: $clicks >= 21 }">$t = 7.0$ ms</span><span :class="{ cut: $clicks >= 21 }">. Expresa los resultados</span> <span :class="{ add: true, on: $clicks >= 21 }">; expresa el resultado</span> <span :class="{ keep: $clicks >= 21 }">en notación científica</span> <span :class="{ add: true, on: $clicks >= 21 }">y</span> <span :class="{ keep: $clicks >= 21 }">con dos decimales</span> <span :class="{ cut: $clicks >= 21 }">e indica sus unidades</span><span :class="{ keep: $clicks >= 21 }">.</span> ($0.50$ puntos)

</div>
</div>

<div class="spot-wrap" v-click="[24, 25]">
<div :class="{ spot: true, two: true, 'spot-before': $clicks < 24, 'spot-after': $clicks >= 25 }">
<div class="spot-tag">c) 1 · enfocar → pasar tal cual</div>

**c) 1.** Escribe la expresión del flujo magnético a través de la espira en función del tiempo y, a partir de ella, deduce la expresión de la fem inducida. Calcula el valor de la fem en el instante $t = 7.0$ ms. ($0.50$ puntos)

</div>
</div>

<div class="spot-wrap" v-click="[26, 27]">
<div :class="{ spot: true, two: true, 'spot-before': $clicks < 26, 'spot-after': $clicks >= 27 }">
<div class="spot-tag">c) 2 · enfocar → pasar tal cual</div>

**c) 2.** Las especificaciones técnicas del sensor meteorológico exigen que el generador proporcione una fem máxima de al menos $0.50$ mV. Indica si el prototipo actual cumple este requisito. ($0.50$ puntos)

</div>
</div>

<div class="spot-wrap" v-click="[28, 30]">
<div :class="{ spot: true, idea: true, 'spot-before': $clicks < 28, 'spot-after': $clicks >= 30 }">
<div class="spot-tag">la idea · problema 2</div>

**Tres cálculos habituales, pedidos dos veces**, una por configuración: <span class="m-flux on">el flujo $\Phi(t)$</span>, <span class="m-fem on">la f.e.m. inducida $\varepsilon(t)$</span> y <span class="m-val on">su valor en un instante</span>.

**Tres elementos competenciales, pedidos una vez**: <span class="m-comp">justificar que el ángulo es constante</span>, <span class="m-comp">expresar el resultado en notación científica y con dos decimales</span> (las unidades se dan por supuestas) y <span class="m-comp">decidir si el prototipo cumple el requisito</span>.

</div>
</div>

<div class="spot-wrap" v-click="[30, 32]">
<div :class="{ spot: true, wide: true, ctx: true, 'spot-before': $clicks < 30, 'spot-after': $clicks >= 32 }">
<div class="spot-tag">contexto y configuraciones · enfocar → reescribir sin perder información → pasar · 156 → 76 palabras</div>
<div :class="{ 'cut-block': $clicks >= 31 }">

Una estación meteorológica instalada en una zona de montañosa aislada de la red eléctrica alimenta sus sensores con un microgenerador electromagnético. El dispositivo consiste en una espira circular plana de radio $R = 6.0$ cm, montada sobre un eje de giro dentro de un campo magnético uniforme. Durante las pruebas de laboratorio, el equipo de ingeniería ensaya el prototipo en dos configuraciones:

- **Configuración I** (caracterización): La espira permanece fija, inicialmente situada en el plano $XY$. Un electroimán genera un campo magnético $\vec{B}$ dirigido en el sentido positivo del eje $OZ$, cuyo módulo varía con el tiempo según $B(t) = 3t^2$ ($B$ en teslas, $t$ en segundos).
- **Configuración II** (modo generador): El campo magnético, de módulo constante $B_0 = 8.0$ mT, está creado por imanes permanentes y dirigido en el sentido positivo del eje $OZ$. La espira gira alrededor del eje $OY$ con velocidad angular constante $\omega = 60$ rad/s, partiendo del plano $XY$ en el instante $t = 0$.

</div>
<div :class="{ 'add-block': true, on: $clicks >= 31 }">

Un microgenerador consiste en una espira circular plana de radio $R = 6.0$ cm que puede girar en torno a un eje, dentro de un campo magnético uniforme. Se ensaya en dos configuraciones:

- **Configuración I:** espira fija en el plano $XY$; campo según $+OZ$, con $B(t) = 3t^2$ (SI).
- **Configuración II:** campo constante $B_0 = 8.0$ mT según $+OZ$; la espira gira alrededor del eje $OY$ con $\omega = 60$ rad/s, partiendo del plano $XY$ en $t = 0$.

</div>
</div>
</div>

---
transition: fade
section: "La forma pura"
class: dense tight
---
<div class="kicker">Anexo · ingeniería inversa · paso 2 → 1 · de lo que debió ser a la forma competencial ideal</div>

# De «sin narrativa» a la forma competencial ideal

<div :class="{ head: true, dim: $clicks >= 1 }">
<div class="head-tag">Contexto y configuraciones · común a las cuatro versiones</div>

Un microgenerador consiste en una espira circular plana de radio $R = 6.0$ cm que puede girar en torno a un eje, dentro de un campo magnético uniforme. Se ensaya en dos configuraciones:

- **Configuración I:** espira fija en el plano $XY$; campo según $+OZ$, con $B(t) = 3t^2$ (SI).
- **Configuración II:** campo constante $B_0 = 8.0$ mT según $+OZ$; la espira gira alrededor del eje $OY$ con $\omega = 60$ rad/s, partiendo del plano $XY$ en $t = 0$.

</div>

<div class="grid grid-cols-9 gap-4 mt-2">
<div class="col-version target col-span-4">
<div class="col-tag teal-tag">1 · Forma competencial ideal · se va construyendo · <span class="wc">{{ [0, 76, 76, 76, 94, 94, 94, 126, 126, 126, 154, 154][Math.min($clicks, 11)] }} palabras</span> <span class="wc-save" v-show="$clicks >= 4">· ahorro {{ [0, 0, 0, 0, 41, 41, 41, 90, 90, 90, 133, 133][Math.min($clicks, 11)] }}</span></div>

<div class="ghost arrive" v-click="1">

Contexto y configuraciones: se mantienen.

</div>

<div class="arrive" v-click="4">

**a)** Define el flujo magnético y enuncia la ley de Faraday-Lenz, explicando el significado del signo negativo. <span class="pts">($0.50$ puntos)</span>

</div>

<div class="arrive" v-click="7">

**b)** En la configuración I, <span class="m-comp">justifica que el ángulo entre $\vec{B}$ y $\hat{n}$ es constante</span>, deduce $\varepsilon(t)$ y calcula su valor en $t = 7.0$ ms, <span class="m-comp">en notación científica y con dos decimales</span>. <span class="pts">($1.00$ punto)</span>

</div>

<div class="arrive" v-click="10">

**c)** En la configuración II, deduce $\varepsilon(t)$, calcula su valor en $t = 7.0$ ms y <span class="m-comp">decide si la fem máxima alcanza los $0.50$ mV que exige el sensor</span>. <span class="pts">($1.00$ punto)</span>

</div>

</div>
<div class="col-version source col-span-5">
<div class="col-tag">2 · Sin narrativa · lo que debió ser en el segundo año · <span class="wc">287 palabras</span> · referencia fija</div>

<div :class="{ q: true, hl: $clicks >= 2 && $clicks < 4, dim: $clicks >= 4 }">

**a)** Los ingenieros necesitan conocer los fundamentos de la inducción electromagnética. ($0.50$ puntos)
1. Escribe la expresión matemática del flujo de un campo magnético uniforme a través de una superficie plana, y explica el significado físico de cada magnitud. ($0.25$ puntos)
2. Enuncia la ley de Faraday-Lenz, y explica el significado del signo negativo en la f.e.m. inducida. ($0.25$ puntos)

</div>

<div :class="{ q: true, hl: $clicks >= 5 && $clicks < 7, dim: $clicks >= 7 }">

**b)** Configuración I ($1.00$ punto)
1. Justifica que <span class="m-comp">el ángulo entre $\vec{B}$ y el vector unitario normal a la espira, $\hat{n}$, es constante</span>, e indica su valor. Escribe la expresión del flujo magnético a través de la espira en función del tiempo. ($0.25$ puntos)
2. Deduce la expresión de la fuerza electromotriz inducida en la espira en función del tiempo. ($0.25$ puntos)
3. Calcula el valor numérico de la f.e.m. inducida en $t = 7.0$ ms; <span class="m-comp">expresa el resultado en notación científica y con dos decimales</span>. ($0.50$ puntos)

</div>

<div :class="{ q: true, hl: $clicks >= 8 && $clicks < 10, dim: $clicks >= 10 }">

**c)** Configuración II ($1.00$ punto)
1. Escribe la expresión del flujo magnético a través de la espira en función del tiempo y, a partir de ella, deduce la expresión de la fem inducida. Calcula el valor de la fem en el instante $t = 7.0$ ms. ($0.50$ puntos)
2. Las especificaciones técnicas del sensor meteorológico exigen que el generador proporcione una fem máxima de al menos $0.50$ mV. <span class="m-comp">Indica si el prototipo actual cumple este requisito.</span> ($0.50$ puntos)

</div>

</div>
</div>

<div class="spot-wrap" v-click="[2, 4]">
<div :class="{ spot: true, wide: true, ctx: true, 'spot-before': $clicks < 2, 'spot-after': $clicks >= 4 }">
<div class="spot-tag">a) · enfocar → fundir → pasar</div>
<div :class="{ 'cut-block': $clicks >= 3 }">

**a)** Los ingenieros necesitan conocer los fundamentos de la inducción electromagnética. ($0.50$ puntos)
1. Escribe la expresión matemática del flujo de un campo magnético uniforme a través de una superficie plana, y explica el significado físico de cada magnitud. ($0.25$ puntos)
2. Enuncia la ley de Faraday-Lenz, y explica el significado del signo negativo en la f.e.m. inducida. ($0.25$ puntos)

</div>
<div :class="{ 'add-block': true, on: $clicks >= 3 }">

**a)** Define el flujo magnético y enuncia la ley de Faraday-Lenz, explicando el significado del signo negativo. <span class="pts">($0.50$ puntos)</span>

</div>
</div>
</div>

<div class="spot-wrap" v-click="[5, 7]">
<div :class="{ spot: true, wide: true, ctx: true, 'spot-before': $clicks < 5, 'spot-after': $clicks >= 7 }">
<div class="spot-tag">b) · enfocar → fundir → pasar · el flujo queda implícito en «deduce $\varepsilon(t)$»</div>
<div :class="{ 'cut-block': $clicks >= 6 }">

**b)** Configuración I ($1.00$ punto)
1. Justifica que <span class="m-comp">el ángulo entre $\vec{B}$ y el vector unitario normal a la espira, $\hat{n}$, es constante</span>, e indica su valor. Escribe la expresión del flujo magnético a través de la espira en función del tiempo. ($0.25$ puntos)
2. Deduce la expresión de la fuerza electromotriz inducida en la espira en función del tiempo. ($0.25$ puntos)
3. Calcula el valor numérico de la f.e.m. inducida en $t = 7.0$ ms; <span class="m-comp">expresa el resultado en notación científica y con dos decimales</span>. ($0.50$ puntos)

</div>
<div :class="{ 'add-block': true, on: $clicks >= 6 }">

**b)** En la configuración I, <span class="m-comp">justifica que el ángulo entre $\vec{B}$ y $\hat{n}$ es constante</span>, deduce $\varepsilon(t)$ y calcula su valor en $t = 7.0$ ms, <span class="m-comp">en notación científica y con dos decimales</span>. <span class="pts">($1.00$ punto)</span>

</div>
</div>
</div>

<div class="spot-wrap" v-click="[8, 10]">
<div :class="{ spot: true, wide: true, ctx: true, 'spot-before': $clicks < 8, 'spot-after': $clicks >= 10 }">
<div class="spot-tag">c) · enfocar → fundir → pasar · el requisito del sensor pasa a la decisión</div>
<div :class="{ 'cut-block': $clicks >= 9 }">

**c)** Configuración II ($1.00$ punto)
1. Escribe la expresión del flujo magnético a través de la espira en función del tiempo y, a partir de ella, deduce la expresión de la fem inducida. Calcula el valor de la fem en el instante $t = 7.0$ ms. ($0.50$ puntos)
2. Las especificaciones técnicas del sensor meteorológico exigen que el generador proporcione una fem máxima de al menos $0.50$ mV. <span class="m-comp">Indica si el prototipo actual cumple este requisito.</span> ($0.50$ puntos)

</div>
<div :class="{ 'add-block': true, on: $clicks >= 9 }">

**c)** En la configuración II, deduce $\varepsilon(t)$, calcula su valor en $t = 7.0$ ms y <span class="m-comp">decide si la fem máxima alcanza los $0.50$ mV que exige el sensor</span>. <span class="pts">($1.00$ punto)</span>

</div>
</div>
</div>

<div class="spot-wrap" v-click="11">
<div :class="{ spot: true, idea: true, 'spot-before': $clicks < 11 }">
<div class="spot-tag">la forma competencial ideal · 154 palabras frente a las 408 de 2026</div>

Cada cálculo habitual, una vez por configuración, y el flujo implícito en «deduce $\varepsilon(t)$». Los tres elementos competenciales, explícitos: <span class="m-comp">justificar</span>, <span class="m-comp">expresar con criterio</span>, <span class="m-comp">decidir</span>.

La más corta de leer y la más difícil de entender: todo lo intermedio queda a cargo del alumno. Por eso 2026, primer año de este saber básico, no salió así.

</div>
</div>

---
transition: fade
section: "Lo que se pedía antes"
class: dense tight
---
<div class="kicker">Anexo · ingeniería inversa · último paso · de la forma competencial ideal al enunciado habitual</div>

# Lo que se pedía antes: solo «escribe» y «calcula»

<div :class="{ head: true, dim: $clicks >= 1 && $clicks < 12, 'head-gone': $clicks >= 13 }">
<div class="head-tag">Contexto y configuraciones · común a las cuatro versiones</div>

Un microgenerador consiste en una espira circular plana de radio $R = 6.0$ cm que puede girar en torno a un eje, dentro de un campo magnético uniforme. Se ensaya en dos configuraciones:

- **Configuración I:** espira fija en el plano $XY$; campo según $+OZ$, con $B(t) = 3t^2$ (SI).
- **Configuración II:** campo constante $B_0 = 8.0$ mT según $+OZ$; la espira gira alrededor del eje $OY$ con $\omega = 60$ rad/s, partiendo del plano $XY$ en $t = 0$.

</div>

<div class="grid grid-cols-9 gap-4 mt-2">
<div :class="{ 'col-version': true, target: true, 'col-span-4': true, boxed: $clicks >= 21 }">
<div class="col-tag teal-tag">Habitual · antes del enunciado competencial obligatorio · <span class="wc">{{ [0, 76, 76, 76, 100, 100, 100, 127, 127, 127, 153, 153, 153, 153, 153, 153, 113, 113, 113, 113][Math.min($clicks, 19)] }} palabras</span> <span class="wc-save" v-show="$clicks >= 4">· diferencia {{ [0, 0, 0, 0, -6, -6, -6, -1, -1, -1, 1, 1, 1, 1, 1, 1, 41, 41, 41, 57][Math.min($clicks, 19)] }}</span></div>

<div class="ghost arrive" v-click="[1, 13]">

Contexto y configuraciones: se mantienen.

</div>

<div class="arrive ctxbox" v-click="13">
<div v-show="$clicks < 16">

Un microgenerador consiste en una espira circular plana de radio $R = 6.0$ cm que puede girar en torno a un eje, dentro de un campo magnético uniforme. Se ensaya en dos configuraciones:

- **Configuración I:** espira fija en el plano $XY$; campo según $+OZ$, con $B(t) = 3t^2$ (SI).
- **Configuración II:** campo constante $B_0 = 8.0$ mT según $+OZ$; la espira gira alrededor del eje $OY$ con $\omega = 60$ rad/s, partiendo del plano $XY$ en $t = 0$.

</div>
<div v-show="$clicks >= 16">

Un microgenerador consiste en una espira circular plana de radio $R = 6.0$ cm que puede girar en torno a un eje, dentro de un campo magnético uniforme. Se ensaya en las dos configuraciones de la figura:

<div class="figrow">
<div class="fig"><img src="/figures/config-I.svg" alt="Configuración I" /></div>
<div class="fig"><img src="/figures/config-II.svg" alt="Configuración II" /></div>
</div>
<div class="figcaps"><span>Configuración I</span><span>Configuración II</span></div>

</div>
</div>

<div class="arrive" v-click="4">

**a)** <span class="m-usual">Escribe</span> <span class="bx-flux">la expresión del flujo magnético a través de una superficie plana en un campo uniforme</span> y <span class="m-usual">enuncia</span> la ley de Faraday-Lenz. <span class="pts">($0.50$ puntos)</span>

</div>

<div class="arrive" v-click="7">

**b)** Configuración I: <span class="m-usual">escribe</span> <span class="bx-flux">la expresión del flujo magnético a través de la espira en función del tiempo</span> y <span class="bx-val"><span class="m-usual">calcula</span> la fem inducida en $t = 7.0$ ms</span>. <span class="pts">($1.00$ punto)</span>

</div>

<div class="arrive" v-click="10">

**c)** Configuración II: <span class="m-usual">escribe</span> <span class="bx-fem">la expresión de la fem inducida en función del tiempo</span> y <span class="bx-val"><span class="m-usual">calcula</span> su valor máximo y su valor en $t = 7.0$ ms</span>. <span class="pts">($1.00$ punto)</span>

</div>

</div>
<div :class="{ 'col-version': true, source: true, 'col-span-5': true, boxed: $clicks >= 21 }">
<div class="col-tag">1 · Forma competencial ideal · <span class="wc">{{ $clicks >= 19 ? 170 : 154 }} palabras</span> · <span v-show="$clicks < 19">referencia fija</span><span v-show="$clicks >= 19">con el dibujo pedido</span></div>

<div class="arrive ctxbox" v-click="13">

Un microgenerador consiste en una espira circular plana de radio $R = 6.0$ cm que puede girar en torno a un eje, dentro de un campo magnético uniforme. Se ensaya en dos configuraciones:

- **Configuración I:** espira fija en el plano $XY$; campo según $+OZ$, con $B(t) = 3t^2$ (SI).
- **Configuración II:** campo constante $B_0 = 8.0$ mT según $+OZ$; la espira gira alrededor del eje $OY$ con $\omega = 60$ rad/s, partiendo del plano $XY$ en $t = 0$.

</div>

<div :class="{ q: true, hl: ($clicks >= 2 && $clicks < 4) || ($clicks >= 17 && $clicks < 19), dim: $clicks >= 4 && $clicks < 19 }">
<div v-show="$clicks < 19">

**a)** Define el flujo magnético y enuncia la ley de Faraday-Lenz, explicando el significado del signo negativo. ($0.50$ puntos)

</div>
<div v-show="$clicks >= 19">

**a)** Define <span class="bx-flux">el flujo magnético</span> y enuncia la ley de Faraday-Lenz, explicando el significado del signo negativo; <span class="m-comp">dibuja, para cada configuración, un esquema con la espira, $\vec{B}$, $\hat{n}$ y el eje de giro</span>. ($0.50$ puntos)

</div>
</div>

<div :class="{ q: true, hl: $clicks >= 5 && $clicks < 7, dim: $clicks >= 7 && $clicks < 20 }">

**b)** En la configuración I, <span class="m-comp">justifica que el ángulo entre $\vec{B}$ y $\hat{n}$ es constante</span>, <span class="bx-fem">deduce $\varepsilon(t)$</span> y <span class="bx-val">calcula su valor en $t = 7.0$ ms</span>, <span class="m-comp">en notación científica y con dos decimales</span>. ($1.00$ punto)

</div>

<div :class="{ q: true, hl: $clicks >= 8 && $clicks < 10, dim: $clicks >= 10 && $clicks < 20 }">

**c)** En la configuración II, <span class="bx-fem">deduce $\varepsilon(t)$</span>, <span class="bx-val">calcula su valor en $t = 7.0$ ms</span> y <span class="m-comp">decide si la fem máxima alcanza los $0.50$ mV que exige el sensor</span>. ($1.00$ punto)

</div>

</div>
</div>

<div class="spot-wrap" v-click="[2, 4]">
<div :class="{ spot: true, two: true, 'spot-before': $clicks < 2, 'spot-after': $clicks >= 4 }">
<div class="spot-tag">a) · enfocar → reescribir en verbos habituales → pasar</div>

**a)** <span :class="{ cut: $clicks >= 3 }">Define el flujo magnético</span> <span :class="{ add: true, on: $clicks >= 3 }">Escribe la expresión del flujo magnético a través de una superficie plana en un campo uniforme</span> y enuncia la ley de Faraday-Lenz<span :class="{ cut: $clicks >= 3 }">, explicando el significado del signo negativo</span>. ($0.50$ puntos)

</div>
</div>

<div class="spot-wrap" v-click="[5, 7]">
<div :class="{ spot: true, two: true, 'spot-before': $clicks < 5, 'spot-after': $clicks >= 7 }">
<div class="spot-tag">b) · enfocar → quitar lo competencial → pasar</div>

**b)** <span :class="{ cut: $clicks >= 6 }">En la configuración I, </span><span :class="{ add: true, on: $clicks >= 6 }">Configuración I:</span> <span :class="{ cut: $clicks >= 6 }"><span class="m-comp">justifica que el ángulo entre $\vec{B}$ y $\hat{n}$ es constante</span>, deduce $\varepsilon(t)$</span> <span :class="{ add: true, on: $clicks >= 6 }">escribe la expresión del flujo magnético a través de la espira en función del tiempo</span> y calcula <span :class="{ cut: $clicks >= 6 }">su valor</span> <span :class="{ add: true, on: $clicks >= 6 }">la fem inducida</span> en $t = 7.0$ ms<span :class="{ cut: $clicks >= 6 }">, <span class="m-comp">en notación científica y con dos decimales</span></span>. ($1.00$ punto)

</div>
</div>

<div class="spot-wrap" v-click="[8, 10]">
<div :class="{ spot: true, two: true, 'spot-before': $clicks < 8, 'spot-after': $clicks >= 10 }">
<div class="spot-tag">c) · enfocar → quitar la decisión → pasar</div>

**c)** <span :class="{ cut: $clicks >= 9 }">En la configuración II, deduce $\varepsilon(t)$</span> <span :class="{ add: true, on: $clicks >= 9 }">Configuración II: escribe la expresión de la fem inducida en función del tiempo</span>, calcula <span :class="{ add: true, on: $clicks >= 9 }">su valor máximo y</span> su valor en $t = 7.0$ ms <span :class="{ cut: $clicks >= 9 }">y <span class="m-comp">decide si la fem máxima alcanza los $0.50$ mV que exige el sensor</span></span>. ($1.00$ punto)

</div>
</div>

<div class="spot-wrap" v-click="[11, 12]">
<div :class="{ spot: true, idea: true, 'spot-before': $clicks < 11, 'spot-after': $clicks >= 12 }">
<div class="spot-tag">lo que añade la forma competencial</div>

El enunciado habitual pide lo mismo con dos verbos: <span class="m-usual">escribe</span> y <span class="m-usual">calcula</span>. La forma competencial añade tres cosas que el alumno tiene que hacer, no solo saber: <span class="m-comp">justificar</span> que el ángulo es constante, <span class="m-comp">expresar</span> el resultado con un criterio dado y <span class="m-comp">decidir</span> si se cumple un requisito.

Ese salto es el que 2026 quiso facilitar con explicaciones y repeticiones. 2027 lo mantiene con menos texto.

</div>
</div>

<div class="spot-wrap" v-click="[14, 16]">
<div :class="{ spot: true, wide: true, ctx: true, 'spot-before': $clicks < 14, 'spot-after': $clicks >= 16 }">
<div class="spot-tag">contexto, a la manera habitual · enfocar → sustituir la descripción por la figura → pasar</div>

Un microgenerador consiste en una espira circular plana de radio $R = 6.0$ cm que puede girar en torno a un eje, dentro de un campo magnético uniforme. Se ensaya en dos configuraciones:

<div :class="{ 'cut-block': $clicks >= 15 }">

- **Configuración I:** espira fija en el plano $XY$; campo según $+OZ$, con $B(t) = 3t^2$ (SI).
- **Configuración II:** campo constante $B_0 = 8.0$ mT según $+OZ$; la espira gira alrededor del eje $OY$ con $\omega = 60$ rad/s, partiendo del plano $XY$ en $t = 0$.

</div>
<div :class="{ 'add-block': true, on: $clicks >= 15 }">

<div class="figrow">
<div class="fig"><img src="/figures/config-I.svg" alt="Configuración I" /></div>
<div class="fig"><img src="/figures/config-II.svg" alt="Configuración II" /></div>
</div>
<div class="figcaps"><span>Configuración I</span><span>Configuración II</span></div>

</div>
</div>
</div>

<div class="spot-wrap" v-click="[17, 19]">
<div :class="{ spot: true, two: true, 'spot-before': $clicks < 17, 'spot-after': $clicks >= 19 }">
<div class="spot-tag">a), forma competencial · enfocar → pedir el dibujo que la versión habitual regala → pasar</div>

**a)** Define el flujo magnético y enuncia la ley de Faraday-Lenz, explicando el significado del signo negativo<span :class="{ add: true, on: $clicks >= 18 }">; dibuja, para cada configuración, un esquema con la espira, $\vec{B}$, $\hat{n}$ y el eje de giro</span>. ($0.50$ puntos)

</div>
</div>

<div class="abs-note" v-click="21">

Recuadros: los tres cálculos habituales, <span class="bx-flux on">flujo</span>, <span class="bx-fem on">f.e.m.</span> y <span class="bx-val on">valor en un instante</span>, están en las dos versiones. Lo que las distingue está en verde.

</div>

---
transition: slide-up
section: "Los cuatro niveles"
---
[Anexo · los verbos de la competencia]{.kicker}

# Cuatro niveles, presentes en los seis problemas de 2026

::::div{.grid.grid-cols-2.gap-4.mt-3}

:::div{.card v-click}
### 1 · Conocer
[escribe]{.chip.amber} [enuncia]{.chip.amber}

- ley de Faraday-Lenz
- ecuación de Einstein
- ley de desintegración

::div{.note}
B1 a · D1 a · D2 a
::
:::

:::div{.card v-click}
### 2 · Comprender
[explica]{.chip.amber} [justifica]{.chip.amber}

- signo negativo de la fem
- oxidación y $W_0$
- qué depende de la masa

::div{.note}
A1 c · B1 a, b · C2 a · D1 c
::
:::

:::div{.card.teal v-click}
### 3 · Aplicar
[calcula]{.chip.teal} [deduce]{.chip.teal}

- simbólico, luego numérico
- $r_{\mathrm{geo}}$, $\varepsilon(t)$, $L'$, $s$, $W_0$
- $t$ a partir de $N/N_0$

::div{.note}
Los seis problemas
::
:::

:::div{.card.amber v-click}
### 4 · Valorar
[compara]{.chip.amber} [decide]{.chip.amber}

- ¿destruye grandes zonas?
- ¿cumple los $0.50$ mV?
- ¿imagen real o virtual?

::div{.note}
A1 b · B1 c · C2 c · D1 c
::
:::

::::

::div{.note.mt-4 v-click}
Acortar: un verbo por nivel, sin repeticiones entre apartados · la escalera no cambia, cambia cuántas veces se sube
::

---
transition: fade
section: "Las respuestas"
---
[Anexo · preguntas previsibles]{.kicker}

# Respuestas cortas

:::div{.grid.grid-cols-3.gap-4.mt-4}

::div{.card v-click}
### ¿Más cortos, más fáciles?
- no: mismos verbos y rúbrica
- menos lectura, misma exigencia
::

::div{.card v-click}
### ¿Cambia la opcionalidad?
- no: $1$ y $2$ sin opción
- $3$ y $4$: opción a o b
::

::div{.card v-click}
### ¿Cambia la tabla de datos?
- no: una tabla para todo el examen
- solo datos de tabla y enunciado
::

::div{.card v-click}
### ¿Y las penalizaciones?
- $-0.1$: unidades, vectores, redondeo
- $-0.1$: faltas de ortografía
- decimales, no cifras significativas
::

::div{.card v-click}
### ¿Y si responde de más?
- en orden, como hasta ahora
::

::div{.card v-click}
### ¿Se arrastran los errores?
- se usa el valor del alumno
- salvo resultado absurdo
::

:::

---
transition: slide-up
section: "Datos y constantes"
class: dense
ribbonTitle: "Datos y constantes"
---
[Anexo · la tabla de datos y constantes]{.kicker}

# Once entradas: ocho se usan, tres nunca

::const-table{name="constantes-2026" :clicks="$clicks" .big}
::

::::div{.grid.grid-cols-4.gap-4.mt-3}

:::div

::div{.step v-click="1"}
[A1]{.n.u-a}

gravitatorio: $G$, $M_{\mathrm{T}}$, $R_{\mathrm{T}}$
::

::div{.step v-click="2"}
[B1]{.n.u-b}

inducción: nada
::

:::

:::div

::div{.step v-click="3"}
[C1]{.n.u-c}

sonido: $v_{\mathrm{sonido}}$, $I_0$
::

::div{.step v-click="4"}
[C2]{.n.u-b}

óptica: nada
::

:::

:::div

::div{.step v-click="5"}
[D1]{.n.u-d}

fotoeléctrico: $h$, $c$, $|q_e|$
::

::div{.step v-click="6"}
[D2]{.n.u-b}

datación: nada, $T_{1/2}$ dada
::

:::

:::div

::div{.step v-click="7"}
[×]{.n.u-x}

nunca: $K$, $m_p$, $m_e$
::

::div{.card.amber v-click="8"}
### Se evalúa elegir
la tabla trae de más
::

:::

::::

::div{.note.mt-2}
Tal como aparece en el examen de 2026 · la misma tabla en 2027
::

---
transition: fade
section: "Cierre"
class: dense
ribbonTitle: "Para llevar"
---
[Para llevar]{.kicker}

# Cuatro caminos, y solo tres se pueden cifrar

:::div{.grid.grid-cols-2.gap-5.mt-4}

::div{.card.teal v-click}
### Lo que ya está apretado
La narrativa contextual son **70 palabras por enunciado** y no ha crecido desde 2025.
Ahí no hay margen: el crecimiento son **93 palabras de texto de demandas** y **17 de pesos
impresos**, y las dos cosas existen porque la corrección está desglosada en cuantos de $0.25$
e impresa en la prueba.
::

::div{.card.amber v-click}
### Y de dónde sí puede salir
Aplanar **dos niveles de demanda a uno** es lo más barato, y devuelve la calificación parcial
a la discreción del corrector. Desglosar en los criterios pero **imprimir solo el apartado y
su total** es el único camino que separa el coste de lectura de la protección — y nadie ha
comprobado si el alumnado usa los pesos impresos.
::

:::

::div{.card.coral.mt-4.mx-auto v-click}
La regla que gobierna las cuatro versiones es una sola: **una línea, un concepto.** Lo que se
recorta es la repetición entre apartados, la narrativa que no da sentido al problema y las
instrucciones de formato — nunca el contexto, los datos, los verbos ni la rúbrica.
::

---
transition: fade
section: "Las tres"
class: "dense here-enunciados"
ribbonTitle: "Dónde está cada cosa"
---
[Las tres presentaciones]{.kicker}

# Dónde está cada cosa

:::div{.grid.grid-cols-3.gap-5.mt-3}

::div{.card.lk.lk-informativa}
### La informativa [estás aquí]{.chip.amber.lk-here}

Qué se mantiene de 2026 y el único cambio de 2027.

::div{.qr}
<img src="/figures/qr-informativa.svg" alt="Código QR de la presentación informativa" />
::

[<a href="https://jmigartua.github.io/usap-fisica-2027/" target="_blank" rel="noopener">jmigartua.github.io/<br>usap-fisica-2027/</a>]{.lk-url}
::

::div{.card.lk.lk-enunciados}
### Los enunciados [estás aquí]{.chip.amber.lk-here}

De dónde salen las palabras de más, problema a problema.

::div{.qr}
<img src="/figures/qr-enunciados.svg" alt="Código QR de la presentación sobre los enunciados" />
::

[<a href="https://jmigartua.github.io/usap-fisica-2027/enunciados/" target="_blank" rel="noopener">jmigartua.github.io/<br>usap-fisica-2027/enunciados/</a>]{.lk-url}
::

::div{.card.lk.lk-hallazgos}
### Los hallazgos [estás aquí]{.chip.amber.lk-here}

Qué dicen los datos de 2026, y qué no pueden decir.

::div{.qr}
<img src="/figures/qr-hallazgos.svg" alt="Código QR de la presentación sobre los hallazgos" />
::

[<a href="https://jmigartua.github.io/usap-fisica-2027/hallazgos/" target="_blank" rel="noopener">jmigartua.github.io/<br>usap-fisica-2027/hallazgos/</a>]{.lk-url}
::

:::

::div{.note-line.mt-4}
Las tres se publican juntas desde el mismo repositorio, y se actualizan solas con cada cambio.
::
