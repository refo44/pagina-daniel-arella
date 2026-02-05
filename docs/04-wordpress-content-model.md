# Daniel Arella — WordPress Content Model

**Versión 2.1**

Modelo mínimo de contenido para la plataforma de autor. Claves técnicas en inglés, etiquetas visibles traducidas vía i18n. Suficiente para desarrollo, legible para el autor.

**Depende de:** `02-identidad-corporativa`, `03-arquitectura-editorial`

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
| page | Páginas | por página | Inicio, Sobre, Archivo, Contacto |

post existe solo para notas y artículos. La obra vive en poem, book, essay, story y workshop.

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

### poem

- Slug: /poem/
- Tiene archivo
- Soporta: title, editor, excerpt, thumbnail, revisions, custom-fields
- Taxonomías: topic, period
- Relación: poem_book → book (0 o 1)

### book

- Slug: /book/
- Tiene archivo
- Soporta: title, editor, excerpt, thumbnail, revisions, custom-fields
- Taxonomías: topic, period
- Campos: book_year, book_publisher, book_isbn, book_pdf, book_epub, book_buy_link

### essay

- Slug: /essay/
- Tiene archivo
- Soporta: title, editor, excerpt, thumbnail, revisions, custom-fields
- Taxonomías: topic, period
- Campos: essay_abstract
- Relación: essay_book → book (0 o 1)

### story

- Slug: /story/
- Tiene archivo
- Soporta: title, editor, excerpt, thumbnail, revisions, custom-fields
- Taxonomías: topic, period
- Relación: story_book → book (0 o 1)

### workshop

- Slug: /talleres/
- Tiene archivo
- Soporta: title, editor, excerpt, thumbnail, revisions, custom-fields
- Taxonomías: topic, period
- Campos: workshop_start_date, workshop_end_date, workshop_place, workshop_status, workshop_signup_url
- Relación: workshop_book → book (0 o 1)

### post

- Slug: /blog/
- Uso: artículos, notas, textos circunstanciales
- Taxonomías: topic, period

### page

- Uso: Inicio, Sobre el autor, Archivo, Correspondencia, Contacto, Prensa, Derechos
- Sin taxonomías

---

## 4. Relaciones

Relaciones mínimas que crean lectura en profundidad:

- poem → book
- essay → book
- story → book
- workshop → book

Implementadas como campos de relación simples. No existen ciclos, series ni capas adicionales.

---

## 5. Idiomas y URLs

Idiomas gestionados por plugin de traducción. Prefijo por idioma: /es/, /en/

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
- front-page
- page

No hay plantillas especiales para taxonomías que no existen.

---

## 7. Principio rector

Todo en este modelo existe para una sola cosa: que la obra pueda leerse, encontrarse y recorrerse sin ruido.

No hay capas para marketing, funnels ni growth. Solo obra, libros, pensamiento y lectores.

---

**Versión del documento:** 2.1
