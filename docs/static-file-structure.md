# Daniel Arella — Estructura estática (HTML/CSS)

**Estructura de archivos del sitio previo a WordPress**

Este documento define la arquitectura definitiva de la maqueta estática. Todo lo que aquí existe tiene correspondencia directa con una plantilla del theme WordPress. No se rediseña después, solo se traduce.

Misma arquitectura editorial, mismas pantallas, mismas rutas. Solo cambia el motor: archivos HTML hoy, PHP con WordPress después.

**Depende de:** `theme-file-structure`, `arbol-urls-final`, `arquitectura-informacion-navegacion`, `wireframes`

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

No se usan extensiones en la URL pública. El servidor estático (GitHub Pages) sirve `index.html` por defecto dentro de cada carpeta.

Si luego se agregan idiomas, se duplica este árbol bajo `/es/` y `/en/`.

---

## 3. Árbol de archivos estáticos

```
daniel-arella-static/
├── index.html
├── 404.html
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
│
├── tema/
│   └── {slug}.html
├── periodo/
│   └── {slug}.html
│
├── css/
│   ├── main.css
│   ├── layout.css
│   └── components.css
│
├── js/
│   └── main.js
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── favicon/
│
└── parts/
    ├── header.html
    ├── footer.html
    ├── navigation.html
    ├── breadcrumbs.html
    ├── poem-card.html
    ├── book-card.html
    ├── essay-card.html
    ├── story-card.html
    └── workshop-card.html
```

Nada más. Nada menos.

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

No existen URLs fuera de esto.

---

## 6. Tema y Periodo

Son archivos filtrados.

| Vista | Ruta |
|-------|------|
| Tema | `/tema/{slug}.html` |
| Periodo | `/periodo/{slug}.html` |

Usan el mismo layout que un archivo por tipo.

---

## 7. Bloques reutilizables

Todo se arma con piezas. No se duplica estructura.

| Parte | Uso |
|-------|-----|
| header.html | Cabecera |
| navigation.html | Menú |
| breadcrumbs.html | Ruta |
| footer.html | Pie |
| poem-card.html | Tarjeta poema |
| book-card.html | Tarjeta libro |
| essay-card.html | Tarjeta ensayo |
| story-card.html | Tarjeta relato |
| workshop-card.html | Tarjeta taller |

En WordPress estos se convierten en `get_template_part()`.

---

## 8. CSS

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

La maqueta ya debe hablar en el idioma del theme. Detalle de capas, BEM y variables en `css-architecture.md`.

---

## 9. Migración directa

| HTML | PHP |
|------|-----|
| index.html | front-page.php |
| poem/index.html | archive-poem.php |
| poem/slug.html | single-poem.php |
| tema/memoria.html | taxonomy-topic.php |
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

**Versión:** 1.1
