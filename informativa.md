---
# ===========================================================================
#  GENERATED FILE — DO NOT EDIT   ·   FITXATEGI SORTUA — EZ EDITATU
#
#  informativa.md is assembled by tools/build_decks.mjs from bloques/ + decks.json.
#  Anything typed here is destroyed by the next `npm run decks`.
#  Edit the slide instead — number = slide number:
#    01  bloques/informativa/01-portada-informativa.md
#    02  bloques/informativa/02-mensaje.md
#    03  bloques/informativa/03-estructura.md
#    04  bloques/informativa/04-evaluacion.md
#    05  bloques/informativa/05-cambio-enunciados.md
#    06  bloques/informativa/06-ref-vistazo.md
#    07  bloques/informativa/07-ref-constantes.md
#    08  bloques/informativa/08-cierre-informativa.md
#    09  bloques/informativa/09-enlaces.md  ->  bloques/comun/enlaces.md
# ===========================================================================
theme: default
title: "USaP Física 2027"
titleTemplate: '%s · Coordinación'
info: |
  ## USaP Física 2027
  Reunión de coordinación con el profesorado: qué se mantiene de 2026 y el único cambio previsto.
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
  title: "USaP Física 2027"
  thumbsDir: "thumbs/informativa"

---
[USaP · Física · Coordinación · edición 2027]{.kicker}

::div{.cover-title}
Física 2027:<br>(casi) nada cambiará
::

::div{.cover-sub}
Misma estructura, contenidos, rúbrica que en 2026.<br>Cambio: enunciados más cortos.
::

::div{.cover-meta}
**Reunión de coordinación** · profesorado de Física de Bachillerato · EHU<br>Asier Lopez-Eiguren (EHU) · J. M. Igartua (EHU) · curso 2026–27
::

---
transition: fade
section: "El mensaje"
class: wide
blockSrc: "bloques/informativa/02-mensaje.md"
---
[El mensaje]{.kicker}

# 2027 es 2026

::div{.card.eq-row.mt-4 v-click}
[$=$]{.eq}
[**Estructura** · cuatro problemas, $2.50$ cada uno]{.t}
::

::div{.card.eq-row.mt-3 v-click}
[$=$]{.eq}
[**Contenidos** · los mismos cuatro bloques de saberes]{.t}
::

::div{.card.eq-row.mt-3 v-click}
[$=$]{.eq}
[**Evaluación** · misma rúbrica, mismos criterios]{.t}
::

::div{.card.amber.mt-4 v-click}
### Un solo cambio
Enunciados **más cortos** · mismas competencias, *datos* y rúbrica<br>competencia lectora → competencias en física
::

---
transition: slide-up
section: "Estructura"
class: wide
blockSrc: "bloques/informativa/03-estructura.md"
---
[Estructura · igual que en 2026]{.kicker}

# $4$ problemas, $4$ bloques

:::div{.grid.grid-cols-4.gap-4.mt-4.cards-tall}

::div{.card v-click="1"}
### 1 · Bloque A
::saber-modal{title="Bloque A · Campo gravitatorio"}
- **A1** Campo gravitatorio de un sistema de masas: cálculo vectorial; efectos cinemáticos y dinámicos.
- **A2** Momento angular en un campo gravitatorio: fuerzas centrales y conservación.
- **A3** Energía mecánica en un campo gravitatorio: tipo de trayectoria, trabajo y balances; velocidad orbital y de escape; órbitas geoestacionarias.
- **A4** Leyes de Kepler: movimiento planetario, satélites y cuerpos celestes.
- **A5** Cosmología y astrofísica: Big Bang, expansión del universo, materia y energía oscuras (solo descripción).
::

[sin opción]{.chip.coral}

Campo gravitatorio · $2.50$
::

::div{.card v-click="2"}
### 2 · Bloque B
::saber-modal{title="Bloque B · Campo electromagnético"}
- **B1** Campos eléctrico y magnético: tratamiento vectorial; cargas libres en presencia de campos; fuerza de Lorentz.
- **B2** Campo eléctrico de distribuciones discretas y continuas; flujo y ley de Gauss.
- **B3** Energía de una distribución de cargas: potencial, trabajo y superficies equipotenciales.
- **B4** Campos magnéticos de hilos, espiras, solenoides y toros; interacción con cargas libres.
- **B5** Líneas de campo eléctrico y magnético de cargas, imanes e hilos con corriente.
- **B6** Fuerza electromotriz: flujo magnético y ley de Faraday; motores, generadores y transformadores.
::

[sin opción]{.chip.coral}

Campo electromagnético · $2.50$
::

::div{.card.teal v-click="3"}
### 3 · Bloque C
::saber-modal{title="Bloque C · Vibraciones y ondas"}
- **C1** Movimiento oscilatorio: MAS, ley de Hooke, conservación de la energía.
- **C2** Movimiento ondulatorio: ecuación de onda, gráficas, tipos de ondas.
- **C3** Fenómenos ondulatorios: sonido y decibelios, ondas esféricas, efecto Doppler.
- **C4** Naturaleza de la luz: Huygens, Young, onda electromagnética, espectro.
- **C5** Formación de imágenes: refracción, lentes delgadas, espejos, telescopios.
::

[opción a o b]{.chip.teal}

Ondas · Óptica · $2.50$
::

