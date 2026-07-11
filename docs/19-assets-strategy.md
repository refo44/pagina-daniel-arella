# Daniel Arella — Estrategia de assets

**Iconos, fuentes, favicon y scripts: reglas y estructura**  
**Versión 1.2**

Este documento define qué assets existen, dónde viven y cómo se usan en la maqueta estática y en el theme WordPress. Las decisiones se toman en la maqueta y se migran tal cual; no se rediseña después. **JS vive en la raíz del proyecto** (`js/`), no dentro de `assets/`: código (CSS, JS) separado de media (imágenes, iconos, fuentes, favicon).

**Se apoya en:** `02-identidad-corporativa`, `22-tendencias-ux-ui-sistema-editorial`  
**Alimenta a:** `17-static-file-structure`, `16-theme-file-structure`

---

## 1. Resumen de decisiones

| Área | Decisión |
|------|----------|
| **Iconos** | Lucide Icons para la interfaz y SVG oficiales para marcas externas. Siempre locales; sin icon fonts ni CDN. |
| **Ilustraciones** | Open Doodles. SVG para hero, cabeceras de sección y estados vacíos. |
| **Fuentes** | Autohospedadas en `assets/fonts/`, formato woff2, declaradas con `@font-face`. Sin CDN externo (doc 22: priorizar auto-hospedado). |
| **Logo** | Isotipo vectorial en Tinta y Pergamino, con variantes transparentes y PNG de respaldo. |
| **Favicon** | Set completo moderno: favicon.ico, favicon.svg, apple-touch-icon.png, site.webmanifest. |
| **Imágenes** | Optimizar antes de subir (WebP o AVIF cuando sea posible). |
| **Documentos (PDF/EPUB)** | Viven en `assets/pdf/` solo cuando una obra o un taller debe ofrecer una descarga pública de forma explícita. |
| **JS** | Solo navegación, formularios, accesibilidad. Sin frameworks ni lógica de app. Todo con `defer`. Sin animaciones costosas ni librerías de motion. |
| **Audio y video (Biblioteca de audio, Videoteca)** | No se alojan en el servidor ni en `assets/`. Viven en servicios de terceros (YouTube, Vimeo, Instagram Reels, Spotify, SoundCloud, etc.). El sitio solo almacena URL o código de embed y muestra reproductor embebido o enlace. Ver `01-plataforma-autor-plan`, `03-arquitectura-editorial`. |

---

## 2. Estructura de assets y JS

