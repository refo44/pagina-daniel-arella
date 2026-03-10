# Daniel Arella — Theme File Structure

**Estructura de archivos del theme WordPress**  
**Versión 1.3**

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
| post (blog) | `single.php` | `archive.php` |

Esto garantiza que cada género conserve su forma y jerarquía.

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
| Tema | `taxonomy-topic.php` |
| Periodo | `taxonomy-period.php` |
| Forma (opcional) | `taxonomy-form.php` |

Estas vistas funcionan como archivos filtrados, no como páginas sueltas. Forma se añade solo si se implementa (`03-arquitectura-editorial`).

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
| `parts/header.php` | Cabecera y navegación global |
| `parts/footer.php` | Pie editorial |
| `parts/navigation.php` | Menú |
| `parts/breadcrumbs.php` | Migas de navegación |
| `parts/poem-card.php` | Tarjeta poema |
| `parts/book-card.php` | Tarjeta libro |
| `parts/essay-card.php` | Tarjeta ensayo |
| `parts/story-card.php` | Tarjeta relato |
| `parts/workshop-card.php` | Tarjeta taller |
| `parts/article-card.php` | Tarjeta artículo |

Todo listado y todo home se arma con estas piezas.

---

## 7. Árbol real del theme

```
theme-daniel-arella/
├── style.css
├── functions.php
├── index.php
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
├── archive.php
├── page-archivo.php
├── page-sobre-el-autor.php
├── page-correspondencia.php
├── page-contacto.php
├── page-prensa.php
├── page-derechos.php
├── page-biblioteca-audio.php
├── page-videoteca.php
├── page.php
├── taxonomy-topic.php
├── taxonomy-period.php
├── taxonomy-form.php
├── 404.php
└── parts/
    ├── header.php
    ├── footer.php
    ├── navigation.php
    ├── breadcrumbs.php
    ├── poem-card.php
    ├── book-card.php
    ├── essay-card.php
    ├── story-card.php
    ├── workshop-card.php
    └── article-card.php
```

`taxonomy-form.php` y `article-card.php` son opcionales; se añaden cuando se implementan. Nada más. Nada menos.

---

## 8. URL → plantilla

| Ruta | Archivo |
|------|---------|
| `/es/` | `front-page.php` |
| `/es/archivo/` | `page-archivo.php` |
| `/es/sobre-el-autor/` | `page-sobre-el-autor.php` |
| `/es/correspondencia/` | `page-correspondencia.php` |
| `/es/contacto/` | `page-contacto.php` |
| `/es/poem/` | `archive-poem.php` |
| `/es/poem/slug` | `single-poem.php` |
| `/es/book/` | `archive-book.php` |
| `/es/book/slug` | `single-book.php` |
| `/es/essay/` | `archive-essay.php` |
| `/es/essay/slug` | `single-essay.php` |
| `/es/story/` | `archive-story.php` |
| `/es/story/slug` | `single-story.php` |
| `/es/talleres/` | `archive-workshop.php` |
| `/es/talleres/slug` | `single-workshop.php` |
| `/es/blog/` | `archive.php` |
| `/es/blog/slug` | `single.php` |
| `/es/tema/slug` | `taxonomy-topic.php` |
| `/es/periodo/slug` | `taxonomy-period.php` |
| `/es/forma/slug` | `taxonomy-form.php` |
| `/es/prensa/` | `page-prensa.php` |
| `/es/derechos/` | `page-derechos.php` |
| `/es/biblioteca-audio/` | `page-biblioteca-audio.php` |
| `/es/videoteca/` | `page-videoteca.php` |
| Cualquier otra | `404.php` |

---

## 9. theme.json y control editorial

**Según 22-tendencias-ux-ui-sistema-editorial:** `theme.json` debe bloquear paleta y tipografías; el editor no habilita estilos libres ni bloques con animación en contenido.

- Paleta: solo los 5 colores de marca y roles semánticos de `02-identidad-corporativa`.
- Tipografías: Fraunces, Source Sans 3. Sin familias adicionales.
- Sin bloques de animación en área de lectura.

---

## 10. Regla de oro

- No usar plantillas genéricas para tipos editoriales.
- No inventar rutas fuera del árbol de URLs.
- No añadir bloques o enlaces que no estén en la arquitectura de navegación.
- No duplicar markup fuera de parts.

Si se respeta esta estructura, WordPress deja de ser un CMS y se convierte en una máquina de lectura.

---

**Versión:** 1.3
