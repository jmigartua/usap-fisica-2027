---
# ===========================================================================
#  GENERATED FILE — DO NOT EDIT   ·   FITXATEGI SORTUA — EZ EDITATU
#
#  hallazgos.md is assembled by tools/build_decks.mjs from bloques/ + decks.json.
#  Anything typed here is destroyed by the next `npm run decks`.
#  Edit the slide instead — number = slide number:
#    01  bloques/hallazgos/01-portada-hallazgos.md
#    02  bloques/hallazgos/02-datos-serie.md
#    03  bloques/hallazgos/03-datos-materias.md
#    04  bloques/hallazgos/04-datos-semana.md
#    05  bloques/hallazgos/05-datos-presupuesto.md
#    06  bloques/hallazgos/06-datos-catalunya.md
#    07  bloques/hallazgos/07-anx-rutas.md
#    08  bloques/hallazgos/08-anx-inercia.md
#    09  bloques/hallazgos/09-anx-2024.md
#    10  bloques/hallazgos/10-anx-ponderaciones.md
#    11  bloques/hallazgos/11-anx-que-hizo.md
#    12  bloques/hallazgos/12-cierre-prediccion.md
#    13  bloques/hallazgos/13-cierre-peticion.md
#    14  bloques/hallazgos/14-cierre-hallazgos.md
#    15  bloques/hallazgos/15-enlaces.md  ->  bloques/comun/enlaces.md
# ===========================================================================
theme: default
title: "Qué sabemos de 2026, y qué no"
titleTemplate: '%s · Coordinación'
info: |
  ## Qué sabemos de 2026, y qué no
  Material de apoyo: la caída de 2026 descompuesta, lo que se acota, lo que no se separa y la predicción para 2027.
  Generada por tools/build_decks.mjs desde bloques/ — no editar a mano.
author: Asier Lopez-Eiguren, J. M. Igartua
lang: es
colorSchema: auto
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
blockSrc: "bloques/hallazgos/02-datos-serie.md"
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

::div{.card.amber.tel.mt-4 v-click}
- [Se aplicó]{.v} [el modelo · las diecisiete comunidades, los dos años]{.t}
- [Subieron]{.v} [seis de las nueve]{.t}
- [No convirtieron]{.v} [seis · cero marcas competenciales en 2025 y en 2026]{.t}
- [Se reparten]{.v} [$1.96$ puntos aun así · de $-0.83$ a $+1.13$]{.t}

**El modelo, por sí solo, no explica 2026.**
::

---
transition: slide-up
section: "Los datos"
ribbonTitle: "De qué está hecha"
class: dense
blockSrc: "bloques/hallazgos/03-datos-materias.md"
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
[Suman]{.v} el $-1.48$ por construcción · identidad, no ajuste  ·  [No acompañan]{.v} Química $-0.21$, Biología $+0.15$, Lengua $+0.03$  ·  [Pide]{.v} causa ajena a Física ese $-1.18$ común
::

---
transition: slide-up
section: "Los datos"
ribbonTitle: "La semana"
class: dense tight
blockSrc: "bloques/hallazgos/04-datos-semana.md"
---
[Los datos · la semana, no solo la prueba]{.kicker}

# También se movió el calendario

::div{.fig.fit-xs.mt-2}
<img src="/figures/datos-semana.png" alt="La semana de exámenes 2025 y 2026, y la tabla de ponderaciones" />
::

:::div{.grid.grid-cols-2.gap-5.mt-4}

::div{.card.amber.tel v-click}
### Qué se movió
- [No se movió]{.v} [Física · última de su día en 2025 y en 2026]{.t}
- [Se cancela]{.v} [por tanto, el coste de ir la última]{.t}
- [Se movió]{.v} [Matemáticas II · a 45 min antes de Física]{.t}
- [Cayeron]{.v} [las dos que quedaron seguidas · $-1.67$, $-1.48$]{.t}
- [No cayeron]{.v} [las dos del otro día · $-0.21$, $+0.15$]{.t}
::

::div{.card.coral.tel v-click}
### Por qué no entra en el presupuesto
- [Nombran]{.v} [las mismas dos «seguidas» y «las más duras»]{.t}
- [No separa]{.v} [un contraste de dos observaciones por lado]{.t}
- [Sirve]{.v} [para decidir el calendario de 2027]{.t}
- [No explica]{.v} [2026]{.t}
::

:::

::div{.note-line.mt-3 v-click}
[Panel b]{.v} la regla impresa en cada página de las ponderaciones — otra cosa. **→ anexo, 2024.**
::

---
transition: slide-up
section: "Los datos"
ribbonTitle: "Qué no sabemos"
class: dense
blockSrc: "bloques/hallazgos/05-datos-presupuesto.md"
---
[Los datos · lo que puede y lo que no puede decirse]{.kicker}

# Cuatro quintas partes no tienen causa identificable

