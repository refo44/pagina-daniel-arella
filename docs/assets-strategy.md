# Daniel Arella — Estrategia de assets

**Iconos, fuentes, favicon y scripts: reglas y estructura**

Este documento define qué assets existen, dónde viven y cómo se usan en la maqueta estática y en el theme WordPress. Las decisiones se toman en la maqueta y se migran tal cual; no se rediseña después. **JS vive en la raíz del proyecto** (`js/`), no dentro de `assets/`: código (CSS, JS) separado de media (imágenes, fuentes, iconos, favicon).

**Depende de:** `static-file-structure`, `theme-file-structure`, `identidad-corporativa` (tipografías y paleta)

---

## 1. Resumen de decisiones

| Área | Decisión |
|------|----------|
| **Iconos** | SVG inline como base; sprite SVG opcional si se repiten mucho. Sin icon fonts, sin Font Awesome por CDN. |
| **Biblioteca de iconos** | Una sola, minimal: Heroicons, Lucide o Feather. Recomendado: Lucide. |
| **Fuentes** | Autohospedadas en `assets/fonts/`, formato woff2, declaradas con `@font-face`. |
| **Favicon** | Set completo moderno: favicon.ico, favicon.svg, apple-touch-icon.png, site.webmanifest. |
| **JS** | Solo navegación, formularios, accesibilidad y mejoras que no alteran el contenido. Sin frameworks ni lógica de app. |

---

## 2. Estructura de assets y JS

**assets/** (media: lo que el navegador carga como recurso estático) y **js/** (código: scripts) van al mismo nivel en la raíz del proyecto y del theme. Así se separa código de media.

```
assets/
├── icons/          SVGs inline o referenciados (sprite / archivos sueltos)
├── images/         Fotos, portadas de libros, ilustraciones
├── fonts/          Tipografías autohospedadas (woff2)
└── favicon/        ico, svg, png, webmanifest

js/                 Scripts mínimos (navegación, formularios, accesibilidad)
├── main.js         (o navigation.js, forms.js, accessibility.js)
```

La misma estructura se replica en la maqueta estática y dentro del theme. En `identidad-corporativa.md` se definen las familias tipográficas (Fraunces, Source Sans 3) y su uso.

---

## 3. Iconos

### Regla base

- **SVG inline** como opción por defecto: control con CSS, accesible, sin dependencia de red, render nítido.
- **Sprite SVG** solo si hay muchos iconos repetidos en muchas páginas (p. ej. 10–20 iconos): un solo archivo y `<use href="...">`.
- **No usar** icon fonts (iconos como fuente): problemas de accesibilidad, fallback y render.
- **No depender** de Font Awesome por CDN en un sitio editorial mínimo.

### Cuándo usar cada forma

| Forma | Uso |
|-------|-----|
| **SVG inline** | Botones y UI: idioma, volver, siguiente, descargar, enviar, enlace externo. Recomendado para la mayoría del sitio. |
| **Sprite SVG** | Si los mismos iconos se repiten en muchas páginas y quieres evitar duplicar markup. |

Regla práctica: pocos iconos → inline. Muchos repetidos → sprite.

### Estructura de archivos (iconos)

```
assets/icons/
  sprite.svg              (opcional; si usas sprite)
  ui/                     (si usas inline por archivo)
    arrow-left.svg
    arrow-right.svg
    external-link.svg
    mail.svg
    download.svg
    language.svg
```

### Uso en HTML

**Opción A — SVG inline**

- Insertar el SVG dentro del botón o enlace.
- **Accesibilidad:** si el icono es decorativo: `aria-hidden="true"`. Si comunica significado y no hay texto visible: `aria-label` en el botón o enlace.

**Opción B — Sprite SVG**

- Archivo: `assets/icons/sprite.svg`.
- En el HTML: `<svg class="icon" aria-hidden="true"><use href="/assets/icons/sprite.svg#icon-mail"></use></svg>` (ajustar ruta según raíz del proyecto).

---

## 4. Fuentes

### Decisión

- **Autohospedadas** (recomendado): archivos en el proyecto y luego en el theme. Más control, más estable, menos dependencias.
- **Google Fonts**: válido para maqueta rápida, pero añade dependencia externa; no recomendado si se busca máxima coherencia y privacidad.

Con CSS nativo, lo coherente es autohospedar y declarar con `@font-face`. Las familias y pesos están en `identidad-corporativa.md` (Fraunces, Source Sans 3).

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

Formato: **woff2**. Declaración en `css/settings.css` (o equivalente) con `@font-face`. Las variables CSS (`--font-body`, `--font-heading`) apuntan a estas familias.

---

## 5. Favicon

Hacerlo bien una vez y no tocarlo.

- **Generar un set moderno:** favicon.ico, favicon.svg, apple-touch-icon.png, site.webmanifest.
- **Una sola identidad** y tamaños estándar.

### Estructura

```
assets/favicon/
  favicon.ico
  favicon.svg
  apple-touch-icon.png
  site.webmanifest
```

### Checklist

- [ ] favicon.ico (múltiples tamaños o 32×32 como mínimo)
- [ ] favicon.svg (escalable)
- [ ] apple-touch-icon.png (180×180 recomendado)
- [ ] site.webmanifest con name, short_name, icons, theme_color si aplica

En HTML: `<link rel="icon">`, `<link rel="apple-touch-icon">` y referencia al manifest según estándar. En WordPress se encolan o se referencian desde el theme con las mismas rutas relativas a la raíz del sitio.

---

## 6. JavaScript (js/)

Los scripts viven en **js/** en la raíz del proyecto y del theme, no dentro de `assets/`.

### Qué entra

Solo scripts que cumplan una de estas funciones:

| Función | Ejemplos |
|---------|----------|
| **Navegación** | Menú móvil, abrir/cerrar paneles, toggles. |
| **Formularios** | Validación ligera, feedback de envío, submit por fetch si hace falta. |
| **Accesibilidad** | Foco, skip links, control de teclado en menús. |
| **Mejoras no editoriales** | Lazy loading si no se usa el nativo, pequeños efectos que no alteran el contenido. |

### Ejemplos de archivos válidos

```
js/
├── main.js            (puede agrupar todo)
├── navigation.js
├── forms.js
└── accessibility.js
```

Nombres y rutas se mantienen en la migración a WordPress.

### Qué no entra

- Sliders, carousels.
- Animaciones de portada.
- Frameworks JS (React, Vue, etc.).
- Lógica de aplicación.

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

## 7. Migración a WordPress

- **assets/** se replica dentro del theme (p. ej. `theme-daniel-arella/assets/`).
- **js/** se replica en la raíz del theme (p. ej. `theme-daniel-arella/js/`).
- No se cambian nombres de archivos ni estructura; solo el punto de partida (raíz del proyecto vs raíz del theme). Fuentes, iconos y favicon se encolan o referencian desde `assets/`; scripts desde `js/`.

---

## 8. Relación con otros documentos

- **Estructura de archivos:** `static-file-structure.md` incluye `assets/` (images, icons, fonts, favicon) y `js/` en la raíz; este documento detalla iconos, fuentes, favicon y reglas para JS.
- **Identidad:** `identidad-corporativa.md` define tipografías y paleta; las fuentes listadas aquí son las que se autohospedan para esa identidad.
- **CSS:** `css-architecture.md` define variables de fuente (`--font-body`, etc.) que apuntan a las fuentes en `assets/fonts/`.

---

**Versión:** 1.0
