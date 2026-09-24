---
# ===========================================================================
#  GENERATED FILE — DO NOT EDIT   ·   FITXATEGI SORTUA — EZ EDITATU
#
#  bilingue.md is assembled by tools/build_decks.mjs from bloques/ + decks.json.
#  Anything typed here is destroyed by the next `npm run decks`.
#  Edit the slide instead — number = slide number:
#    01  bloques/bilingue/01-bi-portada.md
#    02  bloques/bilingue/02-bi-mensaje.md
#    03  bloques/bilingue/03-bi-estructura.md
#    04  bloques/bilingue/04-bi-evaluacion.md
#    05  bloques/bilingue/05-bi-cambio.md
#    06  bloques/bilingue/06-bi-vistazo.md
#    07  bloques/bilingue/07-bi-constantes.md
#    08  bloques/bilingue/08-bi-cierre.md
#    09  bloques/bilingue/09-bi-enlaces.md
# ===========================================================================
theme: default
title: "Fisika 2027 · USaP"
titleTemplate: '%s · Coordinación'
info: |
  ## Fisika 2027 · USaP
  Informatiboa, euskaraz eta gaztelaniaz, erdi eta erdi diapositiba bakoitzean.
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
  title: "USaP Fisika 2027"
  thumbsDir: "thumbs/bilingue"
  event: "Koordinazio-bilera"
  place: "EHU"
  date: "2026–27 ikasturtea"

---
[USaP · Fisika · Koordinazioa · 2027ko edizioa]{.kicker}

::div{.cover-title}
Fisika 2027:<br>ez da (ia) ezer aldatuko
::

::div{.cover-sub}
2026ko egitura, edukiak eta zuzenketa berberak.<br>Aldaketa bakarra: enuntziatu laburragoak.
::

::div{.cover-meta.mt-6}
**Koordinazio-bilera** · Batxilergoko Fisikako irakasleak · EHU<br>Asier Lopez-Eiguren (EHU) · J. M. Igartua (EHU) · 2026–27 ikasturtea
::

---
transition: fade
class: dense bi-bg
ribbonTitle: "Mezua"
blockSrc: "bloques/bilingue/02-bi-mensaje.md"
---
::::div{.bi2.rows-6}

[El mensaje]{.kicker}

# 2027 es 2026

::div{.card.eq-row v-click="1"}
[$=$]{.eq}
[**Estructura** · cuatro problemas, $2.50$ cada uno]{.t}
::

::div{.card.eq-row v-click="2"}
[$=$]{.eq}
[**Contenidos** · los mismos cuatro bloques de saberes]{.t}
::

::div{.card.eq-row v-click="3"}
[$=$]{.eq}
[**Evaluación** · misma rúbrica, mismos criterios]{.t}
::

::div{.card.amber.mt-2 v-click="4"}
### Un solo cambio, y es de estilo
Enunciados **más cortos** · mismas competencias, datos y rúbrica<br>competencia lectora → competencias en física
::

[Mezua]{.kicker}

# 2027 2026 da

::div{.card.eq-row v-click="1"}
[$=$]{.eq}
[**Egitura** · lau problema, $2{,}50$ bakoitza]{.t}
::

::div{.card.eq-row v-click="2"}
[$=$]{.eq}
[**Edukiak** · jakintzen lau bloke berberak]{.t}
::

::div{.card.eq-row v-click="3"}
[$=$]{.eq}
[**Ebaluazioa** · errubrika bera, irizpide berberak]{.t}
::

::div{.card.amber.mt-2 v-click="4"}
### Aldaketa bakarra, eta estilokoa
Enuntziatu **laburragoak** · gaitasun, datu eta errubrika berberak<br>irakurmena → fisikako gaitasunak
::

::::

---
transition: slide-up
class: dense bi-bg
ribbonTitle: "Egitura"
blockSrc: "bloques/bilingue/03-bi-estructura.md"
---
::::div{.bi2.rows-5}

