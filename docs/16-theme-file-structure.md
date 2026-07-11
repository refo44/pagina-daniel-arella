# Daniel Arella — Theme File Structure

**Estructura de archivos del theme WordPress**  
**Versión 1.6**

Este documento define la arquitectura definitiva de archivos del theme: qué plantillas existen, qué URLs sirven y qué bloques se reutilizan. Es el punto donde la arquitectura editorial se vuelve código sin que WordPress imponga un modelo de blog.

No es un theme genérico. Es una biblioteca de obra. Esta estructura es la barrera que evita que poemas, libros y ensayos se conviertan en posts y que el archivo se vuelva un feed.

**Se apoya en:** `01-plataforma-autor-plan`, `03-arquitectura-editorial`, `04-wordpress-content-model`, `05-mapa-pantallas`, `14-arquitectura-informacion-navegacion`, `15-arbol-urls-final`, `13-wireframes`, `22-tendencias-ux-ui-sistema-editorial`  
**Alimenta a:** `17-static-file-structure`

---

## 1. Qué problema resuelve

Ya están definidos:

- Tipos de contenido
- Pantallas
- Navegación
- Rutas reales

WordPress decide plantillas por convención. Si no se fija una estructura, el sistema fuerza un modelo de blog.

Este documento convierte en archivos PHP concretos:

- La arquitectura editorial
- El mapa de pantallas
- El user journey
- El árbol de URLs

El theme deja de ser una piel y se convierte en una máquina editorial.

---

## 2. Plantillas por tipo de obra

Cada tipo de obra tiene su propia plantilla de lectura y su propio archivo. Nunca se mezclan.

| CPT | Single | Archivo |
|-----|--------|---------|
| poem | `single-poem.php` | `archive-poem.php` |
| book | `single-book.php` | `archive-book.php` |
| essay | `single-essay.php` | `archive-essay.php` |
| story | `single-story.php` | `archive-story.php` |
| workshop | `single-workshop.php` | `archive-workshop.php` |
| post (blog) | `single.php` | `home.php` |

El listado de Artículos usa `home.php` en lugar de `archive-post.php`, porque WordPress resuelve las entradas nativas mediante la plantilla del blog. Esto garantiza que cada género conserve su forma y jerarquía.

`single-book.php` y `single.php` cargan `comments.php` después del contenido editorial. Ninguna otra plantilla individual muestra comentarios.

---

## 3. Plantillas editoriales

Pantallas que existen por función, no por tipo de contenido.

| Función | Plantilla |
|---------|-----------|
| Home | `front-page.php` |
| Archivo | `page-archivo.php` |
| Sobre el autor | `page-sobre-el-autor.php` |
| Correspondencia | `page-correspondencia.php` |
| Contacto | `page-contacto.php` |
| Servicios editoriales | `page-servicios-editoriales.php` |
| Prensa | `page-prensa.php` |
| Derechos | `page-derechos.php` |
| Biblioteca de audio | `page-biblioteca-audio.php` |
| Videoteca | `page-videoteca.php` |

Cada idioma tiene su propia página con su slug, pero usan la misma plantilla.

---

## 4. Plantillas de taxonomías

Los filtros editoriales también son vistas con jerarquía propia.

| Taxonomía | Plantilla |
|-----------|-----------|
| tema | `taxonomy-topic.php` |
| periodo | `taxonomy-period.php` |
| forma (opcional) | `taxonomy-form.php` |

Estas vistas funcionan como archivos filtrados, no como páginas sueltas. Las taxonomías usan claves internas en inglés (topic, period, form), aunque los slugs públicos estén en español.

---

## 5. Estados del sistema

No tienen URL propia. Son respuestas a una ruta.

| Estado | Archivo |
|--------|---------|
| No existe | `404.php` |
| Sin resultados | Dentro de `archive-*` y `taxonomy-*` |
| Archivo vacío | Dentro de `archive-*` |

El texto y los enlaces de salida se toman de `10-ui-copy-sheet` y `14-arquitectura-informacion-navegacion`.

---

## 6. Partes reutilizables

Componentes estructurales que se comparten entre plantillas.

| Archivo | Función |
|---------|---------|
| `comments.php` | Lista, paginación y formulario de comentarios para libros y artículos |
| `header.php` | Cabecera y navegación global |
| `footer.php` | Pie editorial |
| `parts/navigation.php` | Menú |
| `parts/breadcrumb.php` | Migas de navegación |
| `parts/poem-card.php` | Tarjeta poema |
| `parts/book-card.php` | Tarjeta libro |
| `parts/book-edition-card.php` | Tarjeta de edición dentro de single-book |
| `parts/essay-card.php` | Tarjeta ensayo |
| `parts/story-card.php` | Tarjeta relato |
| `parts/workshop-card.php` | Tarjeta taller |
| `parts/article-card.php` | Tarjeta artículo |
| `parts/quote-block.php` | Cita o fragmento editorial reutilizable |
| `parts/goodreads-link.php` | Enlace editorial externo opcional |

Todo listado y todo home se arma con estas piezas.

---

## 7. Árbol real del theme

