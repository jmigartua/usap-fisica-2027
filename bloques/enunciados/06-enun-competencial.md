transition: fade
section: "Anexo"
class: dense tight
...
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
