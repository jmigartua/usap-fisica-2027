# USaP Física 2027 · reunión de coordinación

Deck ligero (10 diapositivas) para la reunión con el profesorado: nada cambia respecto a 2026 salvo que los enunciados serán más cortos. Seis diapositivas de discurso y cuatro de anexo para responder preguntas.

Fuentes: `ordinaria_física_26_examen.pdf` y `ordinaria_física_26_solucionario.pdf` (en esta carpeta). Los recuentos de palabras se obtuvieron con `pdftotext -layout` sobre el enunciado en castellano, sin los pesos de cada apartado.

## Publicación

Sitio: <https://jmigartua.github.io/usap-fisica-2027/> · repositorio público <https://github.com/jmigartua/usap-fisica-2027>. Cada `git push` a `main` lanza `.github/workflows/deploy.yml`, que construye con `slidev build --base /usap-fisica-2027/` y publica `dist/` en GitHub Pages (un minuto, aproximadamente).

```bash
npm run thumbs    # opcional: regenera las miniaturas del navegador (exporta PNG y las reduce con sips)
npm run publish   # git add + commit "update deck" + push → despliegue automático
```

Fuera del repositorio, por `.gitignore`: los PDF del examen y del solucionario, el documento de orientaciones, `dist/`, `png/` y `node_modules/`.

El deck usa `routerMode: hash`, así que el sitio construido funciona en cualquier servidor estático (también `python -m http.server` en una carpeta local) y los enlaces a una diapositiva son de la forma `#/11`.

## Navegador de diapositivas

El botón ▦ del extremo derecho de la cinta abre, al pasar el ratón o al pulsarlo, una rejilla con las trece diapositivas (miniatura, número y título); pulsar una salta a ella. Las miniaturas salen de `public/thumbs/N.jpg`; sin miniatura, la tarjeta muestra el número. Slidev también ofrece la vista general con la tecla `o`.

## Comandos

Requiere Node ≥ 22 (`/usr/local/opt/node@22/bin` en esta máquina).

```bash
npm run dev          # servidor local con recarga
npm run build        # sitio estático en dist/
npm run export       # 2027-usap-presentation.pdf
npm run export:png   # png/1.png … png/10.png (verificación)
```

## Guion

| # | Sección | Diapositiva |
|--:|:--|:--|
| 1 | Portada | Física 2027: nada cambia |
| 2 | El mensaje | 2027 es 2026 · tres «=» y el único cambio |
| 3 | Estructura | Cuatro problemas, cuatro bloques · condiciones de la prueba |
| 4 | Evaluación | Misma rúbrica, mismos criterios generales |
| 5 | El cambio | Enunciados más cortos · longitud de los seis enunciados de 2026 · qué se conserva y qué se recorta |
| 6 | Cierre | Nada cambia. Salvo que se leerá menos. |
| 7 | Anexo | 2026 de un vistazo (bloques, temas, reparto de puntos, palabras) |
| 8 | Anexo | Ingeniería inversa del problema 2: cuatro versiones, de derecha (2026, 408 palabras) a izquierda (forma competencial, 95), una por clic |
| 9 | Anexo | Paso 3 → 2, parte a): cabecera común que se atenúa, y la frase a) enfocada, tachada y pasada a la versión de la izquierda (prototipo de la coreografía) |
| 10 | Anexo | Paso 2 → 1: la versión «sin narrativa» a la derecha (referencia, lo que debió ser en el segundo año) y, a la izquierda, la forma competencial ideal construida fundiendo a), b) y c) (11 clics) |
| 11 | Anexo | Último paso: la forma competencial ideal a la derecha y, a la izquierda, el enunciado habitual anterior al competencial obligatorio, solo con «escribe» y «calcula» (11 clics) |
| 12 | Anexo | Los cuatro niveles de verbos, presentes en los seis problemas |
| 13 | Anexo | Preguntas previsibles, respuestas cortas |

Diapositiva 11, clics 12–19: la cabecera reaparece (12) y desaparece cuando cada columna recibe su contexto completo (13); a la izquierda, la descripción de las dos configuraciones se enfoca y se sustituye por sus figuras (14–16); a la derecha, el apartado a) de la forma competencial se enfoca y pide el dibujo que la versión habitual regala (17–19). Las figuras salen de `tools/make_config_figures.py` (matplotlib con `text.usetex`, mismo lienzo y misma paleta en las dos: campo azul, normal verde, giro ámbar, posición inicial gris) y viven en `public/figures/config-I.svg` y `config-II.svg`; regenerar con `python3 tools/make_config_figures.py`.

Diapositiva 11, clics 20–21: la forma competencial completa deja de estar atenuada, con sus elementos competenciales en verde (20); en las dos versiones, el flujo, la f.e.m. y el valor en un instante se recuadran (ámbar, teal, coral) en vez de subrayarse (21), con una leyenda al pie.

Diapositiva 3: las cuatro tarjetas de bloque aparecen con la diapositiva, sin clics. Diapositiva 5, clic 5: tarjeta «Objetivo 2027» (100–150 palabras), las barras de 2026 se atenúan y una banda verde marca el intervalo objetivo sobre ellas; la fila B1′ no cambia.

Cadena de versiones del problema 2 construida en las diapositivas 9–11, con la cabecera común de 76 palabras incluida: 2026 como salió, 408 · sin narrativa, 287 · forma competencial ideal, 154 · habitual, 153. Marca coral (`.m-usual`): los verbos del enunciado habitual.

## Vocabulario de transiciones (diapositiva 9)

Cada frase del enunciado de la derecha se trata con una secuencia de verbos; cada verbo es un clic.

