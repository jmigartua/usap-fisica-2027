# USaP Física 2027 · tres presentaciones desde un solo fondo de diapositivas

## Qué se edita a mano, y qué no

La regla de una línea: **se editan los bloques, nunca los ficheros de entrada.**

`slides.md`, `enunciados.md`, `hallazgos.md` y `bilingue.md` los escribe
`tools/build_decks.mjs` cada vez que corre `npm run decks`, que es al arrancar
*cualquiera* de los `npm run dev*` y al construir. Todo lo que se teclee ahí
desaparece en la siguiente pasada, sin aviso y sin copia. Por eso los cuatro
llevan un aviso dentro de la cabecera, con la lista de los bloques que sí se
editan.

Dónde tocar cada cosa:

| Quiero cambiar… | Fichero |
|---|---|
| El texto de una diapositiva | `bloques/<nombre>.md` — el nombre sale del aviso en la cabecera del fichero generado |
| Qué diapositivas lleva cada presentación, y en qué orden | `decks.json`, lista `blocks` |
| El título de una presentación, su rótulo de cinta, su texto de ocasión | `decks.json`, entrada de esa presentación |
| Colores, tamaños, espaciados, los dos temas | `style.css` |
| La cinta inferior: autor, ocasión, lugar, fecha, para **todas** | `ribbon.json` |
| La cinta de **una sola** presentación | `decks.json`, bloque `ribbon:` de esa entrada |
| Tipografías, proporción, transición por defecto, esquema de color | `headmatter/_base.yml` |
| La tabla de datos y constantes | `data/constantes-2026.json` |
| Un componente (tabla de constantes, barras, modal de saberes, panel de la banda) | `components/*.vue` |

Y las dos diapositivas de la informativa bilingüe que no son texto suelto:

- Los saberes básicos que abre el «+» de cada bloque: `bloques/bi-estructura.md`,
  dentro de cada `::saber-modal`.
- Los pasos con que se marca la tabla de constantes: `bloques/bi-constantes.md`.
  Cada `::div{.step v-click="k"}` enciende la celda `k` de la tabla; los índices
  van emparejados entre las dos mitades, y por eso el castellano y el euskera
  aparecen a la vez.

En las diapositivas bilingües el orden del fichero es «toda la mitad castellana,
luego toda la vasca», y la rejilla las vuelve a emparejar por filas. Si se añade
un objeto a una mitad hay que añadir su gemelo a la otra, y darle el **mismo**
`v-click="k"`: sin número, Slidev numera por orden de fichero y el euskera se
queda pasos por detrás.

Después de editar un bloque:

```bash
npm run decks            # vuelve a montar los cuatro ficheros de entrada
npm run dev:bilingue     # o dev / dev:enunciados / dev:hallazgos
```


Hay **tres** presentaciones y **un** fondo común de diapositivas. Los tres ficheros de
entrada se generan; no se editan a mano.

