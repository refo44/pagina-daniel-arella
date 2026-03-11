# Daniel Arella — Tendencias UX/UI del sistema editorial

Define qué tendencias fortalecen un sitio de autor y cuáles deben evitarse para proteger la lectura, la claridad y la voz editorial.

**Versión 1.2**

**Se apoya en:** `01-plataforma-autor-plan`, `02-identidad-corporativa`, `18-css-architecture`, `23-estandares-accesibilidad`, `24-principios-layout`

**Alimenta a:** `17-static-file-structure`, `18-css-architecture`, `19-assets-strategy`, `21-orden-implementacion`

---

**Regla práctica del proyecto:**

> Se adopta todo lo que mejora **lectura, claridad, accesibilidad y performance**.  
> Se evita todo lo que introduce **personalización, ruido visual o comportamiento invasivo**.

En el resto del documento, cuando una decisión dependa de “sitio editorial, no comercial”, se remite a esta regla. El sitio es una plataforma editorial centrada en texto, no una app ni una landing.

**Distinción:** *Política del sistema* (performance, accesibilidad, lectura) no depende del año. *Tendencias compatibles* son cosas que hoy se citan como “tendencia” pero aquí se adoptan como base técnica. Si una tendencia no pasa el filtro de la Regla práctica, no entra al sistema.

---

## 1. Filosofía de diseño editorial

Términos: **minimalismo editorial** (alias: neo-minimalismo funcional); **design tokens** (colores, espacios, tipografía); **roles semánticos** (`--bg`, `--text`, `--surface`, `--link`).

Para Daniel Arella el minimalismo no es estilo ni moda: es **disciplina de edición visual** para proteger el texto. Comportarse como un espacio editorial: estructura limpia, navegación corta, tipografía dominante, mucho aire. Cero espectáculo en artículos; home y portadas de secciones pueden tener hero, parallax y efectos (ver sección 3). Sensación: revista, cuaderno, sala de lectura.

### 1.1 Principios

- **Cada elemento debe tener una función:** guiar, jerarquizar, permitir interacción o dar contexto. Si no cumple ninguna, sobra.
- Funciones reales en editorial: leer, orientarse, volver al contenido, navegar entre textos. Todo lo demás es ruido.
- El diseño se retira para que el texto exista.

| Página | Objetivo |
|--------|----------|
| Inicio | Orientar al lector |
| Página de texto | Sostener la lectura |
| Página de sección | Organizar contenido |
| Página de autor | Contextualizar la voz |

### 1.2 Iconografía

- **Iconos funcionales:** Lucide Icons. Navegación, acciones, enlaces interactivos. Estilo outline minimalista. Tamaño estándar: 16–24px.
- **Iconos decorativos:** Uso moderado como acentos visuales. Separadores, encabezados de sección, fondos sutiles (opacidad baja), citas. Tamaño: 48–96px decorativos, 120–220px fondo. Regla: pocos, discretos, relacionados con el contenido.
- **Ilustraciones:** Open Doodles. Hero, cabeceras de sección, estados vacíos. Máximo 3–5 ilustraciones en todo el sitio.

**Jerarquía visual:** Ilustraciones → iconos decorativos → iconos funcionales → tipografía.

### 1.3 Sistema: tipografía, blanco, jerarquía

- Tipografía = voz; espacio en blanco = ritmo.
- Jerarquía con tamaño, interlineado, espaciado vertical, peso. **No** con colores, cajas, fondos ni módulos.
- La cabecera debe ser corta y clara, pero puede superar 5 ítems si eso evita esconder una sección estructural. En este proyecto, `Libros` tiene acceso directo en el menú principal.

### 1.4 Anti-patrones y reglas operativas

**Riesgos:** Minimalismo sin personalidad (identidad en tipografía, no en efectos); simplificar y perder acceso al contenido; “minimalismo caliente” en artículos (distrae). Para leads, conversiones, CTAs: ver Regla práctica.

**Reglas:** (1) Función evidente por elemento. (2) Navegación corta. (3) Imágenes acompañan, no decoran. (4) Mobile first. (5) Sin build system; un CSS principal organizado según `18-css-architecture`.

**Criterios verificables (WordPress):** Máx. 2 familias, 1 tamaño cuerpo, jerarquías H1–H3; ningún componente usa hex, solo roles; ancho columna 60–70ch; cero animaciones en texto, solo focus y hover; `theme.json` bloquea paleta y fuentes.

---

## 2. Tabla de adopción y aplicación

| Tendencia | Estado | Implementación |
|-----------|--------|-----------------|
| Design tokens | Adoptar | `:root` + roles; `theme.json` bloquea paleta y tipografías |
| Performance | Adoptar | 1 CSS, JS mínimo con defer, imágenes con dimensiones |
| Accesibilidad-first | Adoptar | Contraste AA, focus visible, headings correctos, teclado, reduced motion |
| Micro-interacciones | Adoptar con cuidado | Hover, focus, botones, menú móvil; nada en cuerpo de texto |
| Dark mode | Adoptar | `prefers-color-scheme` reasigna roles; sin nueva paleta, solo reasignación de roles |
| Storytelling | Adoptar con cuidado | Ritmo vertical y jerarquía; parallax solo en home y portadas |
| IA, personalización de contenido o comportamiento | No aplica | No aplica al proyecto |
| AR/VR, 3D | Evitar | No aplica |
| Parallax, hero, efectos en home | Adoptar | Home y portadas de secciones: hero, parallax, efectos vistosos; nunca en artículos |
| Popups | Adoptar con cuidado | Suscripción (newsletter) y avisos puntuales; reglas estrictas de frecuencia |
| Tipografía animada, carouseles, video embebido | Adoptar con cuidado | Animación tipográfica y carouseles solo en home o portadas de sección; nunca en artículos o páginas de lectura |

