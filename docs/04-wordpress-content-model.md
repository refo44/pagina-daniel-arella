# Daniel Arella — WordPress Content Model

**Versión 2.7**

Modelo mínimo de contenido para la plataforma de autor. Claves técnicas en inglés, etiquetas visibles traducidas vía i18n. Suficiente para desarrollo, legible para el autor.

**Depende de:** `01-plataforma-autor-plan`, `02-identidad-corporativa`, `03-arquitectura-editorial`

---

## 1. Esquema general

### Custom Post Types

| CPT (key) | Label ES | Slug | Uso principal |
|-----------|----------|------|---------------|
| poem | Poemas | /poem/ | Poemas individuales |
| book | Libros | /book/ | Libros o manuscritos |
| essay | Ensayos | /essay/ | Textos de pensamiento |
| story | Relatos | /story/ | Narrativa breve |
| workshop | Talleres | /talleres/ | Talleres y cursos |
| post | Artículos | /blog/ | Notas y artículos |
| page | Páginas | por página | Inicio, Archivo, Sobre el autor, Correspondencia, Contacto, Servicios editoriales, Prensa, Derechos |

post existe solo para notas y artículos. La obra vive en poem, book, essay, story y workshop.

### Secciones del plan maestro (por implementar)

Según `01-plataforma-autor-plan`, la arquitectura incluye **Biblioteca de audio** y **Videoteca**. Cuando se implementen, se definirán los CPT y campos necesarios (p. ej. `audio` para poemas en audio, audiolibros, podcast; `video` para videopoemas, conferencias, clases). **El audio y el vídeo no se alojan en el servidor:** se guardan en servicios de terceros (YouTube, Vimeo, Instagram Reels, Spotify, SoundCloud, etc.); el modelo solo almacenará URL externa, código de embed y metadatos (título, tipo, duración, miniatura). Por ahora quedan como secciones previstas; las rutas y la navegación se documentan en `15-arbol-urls-final` y `14-arquitectura-informacion-navegacion`.

---

## 2. Taxonomías

Clasificación mínima para navegar el corpus.

| Key | Label ES | Tipo | Aplica a |
|-----|----------|------|----------|
| topic | Tema | Jerárquica | poem, book, essay, story, post, workshop |
| period | Periodo | Jerárquica | poem, book, essay, story, post, workshop |

No existen taxonomías de idioma, formato, editorial, edición ni estado. Esos datos viven en campos simples o en el sistema de traducción.

---

## 3. Custom Post Types

**Featured image:** thumbnail opcional en poem, essay y story; obligatorio en book y workshop.

### poem

- Slug: /poem/
- Tiene archive
- Soporta: title, editor, excerpt, thumbnail, revisions, custom-fields
- Taxonomías: topic, period
- Relación: poem_book → book (0 o 1)
- Orden dentro del libro (opcional): book_order → integer

### book

- Slug: /book/
- Tiene archive
- Soporta: title, editor, thumbnail, revisions, custom-fields
- Taxonomías: topic, period
- Campos base: book_subtitle, book_abstract, book_rights_note
- Ediciones: `book_editions` (repeatable group)
  - `edition_label`
  - `edition_year`
  - `edition_publisher`
  - `edition_isbn`
  - `edition_cover`
  - `edition_format`
  - `edition_buy_links` (repeatable)
    - `link_label`
    - `link_url`
    - `link_source`
  - `edition_pdf`
  - `edition_epub`
  - `edition_rights_note`
- Campo opcional: `book_featured_edition` → referencia interna a una edición del grupo para destacarla en listados o en Home
- Los contenidos del libro se ordenan manualmente.

Regla: un `book` representa la obra. Sus ediciones viven dentro del mismo registro y no tienen CPT, taxonomía ni URL propia. Si una edición cambia solo la cubierta, el sello, el ISBN o los puntos de venta, sigue siendo la misma obra con otra edición.

### essay

- Slug: /essay/
- Tiene archive
- Soporta: title, editor, excerpt, thumbnail, revisions, custom-fields
- Taxonomías: topic, period
- Campos: essay_abstract
- Relación: essay_book → book (0 o 1)
- Orden dentro del libro (opcional): book_order → integer

### story

- Slug: /story/
- Tiene archive
- Soporta: title, editor, excerpt, thumbnail, revisions, custom-fields
- Taxonomías: topic, period
- Relación: story_book → book (0 o 1)
- Orden dentro del libro (opcional): book_order → integer

### workshop

- Slug: /talleres/ (traducible según idioma)
- Tiene archive
- Soporta: title, editor, excerpt, thumbnail, revisions, custom-fields
- Taxonomías: topic, period
- Campos: workshop_start_date, workshop_end_date, workshop_place, workshop_status, workshop_signup_url, workshop_program_pdf (opcional)
- Relación: workshop_book → book (0 o 1)