::div{.fig.fit-xs.mt-2}
<img src="/figures/datos-presupuesto.png" alt="Presupuesto de atribución de la caída específicamente vasca" />
::

:::div{.grid.grid-cols-2.gap-5.mt-4}

::div{.card.teal.tel v-click}
### Lo que sí se acota
- [$-0.20$]{.v} [elección retirada]{.t}
- [$-0.12$]{.v} [promoción · PISA]{.t}
- [$-0.31$]{.v} [de $-1.65$ · menos de una quinta parte]{.t}
::

::div{.card.coral.tel v-click}
### Lo que no se separa
- [Misma huella]{.v} [en una media · contenido, corrección, lectura, fatiga]{.t}
- [No las distingue]{.v} [ningún agregado publicado]{.t}
- [Sale de la lista]{.v} [«temas nuevos» · C-14 y Pu-239 estaban donde había elección]{.t}
::

:::

::div{.note-line.mt-3 v-click}
[No contiene]{.v} el dato publicado lo que las separaría  ·  [Las separarían]{.v} las notas **por subapartado**
::

---
transition: slide-up
section: "Los datos"
ribbonTitle: "Cataluña"
class: dense tight
blockSrc: "bloques/hallazgos/06-datos-catalunya.md"
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
[Triplicó]{.v} Cataluña de golpe su razonamiento examinado  ·  [No produjo]{.v} nada detectable en seis años  ·  [Supera]{.v} un solo año vasco, $-1.65$, todo el desplazamiento catalán  ·  [Intensificó]{.v} una práctica que tenía — [introdujo]{.v} Euskadi una que no tenía
::

---
transition: slide-up
section: "Los datos"
class: dense
ribbonTitle: "El recorrido de cada una"
blockSrc: "bloques/hallazgos/07-anx-rutas.md"
---
[Anexo · por si se pregunta]{.kicker}

# Seis comunidades no convirtieron nada

::div{.fig.fit-sm.mt-2}
<img src="/figures/datos-rutas.png" alt="El recorrido de cada comunidad en el plano competencia–resultado" />
::

:::div{.grid.grid-cols-2.gap-5.mt-4}

::div{.card.coral.tel v-click}
### Euskadi · la única flecha larga hacia abajo
- [Pasó]{.v} [del $25$ al $62.5\,\%$ de puntos competenciales]{.t}
- [Cayó]{.v} [$-1.48$]{.t}
- [Cambió de género]{.v} [la prueba · la única que lo hizo]{.t}
::

::div{.card.teal.tel v-click}
### Las seis que no se movieron
- [Convirtieron]{.v} [cero, en 2025 y en 2026]{.t}
- [Se reparten]{.v} [$1.96$ puntos · de $-0.83$ a $+1.13$]{.t}
- [Queda por explicar]{.v} [por qué el mismo año movió tanto a quien no convirtió]{.t}
::

:::

---
transition: fade
section: "Lo que había antes"
class: dense
ribbonTitle: "Quince años de inercia"
blockSrc: "bloques/hallazgos/08-anx-inercia.md"
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

:::div{.grid.grid-cols-2.gap-4.mt-4}

::div{.card.tel v-click}
### Qué premiaba ese instrumento
- [Preparar]{.v} [los veintidós títulos]{.t}
- [Entrenar]{.v} [las plantillas que se repiten]{.t}
- [Dejar]{.v} [el resto]{.t}

**La respuesta correcta al incentivo, no dejadez.**

[Fotoeléctrico: catorce de quince problemas de física moderna, 2010–2024 · fisión y fusión, solo títulos de teoría hasta 2026.]{.note-line}
::

::div{.card.amber.tel v-click}
### Y los centros lo sabían
- [Se anunció]{.v} [la reapertura · 2024]{.t}
- [Se declararon]{.v} [dos cursos de transición]{.t}
- [No bastó]{.v} [el anuncio · no crea ejemplos, simulacros ni soltura]{.t}
- [Se acumula]{.v} [la práctica · y la acumulada servía a un examen extinto]{.t}
::

:::

---
transition: fade
section: "Lo que había antes"
class: dense tight
ribbonTitle: "2024, antes del modelo"
blockSrc: "bloques/hallazgos/09-anx-2024.md"
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
[Ocurrió]{.v} en la última prueba del formato antiguo  ·  [Menos arriba]{.v}, más justo por encima de la línea, con la media quieta

**→ la candidata, en la diapositiva siguiente.**
::

---
transition: fade
section: "Lo que había antes"
class: dense
ribbonTitle: "La regla de las ponderaciones"
blockSrc: "bloques/hallazgos/10-anx-ponderaciones.md"
---
[Anexo · por si se pregunta]{.kicker}

# Y una candidata: la regla de las ponderaciones

::div{.fig.fit-sm.mt-2}
<img src="/figures/datos-ponderacion.png" alt="Los grados que ponderan Física a 0.2, y cuántos ponderan también Matemáticas II y Química" />
::

:::div{.grid.grid-cols-2.gap-5.mt-4}

