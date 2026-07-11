# Daniel Arella — Arquitectura CSS

**Decisión técnica: CSS nativo con ITCSS + BEM + variables CSS**  
**Versión 1.3**

Este documento define cómo se escribe y organiza el CSS del proyecto: maqueta estática primero, theme WordPress después. No hay Sass, no hay preprocesador, no hay framework. La misma estructura sirve para ambos.

Encaja con: maqueta estática, migración literal a WordPress, sistema editorial donde el layout no debe contaminar la obra.

**Se apoya en:** `02-identidad-corporativa`, `16-theme-file-structure`, `22-tendencias-ux-ui-sistema-editorial`  
**Alimenta a:** `17-static-file-structure`, theme WordPress

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
| 2 | **Generic** | Reset o normalize, `box-sizing`. |
| 3 | **Elements** | Estilos base para `body`, `a`, `h1`–`h6`, `p`, `blockquote`, etc. |
| 4 | **Objects** | Patrones de layout sin estética: contenedores, grid, flujo vertical. |
| 5 | **Components** | Bloques concretos: header, nav, cards, breadcrumbs, footer. |
| 6 | **Utilities** | Clases de una sola función, pocas y claras. |

La especificidad y la cercanía al componente aumentan progresivamente desde Settings hasta Utilities. El orden de las capas evita que Objects y Components se pisen entre sí.

---

## 4. Estructura de archivos CSS

La misma estructura sirve para la maqueta estática y para el theme (donde todo puede compilarse o concatenarse en un solo `style.css`).

En la maqueta estática, `main.css` importa el resto mediante `@import`. En WordPress, puede mantenerse igual o concatenarse en un único `style.css`.

```
css/
├── settings.css     Variables, fuentes, colores, espaciados
├── generic.css      Reset / normalize
├── elements.css     body, h1–h6, p, a, blockquote
├── objects.css      Contenedores, grid, stack, flow
├── components.css  poem-card, book-card, essay-card, story-card, workshop-card, article-card, header, footer, breadcrumbs, nav
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
| Tarjeta libro | `.book-card` | `__title`, `__cover`, `__meta` | — |
| Tarjeta ensayo | `.essay-card` | `__title`, `__excerpt` | — |
| Tarjeta relato | `.story-card` | `__title`, `__excerpt` | — |
| Tarjeta taller | `.workshop-card` | `__title`, `__meta` | — |
| Tarjeta artículo | `.article-card` | `__title`, `__excerpt` | — |
| Migas | `.breadcrumbs` | `__item`, `__link` | — |
| Ficha libro | `.book` | `__meta`, `__index` | — |

Reglas:

- Evitar BEM “profundo”. Máximo unos dos niveles suele bastar.
- Evitar selectores del tipo .book-card__meta a span o .archive__list li a. Preferir clases explícitas en los elementos internos.
- Usar modificadores solo para variaciones reales (ej. `.poem-card--featured`), no para todo.
- No usar nombres genéricos de blog: `.post-item`, `.sidebar`, `.widget`. Usar nombres editoriales: `.poem-card`, `.archive-list`, `.book-header`.

---

## 6. Objects para el layout editorial

Objetos = patrones de layout sin estética. Prefijo sugerido: `o-`.

| Clase | Uso |
|-------|-----|
| `.o-container` | Ancho máximo, padding horizontal. |
| `.o-stack` | Espaciado vertical consistente entre hijos (ritmo vertical). |
| `.o-flow` | Flujo vertical de lectura para piezas largas y contenido editorial. |
| `.o-grid` | Composición ligera para listados y bloques secundarios, nunca como base de lectura principal. |

El layout se mantiene estable en todas las plantillas sin duplicar reglas. La “obra” (títulos, textos, imágenes) vive dentro de Components; los Objects solo ordenan el espacio.

### Objeto .o-flow

Objeto utilitario para ritmo vertical dentro de contenido tipográfico. Complemento de `.o-stack` para contenido editorial.

**Se usa principalmente en:** artículos, ensayos, poemas, bloques editoriales, contenido WYSIWYG de WordPress.

**Regla conceptual:** `.o-flow` controla el espaciado vertical automático entre elementos hermanos consecutivos. No se aplica margen manual a párrafos, listas o citas.

**Implementación CSS:**

```css
.o-flow > * + * {
  margin-block-start: var(--flow-space, 1em);
}
```

Variable `--flow-space` define el espaciado (ej. `1.2rem`). Puede modificarse según contexto (texto largo, listas, citas).

**Ejemplo HTML:**

```html
<article class="o-flow">
  <p>Primer párrafo.</p>
  <p>Segundo párrafo.</p>
  <blockquote>Una cita.</blockquote>
  <p>Tercer párrafo.</p>
