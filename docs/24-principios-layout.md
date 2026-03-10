# Daniel Arella — Principios de layout

Cierra el sistema visual: ancho de lectura, ritmo vertical, uso del blanco, relación tipografía/imagen, grid y comportamiento responsive. Aplica a la maqueta estática y a WordPress.

**Se apoya en:** `02-identidad-corporativa`, `13-wireframes`, `18-css-architecture`  
**Referencia:** `21-orden-implementacion`, `22-tendencias-ux-ui-sistema-editorial`

---

## 1. Ancho de lectura

- **Objetivo:** 60–70 caracteres por línea (`ch`) en texto cuerpo.
- **Implementación:** Contenedor de contenido con `max-width` en `ch` (ej. `65ch`).
- **Contenedor general:** El texto vive en un contenedor centrado. Sin texto de borde a borde. El hero puede usar ancho completo; la lectura no.
- **Regla:** Sin líneas interminables; el sitio es legible y calmado, no denso.

---

## 2. Ritmo vertical

- **Consistencia:** Márgenes y padding siguen una escala (ej. múltiplos de 1rem).
- **Respiración:** Espaciado generoso entre bloques; el contenido no está "pegado".
- **Jerarquía:** Más espacio antes/después de H1/hero que entre párrafos.
- **Regla:** Un solo sistema de espaciado en main.css; sin valores arbitrarios por página.
- **Entre páginas:** Ritmo consistente en todas las páginas.

---

## 3. Uso del blanco

- **Blanco activo:** El espacio vacío es parte del diseño. No llenar por llenar.
- **Agrupación:** El blanco separa grupos lógicos (header / hero / sección / footer).
- **Contraste:** Zonas densas (texto, listas) equilibradas con zonas abiertas (hero, entre secciones).
- **Regla:** No sacrificar el blanco para "meter más contenido".

---

## 4. Relación tipografía / imagen

- **Tipografía primero:** La identidad es tipografía + color. Las imágenes apoyan, no dominan.
- **Evitar competencia:** Sin bloques donde imagen y texto compitan por protagonismo.
- **Proporción:** Cuando texto e imagen comparten bloque, definir proporción clara (50/50, 2/3–1/3) según wireframes.
- **Texto sobre imagen:** Asegurar contraste (overlay, sombra o zona sólida). Criterios en `23-estandares-accesibilidad`.
- **Alt y contexto:** Toda imagen con alt significativo; la relación es semántica también.

---

## 5. Sistema de grid

- **Base:** Sitio organizado en una grid simple que alinea los bloques principales.
- **Función:** Coherencia horizontal entre header, contenido y footer.
- **Centrado:** Contenido en un contenedor centrado y alineado.
- **Ancho de lectura:** 60–70ch vive dentro de ese contenedor.
- **Proporciones:** Estables al combinar texto/imagen (1/2–1/2, 2/3–1/3).
- **Regla:** Sin grids distintas por página. Un sistema para todo el sitio.
- **Responsive:** La grid se simplifica en móvil (columna única); ritmo y legibilidad preservados.

---

## 6. Comportamiento responsive

- **Regla clave:** Responsive no significa rediseñar; significa la misma experiencia con menos ancho.
- **Estructura:** Multi-columna → columna única.
- **Ancho de lectura:** Se detiene en `ch`; se vuelve fluido con márgenes cómodos.
- **Ritmo vertical:** Mantenido o aumentado para touch.
- **Orden de bloques:** Igual que wireframes; lo más importante primero.
- **Imágenes:** Se adaptan al ancho del contenedor sin recortar información esencial.
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
| Responsive | Simplificar, no rediseñar; mismo territorio, menos ancho |

### Invariantes

Estos principios:

- Se validan en la maqueta estática
- Se mantienen en WordPress
- No se modifican por página ni contenido

---

## 8. Relación con otros documentos

- **Identidad:** `02-identidad-corporativa` define medida (65ch), ritmo editorial y gramática de layout; este documento los operacionaliza.
- **Wireframes:** `13-wireframes` define estructura y bloques; el layout los materializa.
- **CSS:** `18-css-architecture` implementa variables de espaciado y breakpoints.
- **Accesibilidad:** `23-estandares-accesibilidad` para contraste en texto sobre imagen.

---

**Versión:** 1.0
