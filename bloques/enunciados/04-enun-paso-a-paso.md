transition: slide-left
section: "Anexo"
class: dense
...
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
