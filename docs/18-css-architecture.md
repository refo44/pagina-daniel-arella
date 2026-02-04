# Daniel Arella — Arquitectura CSS

**Decisión técnica: CSS nativo con ITCSS + BEM + variables CSS**

Este documento define cómo se escribe y organiza el CSS del proyecto: maqueta estática primero, theme WordPress después. No hay Sass, no hay preprocesador, no hay framework. La misma estructura sirve para ambos.

Encaja con: maqueta estática, migración literal a WordPress, sistema editorial donde el layout no debe contaminar la obra.

**Depende de:** `17-17-static-file-structure`, `16-theme-file-structure`, `02-identidad-corporativa` (tokens de marca)

---

## 1. Decisión técnica final

**Frontend CSS:** CSS nativo con arquitectura ITCSS + convención BEM + variables CSS.

- **ITCSS** para ordenar capas y evitar que el CSS se convierta en una sopa al crecer.
- **BEM** para nombrar componentes de forma predecible y reutilizable en todas las plantillas.
- **Variables CSS** para tokens de diseño (tipografía, espaciados, colores) sin preprocesador.
- **Utilities** mínimas: pocas clases de una sola función, solo las que reduzcan repetición real.

No se usa: Sass, Tailwind, atomic design agresivo, Material Design, OOCSS sin capa de organización.

---

## 2. Por qué esta combinación

**ITCSS** da orden global. Define capas con un orden lógico de especificidad y alcance. Eso evita conflictos cuando el sitio crece (home, archive, singles, taxonomías) y hace el CSS predecible para WordPress.

**BEM** protege la semántica editorial. Evita cadenas largas (`.home .archive .card h2 a span`) y las reemplaza por clases explícitas (`.poem-card__title`, `.book-card__cover`). El mismo componente se usa en home, archivo, taxonomías y single sin cambiar de nombre.

**Variables CSS** sustituyen la mayor parte de lo que harías con Sass: tokens, consistencia, cambios globales sin buscar y reemplazar. WordPress y cualquier navegador las respetan.

---

## 3. Capas ITCSS (orden de importación)

En `css/main.css` se importan en este orden:

| Orden | Capa | Contenido |
|-------|------|-----------|
| 1 | **Settings** | Variables y tokens: tipografías, tamaños, espaciados, colores, breakpoints. |
| 2 | **Tools** | Helpers o mixins si hubiera preprocesador. En CSS nativo se omite. |
| 3 | **Generic** | Reset o normalize, `box-sizing`. |
| 4 | **Elements** | Estilos base para `body`, `a`, `h1`–`h6`, `p`, `blockquote`, etc. |
| 5 | **Objects** | Patrones de layout sin estética: contenedores, grid, flujo vertical. |
| 6 | **Components** | Bloques concretos: header, nav, cards, breadcrumbs, footer. |
| 7 | **Utilities** | Clases de una sola función, pocas y claras. |

La especificidad crece de abajo hacia arriba en la cascada; el orden de las capas evita que Objects y Components se pisen entre sí.

---

## 4. Estructura de archivos CSS

La misma estructura sirve para la maqueta estática y para el theme (donde todo puede compilarse o concatenarse en un solo `style.css`).

```
css/
├── settings.css     Variables, fuentes, colores, espaciados
├── generic.css      Reset / normalize
├── elements.css     body, h1–h6, p, a, blockquote
├── objects.css      Contenedores, grid, stack
├── components.css  poem-card, book-card, header, footer, breadcrumbs, nav
├── utilities.css    .u-visually-hidden, .u-muted, etc.
└── main.css         Importa todo en el orden ITCSS
```

En WordPress el theme puede exponer un único `style.css` con el mismo contenido (o los mismos archivos concatenados). No se cambian nombres de clases ni se recompila con otra herramienta.

---

## 5. Convención BEM para componentes

BEM: **B**lock **E**lement **M**odifier.

- **Block:** componente (ej. `poem-card`, `breadcrumbs`).
- **Element:** parte del bloque, con doble guion bajo: `poem-card__title`, `breadcrumbs__item`.
- **Modifier:** variación del bloque o elemento, con doble guion: `poem-card--featured`, `button--primary`.

Ejemplos alineados con la arquitectura editorial:

