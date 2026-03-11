# Daniel Arella — Estructura estática (HTML/CSS)

**Estructura de archivos del sitio previo a WordPress**  
**Versión 1.3**

Este documento define la arquitectura definitiva de la maqueta estática. Todo lo que aquí existe tiene correspondencia directa con una plantilla del theme WordPress. No se rediseña después, solo se traduce.

Misma arquitectura editorial, mismas pantallas, mismas rutas. Solo cambia el motor: archivos HTML hoy, PHP con WordPress después.

**Se apoya en:** `01-plataforma-autor-plan`, `13-wireframes`, `14-arquitectura-informacion-navegacion`, `15-arbol-urls-final`, `16-theme-file-structure`, `18-css-architecture`, `22-tendencias-ux-ui-sistema-editorial`

---

## 1. Para qué sirve esta estructura

Esta estructura garantiza que:

- El sitio se pueda validar como experiencia real antes de tocar WordPress.
- Las rutas que pruebes en GitHub Pages serán exactamente las del servidor final.
- Cada HTML se convertirá luego en una plantilla PHP sin reinterpretaciones.
- El CSS y los bloques se reciclan sin rehacerlos.

Migrar no es rediseñar. Migrar es cambiar de motor.

---

## 2. Regla de rutas

Se trabaja en un solo idioma en la maqueta inicial. La raíz del proyecto es la raíz del sitio.

- `/archivo/` → `archivo/index.html`
- `/poem/` → `poem/index.html`
- `/poem/mi-poema` → `poem/mi-poema.html`

Las URLs públicas no muestran extensiones cuando el recurso es una carpeta con index.html. Las fichas individuales pueden usar `{slug}.html` en la maqueta.

En WordPress las fichas pasarán a `/poem/{slug}/`. En la maqueta estática se usan archivos `{slug}.html`.

La maqueta inicial funciona sin prefijo de idioma. Cuando se añadan idiomas, todo el árbol se moverá bajo `/es/` y `/en/`.

---

Todas las rutas usan trailing slash cuando corresponden a carpetas.

---

## 3. Árbol de archivos estáticos

```
daniel-arella-static/
├── index.html
├── 404.html
├── sitemap.html          (opcional; útil para revisar estructura)
│
├── archivo/
│   └── index.html
├── sobre-el-autor/
│   └── index.html
├── correspondencia/
│   └── index.html
├── contacto/
│   └── index.html
├── prensa/
│   └── index.html
├── derechos/
│   └── index.html
│
├── biblioteca-audio/
│   └── index.html
├── videoteca/
│   └── index.html
├── multimedia/
│   └── index.html          (Videos, Audios, Reels)
│
├── poem/
│   ├── index.html
│   └── {slug}.html
├── book/
│   ├── index.html
│   └── {slug}.html
├── essay/
│   ├── index.html
│   └── {slug}.html
├── story/
│   ├── index.html
│   └── {slug}.html
├── talleres/
│   ├── index.html
│   └── {slug}.html
├── blog/
│   ├── index.html
│   └── {slug}.html
│
├── tema/
│   └── {slug}/
│       └── index.html
├── periodo/
│   └── {slug}/
│       └── index.html
├── forma/
│   └── {slug}/
│       └── index.html
│
├── assets/
│   ├── css/
│   │   ├── main.css          (único entry point; importa el resto en orden ITCSS)
│   │   ├── settings.css
│   │   ├── generic.css
│   │   ├── elements.css
│   │   ├── objects.css
│   │   ├── components.css
│   │   └── utilities.css
│   ├── js/
│   │   └── main.js         (defer; solo navegación, formularios, accesibilidad)
│   ├── images/
│   ├── icons/              (Lucide Icons)
│   ├── illustrations/      (Open Doodles)
│   ├── svg/
│   ├── fonts/
│   └── favicon/
│
└── parts/
    ├── header.html
    ├── footer.html
    ├── navigation.html
    ├── breadcrumb.html
    ├── poem-card.html
    ├── book-card.html
    ├── essay-card.html
    ├── story-card.html
    ├── workshop-card.html
    └── article-card.html
```

La carpeta `forma/` solo existe si se implementa la taxonomía form. No se permite JavaScript para animaciones en contenido de lectura (doc 22). Nada más. Nada menos.

---

## 4. Páginas editoriales