::div{.card.teal.tel v-click}
### Un escalón, no una pendiente
- [Cuentan]{.v} [solo las dos mejores]{.t}
- [Ocupa]{.v} [Matemáticas II una de las dos · obligatoria, se arrastra]{.t}
- [Se disputan]{.v} [la segunda Química — el día antes — y Física]{.t}
- [No entra]{.v} [Física en Ciencias de la Salud · pondera $0.1$]{.t}
::

::div{.card.coral.tel v-click}
### Y predice la firma de 2024
- [Selecciona]{.v} [al alumno fuerte como el que puede parar]{.t}
- [Predice]{.v} [pérdidas arriba con el aprobado quieto]{.t}
- [Falta]{.v} [comprobar qué movió el incentivo en 2024]{.t}

**Candidata, no hallazgo.**
::

:::

---
transition: fade
section: "La prueba de 2026"
class: dense
ribbonTitle: "Qué hizo la prueba"
blockSrc: "bloques/hallazgos/11-anx-que-hizo.md"
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
[Puntúa]{.v} Euskadi $+1.76$ en intensidad de reforma; la siguiente, $+0.39$  ·  [Implementó]{.v} el marco por completo una sola comunidad, y sola  ·  [Con $n = 9$]{.v} consistencia, no prueba
::

---
transition: fade
section: "La predicción"
ribbonTitle: "La predicción"
class: dense
blockSrc: "bloques/hallazgos/12-cierre-prediccion.md"
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

::div{.card.teal.tel v-click}
### Revierten las desviaciones
- [Sigue]{.v} [el apartamiento del conjunto un AR(1) con $\phi = 0.186$]{.t}
- [Devuelve]{.v} [un choque cinco sextos de sí mismo en un año]{.t}
- [Medido]{.v} [$-0.389$ observado frente a $-0.407$ predicho · $n = 135$]{.t}
::

::div{.card.coral.tel.mt-2 v-click}
### La advertencia
- [Predice]{.v} [no hacer nada: recuperación de punto y medio]{.t}
- [No probará]{.v} [nada sobre los enunciados más cortos]{.t}
::

::div{.card.amber.tel.mt-2 v-click}
### Lo que sí decide
- [$-0.40$]{.v} [si fue un choque]{.t}
- [$-2.16$]{.v} [si fue un cambio de nivel]{.t}
- [$3.7\sigma$]{.v} [una sola convocatoria lo zanja]{.t}
::

:::

::::

---
transition: fade
section: "Lo que pedimos"
ribbonTitle: "Lo que pedimos"
class: dense
blockSrc: "bloques/hallazgos/13-cierre-peticion.md"
---
[Cierre · lo que pedimos]{.kicker}

# Un dato rutinario hasta el año pasado

:::div{.grid.grid-cols-2.gap-6.mt-4}

::div{.card.teal.tel v-click}
### La tabla de bandas de 2026
- [Reproducen]{.v} [todos los modelos las cuatro cifras publicadas]{.t}
- [Difieren]{.v} [en el 9 o más por un factor de veintitrés · $0.3\,\%$ a $6.1\,\%$]{.t}
- [Los separa]{.v} [sola, la tabla de bandas]{.t}
- [Se publicaba]{.v} [todos los años hasta 2025]{.t}
::

::div{.card.amber.tel v-click}
### Las notas por subapartado
- [Misma huella]{.v} [en una media · contenido, corrección, lectura]{.t}
- [No las distingue]{.v} [ningún agregado publicado]{.t}
- [Convierte]{.v} [cuatro hipótesis en una medida]{.t}
::

:::

::div{.card.coral.mt-5.mx-auto v-click}
**No pedimos un estudio: dos tablas que ya se calculan.** Sin ellas, la coordinación de 2028
tendrá la información de hoy — y un cambio de enunciados que no podrá evaluar.
::

---
layout: center
transition: view-transition
section: "Cierre"
ribbonTitle: "Para llevar"
blockSrc: "bloques/hallazgos/14-cierre-hallazgos.md"
---
[Para llevar]{.kicker.text-center}

::div{.section-title.text-center}
Cuatro quintas partes siguen sin explicación.
::

::div{.section-title.text-center.amber v-click}
Y eso es un resultado, no una laguna.
::

::div{.section-sub.text-center.mt-6.mx-auto v-click}
Contenido, corrección y lectura: **la misma huella en una media.**
::

::div{.card.amber.tel.mt-6.mx-auto v-click}
- [Cambia]{.v} [2027 una sola cosa]{.t}
- [Pedimos]{.v} [dos tablas que ya se calculan]{.t}
- [Firmamos]{.v} [la predicción antes de junio]{.t}
::

---
transition: fade
section: "Las tres"
class: "dense here-hallazgos"
ribbonTitle: "Dónde está cada cosa"
blockSrc: "bloques/hallazgos/15-enlaces.md -> bloques/comun/enlaces.md"
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
