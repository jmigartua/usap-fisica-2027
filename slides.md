---
theme: default
title: USaP Física 2027
titleTemplate: '%s · Coordinación'
info: |
  ## USaP Física 2027
  Reunión de coordinación con el profesorado: qué se mantiene de 2026 y el único cambio previsto.
author: J. M. Igartua
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
---

<div class="kicker">USaP · Física · Coordinación · edición 2027</div>

<div class="cover-title" v-motion :initial="{ y: 24, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { duration: 600 } }">
Física 2027:<br>nada cambia
</div>

<div class="cover-sub" v-motion :initial="{ y: 24, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 250, duration: 600 } }">
Misma estructura, contenidos y corrección que en 2026.<br>Un único cambio: enunciados más cortos.
</div>

<div class="cover-meta" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 550, duration: 600 } }">
<strong>Reunión de coordinación</strong> · profesorado de Física de Bachillerato · UPV/EHU<br>
J. M. Igartua · curso 2026–27
</div>

---
transition: fade
section: "El mensaje"
---

<div class="kicker">El mensaje</div>

# 2027 es 2026

<div class="grid grid-cols-3 gap-5 mt-6">
<div class="card kpi eq-tile" v-click>
  <div class="kpi-value teal">

$=$

  </div>
  <div class="kpi-label">

**Estructura**<br>cuatro problemas · $2.50$ cada uno

  </div>
</div>
<div class="card kpi eq-tile" v-click>
  <div class="kpi-value teal">

$=$

  </div>
  <div class="kpi-label">

**Contenidos**<br>mismos cuatro bloques de saberes

  </div>
</div>
<div class="card kpi eq-tile" v-click>
  <div class="kpi-value teal">

$=$

  </div>
  <div class="kpi-label">

**Evaluación**<br>misma rúbrica, mismos criterios

  </div>
</div>
</div>

<div class="card amber mt-6" v-click>
<h3>Un solo cambio, y es de estilo</h3>

Enunciados **más cortos** · mismas competencias, datos y rúbrica · menos lectura

</div>

---
transition: slide-up
section: "Estructura"
---

<div class="kicker">Estructura · igual que en 2026</div>

# Cuatro problemas, cuatro bloques

<div class="grid grid-cols-4 gap-4 mt-4">
<div class="card">
<h3>1 · Bloque A</h3>
<SaberModal title="Bloque A · Campo gravitatorio">

- **A1** Campo gravitatorio de un sistema de masas: cálculo vectorial; efectos cinemáticos y dinámicos.
- **A2** Momento angular en un campo gravitatorio: fuerzas centrales y conservación.
- **A3** Energía mecánica en un campo gravitatorio: tipo de trayectoria, trabajo y balances; velocidad orbital y de escape; órbitas geoestacionarias.
- **A4** Leyes de Kepler: movimiento planetario, satélites y cuerpos celestes.
- **A5** Cosmología y astrofísica: Big Bang, expansión del universo, materia y energía oscuras (solo descripción).

</SaberModal>

<span class="chip coral">sin opción</span>

Campo gravitatorio

$2.50$ puntos

</div>
<div class="card">
<h3>2 · Bloque B</h3>
<SaberModal title="Bloque B · Campo electromagnético">

- **B1** Campos eléctrico y magnético: tratamiento vectorial; cargas libres en presencia de campos; fuerza de Lorentz.
- **B2** Campo eléctrico de distribuciones discretas y continuas; flujo y ley de Gauss.
- **B3** Energía de una distribución de cargas: potencial, trabajo y superficies equipotenciales.
- **B4** Campos magnéticos de hilos, espiras, solenoides y toros; interacción con cargas libres.
- **B5** Líneas de campo eléctrico y magnético de cargas, imanes e hilos con corriente.
- **B6** Fuerza electromotriz: flujo magnético y ley de Faraday; motores, generadores y transformadores.

</SaberModal>

<span class="chip coral">sin opción</span>

Campo electromagnético

$2.50$ puntos

</div>
<div class="card teal">
<h3>3 · Bloque C</h3>
<SaberModal title="Bloque C · Vibraciones y ondas">