### post

- Slug: /blog/
- Tiene archive
- Soporta: title, editor, excerpt, thumbnail, revisions
- Uso: artículos, notas, textos circunstanciales
- Taxonomías: topic, period

### page

- Uso: Inicio, Sobre el autor, Archivo, Correspondencia, Contacto, Servicios editoriales, Prensa, Derechos
- Soporta: title, editor, excerpt, thumbnail
- Sin taxonomías

---

## 4. Relaciones

Relaciones mínimas que crean lectura en profundidad. Las relaciones con book son opcionales.

- poem → book
- essay → book
- story → book
- workshop → book

Implementadas como campos de relación (post ID) hacia book. No existen ciclos, series ni capas adicionales.

Las ediciones no participan en las relaciones del sistema: el vínculo siempre es hacia la obra (`book`), no hacia una edición concreta.

---

## 5. Idiomas y URLs

Idiomas gestionados por plugin de traducción. Prefijo por idioma: /es/, /en/

Las rutas base se mantienen iguales entre idiomas, salvo slugs traducibles como /talleres/.

Ejemplos: /es/poem/slug, /en/book/slug, /es/talleres/slug

No existe taxonomía de idioma.

---

## 6. Plantillas mínimas

Solo lo necesario para mostrar la obra:

- single-poem, archive-poem
- single-book, archive-book
- single-essay, archive-essay
- single-story, archive-story
- single-workshop, archive-workshop
- single.php, archive.php (post/blog)
- front-page.php
- page.php
- taxonomy-topic.php, taxonomy-period.php (fallback: archive.php)

`single-book` debe poder imprimir varias ediciones dentro de la misma página: cubierta, ficha editorial, enlaces externos y descargas por edición cuando existan.

No hay plantillas especiales para taxonomías; las de topic y period usan archive.php como base.

---

## 7. Contenido enriquecido dentro del editor

Ver `03-arquitectura-editorial` §3.1. Algunos temas (ajedrez es el primer caso real) necesitan estructura dentro del cuerpo de un `essay` o `post`, más allá de lo que resuelve el editor de texto enriquecido estándar. Esto se implementa como **bloques Gutenberg personalizados**, no como CPT ni taxonomía nueva — el contenido sigue viviendo dentro de `essay`/`post`, clasificado por `topic=ajedrez` como cualquier otra pieza.

### 7.1 Bloque: Notación de ajedrez

- Nombre: `danielarella/chess-notation`
- Categoría de bloque: Texto
- Atributos: `notation` (RichText, notación algebraica en texto plano)
- Render: `<p class="chess-notation">{notation}</p>`
- Sin JavaScript en el frontend; el bloque solo estructura texto.

### 7.2 Bloque: Diagrama de tablero

- Nombre: `danielarella/chess-diagram`
- Categoría de bloque: Medios
- Atributos: `image` (media, obligatorio), `alt` (string, **obligatorio, sin valor por defecto**), `caption` (string)
- Render: `<figure class="chess-diagram"><img src="{image}" alt="{alt}">{caption && <figcaption>{caption}</figcaption>}</figure>`
- Validación editorial: el bloque no debe poder publicarse con `alt` vacío — quien no puede ver el diagrama depende enteramente de ese texto para entender la posición.

### 7.3 Bloque: Ejercicio de ajedrez

- Nombre: `danielarella/chess-exercise`
- Categoría de bloque: Texto
- Atributos:
  - `level` (select: `Principiante` | `Intermedio` | `Avanzado`) — vive en el bloque, no en el post; una pieza puede tener varios ejercicios de dificultad distinta
  - `prompt` (RichText, planteamiento del reto)
  - `diagram` (InnerBlocks, opcional — permite anidar el bloque Diagrama de tablero)
  - `solutionNotation` (RichText, notación de la solución)
  - `solutionText` (RichText, explicación breve)
- Render: `<details class="chess-exercise__solution"><summary>Ver solución</summary>…</details>` — disclosure nativo, sin JavaScript, operable por teclado.

### 7.4 Regla general para bloques personalizados futuros

Si aparece otro tema con necesidades estructurales similares (partituras, fórmulas, diagramas técnicos), se resuelve con el mismo patrón: bloque Gutenberg nuevo dentro de `essay`/`post` existentes, nunca un CPT o taxonomía nueva. Un bloque no debe depender de JavaScript en el frontend salvo que la interacción sea imprescindible (no es el caso de ninguno de los tres bloques de ajedrez).

---

## 8. Principio rector

Todo en este modelo existe para una sola cosa: que la obra pueda leerse, encontrarse y recorrerse sin ruido.

No hay capas para marketing, funnels ni growth. Solo obra, libros, pensamiento y lectores.