</article>
```

**Relación con .o-stack:**

| Objeto | Uso |
|--------|-----|
| `.o-stack` | Espaciado entre bloques de layout |
| `.o-flow` | Espaciado dentro de contenido tipográfico |

Patrón típico: `section.o-stack` → `article.o-flow`. Nunca mezclar márgenes manuales dentro de `.o-flow`.

---

## 7. Utilities mínimas

Prefijo: `u-`. Solo clases que de verdad reduzcan repetición.

| Clase | Uso |
|-------|-----|
| `.u-visually-hidden` | Ocultar visualmente manteniendo accesibilidad (lectores de pantalla). |
| `.u-muted` | Tono tipográfico secundario (texto discreto). |
| `.u-center-text` | Centrado de texto en casos excepcionales. |
| `.u-max-readable` | Ancho máximo de lectura (ej. 65ch). |
| `.icon` | Iconos Lucide: 1.25rem, stroke currentColor, fill none. En `elements.css`. Ver `19-assets-strategy`. |
| `.illustration` | Ilustraciones Open Doodles: max-width 420px, height auto. En `elements.css`. Ver `19-assets-strategy`. |

Las utilities no sustituyen componentes ni objetos. Se usan solo como apoyo puntual. Si empiezas a crear muchas (decenas), se acerca a “utility-first” agresivo; no es necesario en este proyecto.

---

## 8. Variables CSS (Settings)

En `settings.css` (o al inicio de `main.css`) se definen los tokens en `:root`. Los colores vienen de `02-identidad-corporativa`: 6 colores de marca (`--brand-*`) y roles semánticos (`--bg`, `--reading-bg`, `--text`, `--link`, etc.). **Ningún componente usa hex directo; solo roles.**

```css
:root {
  /* Tipografía (02-identidad-corporativa) */
  --font-body: "Fraunces", "Iowan Old Style", "Palatino Linotype", "Book Antiqua", georgia, serif;
  --font-heading: "Fraunces", "Iowan Old Style", "Palatino Linotype", "Book Antiqua", georgia, serif;
  --font-meta: "Source Sans 3", "Segoe UI", helvetica, arial, sans-serif;   /* Metadatos, fechas, etiquetas */
  --font-ui: "Source Sans 3", "Segoe UI", helvetica, arial, sans-serif;    /* Controles, navegación */

  /* Cargados vía @font-face en generic.css desde assets/fonts/*.woff2 (400/600, con itálica 400 en Fraunces) */

  /* Escala tipográfica: un solo lugar donde vive cada tamaño, nunca rem sueltos en components.css */
  --text-2xs: 0.8125rem;  /* etiquetas mínimas */
  --text-xs: 0.875rem;    /* texto legal, fine print */
  --text-sm: 0.9375rem;   /* metadatos, nav secundaria, breadcrumbs */
  --text-base: 1rem;      /* UI por defecto: botones, nav, excerpts */
  --text-lg: 1.22rem;     /* lede del hero, títulos de media-card */
  --text-xl: 1.3rem;      /* títulos de fila de archivo */
  --text-2xl: clamp(1.2rem, 2vw, 1.35rem); /* card__title, fluido */
  --text-poem: 1.1rem;    /* cuerpo de poema (02-identidad-corporativa) */
  --text-body: 1.125rem;  /* cuerpo de prosa, 18px (02-identidad-corporativa) */
  --text-h3: clamp(1.3rem, 2vw, 1.6rem);
  --text-h2: clamp(1.75rem, 2.6vw, 2.35rem);
  --text-h1: clamp(2.25rem, 3vw, 3.5rem);

  /* Medida de lectura */
  --measure-readable: 65ch;
  --measure-heading: 42ch;

  /* Espaciado: escala completa 1–9, sin valores arbitrarios en components.css */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-7: 2rem;
  --space-8: 3rem;
  --space-9: 4rem;
  --flow-space: 1.25em;   /* o-flow: espaciado entre elementos en contenido editorial */

  /* Colores: roles semánticos se definen en 02-identidad-corporativa y deben copiarse aquí sin modificación */

  /* Breakpoints: se documentan como referencia de sistema.
     En CSS nativo, los media queries se escriben con valores literales equivalentes (40rem, 64rem). */
  --bp-medium: 40rem;
  --bp-wide: 64rem;
}
```

Los componentes y objects usan roles (`var(--text)`, `var(--surface)`), nunca hex, y tamaños de la escala tipográfica (`var(--text-sm)`), nunca `rem` sueltos. Medida de lectura objetivo: 60–70ch (ver `22-tendencias-ux-ui-sistema-editorial`).

Cuando un tamaño no calza exacto en la escala (ej. algo pensado como "casi 1rem"), se redondea al escalón más cercano en vez de crear un valor nuevo — la escala completa vale más que la precisión de un solo componente. Excepción: ajustes ópticos de un glifo o ícono decorativo (ej. centrar visualmente un ícono dentro de su caja) no son parte del ritmo de espaciado y pueden usar un valor puntual, documentado con un comentario breve.

Los poemas, ensayos, relatos, artículos, notas del autor y documentación usan `.content-body--reading`, que asigna `--reading-bg` (Blanco) y `--text` (Tinta) únicamente al bloque de versos o prosa continua, independientemente de su extensión. El título, los metadatos, las imágenes, la multimedia, las acciones y la navegación permanecen fuera sobre el lienzo Pergamino.

`--content-bg` (Blanco) se usa en unidades informativas —tarjetas, listados, paneles y controles— para separarlas del lienzo Pergamino. No se aplica a bandas completas ni a contenedores vacíos; la composición y el espaciado siguen siendo la jerarquía principal.

El hero usa roles propios (`--hero-bg`, `--hero-text`, `--hero-action`) porque pertenece a la capa de impacto visual. No consume `--content-bg` ni `--reading-bg`.

Las listas editoriales dentro de textos conservan viñetas o numeración. Las listas usadas como estructura de interfaz —navegación, grids de tarjetas, filtros, metadatos, acciones y paginación— eliminan `list-style` y `padding-left` en su clase de componente.

Los tokens CSS deben mantenerse alineados con `theme.json` para evitar divergencias entre front-end y editor.

---

## 9. Stylelint (linter)

Stylelint valida que el CSS respete esta arquitectura. Se instala y configura en el proyecto; este documento define los lineamientos.

### Instalación

```bash
npm install -D stylelint stylelint-config-standard
```

### Configuración base

Crear `.stylelintrc.json` (o `stylelint.config.js`) en la raíz del proyecto:

```json
{
  "extends": ["stylelint-config-standard"],
  "rules": {
    "selector-class-pattern": [
      "^(o-[a-z][a-z0-9-]*|u-[a-z][a-z0-9-]*|([a-z][a-z0-9]*)(-[a-z0-9]+)*(__[a-z][a-z0-9-]+)?(--[a-z][a-z0-9-]+)?)$",
      { "resolveNestedSelectors": true }
    ],
    "custom-property-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
    "color-hex-length": "long",
    "color-no-hex": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "no-descending-specificity": null
  },
  "ignoreFiles": ["**/node_modules/**", "**/dist/**"]
}
```

### Reglas alineadas con esta arquitectura

| Regla | Propósito |
|-------|-----------|
| `selector-class-pattern` | Acepta BEM (`block__element--modifier`), objects (`o-`), utilities (`u-`). La regex valida formato, no semántica editorial; nombres genéricos como `.post-item`, `.sidebar` o `.widget` deben evitarse por convención del proyecto. |
| `custom-property-pattern` | Variables CSS en kebab-case (`--font-body`, `--space-4`). La regla valida el nombre interno de la custom property, no incluye el prefijo `--`. |
| `color-hex-length` | Hex siempre largo (`#000000`). |
| `color-no-hex` | Si se quiere prohibir hex en components, habrá que usar una configuración adicional por overrides o una revisión manual. |