| Componente | Block | Elementos | Modificadores (solo si existen) |
|------------|--------|-----------|----------------------------------|
| Cabecera | `.site-header` | `__nav`, `__brand` | — |
| Archivo / listado | `.archive` | `__filters`, `__list` | `--by-topic` |
| Tarjeta poema | `.poem-card` | `__title`, `__excerpt` | `--featured` |
| Migas | `.breadcrumbs` | `__item`, `__link` | — |
| Ficha libro | `.book` | `__meta`, `__index` | — |

Reglas:

- Evitar BEM “profundo”. Máximo unos dos niveles suele bastar.
- Usar modificadores solo para variaciones reales (ej. `.poem-card--featured`), no para todo.
- No usar nombres genéricos de blog: `.post-item`, `.sidebar`, `.widget`. Usar nombres editoriales: `.poem-card`, `.archive-list`, `.book-header`.

---

## 6. Objects para el layout editorial

Objetos = patrones de layout sin estética. Prefijo sugerido: `o-`.

| Clase | Uso |
|-------|-----|
| `.o-container` | Ancho máximo, padding horizontal. |
| `.o-stack` | Espaciado vertical consistente entre hijos (ritmo vertical). |
| `.o-grid` | Listados en grid (archivos, tarjetas). |

El layout se mantiene estable en todas las plantillas sin duplicar reglas. La “obra” (títulos, textos, imágenes) vive dentro de Components; los Objects solo ordenan el espacio.

---

## 7. Utilities mínimas

Prefijo: `u-`. Solo clases que de verdad reduzcan repetición.

| Clase | Uso |
|-------|-----|
| `.u-visually-hidden` | Ocultar visualmente manteniendo accesibilidad (lectores de pantalla). |
| `.u-muted` | Tono tipográfico secundario (texto discreto). |
| `.u-center` | Centrado cuando aplique. |
| `.u-max-readable` | Ancho máximo de lectura (ej. 65ch). |

Si empiezas a crear muchas utilities (decenas), se acerca a “utility-first” agresivo; no es necesario en este proyecto.

---

## 8. Variables CSS (Settings)

En `settings.css` (o al inicio de `main.css`) se definen los tokens en `:root`:

```css
:root {
  /* Tipografía */
  --font-body: 'Fraunces', serif;
  --font-heading: '…', serif;

  /* Espaciado */
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;

  /* Colores (según identidad-corporativa) */
  --color-text: #111;
  --color-text-muted: #555;
  --color-bg: #fff;

  /* Breakpoints (para media queries) */
  --bp-medium: 40rem;
  --bp-wide: 64rem;
}
```

Los componentes y objects usan estas variables. Así se mantiene consistencia y los cambios globales se hacen en un solo lugar.

---

## 9. Qué no se usa como base

- **Atomic Design puro o utility-first agresivo:** dificulta coherencia editorial y migración a plantillas WordPress limpias.
- **SMACSS solo:** funciona, pero ITCSS da una jerarquía de capas más clara para crecer.
- **Material Design:** sistema visual completo que no encaja con “editorial silencioso”.
- **OOCSS solo:** útil como idea, pero sin una capa de organización (ITCSS) se mezcla demasiado.

---

## 10. Regla editorial

El CSS no debe “saber” qué es un poema o un libro como concepto de contenido. Debe saber qué es:

- `.poem-card`
- `.book-index`
- `.archive-list`
- `.breadcrumbs`

La obra queda separada del motor. El layout y los componentes son estructuras y patrones; el contenido lo inyecta HTML (estático o WordPress).

---

## 11. Cuándo valorar Sass (opcional)

Mantener **CSS nativo** para la maqueta estática y para la primera versión del theme. Valorar Sass solo si:

- El CSS crece y cuesta mantenerlo.
- Quieres un sistema de tokens (tipografía, espacios, breakpoints) muy fragmentado en archivos.
- Reutilizas muchos patrones y te conviene automatizar (mixins, bucles).

En WordPress no hay ventaja técnica directa por Sass; el CMS solo consume el CSS final. Si más adelante se adopta Sass, el salto es sencillo: settings → `_settings.scss`, se mantienen ITCSS y BEM, y se compila al mismo `style.css`.

---

**Versión:** 1.0  
**Relación:** Define la base CSS para `17-static-file-structure` (maqueta) y para el theme WordPress.