::div{.card.teal v-click="4"}
### 4 · Bloque D
::saber-modal{title="Bloque D · Relativista, cuántica, nuclear y de partículas"}
- **D1** Relatividad especial: postulados, contracción de la longitud, dilatación del tiempo, masa y energía.
- **D2** Dualidad onda-corpúsculo y cuantización: efecto fotoeléctrico, De Broglie, incertidumbre.
- **D3** Modelo estándar: partículas fundamentales, interacciones, aceleradores.
- **D4** Núcleos e isótopos: radiactividad, ley de desintegración y datación, energía de enlace, fisión y fusión.
::

[opción a o b]{.chip.teal}

Nuclear · Cuántica · $2.50$
::

:::

::div{.note-line.mt-2}
$4 \times 2.50 = 10$ · respuestas de más, se corrigen en orden
::

::div{.chip-row}
[calculadora científica]{.chip.amber} [tabla de datos y constantes]{.chip.amber} [solo datos de tabla y enunciado]{.chip.amber} [código en cada cuadernillo]{.chip.amber}
::

---
transition: slide-left
section: "Evaluación"
class: wide
blockSrc: "bloques/informativa/04-evaluacion.md"
---
[Evaluación · igual que en 2026]{.kicker}

# rúbrica, criterios: $=$ 

::div{.sum3}
- $2.50$ / problema
- 3 apartados · $1.00 + 1.00 + 0.50$
- precisión $0.25$
::

:::div{.grid.grid-cols-4.gap-4.mt-4}

::div{.card v-click="1"}
### Simbólico, numérico
plantear, despejar, sustituir
::

::div{.card.coral v-click="2"}
### Descuentos de $0.1$
unidades · carácter vectorial · redondeo y decimales
::

::div{.card.coral v-click="3"}
### Errores graves
ecuación incorrecta · confusión escalar/vectorial

[invalidan el apartado]{.note-line}
::

::div{.card.teal v-click="4"}
### Se arrastra el valor
el valor del alumno, si hace falta

[salvo resultado absurdo]{.note-line}
::

:::

---
transition: slide-up
section: "El cambio"
class: wide
blockSrc: "bloques/informativa/05-cambio-enunciados.md"
---
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

---
transition: fade
section: Referencia
class: dense wide
ribbonTitle: "La prueba de 2026"
blockSrc: "bloques/informativa/06-ref-vistazo.md"
---
# 2026 de un vistazo

| Problema | Tema | Reparto |
|:--|:--|:--|
| A1 · sin opción | Campo gravitatorio · órbita y caída | $1.00 + 1.00 + 0.50$ |
| B1 · sin opción | Inducción · espira y generador | $0.50 + 1.00 + 1.00$ |
| C1 · opción a | Ondas y sonido · cuerda, decibelios | $0.50 + 1.00 + 1.00$ |
| C2 · opción b | Óptica · lente, aumento, imagen | $1.00 + 0.50 + 1.00$ |
| D1 · opción a | Efecto fotoeléctrico · función trabajo | $0.50 + 1.00 + 1.00$ |
| D2 · opción b | Datación · carbono-14 | $1.00 + 0.50 + 1.00$ |

::div{.note.mt-3}
Cada problema, $2.50$ · subapartados de $1.00 + 1.00 + 0.50$ puntos
::

---
transition: slide-up
section: Referencia
class: dense wide
ribbonTitle: "Datos y constantes"
blockSrc: "bloques/informativa/07-ref-constantes.md"
---
[Anexo · la tabla de datos y constantes]{.kicker}

# $11$ entradas: $8$ se usan, $3$ nunca

::const-table{name="constantes-2026" :clicks="$clicks" .big}
::

:::div{.grid.grid-cols-4.gap-x-6.gap-y-1.mt-3}

::div{.step v-click="1"}
[A1]{.n.u-a}

gravitatorio: $G$, $M_{\mathrm{T}}$, $R_{\mathrm{T}}$
::

::div{.step v-click="5"}
[D1]{.n.u-d}

fotoeléctrico: $h$, $c$, $|q_e|$
::

::div{.step v-click="2"}
[B1]{.n.u-b}

inducción: nada
::

::div{.step v-click="6"}
[D2]{.n.u-b}

datación: nada
::

::div{.step v-click="3"}
[C1]{.n.u-c}

sonido: $v_{\mathrm{sonido}}$, $I_0$
::

::div{.step v-click="7"}
[×]{.n.u-x}

nunca: $K$, $m_p$, $m_e$
::

::div{.step v-click="4"}
[C2]{.n.u-b}

óptica: nada
::

::div{.step v-click="8"}
[=]{.n}

**se evalúa elegir**
::

:::

---
layout: center
transition: view-transition
section: "Cierre"
ribbonTitle: "Para llevar"
blockSrc: "bloques/informativa/08-cierre-informativa.md"
---
[Para llevar]{.kicker.text-center}

::div{.section-title.text-center}
Nada cambia
::

::div{.section-title.text-center.amber v-click}
Se leerá menos
::

::div{.card.amber.mt-6.mx-auto v-click}
Misma estructura, contenidos y corrección. Enunciados más cortos, misma rúbrica
::

---
transition: fade
section: "Las tres"
class: "dense here-informativa"
ribbonTitle: "Dónde está cada cosa"
blockSrc: "bloques/informativa/09-enlaces.md -> bloques/comun/enlaces.md"
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

[<a href="https://jmigartua.github.io/usap-fisica-2027/informativa/" target="_blank" rel="noopener">jmigartua.github.io/<br>usap-fisica-2027/informativa/</a>]{.lk-url}
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
