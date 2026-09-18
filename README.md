# USaP Física 2027 · versión MDC

Copia de `../2027-usap-presentation/` con las diapositivas 1–7, 12 y 13 reescritas en **MDC** (Markdown con componentes): mismo aspecto, sin HTML. Las diapositivas 8–11, la coreografía del problema 2, se copian tal cual: son un pequeño programa y no se editan a mano.

Misma carpeta de trabajo que el original: `npm run dev`, `npm run build`, `npm run export`.

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
