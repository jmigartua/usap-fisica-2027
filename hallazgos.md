---
theme: default
title: "Qué sabemos de 2026, y qué no"
titleTemplate: '%s · Coordinación'
info: |
  ## Qué sabemos de 2026, y qué no
  Material de apoyo: la caída de 2026 descompuesta, lo que se acota, lo que no se separa y la predicción para 2027.
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
  title: "Física 2027 · Los hallazgos"
  thumbsDir: "thumbs/hallazgos"

---
[USaP · Física · Qué dicen los datos · edición 2027]{.kicker}

::div{.cover-title}
Qué sabemos de 2026,<br>y qué no
::

::div{.cover-sub}
La caída, separada en las partes que la componen: lo que se acota,<br>lo que no se separa, y la predicción que 2027 puede zanjar.
::

::div{.cover-meta}
**Material de apoyo** · acompaña a *Física 2027: nada cambia*<br>Asier Lopez-Eiguren (EHU) · J. M. Igartua (EHU) · curso 2026–27
::

---
transition: slide-up
section: "Los datos"
ribbonTitle: "Qué pasó"
class: dense
---
[Los datos · qué pasó en 2026]{.kicker}

# La caída es real, y no es del modelo

:::div{.figrow.grid.grid-cols-2.gap-4.mt-3}

::div{.fig}
<img src="/figures/datos-serie.png" alt="Serie de Física en Euskadi, 2010–2026" />
::

::div{.fig}
<img src="/figures/datos-nueve.png" alt="Las nueve comunidades, 2025 a 2026" />
::

:::

<div class="figcaps"><span>La serie vasca: 3.99 en 2026, el valor más bajo en dieciséis años</span><span>Las nueve comunidades con resultado publicado: seis suben, tres bajan</span></div>

::div{.card.amber.mt-4 v-click}
El modelo se aplicó **en las diecisiete comunidades y en los dos años**, y seis de las nueve
**subieron** con él. **Seis no convirtieron nada** — cero marcas competenciales en los dos
años — y aun así se reparten **$1.96$ puntos**, de $-0.83$ a $+1.13$: lo que las movió no
fue la conversión. **El modelo, por sí solo, no explica 2026.**
::

---
transition: slide-up
section: "Los datos"
ribbonTitle: "De qué está hecha"
class: dense
---
[Los datos · de qué está hecha la caída]{.kicker}

# Más de la mitad no es de Física

::div{.fig.fit-xs.mt-2}
<img src="/figures/datos-materias.png" alt="Descomposición por materias" />
::

:::div{.grid.grid-cols-3.gap-4.mt-4}

::div{.card.kpi v-click}
[$-1.18$]{.kpi-value.coral}

[**Común de Euskadi**<br>movió a la vez a **todas** las materias cuantitativas]{.kpi-label}
::

::div{.card.kpi v-click}
[$-1.10$]{.kpi-value.coral}

[**Propio de Física**<br>lo que queda para la prueba de Física]{.kpi-label}
::

::div{.card.kpi v-click}
[$-1.67$]{.kpi-value.lime}

[**Matemáticas II**<br>cayó **más que Física**, misma convocatoria]{.kpi-label}
::

:::

::div{.note-line.mt-3 v-click}
Los cuatro términos suman el $-1.48$ observado **por construcción**: es una identidad, no un ajuste.
Química $-0.21$, Biología $+0.15$, Lengua Castellana $+0.03$ no acompañaron.
**Ese $-1.18$ común pide una explicación que no sea de Física — y hay una candidata.**
::

---
transition: slide-up
section: "Los datos"
ribbonTitle: "La semana"
class: dense tight
---
[Los datos · la semana, no solo la prueba]{.kicker}

# También se movió el calendario

::div{.fig.fit-sm.mt-2}
<img src="/figures/datos-semana.png" alt="La semana de exámenes 2025 y 2026, y la tabla de ponderaciones" />
::

:::div{.grid.grid-cols-2.gap-5.mt-4}

::div{.card.amber v-click}
### Lo que se movió: Matemáticas II
Física fue la última de su día en los dos años: **lo que cuesta ir la última se cancela en la
diferencia**. Cambió **lo que la precede** — Matemáticas II, cuarenta y cinco minutos antes.
Las dos que quedaron seguidas cayeron ($-1.67$, $-1.48$); las que se fueron al otro día, no.
::

::div{.card.coral v-click}
### Por qué no lo contamos como causa
Ese par es **también** el más cuantitativo y aquel cuyas pruebas más cambiaron: «seguidas» y
«las más duras» nombran las mismas dos. Con dos observaciones por lado **no se puede separar**,
así que es un dato para el calendario de 2027, no un término de la explicación de 2026.
::

