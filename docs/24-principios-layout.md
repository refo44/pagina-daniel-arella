# Daniel Arella — Principios de layout

Cierra el sistema visual: ancho de lectura, ritmo vertical, uso del blanco, relación tipografía/imagen, grid y comportamiento responsive. Aplica a la maqueta estática y a WordPress.

**Versión 1.0**

**Se apoya en:** `01-plataforma-autor-plan`, `02-identidad-corporativa`, `13-wireframes`, `18-css-architecture`

**Alimenta a:** `17-static-file-structure`, `21-orden-implementacion`, `22-tendencias-ux-ui-sistema-editorial`, `23-estandares-accesibilidad`

---

## 1. Ancho de lectura

- **Objetivo:** 60–70 caracteres por línea (`ch`) en texto cuerpo, dentro del rango tipográfico aceptado de 45–75 caracteres.
- **Implementación:** Contenedor de contenido con `max-width` en `ch` (ej. `65ch` o variable `--measure-readable` definida en `18-css-architecture`).
- **Contenedor general:** El texto vive en un contenedor centrado. Sin texto de borde a borde. El hero puede usar ancho completo; la lectura no.
- **Regla:** Sin líneas interminables; el sitio es legible y calmado, no denso.
- **Límite accesible:** No superar ~80 caracteres por línea (WCAG).
- **Accesibilidad cognitiva:** La medida corta ayuda a personas con dislexia o dificultades de seguimiento visual.

---

## 2. Ritmo vertical

- **Consistencia:** Márgenes y padding siguen una escala (ej. múltiplos de 1rem).
- **Respiración:** Espaciado generoso entre bloques; el contenido no está "pegado".
- **Jerarquía:** Más espacio antes/después de H1/hero que entre párrafos.
- **Regla:** Un solo sistema de espaciado en `main.css`; sin valores arbitrarios por página. Variables `--space-*` y objetos `.o-stack`, `.o-flow` según `18-css-architecture`.
- **Entre páginas:** Ritmo consistente en todas las páginas.

---

## 3. Uso del blanco

- **Blanco activo:** El espacio vacío es parte del diseño. No llenar por llenar.
- **Agrupación:** El blanco separa grupos lógicos (header / hero / sección / footer).
- **Contraste:** Zonas densas (texto, listas) equilibradas con zonas abiertas (hero, entre secciones).
- **Regla:** No sacrificar el blanco para "meter más contenido".
- **Descanso visual:** La interfaz debe sentirse ligera, serena y respirable. El vacío reduce tedio y permite reconocer la jerarquía sin esfuerzo.
- **Límite de chrome:** Evitar acumular borde, sombra, fondo y radio sobre un mismo bloque. Primero espacio y ritmo; usar un borde sutil solo cuando la agrupación no sea evidente.
- **Contraste de superficies:** Pergamino funciona como lienzo y Blanco como superficie informativa. El hero puede usar un color de marca porque su función es atraer, no sostener lectura. Esta diferencia debe facilitar la exploración sin convertir cada `div` en una caja.

---

## 4. Relación tipografía / imagen

- **Tipografía primero:** La identidad es tipografía + color. Las imágenes apoyan, no dominan.
- **Evitar competencia:** Sin bloques donde imagen y texto compitan por protagonismo.
- **Proporción:** Cuando texto e imagen comparten bloque, definir proporción clara (50/50, 2/3–1/3) según wireframes.
- **Texto sobre imagen:** Asegurar contraste (overlay, sombra o zona sólida para garantizar contraste AA). Criterios en `23-estandares-accesibilidad`.
- **Alt y contexto:** Toda imagen con alt significativo; la relación es semántica también.

### 4.1 Ilustraciones

- **Estilo:** Open Doodles
- **Función:** Acompañar el contenido editorial
- **Ubicación:** Hero y cabeceras de sección
- **Regla:** Máximo una ilustración por sección

---

## 5. Sistema de grid

- **Base:** Sitio organizado en una grid estructural simple que alinea los bloques principales.
- **Función:** Coherencia horizontal entre header, contenido y footer.
- **Centrado:** Contenido en un contenedor centrado y alineado.
- **Ancho de lectura:** 60–70ch vive dentro de ese contenedor.
- **Proporciones:** Estables al combinar texto/imagen (1/2–1/2, 2/3–1/3).
- **Contenedor máximo:** El contenedor principal no supera el ancho necesario para sostener la medida de lectura.
- **Regla:** Sin grids distintas por página. Un sistema para todo el sitio.
- **Accesibilidad:** La grid no debe romper el orden lógico de lectura.
- **Responsive:** La grid se simplifica en móvil (columna única); ritmo y legibilidad preservados.

---

## 6. Comportamiento responsive

- **Regla clave:** Responsive significa reflujo del layout, no rediseño del contenido.
- **Estructura:** Multi-columna → columna única.
- **Ancho de lectura:** Se detiene en `ch`; se vuelve fluido con márgenes cómodos.
- **Ritmo vertical:** Mantenido o aumentado para touch.
- **Orden de bloques:** Igual que wireframes; lo más importante primero.
- **Orden de lectura:** El orden visual debe coincidir con el orden de lectura del DOM (accesibilidad).
- **Imágenes:** Se adaptan al ancho del contenedor sin recortar información semántica relevante.
- **Interactivos:** Fáciles de pulsar; espacio suficiente alrededor.
- **Contenido:** No oculto en móvil. Mismo territorio, más estrecho.

---

## 7. Resumen

| Principio | Regla breve |
|-----------|-------------|
| Ancho de lectura | 60–70ch; contenedor centrado; hero puede usar ancho completo |
| Ritmo vertical | Escala única; generoso; consistente entre páginas |
| Blanco | Activo; pausa narrativa; no llenar |
| Tipografía / imagen | Tipografía primero; sin competencia; sin drama |
| Grid | Un sistema; contenedor → lectura; sin grid por página |
| Responsive | Reflujo del layout, no rediseño; orden visual = orden DOM |

### Invariantes

Estos principios:

- Se validan en la maqueta estática
- Se mantienen en WordPress
- No se modifican por página, plantilla o contenido

---

## 8. Relación con otros documentos

- **Identidad:** `02-identidad-corporativa` define medida (65ch), ritmo editorial y gramática de layout; este documento los operacionaliza.
- **Wireframes:** `13-wireframes` define estructura y bloques; el layout los materializa.
- **CSS:** `18-css-architecture` implementa variables de espaciado (`--space-*`), `--measure-readable`, breakpoints y objetos de layout (`.o-container`, `.o-stack`, `.o-flow`).
- **Accesibilidad:** `23-estandares-accesibilidad` para contraste en texto sobre imagen.
