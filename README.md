# USaP Física 2027 · cuatro presentaciones desde un solo fondo de diapositivas

## Qué se edita a mano, y qué no

**La carpeta es el guion.** Cada presentación tiene la suya, y dentro el número
del fichero *es* el número de la diapositiva:

```
bloques/
  informativa/  01-portada-informativa.md … 09-enlaces.md
  enunciados/   01-portada-enunciados.md  … 12-enlaces.md
  hallazgos/    01-portada-hallazgos.md   … 15-enlaces.md
  bilingue/     01-bi-portada.md          … 09-bi-enlaces.md
  comun/        las cuatro diapositivas que usan varias presentaciones
```

¿La diapositiva 7 de la bilingüe? `bloques/bilingue/07-bi-constantes.md`. Y si
la tienes delante en `npm run dev`, el fichero aparece escrito en la esquina
inferior derecha: no hay que buscarlo. Ese rótulo solo existe en el servidor de
desarrollo; en la construcción no se genera.

**Las cuatro compartidas.** `cambio-enunciados`, `ref-vistazo`, `ref-constantes`
y `enlaces` salen en dos o tres presentaciones, con distinto número en cada una
—`enlaces` es la 9, la 12 y la 15—, así que no pueden llevar un número. Su texto
vive una sola vez en `comun/`, y cada presentación guarda en su sitio un fichero
numerado que solo dice dónde está:

```
bloques/informativa/09-enlaces.md
    -> comun/enlaces.md
```

Así ninguna carpeta tiene huecos y el texto sigue existiendo una sola vez. Se
edita el de `comun/`: se cambia una vez y cambia en las tres.

**Los números se mantienen solos.** El orden lo manda `decks.json`; los números
de los ficheros son consecuencia. Si cambias el orden ahí, `npm run decks`
renombra los ficheros y dice cuáles ha movido. No hay que renumerar a mano.

**Y el orden de `decks.json` también manda las direcciones.** La primera
presentación que no sea borrador se publica en la raíz del sitio, y las demás
cuelgan de ella en `/<fichero sin .md>/`:

| Dirección | Presentación |
|---|---|
| `jmigartua.github.io/usap-fisica-2027/` | `bilingue.md` — la que se proyecta en la reunión |
| `…/informativa/` | `informativa.md` — la misma, solo en castellano |
| `…/enunciados/` | `enunciados.md` — apoyo: cómo se construyen los enunciados |
| `…/hallazgos/` | `hallazgos.md` — apoyo: qué dicen los datos de 2026 |

Para mover una presentación a la raíz se reordena `decks.json` y nada más:
`tools/build_all.mjs` lo lee, y el despliegue lo llama a él en vez de repetir
los pasos de construcción. Tres cosas hay que mover a mano detrás: las
direcciones absolutas de `bloques/comun/enlaces.md`, las de `tools/make_qr.py`
—y volver a generar los códigos— y el nombre del fichero en `tools/text.mjs`.

**Lo que no se toca.** `bilingue.md`, `informativa.md`, `enunciados.md` y
`hallazgos.md` los escribe `tools/build_decks.mjs` en cada `npm run decks`, que
corre al arrancar *cualquiera* de los `npm run dev*` y al construir. Lo que se
teclee ahí desaparece en la siguiente pasada, sin aviso y sin copia. Los cuatro
llevan dentro de la cabecera la lista numerada de sus diapositivas con el
fichero de cada una.

Dónde tocar cada cosa:

| Quiero cambiar… | Fichero |
|---|---|
| El texto de la diapositiva *n* de una presentación | `bloques/<presentación>/<n>-*.md` |
| Una de las cuatro compartidas | `bloques/comun/<nombre>.md` |
| Qué diapositivas lleva cada presentación, y en qué orden | `decks.json`, lista `blocks` |
| El título de una presentación, su rótulo de cinta, su texto de ocasión | `decks.json`, entrada de esa presentación |
| Colores, tamaños, espaciados, los dos temas | `style.css` |
| La cinta inferior: autor, ocasión, lugar, fecha, para **todas** | `ribbon.json` |
| La cinta de **una sola** presentación | `decks.json`, bloque `ribbon:` de esa entrada |
| Tipografías, proporción, transición por defecto, esquema de color | `headmatter/_base.yml` |
| La tabla de datos y constantes | `data/constantes-2026.json` |
| Un componente (tabla de constantes, barras, modal de saberes, panel de la banda) | `components/*.vue` |