:::

::div{.note-line.mt-3 v-click}
El panel b es otra cosa: la regla impresa en cada página de las ponderaciones. **→ anexo, 2024.**
::

---
transition: slide-up
section: "Los datos"
ribbonTitle: "Qué no sabemos"
class: dense
---
[Los datos · lo que puede y lo que no puede decirse]{.kicker}

# Cuatro quintas partes no tienen causa identificable

::div{.fig.fit-xs.mt-2}
<img src="/figures/datos-presupuesto.png" alt="Presupuesto de atribución de la caída específicamente vasca" />
::

:::div{.grid.grid-cols-2.gap-5.mt-4}

::div{.card.teal v-click}
### Lo que sí se acota
**Elección retirada** $-0.20$ · **Promoción (PISA)** $-0.12$ — juntas, $-0.31$ de $-1.65$: menos de una quinta parte.
::

::div{.card.coral v-click}
### Lo que no se separa
Contenido de la prueba · severidad de la corrección · carga de lectura · fatiga.<br>
**Las cuatro dejan la misma huella en una media**, y por eso ningún agregado publicado las distingue.

[**Temas nuevos** ya no está: lo genuinamente nuevo — C-14, Pu-239 — estaba donde había elección.]{.note-line}
::

:::

::div{.note-line.mt-3 v-click}
El dato publicado **no contiene** la información que las separaría. Una sola cosa la separaría: las notas **por subapartado**.
::

---
transition: slide-up
section: "Los datos"
ribbonTitle: "Cataluña"
class: dense tight
---
[Los datos · el único sistema comparable]{.kicker}

# Cataluña ya había hecho esto — en 2020

::div{.fig.fit-xs.mt-2}
<img src="/figures/datos-catalunya.png" alt="La prueba catalana 2010–2025 y su posición frente al conjunto" />
::

:::div{.grid.grid-cols-3.gap-4.mt-4}

::div{.card.kpi v-click}
[$17.7 \to 50.0\,\%$]{.kpi-value.teal}

[**El paso, y su fecha**<br>ítems que exigen justificar: el nivel se triplica, y el escalón está en **2020**]{.kpi-label}
::

::div{.card.kpi v-click}
[$-0.85$]{.kpi-value.amber}

[**Lo que costó**<br>frente a quince comunidades — con un mínimo detectable de $1.26$: **es una cota, no un coeficiente**]{.kpi-label}
::

::div{.card.kpi v-click}
[$6.2\,\%$]{.kpi-value.coral}

[**Su peor año**<br>Cataluña **nunca** examinó sin pedirle a nadie que justificara nada]{.kpi-label}
::

:::

::div{.note-line.mt-4 v-click}
Triplicar de golpe el razonamiento examinado **no produjo nada detectable en seis años**, y la caída vasca de un solo año, $-1.65$, es mayor que todo el desplazamiento catalán posterior. **Cataluña intensificó una práctica que tenía; Euskadi introdujo una que no tenía.**
::

---
transition: slide-up
section: "Los datos"
class: dense
ribbonTitle: "El recorrido de cada una"
---
[Anexo · por si se pregunta]{.kicker}

# Seis comunidades no convirtieron nada

::div{.fig.fit-sm.mt-2}
<img src="/figures/datos-rutas.png" alt="El recorrido de cada comunidad en el plano competencia–resultado" />
::

:::div{.grid.grid-cols-2.gap-5.mt-4}

::div{.card.coral v-click}
### Euskadi es la única flecha larga hacia abajo
Del $25$ al $62.5\,\%$ de puntos competenciales esperados, y $-1.48$. Es la única comunidad
que **cambió de género** la prueba de un año para otro.
::

::div{.card.teal v-click}
### Y las seis que no se movieron se reparten $1.96$ puntos
Cero marcas competenciales en 2025 y cero en 2026, y sus resultados van de $-0.83$ a $+1.13$.
**Cualquier explicación basada solo en la conversión tiene que decir por qué el mismo año movió
tanto a las que no convirtieron.**
::

:::

---
transition: fade
section: "Lo que había antes"
class: dense
ribbonTitle: "Quince años de inercia"
---
[Anexo · por si se pregunta]{.kicker}

# La prueba había sido el temario

:::div{.grid.grid-cols-3.gap-4.mt-2}

::div{.card.kpi v-click}
[$40\,\%$]{.kpi-value.coral}