- **C1** Movimiento oscilatorio: MAS, ley de Hooke, conservación de la energía.
- **C2** Movimiento ondulatorio: ecuación de onda, gráficas, tipos de ondas.
- **C3** Fenómenos ondulatorios: sonido y decibelios, ondas esféricas, efecto Doppler.
- **C4** Naturaleza de la luz: Huygens, Young, onda electromagnética, espectro.
- **C5** Formación de imágenes: refracción, lentes delgadas, espejos, telescopios.

</SaberModal>

<span class="chip teal">opción a o b</span>

Ondas · Óptica

$2.50$ puntos

</div>
<div class="card teal">
<h3>4 · Bloque D</h3>
<SaberModal title="Bloque D · Física relativista, cuántica, nuclear y de partículas">

- **D1** Relatividad especial: postulados, contracción de la longitud, dilatación del tiempo, masa y energía.
- **D2** Dualidad onda-corpúsculo y cuantización: efecto fotoeléctrico, De Broglie, incertidumbre.
- **D3** Modelo estándar: partículas fundamentales, interacciones, aceleradores.
- **D4** Núcleos e isótopos: radiactividad, ley de desintegración y datación, energía de enlace, fisión y fusión.

</SaberModal>

<span class="chip teal">opción a o b</span>

Nuclear · Cuántica

$2.50$ puntos

</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-5">
<div class="card kpi" v-click>
  <div class="kpi-value">

$4 \times 2.50 = 10$

  </div>
  <div class="kpi-label">

puntos en total · respuestas de más: se corrigen en orden

  </div>
</div>
<div v-click>

<div class="note">

Condiciones de la prueba, sin cambios:

</div>

<span class="chip amber">calculadora científica</span><span class="chip amber">tabla de datos y constantes</span><span class="chip amber">solo datos de tabla y enunciado</span><span class="chip amber">código en cada cuadernillo</span>

</div>
</div>

---
transition: slide-left
section: "Evaluación"
---

<div class="kicker">Evaluación · igual que en 2026</div>

# Misma rúbrica, mismos criterios

<div class="grid grid-cols-5 gap-6 mt-3">
<div class="col-span-2">

<div class="step" v-click><div class="n">a</div><div>

$2.50$ por problema<br>**tres apartados**, con su peso

</div></div>
<div class="step" v-click><div class="n">·</div><div>

**subapartados** de $0.25$ y $0.50$<br>un contenido cada uno

</div></div>
<div class="step" v-click><div class="n">✓</div><div>

solucionario **orientativo**<br>qué se puntúa, no un único camino

</div></div>

</div>
<div class="col-span-3 grid grid-cols-2 gap-3">
<div class="card" v-click>
<h3>Simbólico, luego numérico</h3>

planteamiento y despeje primero

</div>
<div class="card coral" v-click>

### Descuentos de $0.1$

- unidades
- carácter vectorial
- redondeo y decimales

<div class="note">

no cifras significativas · se corrige

</div>

</div>
<div class="card coral" v-click>
<h3 style="color: var(--coral)">Errores graves</h3>

- ecuación incorrecta
- confusión escalar/vectorial
- invalidan el apartado

</div>
<div class="card teal" v-click>
<h3 style="color: var(--teal)">Se arrastra el valor</h3>

- valor del alumno, si hace falta
- salvo resultado absurdo

</div>
</div>
</div>

---
transition: slide-up
section: "El cambio"
---

<div class="kicker">El único cambio</div>

# Enunciados más cortos

<div class="grid grid-cols-5 gap-6 mt-2">
<div class="col-span-3">

<div class="note">

Longitud de los enunciados de 2026, en palabras, sin los pesos de cada apartado:

</div>

<div :class="{ bars: true, target: $clicks >= 5 }">
<div class="bar-row" v-click="1"><div class="lab">A1</div><div class="track"><div class="bar" style="width: calc(295/408*100%)"></div><div class="band" style="left: calc(100/408*100%); width: calc(50/408*100%)"></div></div><div class="val">

$295$

</div></div>
<div class="bar-row" v-click="1"><div class="lab">B1</div><div class="track"><div class="bar" style="width: calc(408/408*100%)"></div><div class="band" style="left: calc(100/408*100%); width: calc(50/408*100%)"></div></div><div class="val">

$408$

