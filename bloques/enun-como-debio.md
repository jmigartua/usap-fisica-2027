transition: fade
section: "Anexo"
class: dense tight
...
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