```
theme-daniel-arella/
├── style.css
├── functions.php
├── .stylelintrc.json
├── package.json
├── index.php
├── header.php
├── footer.php
├── comments.php
├── front-page.php
├── single-poem.php
├── single-book.php
├── single-essay.php
├── single-story.php
├── single-workshop.php
├── single.php
├── archive-poem.php
├── archive-book.php
├── archive-essay.php
├── archive-story.php
├── archive-workshop.php
├── home.php
├── page-archivo.php
├── page-sobre-el-autor.php
├── page-correspondencia.php
├── page-contacto.php
├── page-servicios-editoriales.php
├── page-prensa.php
├── page-derechos.php
├── page-biblioteca-audio.php
├── page-videoteca.php
├── page.php
├── taxonomy-topic.php
├── taxonomy-period.php
├── taxonomy-form.php
├── 404.php
├── search.php
└── parts/
    ├── navigation.php
    ├── breadcrumb.php
    ├── poem-card.php
    ├── book-card.php
    ├── book-edition-card.php
    ├── essay-card.php
    ├── story-card.php
    ├── workshop-card.php
    ├── article-card.php
    ├── quote-block.php
    └── goodreads-link.php
```

`taxonomy-form.php` solo se incluye si se activa la taxonomía form. `parts/article-card.php` también es opcional (se usa solo para el CPT post). `parts/book-edition-card.php` existe para imprimir varias ediciones dentro de `single-book.php` sin duplicar markup.

`index.php` actúa como fallback de WordPress y no se usa para rutas editoriales. `page.php` funciona como fallback para páginas que no tengan plantilla editorial específica. `search.php` existe como plantilla de respaldo para búsquedas del sistema, aunque la búsqueda editorial se integra dentro del Archivo.

---

Todas las URLs usan trailing slash final.

---

## 8. URL → plantilla

| Ruta | Archivo |
|------|---------|
| `/es/` | `front-page.php` |
| `/es/archivo/` | `page-archivo.php` |
| `/es/sobre-el-autor/` | `page-sobre-el-autor.php` |
| `/es/correspondencia/` | `page-correspondencia.php` |
| `/es/contacto/` | `page-contacto.php` |
| `/es/servicios-editoriales/` | `page-servicios-editoriales.php` |
| `/es/poem/` | `archive-poem.php` |
| `/es/poem/{slug}/` | `single-poem.php` |
| `/es/book/` | `archive-book.php` |
| `/es/book/{slug}/` | `single-book.php` |
| `/es/essay/` | `archive-essay.php` |
| `/es/essay/{slug}/` | `single-essay.php` |
| `/es/story/` | `archive-story.php` |
| `/es/story/{slug}/` | `single-story.php` |
| `/es/talleres/` | `archive-workshop.php` |
| `/es/talleres/{slug}/` | `single-workshop.php` |
| `/es/blog/` | `home.php` |
| `/es/blog/{slug}/` | `single.php` |
| `/es/tema/{slug}/` | `taxonomy-topic.php` |
| `/es/periodo/{slug}/` | `taxonomy-period.php` |
| `/es/forma/{slug}/` | `taxonomy-form.php` |
| `/es/prensa/` | `page-prensa.php` |
| `/es/derechos/` | `page-derechos.php` |
| `/es/biblioteca-audio/` | `page-biblioteca-audio.php` |
| `/es/videoteca/` | `page-videoteca.php` |
| Cualquier otra | `404.php` |

Las rutas `/en/` usan exactamente las mismas plantillas. Los slugs públicos cambian cuando corresponde: `/en/about/`, `/en/contact/`, `/en/archive/`, `/en/workshops/`, `/en/audio-library/`, `/en/video-library/`, etc. Las páginas fijas traducidas conservan la misma relación plantilla → ruta con sus slugs equivalentes.

Las ediciones de un libro no tienen plantilla ni URL propias. Se resuelven dentro de `single-book.php` mediante campos repetibles y `parts/book-edition-card.php`.

---

## 9. theme.json y control editorial

**Según 22-tendencias-ux-ui-sistema-editorial:** `theme.json` debe bloquear paleta y tipografías; el editor no habilita estilos libres ni bloques con animación en contenido.

- Paleta: solo los 6 colores de marca y roles semánticos de `02-identidad-corporativa`.
- Tipografías: Fraunces, Source Sans 3. Sin familias adicionales.
- Sin bloques de animación en área de lectura.

### 9.1 Stylelint

El CSS del theme se valida con Stylelint.

- **Configuración:** `.stylelintrc.json` en la raíz del theme.
- **Reglas definidas en:** `18-css-architecture`.
- **Archivos validados:** `style.css` y `css/**/*.css`.

Script recomendado en `package.json`:

```json
"lint:css": "stylelint \"css/**/*.css\" \"style.css\""
```

Stylelint asegura que el CSS respete ITCSS, BEM, tokens CSS y restricciones editoriales del sistema.

---

## 10. Regla de oro

- No usar plantillas genéricas para tipos editoriales.
- No inventar rutas fuera del árbol de URLs.
- No añadir bloques o enlaces que no estén en la arquitectura de navegación.
- No duplicar markup fuera de parts.

Si se respeta esta estructura, WordPress deja de ser un CMS y se convierte en una máquina de lectura.

Validación CSS: `18-css-architecture` (Stylelint).
