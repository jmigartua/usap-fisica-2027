transition: fade
section: "Anexo"
class: dense tight
...
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
