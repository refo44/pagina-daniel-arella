# Daniel Arella — Tendencias UX/UI aplicadas al sistema editorial

Define qué tendencias fortalecen un sitio de autor y cuáles deben evitarse para proteger la lectura, la claridad y la voz editorial.

**Regla práctica del proyecto:**

> Se adopta todo lo que mejora **lectura, claridad, accesibilidad y performance**.  
> Se evita todo lo que introduce **personalización, ruido visual o comportamiento invasivo**.

En el resto del documento, cuando una decisión dependa de “sitio editorial, no comercial”, se remite a esta regla. El sitio es una plataforma editorial centrada en texto, no una app ni una landing.

**Distinción:** *Política del sistema* (performance, accesibilidad, lectura) no depende del año. *Tendencias compatibles* son cosas que hoy se citan como “tendencia” pero aquí se adoptan como base técnica. Si una tendencia no pasa el filtro de la Regla práctica, no entra al sistema.

---

## 1. Filosofía de diseño editorial

Términos: **minimalismo editorial** (alias: neo-minimalismo funcional); **design tokens** (alias: roles semánticos).

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

### 1.2 Sistema: tipografía, blanco, jerarquía

- Tipografía = voz; espacio en blanco = ritmo.
- Jerarquía con tamaño, interlineado, espaciado vertical, peso. **No** con colores, cajas, fondos ni módulos.
- Menú de 3 a 5 ítems. Estructura exacta se define en el plan maestro.

### 1.3 Anti-patrones y reglas operativas

**Riesgos:** Minimalismo sin personalidad (identidad en tipografía, no en efectos); simplificar y perder acceso al contenido; “minimalismo caliente” en artículos (distrae). Para leads, conversiones, CTAs: ver Regla práctica.

**Reglas:** (1) Función evidente por elemento. (2) Navegación corta. (3) Imágenes acompañan, no decoran. (4) Mobile first. (5) Sitio sin build, CSS único, JS mínimo.

**Criterios verificables (WordPress):** Máx. 2 familias, 1 tamaño cuerpo, jerarquías H1–H3; ningún componente usa hex, solo roles; ancho columna 60–70ch; cero animaciones en texto, solo focus y hover; `theme.json` bloquea paleta y fuentes.

---

## 2. Tabla de adopción y aplicación

| Tendencia | Estado | Implementación |
|-----------|--------|-----------------|
| Design tokens | Adoptar | `:root` + roles; `theme.json` bloquea paleta y tipografías |
| Performance-first | Adoptar | 1 CSS, JS mínimo con defer, imágenes con dimensiones |
| Accesibilidad-first | Adoptar | Contraste AA, focus visible, headings correctos, teclado, reduced motion |
| Micro-interacciones | Adoptar con cuidado | Hover, focus, botones, menú móvil; nada en cuerpo de texto |
| Dark mode | Adoptar | `prefers-color-scheme` reasigna roles, sin nueva paleta |
| Storytelling | Adoptar con cuidado | Ritmo vertical y jerarquía; parallax solo en home y portadas |
| IA, personalización | Evitar | No se contempla en este proyecto |
| AR/VR, 3D | Evitar | No aplica |
| Parallax, hero banner, efectos en home | Adoptar | Home y portadas de secciones: hero, parallax, efectos vistosos; nunca en artículos |
| Popups | Adoptar con cuidado | Suscripción (newsletter) y avisos puntuales; reglas estrictas de frecuencia |
| Tipografía animada, carouseles, video embebido | Adoptar con cuidado | Portada especial y páginas principales de secciones; nunca en artículos |

### 2.1 Minimalismo editorial

**Se adopta:** tipografía protagonista, ritmo vertical generoso, jerarquía clara, paleta corta con roles, navegación mínima, micro-interacciones solo funcionales.

**No se adopta:** CTAs invasivos, landings disfrazadas de home, módulos decorativos, animación como espectáculo.

**Criterio:** Si un recurso visual no mejora orientación, jerarquía, lectura o accesibilidad, se elimina.

### 2.2 Design tokens

`:root` con `--brand-*` y roles (`--bg`, `--text`, `--link`, `--surface`, etc.); componentes solo consumen roles, nunca hex. Ver `02-identidad-corporativa` sección 6.

### 2.3 Performance

- 1 CSS principal; JS mínimo con `defer`.
- Imágenes optimizadas, `width`/`height`, `loading="lazy"` donde aplique.
- Fuentes auto-hospedadas; evitar CDN innecesario.
- WordPress: un `style.css`; scripts con defer; evitar plugins pesados.

### 2.4 Accesibilidad

Contraste AA; `:focus-visible` claro (color de acento); navegación por teclado; h1→h2→h3; labels en formularios; `prefers-reduced-motion`; enlaces con estados claros.

### 2.5 Micro-interacciones

Solo donde confirman una acción: hover de links, focus de inputs, estados de botones, menú móvil, validación de formularios. **No** en lectura continua, bloques largos ni títulos. Si la animación no explica una acción, sobra.

---

## 3. Decisiones adoptadas y qué evitar

**Adoptado para este proyecto:**
- **Dark mode:** sí; reasignar roles con `prefers-color-scheme`.
- **Popups:** suscripción (newsletter) y avisos puntuales; reglas estrictas de frecuencia.
- **Home y portadas de secciones:** hero banner, parallax, efectos vistosos; tipografía animada, carouseles, banner de video embebido; nunca en artículos.
- **Video e imágenes:** video embebido, imagen con pie editorial, portada especial permitidos.

**Evitar:** IA (no se contempla); AR/VR; 3D; motion en artículos; experiencias agentic; anti-grid y brutalismo.

**Menú:** estructura exacta se define en el plan maestro.

---

## 4. Bloque listo para implementación

### Checklist de maqueta estática

- [ ] 1 CSS principal; JS mínimo con `defer`.
- [ ] Imágenes con `width`/`height`, optimizadas, `loading="lazy"` donde aplique.
- [ ] Tokens en `:root`; componentes solo usan roles.
- [ ] Contraste AA; `:focus-visible` visible.
- [ ] Jerarquía de headings correcta; enlaces con estado claro.
- [ ] Micro-interacciones solo funcionales.
- [ ] Popups solo suscripción y avisos puntuales; reglas de frecuencia definidas.
- [ ] Sin animación en texto de lectura (artículos, poemas, ensayos); efectos solo en home y portadas de secciones.

### Equivalencia en WordPress

| Concepto | En el theme |
|----------|-------------|
| Tokens y roles | `theme.json` bloquea paleta y tipografías; `style.css` con `--brand-*` y roles. |
| CSS | Un `style.css`; evitar múltiples hojas de plugins. |
| JS | Enqueue solo lo necesario; `defer`; sin jQuery salvo necesidad real. |
| Imágenes | Optimizadas; `width`/`height` en markup. |
| Accesibilidad | Contraste y focus en CSS; headings y landmarks en templates. |

Design tokens y roles en `theme.json` + `style.css`. Performance vía un CSS, JS defer, imágenes con dimensiones y lazy. Accesibilidad en markup y CSS. Sin capas comerciales como base del sistema.