[Estructura · igual que en 2026]{.kicker}

# Cuatro problemas, cuatro bloques

:::div{.grid.grid-cols-2.gap-3}

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

[Egitura · 2026an bezala]{.kicker}

# Lau problema, lau bloke

:::div{.grid.grid-cols-2.gap-3}

::div{.card v-click="1"}
### 1 · A blokea
::saber-modal{title="A blokea · Grabitazio-eremua" kicker="Oinarrizko jakintzak · 2025/26eko orientabideak, § 2" aria="Oinarrizko jakintzak" close="Itxi"}
- **A1** Masa-sistema baten grabitazio-eremua: kalkulu bektoriala; efektu zinematikoak eta dinamikoak.
- **A2** Momentu angeluarra grabitazio-eremu batean: indar zentralak eta kontserbazioa.
- **A3** Energia mekanikoa grabitazio-eremu batean: ibilbide-mota, lana eta balantzeak; orbita- eta ihes-abiadura; orbita geoegonkorrak.
- **A4** Keplerren legeak: planeten higidura, sateliteak eta zeru-gorputzak.
- **A5** Kosmologia eta astrofisika: Big Bang, unibertsoaren hedapena, materia eta energia ilunak (deskribapena soilik).
::

[aukerarik gabe]{.chip.coral}

Grabitazio-eremua · $2{,}50$
::

::div{.card v-click="2"}
### 2 · B blokea
::saber-modal{title="B blokea · Eremu elektromagnetikoa" kicker="Oinarrizko jakintzak · 2025/26eko orientabideak, § 2" aria="Oinarrizko jakintzak" close="Itxi"}
- **B1** Eremu elektrikoa eta magnetikoa: tratamendu bektoriala; karga askeak eremuen aurrean; Lorentzen indarra.
- **B2** Karga-banaketa diskretu eta jarraituen eremu elektrikoa; fluxua eta Gaussen legea.
- **B3** Karga-banaketa baten energia: potentziala, lana eta gainazal ekipotentzialak.
- **B4** Hari, espira, solenoide eta toroideen eremu magnetikoak; karga askeekin elkarrekintza.
- **B5** Kargen, imanen eta korronte-harien eremu elektriko eta magnetikoen lerroak.
- **B6** Indar elektroeragilea: fluxu magnetikoa eta Faradayren legea; motorrak, sorgailuak eta transformadoreak.
::

[aukerarik gabe]{.chip.coral}

Eremu elektromagnetikoa · $2{,}50$
::

::div{.card.teal v-click="3"}
### 3 · C blokea
::saber-modal{title="C blokea · Bibrazioak eta uhinak" kicker="Oinarrizko jakintzak · 2025/26eko orientabideak, § 2" aria="Oinarrizko jakintzak" close="Itxi"}
- **C1** Higidura oszilakorra: HHS, Hookeren legea, energiaren kontserbazioa.
- **C2** Uhin-higidura: uhin-ekuazioa, grafikoak, uhin-motak.
- **C3** Uhin-fenomenoak: soinua eta dezibelak, uhin esferikoak, Doppler efektua.
- **C4** Argiaren izaera: Huygens, Young, uhin elektromagnetikoa, espektroa.
- **C5** Irudien eraketa: errefrakzioa, lente meheak, ispiluak, teleskopioak.
::

[a edo b aukera]{.chip.teal}

Uhinak · Optika · $2{,}50$
::

::div{.card.teal v-click="4"}
### 4 · D blokea
::saber-modal{title="D blokea · Erlatibista, kuantikoa, nuklearra eta partikulena" kicker="Oinarrizko jakintzak · 2025/26eko orientabideak, § 2" aria="Oinarrizko jakintzak" close="Itxi"}
- **D1** Erlatibitate berezia: postulatuak, luzera-uzkurdura, denboraren dilatazioa, masa eta energia.
- **D2** Uhin-korpuskulu dualtasuna eta kuantizazioa: efektu fotoelektrikoa, De Broglie, ziurgabetasuna.
- **D3** Eredu estandarra: oinarrizko partikulak, elkarrekintzak, azeleragailuak.
- **D4** Nukleoak eta isotopoak: erradioaktibitatea, desintegrazio-legea eta datazioa, lotura-energia, fisioa eta fusioa.
::