| Función | HTML | Luego será |
|---------|------|------------|
| Home | `/index.html` | `front-page.php` |
| Archivo | `/archivo/index.html` | `page-archivo.php` |
| Sobre el autor | `/sobre-el-autor/index.html` | `page-sobre-el-autor.php` |
| Correspondencia | `/correspondencia/index.html` | `page-correspondencia.php` |
| Contacto | `/contacto/index.html` | `page-contacto.php` |
| Prensa | `/prensa/index.html` | `page-prensa.php` |
| Derechos | `/derechos/index.html` | `page-derechos.php` |
| Biblioteca de audio | `/biblioteca-audio/index.html` | `page-biblioteca-audio.php` |
| Videoteca | `/videoteca/index.html` | `page-videoteca.php` |
| Multimedia (Videos, Audios, Reels) | `/multimedia/index.html` | `page-multimedia.php` |

---

## 5. Tipos de obra

Cada tipo es una carpeta con su archivo y sus piezas.

| Tipo | Listado | Ficha |
|------|---------|-------|
| poem | `/poem/index.html` | `/poem/{slug}.html` |
| book | `/book/index.html` | `/book/{slug}.html` |
| essay | `/essay/index.html` | `/essay/{slug}.html` |
| story | `/story/index.html` | `/story/{slug}.html` |
| workshop | `/talleres/index.html` | `/talleres/{slug}.html` |
| blog (artículos) | `/blog/index.html` | `/blog/{slug}.html` |

El CPT interno es workshop pero el slug público es `/talleres/`. No existen URLs fuera de esto.

---

## 6. Tema, Periodo y Forma

Son archivos filtrados.

| Vista | Ruta |
|-------|------|
| tema | `/tema/{slug}/` |
| periodo | `/periodo/{slug}/` |
| forma (opcional) | `/forma/{slug}/` |

Usan el mismo layout que un archivo por tipo. Forma se añade solo si se implementa (`03-arquitectura-editorial`).

---

## 7. Bloques reutilizables

Todo se arma con piezas. No se duplica estructura.

Durante la maqueta estos archivos se insertan manualmente o mediante un preprocesador (Vite, Eleventy, Astro).

| Parte | Uso |
|-------|-----|
| header.html | Cabecera |
| navigation.html | Menú |
| breadcrumb.html | Ruta |
| footer.html | Pie |
| poem-card.html | Tarjeta poema |
| book-card.html | Tarjeta libro |
| essay-card.html | Tarjeta ensayo |
| story-card.html | Tarjeta relato |
| workshop-card.html | Tarjeta taller |
| article-card.html | Tarjeta artículo |
| quote-block.html | Bloque de cita (texto + atribución). Reutilizable para citas de libros del autor o de otros. |
| goodreads-link.html | Enlace a Goodreads para fichas de libro. |

`article-card.html` se usa solo para el CPT post (Artículos). `quote-block` y `goodreads-link` se incluyen en singles de libro según corresponda. En WordPress estos se convierten en `get_template_part()`.

---

## 8. CSS

**Regla (22-tendencias-ux-ui-sistema-editorial):** 1 CSS principal (`main.css` importa todo). Sin fragmentos dispersos.

El HTML solo carga `main.css`. Los demás archivos se importan dentro de `main.css`.

Los nombres de clase deben ser semánticos y editoriales, no genéricos.

**Ejemplos correctos:**

- `.poem-card`
- `.archive-list`
- `.book-header`
- `.breadcrumbs`

**Ejemplos incorrectos:**

- `.post-item`
- `.sidebar`
- `.widget`

La maqueta ya debe hablar en el idioma del theme. Detalle de capas ITCSS, BEM, variables y roles semánticos en `18-css-architecture`. Stylelint (sección 9 de 18) valida el cumplimiento. Tokens y criterios en `22-tendencias-ux-ui-sistema-editorial`.

---

## 9. Migración directa

| HTML | PHP |
|------|-----|
| index.html | front-page.php |
| poem/index.html | archive-poem.php |
| poem/slug.html | single-poem.php |
| book/index.html | archive-book.php |
| book/slug.html | single-book.php |
| essay/index.html | archive-essay.php |
| essay/slug.html | single-essay.php |
| story/index.html | archive-story.php |
| story/slug.html | single-story.php |
| talleres/index.html | archive-workshop.php |
| talleres/slug.html | single-workshop.php |
| blog/index.html | home.php |
| blog/slug.html | single.php |
| tema/{slug}/index.html | taxonomy-topic.php |
| periodo/{slug}/index.html | taxonomy-period.php |
| forma/{slug}/index.html | taxonomy-form.php |
| 404.html | 404.php |

Migrar es copiar el markup y envolverlo con loops de WordPress. Nada se vuelve a pensar.

---

## 10. Regla final

Si algo no cabe en esta estructura, no pertenece al sitio.

- No se crean páginas experimentales.
- No se agregan secciones sin mapa.
- No se improvisan URLs.

La maqueta ya es la obra.

---

**Versión:** 1.3