### Archivos a lintear

```
css/**/*.css
```

En la maqueta estática: `css/`. En el theme: `style.css` o la carpeta equivalente.

### Script recomendado

En `package.json`:

```json
{
  "scripts": {
    "lint:css": "stylelint \"css/**/*.css\" \"style.css\""
  }
}
```

En la maqueta estática basta con `css/**/*.css`. En el theme WordPress, ajustar el script para incluir `style.css` si vive en la raíz.

### Integración con preprocesador

Si más adelante se usa Vite, Eleventy o Astro para la maqueta, el plugin `stylelint` se integra en el pipeline. Misma configuración; solo cambia el comando o el hook.

---

## 10. Qué no se usa como base

- **Atomic Design puro o utility-first agresivo:** dificulta coherencia editorial y migración a plantillas WordPress limpias.
- **SMACSS solo:** funciona, pero ITCSS da una jerarquía de capas más clara para crecer.
- **Material Design:** sistema visual completo que no encaja con “editorial silencioso”.
- **OOCSS solo:** útil como idea, pero sin una capa de organización (ITCSS) se mezcla demasiado.

---

## 11. Regla editorial

El CSS no debe depender del tipo de dato ni de la lógica del CMS. Puede nombrar estructuras editoriales visibles como `.poem-card`, `.book-index` o `.archive-list`.