</div></div>
<div class="bar-row" v-click="1"><div class="lab">C1</div><div class="track"><div class="bar" style="width: calc(150/408*100%)"></div><div class="band" style="left: calc(100/408*100%); width: calc(50/408*100%)"></div></div><div class="val">

$150$

</div></div>
<div class="bar-row" v-click="1"><div class="lab">C2</div><div class="track"><div class="bar" style="width: calc(242/408*100%)"></div><div class="band" style="left: calc(100/408*100%); width: calc(50/408*100%)"></div></div><div class="val">

$242$

</div></div>
<div class="bar-row" v-click="1"><div class="lab">D1</div><div class="track"><div class="bar" style="width: calc(163/408*100%)"></div><div class="band" style="left: calc(100/408*100%); width: calc(50/408*100%)"></div></div><div class="val">

$163$

</div></div>
<div class="bar-row" v-click="1"><div class="lab">D2</div><div class="track"><div class="bar" style="width: calc(214/408*100%)"></div><div class="band" style="left: calc(100/408*100%); width: calc(50/408*100%)"></div></div><div class="val">

$214$

</div></div>
<div class="bar-row" v-click="2"><div class="lab teal-lab">B1′</div><div class="track"><div class="bar short" style="width: calc(90/408*100%)"></div></div><div class="val">

$90$

</div></div>
</div>

<div class="note mt-2" v-click="2">

B1′: problema 2 preguntado a la manera habitual (anexo)

Un examen de 2026: unas $1100$ palabras por alumno

</div>

</div>
<div class="col-span-2">

<div class="card teal" v-click="3">
<h3 style="color: var(--teal)">Se conserva</h3>

- contexto real, da sentido al problema
- datos y tabla de constantes
- verbos, en cada apartado
- rúbrica y pesos

</div>

<div class="card coral mt-2" v-click="4">
<h3 style="color: var(--coral)">Se recorta</h3>

- narrativa
- preguntas repetidas entre apartados
- instrucciones de formato redundantes

</div>

<div class="card lime mt-2" v-click="5">
<h3 style="color: var(--lime)">Objetivo 2027</h3>

$100$–$150$ palabras · banda verde en 2026

</div>

</div>
</div>

---
layout: center
transition: view-transition
section: "Cierre"
ribbonTitle: "Para llevar"
---

<div class="kicker text-center">Para llevar</div>

<div class="section-title text-center" v-motion :initial="{ y: 16, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { duration: 500 } }">
Nada cambia.
</div>

<div class="section-title text-center" style="color: var(--amber)" v-click>
Salvo que se leerá menos.
</div>

<div class="section-sub text-center mt-6" style="margin-left: auto; margin-right: auto" v-click>
Misma estructura, contenidos y corrección.<br>Enunciados más cortos, misma rúbrica.
</div>

---
transition: fade
section: "Anexo"
class: dense
---

<div class="kicker">Anexo · por si se pregunta</div>

# 2026 de un vistazo

| Bloque | Problema | Tema | Reparto a) + b) + c) | Palabras |
|:--|:--|:--|:--|--:|
| A · sin opción | A1 | Campo gravitatorio: satélite en órbita geoestacionaria y caída sobre la Tierra | $1.00 + 1.00 + 0.50$ | $295$ |
| B · sin opción | B1 | Inducción electromagnética: espira en campo variable y en modo generador | $0.50 + 1.00 + 1.00$ | $408$ |
| C · opción a | C1 | Ondas estacionarias y sonido: cuerda de violín, nivel en decibelios | $0.50 + 1.00 + 1.00$ | $150$ |
| C · opción b | C2 | Óptica geométrica: lente proyectora, aumento y tipo de imagen | $1.00 + 0.50 + 1.00$ | $242$ |
| D · opción a | D1 | Efecto fotoeléctrico: potencial de frenado, función trabajo, metal oxidado | $0.50 + 1.00 + 1.00$ | $163$ |
| D · opción b | D2 | Desintegración radiactiva: datación por carbono-14 | $1.00 + 0.50 + 1.00$ | $214$ |

<div class="note mt-3">

Cada problema, $2.50$ · subapartados de $0.25$ o $0.50$, con su contenido en el solucionario

Palabras: enunciado en castellano, sin los pesos