[a edo b aukera]{.chip.teal}

Nuklearra · Kuantikoa · $2{,}50$
::

:::

::div{.note-line.mt-2}
$4 \times 2{,}50 = 10$ · soberako erantzunak, hurrenez hurren zuzentzen dira
::

::div{.chip-row}
[kalkulagailu zientifikoa]{.chip.amber} [datu eta konstanteen taula]{.chip.amber} [taulako eta enuntziatuko datuak soilik]{.chip.amber} [kodea koaderno bakoitzean]{.chip.amber}
::

::::

---
transition: slide-left
class: dense bi-bg
ribbonTitle: "Ebaluazioa"
blockSrc: "bloques/bilingue/04-bi-evaluacion.md"
---
::::div{.bi2.rows-4}

[Evaluación · igual que en 2026]{.kicker}

# Misma rúbrica, mismos criterios

::div{.sum3}
- $2.50$ / problema
- 3 apartados · $1.00 + 1.00 + 0.50$
- precisión $0.25$
::

:::div{.grid.grid-cols-2.gap-3.mt-2}

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

[Ebaluazioa · 2026an bezala]{.kicker}

# Errubrika bera, irizpide berberak

::div{.sum3}
- $2{,}50$ / problema
- 3 atal · $1{,}00 + 1{,}00 + 0{,}50$
- zehaztasuna $0{,}25$
::

:::div{.grid.grid-cols-2.gap-3.mt-2}

::div{.card v-click="1"}
### Sinbolikoa, zenbakizkoa
planteatu, askatu, ordeztu
::

::div{.card.coral v-click="2"}
### $0{,}1$eko kenkariak
unitateak · izaera bektoriala · biribiltzea eta hamartarrak
::

::div{.card.coral v-click="3"}
### Akats larriak
ekuazio okerra · eskalar/bektore nahasketa

[atala baliogabetzen dute]{.note-line}
::

::div{.card.teal v-click="4"}
### Balioa eramaten da
ikaslearen balioa, behar izanez gero

[emaitza absurdua ez bada]{.note-line}
::

:::

::::

---
transition: slide-up
class: dense bi-bg
ribbonTitle: "Aldaketa"
blockSrc: "bloques/bilingue/05-bi-cambio.md"
---
::::div{.bi2.rows-2.mb-1}

[El único cambio]{.kicker}

# Enunciados más cortos

[Aldaketa bakarra]{.kicker}

# Enuntziatu laburragoak

::::

::::div{.bi2.rows-2.mt-1}

::div{.note}
Longitud de los enunciados de 2026, en palabras
::

::word-bars{:rows='[["A1",295],["B1",408],["C1",150],["C2",242],["D1",163],["D2",214]]' :total="408" :sums='[["C1+C2",392],["D1+D2",377]]' :target="$clicks >= 3"}
::

::div{.note}
2026ko enuntziatuen luzera, hitzetan
::

::tool-panel{label="Ajustar la banda · Banda doitu"}
::band-controls
::

::band-totals{:read="1472" :answered="[1016, 1159]" :n-read="6" :n-answered="4"}
::
::

::::

::::div{.bi2.rows-1.mt-2}

:::div{.grid.grid-cols-2.gap-3}

::div{.card.teal v-click="1"}
### Se conserva
contexto · datos y constantes · verbos · rúbrica
::

::div{.card.coral v-click="2"}
### Se recorta
narrativa · repeticiones · formato
::

:::

:::div{.grid.grid-cols-2.gap-3}

::div{.card.teal v-click="1"}
### Mantentzen da
testuingurua · datuak eta konstanteak · aditzak · errubrika
::