La obra queda separada del motor. El layout y los componentes son estructuras y patrones; el contenido lo inyecta HTML (estático o WordPress).

---

## 12. Cuándo valorar Sass (opcional)

Mantener **CSS nativo** para la maqueta estática y para la primera versión del theme. Valorar Sass solo si:

- El CSS crece y cuesta mantenerlo.
- Quieres un sistema de tokens (tipografía, espacios, breakpoints) muy fragmentado en archivos.
- Reutilizas muchos patrones y te conviene automatizar (mixins, bucles).

En WordPress no hay ventaja técnica directa por Sass; el CMS solo consume el CSS final. Si más adelante se adopta Sass, el salto es sencillo: settings → `_settings.scss`, se mantienen ITCSS y BEM, y se compila al mismo `style.css`.

---

## 13. Criterios de validación (22-tendencias-ux-ui-sistema-editorial)

Al implementar, verificar:

- Tipografía: máximo 2 familias; jerarquías H1–H3 fijas.
- Color: solo roles semánticos; nunca hex en componentes.
- Lectura: ancho de columna 60–70ch; ritmo vertical consistente.
- Motion: en páginas de texto, cero animaciones decorativas; solo focus y hover. Las transiciones deben limitarse a `color`, `background-color`, `border-color`, `opacity`, `outline` y `box-shadow` (solo con `--shadow-soft`, y solo en hover/focus de tarjetas — nunca como sombra permanente en reposo).
- Respetar `prefers-reduced-motion` para usuarios que lo prefieran.
- `:focus-visible` visible (p. ej. outline con `--focus`).