**assets/** (media: lo que el navegador carga como recurso estático) y **js/** (código: scripts) van al mismo nivel en la raíz del proyecto y del theme. Así se separa código de media.

```
assets/
├── icons/          Iconos de interfaz y marcas externas (SVG)
├── illustrations/  Open Doodles (SVG) para hero, secciones y estados vacíos
├── images/         Fotos, portadas de libros (optimizar: WebP o AVIF cuando sea posible)
├── logo/           Isotipo oficial en SVG y PNG
├── fonts/          Tipografías autohospedadas (woff2)
├── pdf/            Libros y programas curriculares con descarga pública
└── favicon/        ico, svg, png, webmanifest (agrupa todos los archivos de icono del sitio: favicon, apple-touch-icon, manifest)

js/                 Scripts mínimos (navegación, formularios, accesibilidad)
├── main.js         (o navigation.js, forms.js, accessibility.js)
```

La misma estructura se replica en la maqueta estática y dentro del theme. En `02-identidad-corporativa` se definen las familias tipográficas (Fraunces, Source Sans 3) y su uso.

Los documentos descargables no son obligatorios en la maqueta ni en el theme. Si un libro no ofrece descarga pública, el PDF o EPUB permanece fuera del árbol público y el sitio muestra solo la ficha editorial. En Workshop, el programa curricular en PDF también es opcional y solo aparece cuando existe un archivo público autorizado.

---

## 3. Iconos

### Biblioteca oficial: Lucide Icons

- **Biblioteca seleccionada:** Lucide Icons
- **Formato:** SVG
- **Uso:** inline SVG o archivos SVG locales
- **Ubicación:** `assets/icons/`

**Licencia:** Lucide se distribuye bajo licencia ISC, que permite usar, modificar y distribuir los iconos para cualquier propósito, incluso comercial. No se requiere atribución.

Lucide ofrece más de mil iconos vectoriales consistentes: grid 24×24, stroke 2px, sin relleno por defecto, color heredado del texto (`currentColor`).

### Marcas externas

Las marcas externas, como Goodreads, usan su símbolo reconocible en un SVG local obtenido de Simple Icons. Estos símbolos acompañan texto explícito, son decorativos para tecnologías de asistencia y nunca sustituyen el nombre del servicio.

### Estructura de archivos (iconos)

```
assets/icons/
  book.svg
  book-open.svg
  notebook.svg
  archive.svg
  download.svg
  mail.svg
  search.svg
  menu.svg
  arrow-right.svg
  arrow-left.svg
  share-2.svg
  external-link.svg
  goodreads.svg
  quote.svg
  pen-tool.svg
  bookmark.svg
  feather.svg
```

### Uso en HTML

**Método recomendado — SVG con `<use>`**

```html
<a href="/book/">
  <svg class="icon" aria-hidden="true">
    <use href="/assets/icons/book.svg#icon"></use>
  </svg>
  Libros
</a>
```

**Alternativa — SVG inline**

```html
<svg class="icon" aria-hidden="true">
  <path d="..." />
</svg>
```

### CSS base para iconos

```css
.icon {
  width: 1.2rem;
  height: 1.2rem;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
}
```

Ventajas: hereda el color del texto, escala automáticamente, mantiene consistencia.

### Accesibilidad

- Si el icono es decorativo: `aria-hidden="true"`
- Si el icono comunica significado sin texto visible: `aria-label` en el botón o enlace (ej. `aria-label="Descargar libro"`)

### Iconos recomendados para el sitio

| Categoría | Iconos |
|-----------|--------|
| Navegación | menu, x, search, languages |
| Contenido editorial | book, book-open, notebook, archive |
| Acciones | download, mail, share, external-link |
| Navegación interna | arrow-right, arrow-left, corner-up-left |

Con 15 iconos se cubre todo el sitio.

### Mapeo página → icono

| Página | Icono |
|--------|-------|
| book | book |
| essay | notebook |
| poem | feather |
| archivo | archive |
| contacto | mail |
| blog | book-open |
| navegación | menu |
| buscar | search |

### Iconos decorativos (acentos visuales)

Los iconos grandes pueden usarse como elementos decorativos con moderación: separadores, encabezados de sección, fondos sutiles, citas.

**Tamaños recomendados:**

| Uso | Tamaño |
|-----|--------|
| Iconos UI | 16–24px |
| Iconos en botones | 20–24px |
| Iconos decorativos | 48–96px (3–6rem) |
| Iconos de fondo | 120–220px (7.5–14rem) |

**Clases CSS:** `.icon-large`, `.icon-decorative`, `.icon-bg`, `.icon-quote`

**Reglas editoriales:**

- ✔ Pocos
- ✔ Discretos (baja opacidad)
- ✔ Relacionados con el contenido
- ✖ Evitar muchos iconos, coloridos, iconos grandes cerca del texto de lectura

**Iconos Lucide para decoración:**

| Icono | Uso |
|-------|-----|
| feather | poesía |
| book | libros |
| pen-tool | escritura |
| archive | archivo |
| bookmark | biblioteca |
| quote | citas |

**Ejemplos de uso:**

```html
<!-- Separador entre secciones -->
<div class="section-divider">
  <svg class="icon-decorative" aria-hidden="true">
    <use href="/assets/icons/feather.svg#icon"></use>
  </svg>
</div>

<!-- Encabezado de sección -->
<h2 class="section-title">
  <svg class="icon-large" aria-hidden="true">
    <use href="/assets/icons/book.svg#icon"></use>
  </svg>
  Libros
</h2>

<!-- Fondo decorativo -->
<div class="section-decoration">
  <svg class="icon-bg" aria-hidden="true">
    <use href="/assets/icons/feather.svg#icon"></use>
  </svg>
  <!-- contenido -->
</div>

<!-- Cita -->
<blockquote class="quote-block">
  <svg class="icon-quote" aria-hidden="true">
    <use href="/assets/icons/quote.svg#icon"></use>
  </svg>
  <p>Texto de la cita…</p>
</blockquote>
```

**Jerarquía visual del sistema:** Ilustraciones Open Doodles → iconos decorativos Lucide → iconos funcionales → tipografía

---

## 3.1 Ilustraciones

### Biblioteca oficial: Open Doodles

- **Biblioteca seleccionada:** Open Doodles
- **Formato:** SVG
- **Uso:** hero, cabeceras de sección y estados vacíos
- **Ubicación:** `assets/illustrations/`

**Licencia:** Open Doodles está publicado bajo CC0 (dominio público), lo que permite copiar, editar, modificar y usar las ilustraciones para cualquier propósito sin necesidad de atribución.

Open Doodles incluye escenas de personas leyendo, escribiendo, pensando, trabajando, etc. Estilo doodle dibujado a mano.

### Estructura de archivos (ilustraciones)

```
assets/illustrations/
  reading.svg
  writing.svg
  thinking.svg
  papers.svg
  sitting-reading.svg
```

### Uso en HTML

**Método 1 — `<img>` (recomendado)**

```html
<img src="/assets/illustrations/reading.svg" alt="Persona leyendo" class="illustration">
```

**Ejemplo hero para index.html**

```html
<section class="hero">
  <div class="hero-text">
    <h1>Daniel Arella</h1>
    <p>Ensayos, ficción y archivo literario.</p>
  </div>
  <div class="hero-illustration">
    <img src="/assets/illustrations/reading.svg" alt="Persona leyendo" class="illustration">
  </div>
</section>
```

**Método 2 — SVG inline**

```html
<svg class="illustration">...</svg>
```

### CSS base para ilustraciones

```css
.illustration {
  max-width: 420px;
  height: auto;
}
```

### Dónde usar ilustraciones

- Hero de la página principal (persona leyendo o escribiendo)
- Página Sobre el autor (persona reflexionando)
- Cabeceras de secciones: libros, ensayos, archivo
- Estados vacíos (cuando no hay contenido)

Regla: máximo 3–5 ilustraciones en todo el sitio. No competir con el texto.

### Mapeo página → ilustración

| Página | Ilustración |
|--------|-------------|
| home (index) | reading |
| sobre-el-autor | thinking |
| book | writing |
| essay | papers |
| archivo | sitting-reading |

---

## 4. Fuentes

### Decisión

- **Autohospedadas** (recomendado): archivos en el proyecto y luego en el theme. Más control, más estable, menos dependencias.
- **Google Fonts**: válido para maqueta rápida, pero añade dependencia externa; no recomendado si se busca máxima coherencia y privacidad.

Con CSS nativo, lo coherente es autohospedar y declarar con `@font-face`. Las familias y pesos están en `02-identidad-corporativa` (Fraunces, Source Sans 3).

### Estructura

```
assets/fonts/
  fraunces/
    fraunces-regular.woff2
    fraunces-italic.woff2
    fraunces-semibold.woff2
  source-sans-3/          (según identidad)
    source-sans-3-regular.woff2
    source-sans-3-semibold.woff2
```

Formato: **woff2**. Los nombres de archivo deben estar en kebab-case. Declaración en `css/settings.css` (o equivalente) con `@font-face`. Las declaraciones `@font-face` deben usar `font-display: swap`. Las variables CSS (`--font-body`, `--font-heading`, `--font-meta`) apuntan a estas familias. Ver `18-css-architecture`.

---

## 5. Logo

El isotipo oficial y sus reglas visuales se definen en `02-identidad-corporativa`. Los SVG son los archivos maestros; los PNG existen para exportación y contextos sin soporte vectorial.

```
assets/logo/
  logo-mark-tinta.svg
  logo-mark-pergamino.svg
  logo-mark-tinta-on-pergamino.svg
  logo-mark-tinta-transparent.png
  logo-mark-pergamino-transparent.png
  logo-mark-tinta-on-pergamino.png
```

- `logo-mark-tinta.svg` y `logo-mark-pergamino.svg` tienen fondo transparente.
- Los PNG transparentes se exportan a 1024 px y conservan canal alfa.
- La variante Pergamino se usa en la cabecera Tinta; la variante Tinta se usa sobre Pergamino o Blanco.
- La versión sobre Pergamino se reserva para piezas que necesitan fondo propio y es la fuente del favicon.
- El isotipo que acompaña texto visible usa `alt=""`; si aparece solo con función identificativa, usa `alt="Daniel Arella"`.

---

## 6. Favicon

Hacerlo bien una vez y no tocarlo.

- **Generar un set moderno:** favicon.ico, favicon.svg, apple-touch-icon.png, site.webmanifest.
- **Una sola identidad** y tamaños estándar.

### Estructura

```
assets/favicon/
  favicon.ico
  favicon.svg
  apple-touch-icon.png
  icon-192.png
  icon-512.png
  site.webmanifest
```

`site.webmanifest` puede permanecer en `assets/favicon` o moverse a la raíz del sitio si el servidor lo requiere.

### Checklist

- [x] favicon.ico (16×16, 32×32 y 48×48)
- [x] favicon.svg (escalable)
- [x] apple-touch-icon.png (180×180)
- [x] icon-192.png e icon-512.png
- [x] site.webmanifest con name, short_name, icons y colores de marca

En HTML: `<link rel="icon">`, `<link rel="apple-touch-icon">` y referencia al manifest según estándar. En WordPress se encolan o se referencian desde el theme con las mismas rutas relativas a la raíz del sitio.

---

## 7. JavaScript (js/)

Los scripts viven en **js/** en la raíz del proyecto y del theme, no dentro de `assets/`.

### Qué entra

Solo scripts que cumplan una de estas funciones:

| Función | Ejemplos |
|---------|----------|
| **Navegación** | Menú móvil, abrir/cerrar paneles, toggles. |
| **Formularios** | Validación ligera, feedback de envío, submit por fetch si hace falta. |
| **Accesibilidad** | Foco, skip links, control de teclado en menús. |
| **Mejoras no editoriales** | Preferir lazy loading nativo con `loading="lazy"`. JS solo si el navegador no lo soporta. Pequeños efectos que no alteran el contenido. |

### Ejemplos de archivos válidos

```
js/
├── main.js            (puede agrupar todo)
├── navigation.js
├── forms.js
└── accessibility.js
```

Todos los archivos JS deben usar kebab-case. Nombres y rutas se mantienen en la migración a WordPress.

### Qué no entra

- Sliders, carousels.
- Animaciones de portada o motion decorativo.
- Frameworks JS (React, Vue, etc.).
- Lógica de aplicación.
- Librerías de animación (doc 22: micro-interacciones solo funcionales; zero en zona de lectura).

El sitio no es una aplicación. Es una biblioteca de lectura.

### Uso

**Maqueta estática:**

```html
<script src="/js/main.js" defer></script>
```

**WordPress:** los mismos archivos se encolan con `wp_enqueue_script()` desde la ruta del theme (ej. `get_template_directory_uri() . '/js/main.js'`). Sin cambiar comportamiento.

### Regla editorial para JS

- **Si un script altera el contenido, el orden de lectura o convierte la página en una experiencia interactiva:** no entra.
- **Si solo ayuda al lector a moverse, escribir o leer mejor:** sí entra.

Así el sitio se mantiene silencioso, estable y portable entre HTML estático y WordPress.

---

## 8. Migración a WordPress

- **assets/** se replica dentro del theme (p. ej. `theme-daniel-arella/assets/`).
- **js/** se replica en la raíz del theme (p. ej. `theme-daniel-arella/js/`).
- No se cambian nombres de archivos ni estructura; solo el punto de partida (raíz del proyecto vs raíz del theme). Fuentes, iconos y favicon se encolan o referencian desde `assets/`; scripts se encolan en `functions.php` mediante `wp_enqueue_script()`.
- Assets deben servirse con `cache-control` largo en producción. Esto no afecta la maqueta pero sí el sitio final.

---

## 9. Relación con otros documentos

- **Estructura de archivos:** `17-static-file-structure` incluye `assets/` (images, icons, fonts, favicon) y `js/` en la raíz; este documento detalla iconos, fuentes, favicon y reglas para JS.
- **Identidad:** `02-identidad-corporativa` define tipografías y paleta; las fuentes listadas aquí son las que se autohospedan para esa identidad.
- **CSS:** `18-css-architecture` define variables de fuente (`--font-body`, `--font-heading`, `--font-meta`) que apuntan a las fuentes en `assets/fonts/`. Las fuentes declaradas aquí se referencian mediante variables CSS definidas en `18-css-architecture`.