::div{.card.coral v-click="2"}
### Moztu egiten da
narratiba · errepikapenak · formatua
::

:::

::::

::div{.note-line.mt-2.nolang.text-center v-click="3"}
**Objetivo 2027 · 2027ko helburua** — <kx :tex="`${$lo}\\text{–}${$hi}`" /> palabras · hitz  ·  media · batez beste <kx :tex="$band.mean" />
::

---
transition: fade
class: dense tight bitab-slide bi-bg
ribbonTitle: "Eranskina · taula"
blockSrc: "bloques/bilingue/06-bi-vistazo.md"
---
::::div{.bi2.rows-2.mb-1}

[Anexo · por si se pregunta]{.kicker}

# 2026 de un vistazo

[Eranskina · galdetzen bada]{.kicker}

# 2026 begirada batean

::::

| Problema | Tema | Reparto | Problema | Gaia | Banaketa |
|:--|:--|:--|:--|:--|:--|
| A1 · sin opción | Campo gravitatorio · órbita y caída | $1.00 + 1.00 + 0.50$ | A1 · aukerarik gabe | Grabitazio-eremua · orbita eta erorketa | $1{,}00 + 1{,}00 + 0{,}50$ |
| B1 · sin opción | Inducción · espira y generador | $0.50 + 1.00 + 1.00$ | B1 · aukerarik gabe | Indukzioa · espira eta sorgailua | $0{,}50 + 1{,}00 + 1{,}00$ |
| C1 · opción a | Ondas y sonido · cuerda, decibelios | $0.50 + 1.00 + 1.00$ | C1 · a aukera | Uhinak eta soinua · soka, dezibelak | $0{,}50 + 1{,}00 + 1{,}00$ |
| C2 · opción b | Óptica · lente, aumento, imagen | $1.00 + 0.50 + 1.00$ | C2 · b aukera | Optika · lentea, handipena, irudia | $1{,}00 + 0{,}50 + 1{,}00$ |
| D1 · opción a | Efecto fotoeléctrico · función trabajo | $0.50 + 1.00 + 1.00$ | D1 · a aukera | Efektu fotoelektrikoa · lan-funtzioa | $0{,}50 + 1{,}00 + 1{,}00$ |
| D2 · opción b | Datación · carbono-14 | $1.00 + 0.50 + 1.00$ | D2 · b aukera | Datazioa · karbono-14 | $1{,}00 + 0{,}50 + 1{,}00$ |

::div{.bi2.rows-1.mt-2}

::div{.note}
Cada problema, $2.50$ · subapartados de $0.25$ o $0.50$
::

::div{.note}
Problema bakoitza, $2{,}50$ · $0{,}25$ eta $0{,}50$-eko azpiatalak
::

::

---
transition: slide-up
class: dense bi-bg
ribbonTitle: "Datuak eta konstanteak"
blockSrc: "bloques/bilingue/07-bi-constantes.md"
---
::::div{.bi2.rows-2.mb-1}

[Anexo · la tabla de datos y constantes]{.kicker}

# Once entradas: ocho se usan, tres nunca

[Eranskina · datu eta konstanteen taula]{.kicker}

# Hamaika sarrera: zortzi erabiltzen dira, hiru inoiz ez

::::

::const-table{name="constantes-2026" :clicks="$clicks" .big .nolang}
::

::::div{.bi2.rows-1.mt-2}

:::div{.grid.grid-cols-2.gap-x-5.gap-y-1}

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

:::div{.grid.grid-cols-2.gap-x-5.gap-y-1}

::div{.step v-click="1"}
[A1]{.n.u-a}

grabitatorioa: $G$, $M_{\mathrm{L}}$, $R_{\mathrm{L}}$
::

::div{.step v-click="5"}
[D1]{.n.u-d}

fotoelektrikoa: $h$, $c$, $|q_e|$
::

::div{.step v-click="2"}
[B1]{.n.u-b}

indukzioa: ezer ez
::

::div{.step v-click="6"}
[D2]{.n.u-b}