</div>

---
transition: slide-left
section: "Anexo"
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

define, deduce, calcula: lo de siempre

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

<div class="panel" v-show="$clicks === 1">

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

<div class="panel" v-show="$clicks === 2">

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

**b)** En I, deduce $\varepsilon(t)$ y calcula $\varepsilon$ en $t = 7.0$ ms. ($1.00$)

**c)** En II, deduce $\varepsilon(t)$, calcula $\varepsilon(7.0\ \mathrm{ms})$ y $\varepsilon_{\max}$. ($1.00$)

</div>

<div class="note mt-2" v-click="3">

Así se llegó a 2026: de lo habitual a lo competencial, y con narrativa y repeticiones para facilitar la transición

Resultado: $408$ palabras, demasiado largo · misma rúbrica, $0.50 + 1.00 + 1.00$, en las cuatro versiones

Siguientes diapositivas: de 2026 a lo que debió ser, y a la forma competencial pura

</div>

---
transition: fade
section: "Anexo"
class: dense tight
---

<div class="kicker">Anexo · ingeniería inversa · paso 3 → 2 · problema 2 completo</div>

# De «2026, como salió» a «sin narrativa»

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
section: "Anexo"
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
section: "Anexo"
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
section: "Anexo"
---

<div class="kicker">Anexo · los verbos de la competencia</div>

# Cuatro niveles, presentes en los seis problemas de 2026

<div class="grid grid-cols-2 gap-4 mt-3">
<div class="card" v-click>
<h3>1 · Conocer</h3>

<span class="chip amber">escribe</span><span class="chip amber">enuncia</span>

- ley de Faraday-Lenz
- ecuación de Einstein
- ley de desintegración

<div class="note">

B1 a · D1 a · D2 a

</div>

</div>
<div class="card" v-click>
<h3>2 · Comprender</h3>

<span class="chip amber">explica</span><span class="chip amber">justifica</span>

- signo negativo de la fem
- oxidación y $W_0$
- qué depende de la masa

<div class="note">

A1 c · B1 a, b · C2 a · D1 c

</div>

</div>
<div class="card teal" v-click>
<h3 style="color: var(--teal)">3 · Aplicar</h3>

<span class="chip teal">calcula</span><span class="chip teal">deduce</span>

- simbólico, luego numérico
- $r_{\mathrm{geo}}$, $\varepsilon(t)$, $L'$, $s$, $W_0$
- $t$ a partir de $N/N_0$

<div class="note">

Los seis problemas

</div>

</div>
<div class="card amber" v-click>
<h3>4 · Valorar</h3>

<span class="chip amber">compara</span><span class="chip amber">decide</span>

- ¿destruye grandes zonas?
- ¿cumple los $0.50$ mV?
- ¿imagen real o virtual?

<div class="note">

A1 b · B1 c · C2 c · D1 c

</div>

</div>
</div>

<div class="note mt-4" v-click>

Acortar: un verbo por nivel, sin repeticiones entre apartados · la escalera no cambia, cambia cuántas veces se sube

</div>

---
transition: fade
section: "Anexo"
---

<div class="kicker">Anexo · preguntas previsibles</div>

# Respuestas cortas

<div class="grid grid-cols-3 gap-4 mt-4">
<div class="card" v-click>
<h3>¿Más cortos, más fáciles?</h3>

- no: mismos verbos y rúbrica
- menos lectura, misma exigencia

</div>
<div class="card" v-click>
<h3>¿Cambia la opcionalidad?</h3>

- no: $1$ y $2$ sin opción
- $3$ y $4$: opción a o b

</div>
<div class="card" v-click>
<h3>¿Cambia la tabla de datos?</h3>

- no: misma tabla, con el enunciado
- solo datos de tabla y enunciado

</div>
<div class="card" v-click>
<h3>¿Y las penalizaciones?</h3>

- $-0.1$: unidades, vectores, redondeo
- decimales, no cifras significativas

</div>
<div class="card" v-click>
<h3>¿Y si responde de más?</h3>

- en orden, como hasta ahora

</div>
<div class="card" v-click>
<h3>¿Se arrastran los errores?</h3>

- se usa el valor del alumno
- salvo resultado absurdo

</div>
</div>
