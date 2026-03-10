# Daniel Arella — Estándares de accesibilidad

**Documento único de estándares de accesibilidad**  
**Versión 1.0**

Estrategia, principios, reglas de diseño, HTML semántico, ARIA, contenido editorial, checklist de implementación y pruebas. Alineado con WCAG 2.2 Nivel AA.

**Se apoya en:** `01-plataforma-autor-plan`, `02-identidad-corporativa`, `18-css-architecture`, `22-tendencias-ux-ui-sistema-editorial`, `24-principios-layout`

**Alimenta a:** `18-css-architecture`, `21-orden-implementacion`

---

## 1. Estrategia

- **Compromiso:** Cualquier persona puede leer, orientarse y comprender el contenido sin fricción.
- **Referencia:** WCAG 2.2 Nivel AA.
- **Compatibilidad:** WCAG 2.1 Nivel AA.
- **Filosofía:** La accesibilidad como parte del diseño y el contenido, no como añadido posterior.

---

## 2. Principios (WCAG)

| Principio | Objetivo |
|-----------|----------|
| **Perceptible** | La información y la UI se presentan de forma que las personas puedan percibirlas. |
| **Operable** | La UI es operable (teclado, tiempo suficiente, sin convulsiones, navegable). |
| **Comprensible** | La información y el uso de la UI son comprensibles. |
| **Robusto** | El contenido se interpreta de forma fiable por agentes de usuario y tecnología asistiva. |

---

## 3. Usuarios a considerar

| Perfil | Impacto |
|--------|---------|
| Visual | Ceguera, baja visión, daltonismo → semántica, etiquetas, alt, contraste, zoom |
| Auditivo | Sordera → subtítulos, transcripciones |
| Motor | Sin ratón, baja precisión → teclado, objetivos grandes, orden de tabulación |
| Cognitivo | Dislexia, TDAH, procesamiento lento → lenguaje claro, jerarquía simple |
| Neurológico | Fotosensibilidad, migrañas → sin parpadeos, respetar `prefers-reduced-motion` |

---

## 4. Reglas de diseño

- **Tipografía legible:** Tamaños cómodos, jerarquía clara (H1–H3).
- **Contraste:** Mínimo AA (4,5:1 texto normal, 3:1 texto grande). Elementos UI (iconos, botones, focus): mínimo 3:1.
- **Objetivos:** Áreas clicables adecuadas (~44×44px cuando sea posible; WCAG 2.2 Target Size).
- **Color:** No depender solo del color para transmitir significado.
- **Lenguaje:** Claro y directo (alineado con la guía de voz).

### Reglas mínimas (alto impacto, bajo coste)

- **Skip link:** "Saltar al contenido" visible al recibir foco.
- **Idioma:** `lang` en `<html>`; consistente por página.
- **Orden de foco:** Debe seguir el orden visual y lógico del contenido.
- **Foco visible:** No `outline: none` sin reemplazo (`:focus-visible`).
- **Focus Not Obscured (WCAG 2.2):** El elemento con foco no debe quedar completamente oculto por headers fijos, banners o overlays.
- **Reflow y zoom:** Usable al 200% de zoom y 320px de ancho.
- **Landmarks:** Un `<main>` por página; header, nav, main, aside, footer consistentes.
- **Headings:** Jerarquía lógica (evitar saltos innecesarios).
- **Enlaces:** Distinguibles sin depender solo del color.
- **Formularios:** Labels asociados a inputs, autocomplete, mensajes de error claros.
- **Teclado:** Todo elemento interactivo debe ser operable con teclado.
- **Título de página:** Cada página debe tener un título único y descriptivo.

---

## 5. HTML y ARIA

### Base

1. **HTML semántico primero.** Usar elementos nativos (`button`, `a`, `input`, `nav`, `main`, etc.).
2. **No usar ARIA** cuando HTML nativo ya resuelve el problema. Usar ARIA solo para UI dinámica o componentes personalizados.
3. **No usar ARIA para corregir markup incorrecto.**

### Cuándo usar ARIA

- Nombre accesible cuando no hay texto visible
- Estado (expanded, selected, pressed, invalid)
- Relaciones (controls, labelledby, describedby)
- Regiones live para anuncios dinámicos

### Cuándo NO usar ARIA

- `div` con `role="button"` cuando un `button` funciona
- Roles redundantes
- `aria-hidden` en contenido enfocable
- `aria-label` cuando existe label visible
- `tabindex` positivo (1, 2, …)

### Botones con icono

Proporcionar nombre accesible: (1) texto visible, (2) texto `.u-visually-hidden` (ver `18-css-architecture`), (3) `aria-labelledby`, (4) `aria-label` como último recurso. Iconos decorativos: `aria-hidden="true"`, `focusable="false"`. Ver `19-assets-strategy`.

---

## 6. Contenido editorial

- **Headings:** H1–H3 ordenados; un H1 por página.
- **Texto alt:** Todas las imágenes informativas; descriptivo y conciso. Decorativas: `alt=""`.
- **Enlaces:** Texto descriptivo (evitar "aquí", "clic", "más" sin contexto).
- **Enlaces externos:** Indicar cuando un enlace abre nueva pestaña o cambia contexto.
- **Media:** Subtítulos o transcripción para video/audio informativo.

---

## 7. Checklist de implementación

- [ ] Skip link visible al recibir foco
- [ ] `lang` en `<html>`
- [ ] Navegación completa por teclado; orden de tabulación lógico
- [ ] Foco visible; no `outline: none` sin reemplazo
- [ ] Usable al 200% de zoom y 320px de ancho
- [ ] Imágenes con alt apropiado
- [ ] Formularios con labels asociados a inputs; errores vinculados (aria-describedby, aria-invalid)
- [ ] Sin animación agresiva; respetar `prefers-reduced-motion`
- [ ] Sin contenido parpadeante
- [ ] Contraste AA en texto, enlaces, botones
- [ ] `<title>` único por página; landmarks y headings correctos

---

## 8. Pruebas

- **Teclado:** Tab por todos los interactivos; sin trampas de foco.
- **Foco visible:** Claro en enlaces, botones, inputs.
- **Herramientas:** Lighthouse, Axe DevTools, WAVE (sin fallos críticos de accesibilidad).
- **Formularios:** Label asociado a input, error visible y legible.
- **Lector de pantalla (recomendado):** NVDA, VoiceOver o JAWS; probar flujos clave (nav, formulario de contacto).

---

## 9. Relación con otros documentos

- **Identidad:** `02-identidad-corporativa` define paleta y contraste; este documento extiende los criterios de accesibilidad.
- **CSS:** `18-css-architecture` implementa `:focus-visible`, roles y espaciado; criterios definidos en este documento.
- **Tendencias:** `22-tendencias-ux-ui-sistema-editorial` incluye accesibilidad en su checklist; este documento lo detalla.
- **Layout:** `24-principios-layout` define contraste en texto sobre imagen; criterios en este documento.

**Estándar:** WCAG 2.2 (W3C)
