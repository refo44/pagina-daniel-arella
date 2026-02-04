# Daniel Arella — WordPress Content Model v2.0

Modelo mínimo de contenido para la plataforma de autor. Claves técnicas en inglés; labels traducidos vía i18n. Legible para el autor y suficiente para el desarrollador.

**Depende de:** `identidad-corporativa.md`, `arquitectura-editorial.md`

---

## 1. Esquema general

### Custom Post Types

| CPT (key)  | Label ES   | Slug       | Uso principal                         |
|------------|------------|------------|----------------------------------------|
| poem       | Poemas     | /poem/     | Poemas individuales                   |
| book       | Libros     | /book/     | Libros o manuscritos                  |
| essay      | Ensayos    | /essay/    | Textos filosóficos o críticos         |
| story      | Relatos    | /story/    | Piezas narrativas                     |
| workshop   | Talleres   | /talleres/ | Talleres y cursos vinculados a la obra |
| post       | Artículos  | /blog/     | Notas de blog (opcional)              |
| page       | Páginas    | por página | Inicio, Sobre, Archivo, Contacto…     |

### Taxonomías

| Taxonomía (key) | Label ES | Tipo          | Uso                       |
|-----------------|----------|---------------|---------------------------|
| topic           | Tema     | jerárquica    | Temas y subtemas          |
| period          | Periodo  | jerárquica    | Etapas o periodos de obra |
| form (opcional) | Forma    | no jerárquica | Verso libre, prosa, fragmento |

Datos como editorial, formato, modalidad o idioma se gestionan con **campos simples** o con el plugin de traducción. No se crean taxonomías adicionales.

---

## 2. Definición de CPTs

### poem
- **Slug:** `/poem/`. **Has archive:** sí.
- **Supports:** title, editor, excerpt, thumbnail, revisions, custom-fields.
- **Taxonomías:** topic, period; form (opcional).
- **Relación:** campo opcional `poem_book` → book (0..1).

### book
- **Slug:** `/book/`. **Has archive:** sí.
- **Supports:** title, editor, excerpt, thumbnail, revisions, custom-fields.
- **Taxonomías:** topic, period.
- **Campos recomendados:** book_year, book_publisher, book_isbn, book_pdf, book_epub, book_buy_link.

### essay
- **Slug:** `/essay/`. **Has archive:** sí.
- **Supports:** title, editor, excerpt, thumbnail, revisions, custom-fields.
- **Taxonomías:** topic, period; form (opcional).
- **Relación:** essay_book → book (0..1). **Campo:** essay_abstract.

### story
- **Slug:** `/story/`. **Has archive:** sí.
- **Supports:** title, editor, excerpt, thumbnail, revisions, custom-fields.
- **Taxonomías:** topic, period; form (opcional).
- **Relación:** story_book → book (0..1).

### workshop
- **Slug:** `/talleres/` (o `/workshops/`). **Has archive:** sí.
- **Supports:** title, editor, excerpt, thumbnail, revisions, custom-fields.
- **Taxonomías:** topic (opcional); period (opcional).
- **Campos recomendados:** workshop_start_date, workshop_end_date, workshop_place, workshop_status (próximo / en curso / finalizado), workshop_signup_url.
- **Relación:** workshop_book → book (0..1).

### post
- **Slug:** `/blog/slug`. **Uso:** artículos o notas si Daniel los tiene. **Taxonomías:** topic, period; form (opcional).

### page
- **Uso:** Inicio, Sobre el autor, Archivo, Contacto, Correspondencia, Prensa, Derechos. Sin taxonomías por defecto.

---

## 3. Taxonomías (detalle)

### topic
- **Key:** topic. **Slug:** /tema/ o /topic/. **Tipo:** jerárquica.
- **Aplica a:** poem, book, essay, story, post, workshop.

### period
- **Key:** period. **Slug:** /periodo/. **Tipo:** jerárquica.
- **Aplica a:** poem, book, essay, story, post (y workshop si se desea).

### form (opcional)
- **Key:** form. **Slug:** /forma/. **Tipo:** no jerárquica.
- **Aplica a:** poem, essay, story, post. Solo si Daniel la usa de forma consistente.

---

## 4. Relaciones entre CPTs

- poem_book → book (0..1)
- essay_book → book (0..1)
- story_book → book (0..1)
- workshop_book → book (0..1)

Implementación con ACF, Meta Box o código propio. No se añaden más capas.

---

## 5. URLs e idiomas

- Prefijo de idioma: `/es/...`, `/en/...`. Plugin de traducción (Polylang, WPML) gestiona idioma por post/term. No es necesaria taxonomía de idioma.
- Ejemplos: `/es/poem/slug`, `/en/book/slug`, `/es/talleres/slug`, `/en/workshops/slug`.

---

## 6. Plantillas mínimas

- single-poem.php, archive-poem.php
- single-book.php, archive-book.php
- single-essay.php, archive-essay.php
- single-story.php, archive-story.php
- single-workshop.php, archive-workshop.php
- front-page.php (Home editorial), page.php

Cada template respeta la identidad editorial y la navegación definida en la arquitectura.

---

**Versión del documento:** 2.0