### 2.1 Minimalismo editorial

**Se adopta:** tipografía protagonista, ritmo vertical generoso, jerarquía clara, paleta corta con roles, navegación mínima, micro-interacciones solo funcionales.

**No se adopta:** CTAs invasivos, landings disfrazadas de home, módulos decorativos, animación como espectáculo.

**Criterio:** Si un recurso visual no mejora orientación, jerarquía, lectura o accesibilidad, se elimina.

### 2.2 Design tokens

`:root` con `--brand-*` y roles (`--bg`, `--text`, `--link`, `--surface`, etc.); componentes solo consumen roles, nunca hex. Ver `02-identidad-corporativa` §6 (Arquitectura de color por capas).

### 2.3 Performance

- 1 CSS principal; JS mínimo con `defer`.
- Imágenes optimizadas, `width`/`height`, `loading="lazy"` donde aplique.
- Fuentes auto-hospedadas; evitar CDN innecesario.
- WordPress: CSS consolidado en `style.css` del theme; scripts con defer; evitar plugins pesados.

### 2.4 Accesibilidad

Contraste AA; `:focus-visible` claro (color de acento); navegación por teclado; h1→h2→h3; labels asociados a inputs en formularios; `prefers-reduced-motion`; enlaces con estados claros.

### 2.5 Micro-interacciones

Solo donde confirman una acción: hover de links, focus de inputs, estados de botones, menú móvil, validación de formularios. **No** en lectura continua, bloques largos ni títulos. Si la animación no explica una acción, sobra.

---

## 3. Decisiones adoptadas y qué evitar

**Adoptado para este proyecto:**
- **Dark mode:** sí; reasignar roles con `prefers-color-scheme`.
- **Popups:** suscripción (newsletter) y avisos puntuales; reglas estrictas de frecuencia.
- **Home y portadas de sección:** hero, parallax y recursos visuales; tipografía animada y carouseles solo aquí; nunca en artículos o páginas de lectura.
- **Video e imágenes:** video embebido, imagen con pie editorial, portada especial permitidos.

**Evitar:** IA (no aplica al proyecto); AR/VR; 3D; motion en artículos; experiencias automatizadas o agentes interactivos; diseños sin estructura de grid; brutalismo.

**Menú:** estructura exacta se define en `01-plataforma-autor-plan`.

---

## 4. Checklist técnico para implementación

### Checklist de maqueta estática

- [ ] 1 CSS principal; JS mínimo con `defer`.
- [ ] Stylelint configurado según `18-css-architecture` (sección 9); sin errores.
- [ ] Imágenes con `width`/`height`, optimizadas, `loading="lazy"` donde aplique.
- [ ] Tokens en `:root`; componentes solo usan roles.
- [ ] Contraste AA; `:focus-visible` visible.
- [ ] Jerarquía de headings correcta; enlaces con estado claro.
- [ ] Micro-interacciones solo funcionales.
- [ ] Popups solo suscripción y avisos puntuales; reglas de frecuencia definidas.
- [ ] Sin animación en texto de lectura (artículos, poemas, ensayos); efectos solo en home y portadas de secciones.
- [ ] Carouseles solo en home o portadas de sección; nunca en páginas de lectura.

### Equivalencia en WordPress

| Concepto | En el theme |
|----------|-------------|
| Tokens y roles | `theme.json` bloquea paleta y tipografías; `style.css` con `--brand-*` y roles. |
| CSS | CSS consolidado en `style.css` del theme; evitar múltiples hojas de plugins. |
| JS | Enqueue solo lo necesario; `defer`; sin jQuery salvo necesidad real. |
| Imágenes | Optimizadas; `width`/`height` en markup. |
| Accesibilidad | Contraste y focus en CSS; headings y landmarks en templates. |

Design tokens y roles definidos en `theme.json` y consumidos en `style.css`. Performance vía un CSS, JS defer, imágenes con dimensiones y lazy. Accesibilidad en markup y CSS. Sin capas comerciales como base del sistema.

---

## 5. Relación con otros documentos

- **Identidad:** `02-identidad-corporativa` define paleta, tipografías (Fraunces, Source Sans 3) y roles semánticos; este documento aplica el filtro de tendencias a esas decisiones.
- **CSS:** `18-css-architecture` implementa tokens y roles; la sección 12 de 18 remite a este documento para criterios de validación.
- **Implementación:** `21-orden-implementacion` valida la Fase 1 contra el checklist de la sección 4 antes de dar por cerrada la maqueta estática.
- **Layout:** `24-principios-layout` define ancho de lectura, ritmo vertical y uso del blanco; este documento aplica el filtro de tendencias.