[**de la nota**, durante quince años, salía de una **lista cerrada** de títulos de teoría]{.kpi-label}
::

::div{.card.kpi v-click}
[$22$]{.kpi-value.coral}

[**títulos** puestos en $120$ huecos, 2010–2024 — cada uno vuelve cada dos o tres años]{.kpi-label}
::

::div{.card.kpi v-click}
[$100\,\%$]{.kpi-value.coral}

[**de optatividad**: cualquier ítem podía dejarse sin responder]{.kpi-label}
::

:::

::div{.card.mt-4 v-click}
### Lo que ese instrumento premiaba
Preparar bien los veintidós títulos, entrenar las plantillas que se repiten, y dejar el resto.
**No es dejadez: es la respuesta correcta al incentivo.** Catorce de los quince problemas de
física moderna de 2010–2024 fueron fotoeléctricos; **la fisión y la fusión solo existían como
títulos de teoría** — nunca como cálculo — hasta que 2026 puso el C-14 y el Pu-239 como problema.
::

::div{.card.amber.mt-4 v-click}
### Y los centros lo sabían
La reapertura **se anunció en 2024**, y 2024-25 y 2025-26 se declararon **de transición**: dos cursos.
Esto no va de información, va de **práctica**. Un anuncio no crea bancos de ejemplos, simulacros,
ni soltura para plantear y corregir preguntas que nunca se habían planteado. Eso se acumula,
y lo acumulado estaba ajustado a un instrumento que dejó de existir.
::

---
transition: fade
section: "Lo que había antes"
class: dense tight
ribbonTitle: "2024, antes del modelo"
---
[Anexo · por si se pregunta]{.kicker}

# 2024 cambió la forma, no el nivel

::div{.fig.fit-xs.mt-2}
<img src="/figures/datos-forma.png" alt="Posición frente a forma: las transiciones del panel nacional" />
::

:::div{.grid.grid-cols-3.gap-4.mt-4}

::div{.card.kpi v-click}
[$-0.21$]{.kpi-value.lime}

[**La media**, en una serie cuya desviación típica interanual es $0.85$ — es decir, nada]{.kpi-label}
::

::div{.card.kpi v-click}
[$-9.0$]{.kpi-value.coral}

[**La banda de 8 a 10**, en puntos, cuando $0.21$ suele costar $3.1$]{.kpi-label}
::

::div{.card.kpi v-click}
[2.º]{.kpi-value.coral}

[**de 170 transiciones** del panel, por el residuo condicional de la banda alta]{.kpi-label}
::

:::

::div{.card.amber.mt-4 v-click}
Y **en la última prueba del formato antiguo**. Menos arriba, más justo por encima de la línea,
con la media quieta. **→ la candidata, en la diapositiva siguiente.**
::

---
transition: fade
section: "Lo que había antes"
class: dense
ribbonTitle: "La regla de las ponderaciones"
---
[Anexo · por si se pregunta]{.kicker}

# Y una candidata: la regla de las ponderaciones

::div{.fig.fit-sm.mt-2}
<img src="/figures/datos-ponderacion.png" alt="Los grados que ponderan Física a 0.2, y cuántos ponderan también Matemáticas II y Química" />
::

:::div{.grid.grid-cols-2.gap-5.mt-4}

::div{.card.teal v-click}
### Un escalón, no una pendiente
Si solo cuentan **las dos mejores** y Matemáticas II ya ocupa una — es obligatoria y se
arrastra —, la segunda se disputa entre **Química**, el día antes, y **Física**. En Ciencias
de la Salud ni eso: Física pondera $0.1$, y no entra.
::

::div{.card.coral v-click}
### Y predice la firma de 2024
Eso selecciona **al alumno fuerte** como el que puede permitirse parar: pérdidas arriba con el
aprobado quieto. **Candidata, no hallazgo** — una regla de asignación es una constante salvo
que el incentivo cambiara, y lo que se movió en 2024 está publicado y sin comprobar.
::

:::

---
transition: fade
section: "La prueba de 2026"
class: dense
ribbonTitle: "Qué hizo la prueba"
---
[Anexo · por si se pregunta]{.kicker}

# Qué hizo la prueba de 2026

:::div{.grid.grid-cols-3.gap-4}

::div{.card.kpi v-click}
[$+39\,\%$]{.kpi-value.coral}

[**Carga de lectura**<br>de $1\,026$ a $1\,431$ palabras<br>[$+45\,\%$ la prueba entera: $1\,335 \to 1\,940$]{.note-line}]{.kpi-label}
::