| Verbo | Qué se ve |
|:--|:--|
| mantener | la frase sigue igual en la derecha y aparece tal cual en la izquierda |
| atenuar | la frase se queda en su sitio, al 30 % de opacidad, mientras se comenta |
| enfocar | la frase se aísla y sale ampliada al centro, con su origen recuadrado en ámbar |
| tachar | dentro del foco, la parte que sobra se tacha en coral; lo que sobrevive pasa a teal |
| pasar | el foco se retira hacia la izquierda y el texto superviviente aparece en la versión de la izquierda |
| reescribir | dentro del foco, el original se tacha entero y la nueva redacción aparece a continuación en teal |
| marcar | en su sitio, sin foco: las peticiones que se repiten entre apartados se subrayan con un color por petición (ámbar flujo, teal fem, coral valor en $t$) |
| fundir | dos frases de la derecha pasan como una sola a la izquierda |
| borrar | la frase se tacha en su sitio y no pasa nada a la izquierda |

Marca verde (`.m-comp`): elemento competencial, distinto de los cálculos habituales; se aplica en la versión de la izquierda al llegar la frase. Las cajas punteadas (`.nota`) son observaciones, no forman parte del enunciado.

Contador de palabras: la etiqueta de la derecha muestra la referencia fija (408, suma de los trozos originales); la de la izquierda, las palabras acumuladas de la versión nueva y el ahorro respecto a los trozos ya pasados. Las dos series están precalculadas por clic dentro de la plantilla (matrices `n` y `k`, índice `$clicks`); si cambia un texto, recalcular con el mismo tokenizador.

Guion actual de la diapositiva 9 (32 clics):

- 1 atenuar cabecera.
- 2–4 a): enfocar, tachar, pasar.
- 5–8 a.1 y a.2: enfocar, reescribir a.1, tachar a.2, pasar.
- 9–13 b) y c) juntos: enfocar, marcar flujo, marcar f.e.m., marcar valor en $t$, pasar la nota a la izquierda (caja punteada) y dejar las marcas en la derecha.
- 14 marcar en a.1 el flujo (ámbar) y en a.2 la f.e.m. (teal), a la izquierda y en los originales.
- 15 atenuar más la nota.
- 16–18 b.1: enfocar, tachar «cuando el dispositivo está en esta configuración», pasar; a la izquierda, «el ángulo … es constante» en verde.
- 19–21 b.2: enfocar, tachar «aplicando la ley de Faraday», pasar.
- 22–24 b.3: enfocar, tachar y reescribir (fem → f.e.m., «el instante» fuera, «expresa el resultado … y con dos decimales», unidades fuera), pasar; a la izquierda, la notación científica en verde.
- 24–25 c.1: enfocar, pasar tal cual.
- 26–27 c.2: enfocar, pasar tal cual; a la izquierda, «Indica si el prototipo actual cumple este requisito» en verde.
- 28–29 la idea: tarjeta central: tres cálculos habituales pedidos dos veces, tres elementos competenciales pedidos una vez.
- 30–32 contexto y configuraciones: enfocar la cabecera, reescribir (156 → 76 palabras: «Un microgenerador consiste en…», solo «Configuración I» y «Configuración II», sin etiquetas ni explicaciones de la fuente del campo), pasar: la cabecera superior pasa a ser el texto nuevo, en teal, y el contador de la izquierda baja de 367 a 287 (ahorro 121 sobre 408).

En `slides.md`: el foco es un `div.spot-wrap` con `v-click="[inicio, fin]"`; el tachado, un `span` con `:class="{ cut: $clicks >= n }"`; la llegada, un `div.arrive` con `v-click="n"`. El `v-click` y el `:class` reactivo nunca van en el mismo elemento (el segundo borra la clase oculta del primero).

## Convenciones

- Un concepto, una línea: ninguna frase que nombre un concepto se parte en dos líneas; si no cabe, se recorta o se reparte con `<br>` (un concepto por línea), nunca se reduce el tamaño de letra. Las listas van en estilo telegráfico, sin artículos («datos y tabla de constantes», no «Los datos y la tabla de constantes»). Los enunciados citados literalmente (diapositivas 9–11) quedan exentos. Comprobación: medir en el navegador la altura de `li`, `.card p`, `.kpi-label p`, `.note p`, `.step p` frente a su `line-height` por la escala de la diapositiva.
- Decimales con punto (`$2.50$`), como en el examen y el solucionario.
- Cada tarjeta de bloque en la diapositiva 3 lleva un botón «+» (`components/SaberModal.vue`) que abre la lista de saberes básicos del bloque, tomada de `0_propuesta_orientaciones_final_fisica.md`, § 2. Se cierra con el aspa, con Escape o pulsando fuera.
- Los recuentos de palabras de las cuatro versiones del problema 2 se calculan con el mismo tokenizador sobre el texto de `slides.md`; por eso B1 figura con 408 palabras en todo el deck.

## Cinta inferior

Título, autor, ocasión, lugar y fecha viven en `ribbon.json`. Cada diapositiva declara `section:` en su cabecera; la de cierre usa `ribbonTitle:` porque no tiene encabezado Markdown.

## Exportación a PDF

`npm run export` usa `--per-slide`. Sin esa opción, el exportador de una sola página pierde las dos diapositivas posteriores a la coreografía (salían 9 páginas de 11): las tarjetas de foco desplazadas fuera del lienzo alteran la paginación. El PDF muestra cada diapositiva en su último clic.

## Dependencias fijadas

Slidev 52.19.x no funciona con unocss ≥ 66.9 ni floating-vue ≥ 5.3 (iconos de la barra desaparecen, rejillas apiladas). El bloque `overrides` de `package.json` los fija en 66.8.1 y 5.2.2. Comprobar al actualizar Slidev.