datazioa: ezer ez
::

::div{.step v-click="3"}
[C1]{.n.u-c}

soinua: $v_{\mathrm{soinua}}$, $I_0$
::

::div{.step v-click="7"}
[×]{.n.u-x}

inoiz ez: $K$, $m_p$, $m_e$
::

::div{.step v-click="4"}
[C2]{.n.u-b}

optika: ezer ez
::

::div{.step v-click="8"}
[=]{.n}

**aukeratzea ebaluatzen da**
::

:::

::::

---
layout: center
transition: view-transition
class: bi-bg
ribbonTitle: "Etxerako"
blockSrc: "bloques/bilingue/08-bi-cierre.md"
---
::::div{.bi2.rows-4}

[Para llevar]{.kicker}

::div{.section-title}
Nada cambia.
::

::div{.section-title.amber v-click="1"}
Salvo que se leerá menos.
::

::div{.card.amber.mt-4 v-click="2"}
Misma estructura, contenidos y corrección. Enunciados más cortos, misma rúbrica.

Sabemos lo bastante para **no tocar la prueba**, y no lo bastante para **tocarla**.
::

[Etxerako]{.kicker}

::div{.section-title}
Ez da ezer aldatzen.
::

::div{.section-title.amber v-click="1"}
Gutxiago irakurriko dela izan ezik.
::

::div{.card.amber.mt-4 v-click="2"}
Egitura, edukiak eta zuzenketa berberak. Enuntziatu laburragoak, errubrika bera.

Nahikoa dakigu proba **ez ukitzeko**, eta ez nahikoa **ukitzeko**.
::

::::

---
transition: fade
class: dense bi-bg
ribbonTitle: "Non dago zer"
blockSrc: "bloques/bilingue/09-bi-enlaces.md"
---
::::div{.bi2.rows-2.mb-1}

[Las tres presentaciones]{.kicker}

# Dónde está cada cosa

[Hiru aurkezpenak]{.kicker}

# Non dago zer

::::

:::div{.grid.grid-cols-3.gap-5.mt-2.nolang}

::div{.card.lk.lk-informativa}
### La informativa · Informatiboa [estás aquí]{.chip.amber.lk-here}

Qué se mantiene de 2026 y el único cambio de 2027.

[2026tik zer mantentzen den eta 2027ko aldaketa bakarra.]{.note-line}

::div{.qr}
<img src="/figures/qr-informativa.svg" alt="Código QR de la presentación informativa" />
::

[<a href="https://jmigartua.github.io/usap-fisica-2027/" target="_blank" rel="noopener">jmigartua.github.io/<br>usap-fisica-2027/</a>]{.lk-url}
::

::div{.card.lk.lk-enunciados}
### Los enunciados · Enuntziatuak [estás aquí]{.chip.amber.lk-here}

De dónde salen las palabras de más, problema a problema.

[Soberako hitzak nondik datozen, problemaz problema.]{.note-line}

::div{.qr}
<img src="/figures/qr-enunciados.svg" alt="Código QR de la presentación sobre los enunciados" />
::

[<a href="https://jmigartua.github.io/usap-fisica-2027/enunciados/" target="_blank" rel="noopener">jmigartua.github.io/<br>usap-fisica-2027/enunciados/</a>]{.lk-url}
::

::div{.card.lk.lk-hallazgos}
### Los hallazgos · Aurkikuntzak [estás aquí]{.chip.amber.lk-here}

Qué dicen los datos de 2026, y qué no pueden decir.

[2026ko datuek zer dioten, eta zer ezin duten esan.]{.note-line}

::div{.qr}
<img src="/figures/qr-hallazgos.svg" alt="Código QR de la presentación sobre los hallazgos" />
::

[<a href="https://jmigartua.github.io/usap-fisica-2027/hallazgos/" target="_blank" rel="noopener">jmigartua.github.io/<br>usap-fisica-2027/hallazgos/</a>]{.lk-url}
::

:::