::div{.card.kpi v-click}
[$75 \to 50\,\%$]{.kpi-value.coral}

[**Optatividad**<br>dos de los cuatro problemas sin ninguna elección — y era del $100\,\%$ hasta 2024]{.kpi-label}
::

::div{.card.kpi v-click}
[$25 \to 62.5\,\%$]{.kpi-value.coral}

[**Marcas competenciales**<br>la única de las nueve que cambió de género]{.kpi-label}
::

:::

::div{.fig.fit-xs.mt-4}
<img src="/figures/datos-enunciados.png" alt="Dónde está la lectura y qué cuesta el objetivo de 2027" />
::

::div{.note-line.mt-3 v-click}
En un índice de intensidad de reforma sobre esos ejes, Euskadi puntúa $+1.76$ y la siguiente
$+0.39$: **una sola comunidad implementó el marco por completo, y sola.** Con $n = 9$ eso es
consistencia, no prueba.
::

---
transition: fade
section: "La predicción"
ribbonTitle: "La predicción"
class: dense
---
[Cierre · para que esto pueda equivocarse]{.kicker}

# Y una predicción, firmada antes de junio

::::div{.grid.grid-cols-5.gap-6.mt-2}

:::div{.col-span-3}

::div{.fig.fit-lg}
<img src="/figures/datos-2027.png" alt="Lo que predice no hacer nada, para 2027" />
::

:::

:::div{.col-span-2}

::div{.card.teal v-click}
### Las desviaciones revierten
Dentro de una comunidad, el apartamiento del conjunto sigue un AR(1) con $\phi = 0.186$:
**un choque devuelve cinco sextos de sí mismo en un año.** Medido: los cambios interanuales
anticorrelacionan a $-0.389$ frente al $-0.407$ predicho ($n = 135$).
::

::div{.card.coral.mt-3 v-click}
### Y por eso, la advertencia
Si en 2027 la media **se recupera punto y medio**, eso es lo que predice **no hacer nada**.
No será prueba de que acortar los enunciados funcionó.
::

::div{.card.amber.mt-3 v-click}
### Lo que sí decide
$-0.40$ si fue un choque · $-2.16$ si fue un cambio de nivel.<br>
Separación **$3.7\sigma$**: **una sola convocatoria lo zanja.**
::

:::

::::

---
transition: fade
section: "Lo que pedimos"
ribbonTitle: "Lo que pedimos"
class: dense
---
[Cierre · lo que pedimos]{.kicker}

# Un dato rutinario hasta el año pasado

:::div{.grid.grid-cols-2.gap-6.mt-4}

::div{.card.teal v-click}
### La tabla de bandas de 2026
Los modelos que reproducen **las cuatro cifras publicadas** — media, aprobados, $\le 2$, ceros —
difieren en la proporción de exámenes **con un 9 o más por un factor de veintitrés**, del
$0.3\,\%$ al $6.1\,\%$. La tabla de bandas los separa **sola**, y se publicaba todos los años
hasta 2025.
::

::div{.card.amber v-click}
### Las notas por subapartado
Contenido de la prueba, severidad de la corrección y carga de lectura **dejan la misma huella
en una media**: ningún agregado publicado las distingue. Las notas desglosadas por subapartado
sí. Es el único dato que convierte cuatro hipótesis en una medida.
::

:::

::div{.card.coral.mt-5.mx-auto v-click}
No pedimos un estudio: pedimos **dos tablas que ya se calculan**. Sin ellas, la coordinación
de 2028 tendrá exactamente la misma información que tenemos hoy — y en 2028 habrá además
un cambio de enunciados que no podrá evaluarse.
::

---
layout: center
transition: view-transition
section: "Cierre"
ribbonTitle: "Para llevar"
---
[Para llevar]{.kicker.text-center}

::div{.section-title.text-center}
Cuatro quintas partes siguen sin explicación.
::

::div{.section-title.text-center.amber v-click}
Y eso es un resultado, no una laguna.
::

::div{.section-sub.text-center.mt-6.mx-auto v-click}
El dato publicado **no contiene** la información que separaría el contenido de la prueba,
la severidad de la corrección y la carga de lectura: las tres dejan la misma huella en una media.
::

::div{.card.amber.mt-6.mx-auto v-click}
Por eso 2027 cambia **una sola cosa**, y por eso lo que se pide son **dos tablas que ya se
calculan**. Y por eso la predicción va firmada antes de junio: si la media se recupera punto
y medio, eso es lo que predice no hacer nada.
::

---
transition: fade
section: "Las tres"
class: "dense here-hallazgos"
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