Dos diapositivas de la bilingüe que no son texto suelto:

- Los saberes básicos que abre el «+» de cada bloque:
  `bloques/bilingue/03-bi-estructura.md`, dentro de cada `::saber-modal`.
- Los pasos con que se marca la tabla de constantes:
  `bloques/bilingue/07-bi-constantes.md`. Cada `::div{.step v-click="k"}`
  enciende la celda `k` de la tabla.

**La trampa de las bilingües.** El orden del fichero es «toda la mitad
castellana, luego toda la vasca», y la rejilla las vuelve a emparejar por filas.
Si añades un objeto a una mitad, añade su gemelo a la otra y dale el **mismo**
`v-click="k"`. Sin número, Slidev numera por orden de fichero y el euskera se
queda pasos por detrás.

**Mientras editas no hace falta hacer nada.** `npm run dev:bilingue` —y sus
hermanos— levantan el servidor con el fondo vigilado: al guardar un bloque, el
fichero de entrada se vuelve a montar y la página se recarga sola, en menos de
un segundo.

```bash
npm run dev              # la bilingüe, la que se publica en la raíz
npm run dev:informativa  # o dev:enunciados / dev:hallazgos
```

Hasta ahora no era así, y costó una mañana: Slidev vigila el fichero de entrada
—`bilingue.md`—, no `bloques/`. El servidor mostraba lo que hubiera montado el
último `npm run decks` al arrancar, de modo que editar el bloque correcto no
cambiaba nada en pantalla. Ahora `tools/dev.mjs` corre el montador en modo
vigilancia junto a Slidev, en el mismo grupo de procesos; Ctrl-C para los dos.

Si en algún momento quieres montar a mano, sin servidor:

```bash
npm run decks            # una pasada
npm run decks:watch      # vigilando, sin Slidev
```

## Por qué un fondo común

Cuatro diapositivas las quieren dos o tres presentaciones a la vez: **la banda objetivo de
los enunciados**, **la tabla de la prueba de 2026**, **la tabla de datos y constantes** y **la
de enlaces**. Como las copias se separarían — es exactamente lo que ya pasó una vez, cuando el
deck llevaba una figura que el dossier había corregido tres días antes — hay una sola copia de
cada una, en `bloques/comun/`, y cada presentación guarda un fichero numerado que apunta a
ella.

- `bloques/<presentación>/NN-<nombre>.md` — una diapositiva, donde `NN` es su número en esa
  presentación. Primero su cabecera YAML, luego una línea con `...`, luego el cuerpo. Las
  portadas no tienen cabecera y empiezan por `...`. Si la primera línea del fichero es
  `-> comun/<nombre>.md`, es un puntero: el texto está allí.
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
node measure3.mjs /usap-fisica-2027/             8   # nada se mete bajo la cinta
node measure3.mjs /usap-fisica-2027/informativa/ 9
node measure3.mjs /usap-fisica-2027/enunciados/  12
node measure3.mjs /usap-fisica-2027/hallazgos/   15
```

Y cuatro comprobaciones más, que existen porque cada una cazó algo que leer el
código no cazaba:

```bash
node sanity.mjs /usap-fisica-2027/#3 /usap-fisica-2027/informativa/#3  # ¿renderiza de verdad?
node biclick.mjs  /usap-fisica-2027/ 8   # ES y EU se revelan a la vez
node bicheck.mjs  /usap-fisica-2027/ 8   # no queda castellano en cinta ni portada
node controls.mjs /usap-fisica-2027/ 8   # los controles se pueden usar
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
npm run text:apply    # devuelve a informativa.md las líneas cambiadas y lista cada cambio
```

En `TEXT.md` se edita solo lo que va después del id (`5.7  rúbrica y pesos`). Se conservan tal cual `$…$`, `[…]{.clase}`, `<br>` y `{{ }}`; una línea por id, sin añadir ni quitar ids. La estructura (tarjetas, clics, viñetas) no se toca desde aquí. El mapa `.text-map.json` guarda de dónde salió cada línea; si `informativa.md` cambió entre medias, el script busca cada línea por su texto original y avisa de lo que no encuentra. Tras aplicar, la hoja se regenera sola.

## Diferencias con el original

- La portada y el cierre no tienen la animación de entrada (`v-motion`); todo lo demás es idéntico.
- Regla de una línea por concepto: igual que en el original; ver `../2027-usap-presentation/README.md`.
