# Daniel Arella — WordPress Content Model

**Versión 2.4**

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
| page | Páginas | por página | Inicio, Archivo, Sobre el autor, Correspondencia, Contacto, Prensa, Derechos |

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

No existen taxonomías de idioma, formato, editorial ni estado. Esos datos viven en campos simples o en el sistema de traducción.

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
- Campos: book_year, book_publisher, book_isbn, book_pdf, book_epub, book_buy_url
- Los contenidos del libro se ordenan manualmente.

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
- Campos: workshop_start_date, workshop_end_date, workshop_place, workshop_status, workshop_signup_url
- Relación: workshop_book → book (0 o 1)

### post

- Slug: /blog/
- Tiene archive
- Soporta: title, editor, excerpt, thumbnail, revisions
- Uso: artículos, notas, textos circunstanciales
- Taxonomías: topic, period

### page

- Uso: Inicio, Sobre el autor, Archivo, Correspondencia, Contacto, Prensa, Derechos
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

No hay plantillas especiales para taxonomías; las de topic y period usan archive.php como base.

---

## 7. Principio rector

Todo en este modelo existe para una sola cosa: que la obra pueda leerse, encontrarse y recorrerse sin ruido.

No hay capas para marketing, funnels ni growth. Solo obra, libros, pensamiento y lectores.