| Fichero | Qué es | Diapositivas | En línea |
|---|---|---|---|
| `slides.md` | **La informativa** — la que se proyecta en la reunión | 9 | [`/usap-fisica-2027/`](https://jmigartua.github.io/usap-fisica-2027/) |
| `enunciados.md` | Apoyo: cómo se construyen las versiones de los problemas | 12 | [`/enunciados/`](https://jmigartua.github.io/usap-fisica-2027/enunciados/) |
| `hallazgos.md` | Apoyo: qué dicen los datos de 2026 | 15 | [`/hallazgos/`](https://jmigartua.github.io/usap-fisica-2027/hallazgos/) |

Las tres se publican juntas en cada `push` a `main`, con
`.github/workflows/deploy.yml`, y las tres terminan en la misma diapositiva de enlaces:
las tres direcciones, con su código QR, y la que se está viendo marcada con «estás aquí»
(la marca la pone `decks.json` con una clase; la diapositiva es una sola).

Esos enlaces son **absolutos** a propósito. Escritos como rutas relativas funcionaban en la
construcción y **no** en `npm run dev`: el servidor de desarrollo responde a cualquier ruta
con la misma presentación, así que el enlace llevaba a donde ya estabas. Absolutos se
comportan igual en desarrollo, en la construcción y en Pages. El precio es que el nombre del
repositorio sí está escrito dentro; si cambia, hay que tocar `bloques/enlaces.md` y volver a
generar los QR.

```bash
npm run decks            # regenera los tres desde bloques/ + decks.json
npm run dev              # la informativa
npm run dev:enunciados   # la de los enunciados
npm run dev:hallazgos    # la de los hallazgos
npm run build            # los tres: dist/, dist/enunciados/, dist/hallazgos/
npm run preview          # los tres, construidos y servidos en el 4173
npm run export           # tres PDF
```

Los enlaces entre presentaciones solo funcionan sobre la **construcción**, no en
`npm run dev`: el servidor de desarrollo sirve una sola presentación en la raíz. Para
verlos, `npm run preview`.

Para reproducir en local exactamente lo que se publica, con el mismo prefijo:

```bash
BASE=/usap-fisica-2027/ npm run build
mkdir -p /tmp/pages && cp -r dist /tmp/pages/usap-fisica-2027
(cd /tmp/pages && python3 -m http.server 4180)
# http://localhost:4180/usap-fisica-2027/
```

Un error de prefijo no se ve sirviendo `dist/` en la raíz — solo aparece aquí. Hay dos
comprobaciones para eso, con esa construcción servida:

```bash
node pagescheck.mjs      # las tres bajo /usap-fisica-2027/: peticiones fallidas,
                         # miniaturas, y a dónde van los enlaces entre ellas
node clickcheck.mjs      # y que esos enlaces de verdad llevan a la otra presentación
```

## Por qué un fondo común

Tres diapositivas las quieren dos presentaciones a la vez: **la banda objetivo de los
enunciados**, **la tabla de la prueba de 2026** y **la tabla de datos y constantes**. Como
tres copias se separarían — es exactamente lo que ya pasó una vez, cuando el deck llevaba una
figura que el dossier había corregido tres días antes — hay una sola copia de cada una.

- `bloques/<nombre>.md` — una diapositiva. Primero su cabecera YAML, luego una línea con
  `...`, luego el cuerpo. Las portadas no tienen cabecera y empiezan por `...`.
- `decks.json` — qué diapositivas lleva cada presentación y en qué orden. Una entrada puede
  ser el nombre a secas o un objeto `{"b": "nombre", "section": "…", "ribbonTitle": "…"}`:
  la misma diapositiva es «Anexo» en una presentación y el argumento principal en otra, y la
  cinta tiene que decirlo.
- `headmatter/_base.yml` — la cabecera común. Título, `info` y la cinta los pone el
  generador desde `decks.json`.
- `tools/build_decks.mjs` — el generador.

Para mover una diapositiva de una presentación a otra, o para que aparezca en dos, se toca
`decks.json` y nada más. Para cambiar lo que dice, se toca su bloque, y el cambio llega a
todas las presentaciones que la usan.

## Miniaturas

Cada presentación tiene las suyas, en `public/thumbs/<presentación>/N.jpg`; la cinta las lee
del `thumbsDir` que el generador escribe en la cabecera. En macOS, `npm run thumbs`. En
cualquier otro sistema, con la construcción servida en el puerto 4173:

```bash
npm run build && npx serve dist -l 4173 &
node tools/thumbs_linux.mjs
```

## Los códigos QR

```bash
python3 tools/make_qr.py    # -> public/figures/qr-*.svg
```

Hay que volver a lanzarlo si cambia el nombre del repositorio o la cuenta. Para comprobar
que cada código lleva a donde dice, se leen de la propia diapositiva construida:

```bash
python3 - <<'EOF'
import cv2
ok, datos, *_ = cv2.QRCodeDetector().detectAndDecodeMulti(cv2.imread('shots3/A-09.png'))
print(datos if ok else 'no se ha leído ninguno')
EOF
```

## Figuras

Las diez figuras de datos salen del dossier, no se dibujan aquí. En
`claude_analysis_2026-09-18`:

```bash
PAU_LANG=es PAU_DECK=1 python3 scripts/03_plots.py            # datos-serie, datos-nueve
PAU_LANG=es PAU_DECK=1 python3 scripts/22_subject_decomposition.py
PAU_LANG=es PAU_DECK=1 python3 scripts/25_statement_budget.py
PAU_LANG=es PAU_DECK=1 python3 scripts/34_competency_path.py
PAU_LANG=es PAU_DECK=1 python3 scripts/36_catalunya_event.py
PAU_LANG=es PAU_DECK=1 python3 scripts/37_cycle_and_reversion.py
PAU_LANG=es PAU_DECK=1 python3 scripts/40_timetable_weights.py
PAU_LANG=es PAU_DECK=1 PAU_PAPER=1 python3 scripts/21_decay_decomposition.py
cp plots/deck/*.png <esta carpeta>/public/figures/
```

`PAU_DECK=1` quita el encabezado de figura — una diapositiva que dice «Figura 26 —» señala un
documento que nadie tiene en la sala — y escribe en `plots/deck/` con los nombres que usan
estas diapositivas. No cambia nada más, así que una figura del deck y la del dossier de la
que sale no pueden decir cosas distintas.

## Altura de las figuras en una diapositiva

`.fig` sola deja que la imagen decida lo alta que es la diapositiva. Eso vale para las tiras
anchas de 3:1 y no vale para nada más cuadrado: lo que va debajo se sale por abajo y queda
detrás de la cinta, donde no es feo, es invisible. Por eso hay `.fit-lg`, `.fit-md`, `.fit-sm`
y `.fit-xs`, que topan la altura de la imagen. Se elige por cuánto texto va debajo.

Para comprobarlo, con la construcción servida:

```bash
# con la construcción servida bajo el prefijo real, p. ej.
#   BASE=/usap-fisica-2027/ node tools/build_all.mjs
#   python3 -m http.server 4173 --directory <raíz que contiene usap-fisica-2027/>
export DECK_ORIGIN=http://localhost:4173
node measure3.mjs /usap-fisica-2027/            9   # nada se mete bajo la cinta
node measure3.mjs /usap-fisica-2027/enunciados/ 12
node measure3.mjs /usap-fisica-2027/hallazgos/  15
node measure3.mjs /usap-fisica-2027/bilingue/   9
```

Y cuatro comprobaciones más, que existen porque cada una cazó algo que leer el
código no cazaba:

```bash
node sanity.mjs /usap-fisica-2027/#3 /usap-fisica-2027/enunciados/#3   # ¿renderiza de verdad?
node biclick.mjs  /usap-fisica-2027/bilingue/ 9   # ES y EU se revelan a la vez
node bicheck.mjs  /usap-fisica-2027/bilingue/ 9   # no queda castellano en cinta ni portada
node controls.mjs /usap-fisica-2027/bilingue/ 9   # los controles se pueden usar
node contrast.mjs                                 # todo texto pasa su umbral AA (claro)
DARK=1 node contrast.mjs                          # y en oscuro
```

- `sanity.mjs` existe porque `measure3.mjs` da «todo libre» en una página cuyo
  JavaScript no llegó a correr: no encuentra diapositiva que medir, y no
  encontrar nada no es lo mismo que estar bien.
- `controls.mjs` existe porque un deslizador aplastado a once píxeles sigue
  pintando su mango y sigue midiendo dentro de la diapositiva. Pasaba todas las
  comprobaciones siendo, en pantalla, un punto verde.
- Los arneses pasan por `about:blank` entre diapositivas: ir de `#/4` a `#/5` es
  un cambio de fragmento, no de documento, y la aplicación no vuelve a leer nada
  —ni la preferencia de color—, así que las capturas «en oscuro» salían en claro.

---

## Qué es MDC

Markdown normal más dos añadidos:

- un **bloque con clases**: `::div{.card.teal}` … `::` (abre con dos puntos dobles, cierra con dos puntos dobles);
- una **frase con clases**: `[texto]{.m-flux}`.

Con eso se escriben las tarjetas, las rejillas y las marcas de color del diseño. Las fórmulas van entre `$…$` en cualquier sitio. No hay reglas de líneas en blanco ni etiquetas que cerrar.

## Chuleta: las seis cosas que se usan

**1. Eyebrow y título**

```md
[Estructura · igual que en 2026]{.kicker}

# Cuatro problemas, cuatro bloques
```

**2. Tarjeta** (colores: nada, `.amber`, `.teal`, `.coral`, `.lime`; `v-click` para que aparezca con un clic)

```md
::div{.card.teal v-click}
### Se conserva
- contexto real, da sentido al problema
- datos y tabla de constantes
::
```

**3. Rejilla** (el bloque exterior lleva un `:` más que los interiores)

```md
:::div{.grid.grid-cols-3.gap-4.mt-4}

::div{.card}
### Una
::

::div{.card}
### Dos
::

:::
```

**4. Marcas de color en una frase**

```md
En b) y c) se pide dos veces [el flujo $\Phi(t)$]{.m-flux.on} y [la f.e.m.]{.m-fem.on}.
```

Clases: `.m-flux` ámbar, `.m-fem` teal, `.m-val` coral, `.m-comp` verde (competencia), `.m-usual` coral (verbos habituales); `.chip.amber` para una etiqueta redondeada.

**5. Lista que aparece punto a punto**

```md
<v-clicks>

- primero
- segundo

</v-clicks>
```

**6. Dos columnas o nota pequeña**

```md
:::div{.grid.grid-cols-2.gap-6}

::div
izquierda
::

::div
derecha
::

:::

::div{.note}
Una nota en letra pequeña y gris.
::
```

## Banda objetivo con deslizadores (diapositiva 5)

Tres componentes reutilizables comparten un estado (`composables/band.ts`: media y anchura de la banda, en palabras; se recuerda en el navegador con `localStorage`, y el botón ↺ vuelve a 150–175):

- `::band-controls` … `::` — dos deslizadores, media y anchura, con la banda resultante.
- `::word-bars{… :sums='[["C1+C2",392],["D1+D2",377]]'}` — las barras; las filas suma (dos enunciados leídos, banda doble) van punteadas.
- `::band-totals{:read="1472" :answered="[1016, 1159]" :n-read="6" :n-answered="4"}` — tabla: lo que lee (opciones incluidas) y lo que responde un alumno en 2026, frente a media, mínimo y máximo del objetivo (6 y 4 enunciados).

En cualquier diapositiva, `{{ $band.mean }}`, `{{ $lo }}` y `{{ $hi }}` dan los valores vivos; `<kx :tex="$lo" />` los compone en KaTeX (`components/Kx.vue`, para números calculados en ejecución; los `$…$` del Markdown se componen al construir). Los valores fijos de 2026: leídos 295 + 408 + 392 + 377 = 1472; respondidos entre 1016 (C1 y D1) y 1159 (C2 y D2).

## Tabla de datos y constantes (diapositiva 14, la última)

`::const-table{name="constantes-2026" :clicks="$clicks"}` reproduce la tabla del examen desde `data/constantes-2026.json` (celdas en orden de lectura, KaTeX en `tex`, y pasos `{at, tag, cls, keys}`: en el clic `at`, las celdas `keys` reciben la clase `cls` y la etiqueta `tag`). Para otra convocatoria: otro JSON con el mismo formato y el nombre en `name`. Los usos de 2026 salen del solucionario: A1 usa $G$, $M_{\mathrm{Tierra}}$, $R_{\mathrm{Tierra}}$; C1, $v_{\mathrm{sonido}}$ e $I_0$; D1, $h$, $c$ y $|q_e|$; B1, C2 y D2 no usan la tabla; $K$, $m_p$ y $m_e$ no se usan nunca.

Va al final del anexo: coreografía del problema 2 en 8–11, verbos en 12, respuestas cortas en 13, tabla de constantes en 14. La tabla ocupa todo el ancho (`.big`) y la leyenda va debajo en cuatro columnas.

## Componentes (una línea cada uno)

- Botón de saberes básicos en una tarjeta: `::saber-modal{title="Bloque A · Campo gravitatorio"}` … `::` con la lista dentro.
- Barras de palabras (diapositiva 5): `::word-bars{:rows='[["A1",295],["B1",408]]' :total="408" :short='["B1′",90]' :band="[100,150]" :target="$clicks >= 5"}` seguido de `::`.

## Hoja de textos (editar sin abrir las diapositivas)

```bash
npm run text          # escribe TEXT.md: una línea por texto, agrupadas por diapositiva, con id
npm run text:apply    # devuelve a slides.md las líneas cambiadas y lista cada cambio
```

En `TEXT.md` se edita solo lo que va después del id (`5.7  rúbrica y pesos`). Se conservan tal cual `$…$`, `[…]{.clase}`, `<br>` y `{{ }}`; una línea por id, sin añadir ni quitar ids. La estructura (tarjetas, clics, viñetas) no se toca desde aquí. El mapa `.text-map.json` guarda de dónde salió cada línea; si `slides.md` cambió entre medias, el script busca cada línea por su texto original y avisa de lo que no encuentra. Tras aplicar, la hoja se regenera sola.

## Diferencias con el original

- La portada y el cierre no tienen la animación de entrada (`v-motion`); todo lo demás es idéntico.
- Regla de una línea por concepto: igual que en el original; ver `../2027-usap-presentation/README.md`.
