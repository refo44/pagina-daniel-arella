# Daniel Arella — Arquitectura editorial v2.0

Esta capa se apoya en la identidad corporativa. No la reemplaza; la vuelve funcional. Define **cómo existe la obra dentro de WordPress como sistema**, no como posts sueltos. Su función es que el lector pueda recorrer un corpus sencillo, legible y navegable.

---

## 1. Entidades principales (qué existe)

Solo se modelan los tipos de contenido que el lector realmente necesita:

| Tipo        | Qué representa                                       |
|------------|-------------------------------------------------------|
| **Poem**   | Poema individual                                     |
| **Book**   | Libro o manuscrito (puede reunir poemas, ensayos, relatos) |
| **Essay**  | Texto filosófico o crítico                           |
| **Story**  | Relato o pieza narrativa                             |
| **Workshop** | Taller o curso vinculado a la obra                 |
| **Article** | Artículos o notas de blog                          |
| **Page**   | Inicio, Sobre el autor, Archivo, Contacto, etc.      |

En WordPress: `poem`, `book`, `essay`, `story`, `workshop` son **Custom Post Types**; `page` y `post` son tipos nativos. `post` se usa para **Article** (blog / notas).

No se crean tipos adicionales para ciclos, series o estados. Esos conceptos se resuelven con texto editorial y relaciones simples.

---

## 2. Qué **no** es un Post

El tipo nativo **Post** solo se usa para: Artículos, Noticias, Notas, Actualizaciones. **Nunca** para poemas ni libros. Así se mantiene la **obra** separada del ruido temporal.

---

## 3. Taxonomías (cómo se organiza)

Se reduce la clasificación a lo mínimo que mejora lectura y archivo.

**Globales:** `topic` (Tema), `period` (Periodo). Se aplican a poem, book, essay, story, post, workshop.

No se añaden taxonomías para idioma (plugin de traducción), ni para estados internos, editorial, formato o modalidad; se resuelven con campos de texto.

---

## 4. Relaciones (cómo se conectan las piezas)

Solo se modelan las relaciones que crean caminos de lectura claros:

- **Poem** → puede pertenecer a un **Book**.
- **Essay** → puede pertenecer a un **Book**.
- **Story** → puede pertenecer a un **Book**.
- **Workshop** → puede estar vinculado a un **Book** (si el taller gira en torno a él).

Se implementan con campos de relación simples (ACF, Meta Box o código propio). Los ciclos o conjuntos de poemas se narran editorialmente en la página del libro o con enlaces entre poemas; no se crea un tipo Poem Cycle ni taxonomías específicas.

---

## 5. Navegación editorial

Cada tipo tiene rutas claras y predecibles:

| Tipo     | Patrón de URL        |
|----------|----------------------|
| Poem     | `/poem/slug`         |
| Book     | `/book/slug`         |
| Essay    | `/essay/slug`        |
| Story    | `/story/slug`        |
| Article  | `/blog/slug`         |
| Workshop | `/talleres/slug`     |

Con soporte **multilingüe**, las URLs se prefijan por idioma (ej. `/es/poem/slug`, `/en/poem/slug`).

**Enlaces contextuales:** “Este poema pertenece a: [Libro]”, “Abrir el libro”, “Más ensayos sobre este tema”.

---

## 6. Editorial Home

La página de inicio **no** es un feed ni una portada congelada. Es una **superficie viva** que responde a una sola idea:

> “Esta es la obra que estoy escribiendo ahora.”

**Qué muestra el home:** Libro activo (obra en curso), Poema destacado, Ensayo reciente, Taller próximo, acceso claro al Archivo. **La obra primero. El tiempo después.**

**Relación directa:** El centro de la relación con el lector es el **email**. Llamadas como “Recibir nuevos textos”, “Carta del autor”; nunca “Suscríbete”, “Newsletter”. La implementación vive en la Estrategia de publicación.

**Prueba social:** Editoriales, revistas, premios y prensa viven en las páginas de Book, Sobre el autor y Prensa/Contacto; no son el mensaje principal del Home.

---

## 7. Archivo como biblioteca

El archivo debe poder verse por **tipo** (poemas, libros, ensayos, relatos), por **tema** (`topic`) y por **periodo** (`period`). No solo por fecha. Los filtros visibles se mantienen pocos y claros.

---

## 8. Descargas y derechos

En las páginas de **Book** se concentran: descargas (PDF, EPUB si existen), datos básicos de edición (editorial, año, ISBN) como campos simples, y un aviso breve de **derechos**. Sin sistemas complejos de licencias.

---

## 9. Multilingüe e internacionalización (i18n)

El sitio soporta **múltiples idiomas** sin cambiar el modelo de contenido. Lenguas principales: **español (es)** e **inglés (en)**.

**Principios:** Contenido por idioma (plugin de traducción); UI traducible (gettext / `.pot`); añadir idioma = locale + traducciones, sin tocar CPTs ni taxonomías.

**URLs:** Prefijo por locale (`/es/...`, `/en/...`). Raíz `/` puede redirigir al idioma por defecto o mostrar selector. Uso de `hreflang` y selector de idioma.

**Qué se traduce:** Páginas clave, fichas de Book y Workshop, bio, selección de poemas y ensayos. Términos de topic/period pueden traducirse o mantenerse en un idioma.

La tipografía y el layout de `02-identidad-corporativa` aplican en todos los idiomas.

---

## 10. Qué le da esto a Daniel Arella

Esta arquitectura permite: tratar la obra como un **corpus**; no perder poemas en un feed; publicar **libros web** y fragmentos; mantener el sitio legible aunque la obra crezca; sostener varios idiomas sin inflar el modelo. Es un sistema mínimo para una plataforma de autor.

---

**Versión del documento:** 2.0  
**Depende de:** `02-identidad-corporativa`  
**Alimenta a:** `04-wordpress-content-model` y a la implementación del theme.
