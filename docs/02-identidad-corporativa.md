# Daniel Arella — Corporate Identity and Editorial System

**Versión 1.7**

Este documento define el sistema completo de identidad visual, tipográfica y editorial para el sitio de Daniel Arella. Gobierna tanto la maqueta estática como el theme WordPress. No es un theme. No es un blog. Es una plataforma de autor.

---

## 1. Esencia de marca

Daniel Arella no es una publicación ni un medio. Es un autor con una obra viva.

| Rasgo | Descripción |
|-------|-------------|
| Voz | Literaria, reflexiva, precisa |
| Estética | Bohemia contemporánea |
| Ritmo | Lento, respirado, editorial |
| Función | Espacio de lectura, no de consumo |
| Presencia | Autor como figura central |

El sitio debe sentirse como una biblioteca íntima, no como una revista ni como una app.

---

## 2. Paleta cromática

Solo existen cinco colores reales. No hay grises, no hay degradados, no hay extensiones.

| Nombre | Hex | Uso principal |
|--------|-----|----------------|
| Black | #000000 | Cabecera, pie, texto |
| Porcelain | #fffffc | Fondos, superficies |
| Khaki Beige | #beb7a4 | Superficies (cards), texto secundario, bordes |
| Vivid Tangerine | #ff7f11 | Acento base: enlaces, botones, foco |
| Blazing Flame | #ff3f00 | Acento intenso: hover, énfasis |

### Guía visual

Imagina el sitio así:

```
[ Header: Black ]
    Daniel Arella
--------------------------
[ Surface: Khaki Beige ]
    Poem card
    Essay card
--------------------------
Text: Black
Links: Vivid Tangerine → Blazing Flame en hover (sin subrayado)
Buttons: Vivid Tangerine con texto Black → Blazing Flame en hover
```

Todo se construye con estas cinco tintas.

---

## 3. Sistema tipográfico

Solo dos familias.

### Fraunces

Voz del autor. Literatura.

**Usos:**

- Poemas
- Ensayos
- Títulos
- Citas
- Fragmentos filosóficos

### Source Sans 3

Infraestructura editorial.

**Usos:**

- Navegación
- Metadatos
- Formularios
- Botones
- Filtros
- Fechas

Nunca se mezclan. Nunca se introduce una tercera.

---

## 4. Ritmo editorial

### Texto corriente

- Font: Fraunces
- Size: 18px
- Line height: 1.6
- Measure: 65ch

Debe sentirse como un libro.

### Poemas

- Font: Fraunces
- Size: 1.1rem
- Line height: 1.7
- Max width: 55ch
- Margin bottom: 2em

No se comprimen. No se justifican.

### Metadatos

- Font: Source Sans 3
- Size: 0.9rem
- Letter spacing: 0.02em

Visualmente discretos. Nunca dominan la obra.

---

## 5. Gramática de layout

| Regla | Significado |
|-------|-------------|
| Una columna | Lectura vertical |
| 65ch | Ancho humano |
| Espacio | Respiración |
| Sin grids densos | No revista |
| Flujo | No tarjetas tipo app |

Ejemplo visual:

```
[ HEADER ]
    Daniel Arella

[ CONTENT ]
    Poem
    Space
    Essay
    Space
    Quote

[ FOOTER ]
```

Nada debe sentirse apretado ni "productizado".

---

## 6. Arquitectura de color por capas

Esto es una de las decisiones más importantes.

### Capa 1: Tokens de marca

Los únicos colores reales. El orden es semántico: 1–3 neutros, 4–5 acentos (4 = base, 5 = más intenso).

```css
--brand-1: #000000;  /* Black - neutro oscuro principal */
--brand-2: #fffffc;  /* Porcelain - neutro claro base */
--brand-3: #beb7a4;  /* Khaki Beige - neutro medio: superficies, bordes, texto secundario */
--brand-4: #ff7f11;  /* Vivid Tangerine - acento base de interacción */
--brand-5: #ff3f00;  /* Blazing Flame - acento intenso (hover, énfasis) */
```

### Capa 2: Roles semánticos

Cómo se usan. Alineado con `22-tendencias-ux-ui-sistema-editorial` (design tokens y accesibilidad).

```css
/* Semantic roles */
--bg: var(--brand-2);           /* Porcelain */
--text: var(--brand-1);         /* Black */
--text-muted: var(--brand-3);  /* Khaki Beige - metadatos, UI secundaria (evita opacity) */
--surface: var(--brand-3);      /* Khaki Beige - cards, superficies */
--border: var(--brand-3);       /* Khaki Beige - bordes suaves, no Black (evita dureza) */

--link: var(--brand-4);         /* Vivid Tangerine - acento base */
--link-hover: var(--brand-5);   /* Blazing Flame - acento intenso */
--focus: var(--brand-4);        /* Vivid Tangerine - más sereno para lectura larga */

--header-bg: var(--brand-1);    /* Black */
--footer-bg: var(--brand-1);    /* Black */

--primary: var(--brand-4);      /* Vivid Tangerine - acento base */
--primary-hover: var(--brand-5); /* Blazing Flame - acento intenso */
--text-on-primary: var(--brand-1); /* Black - texto sobre botones/CTAs */
```

Los componentes solo consumen roles, nunca hex directo.

**Surface y separación:** Porcelain y Khaki Beige son cercanos en valor. Usar separación por ritmo (padding, whitespace) y borde suave (brand-3). Evitar sombras; mantener aire editorial.

### Accesibilidad de contraste

- **Texto sobre fondo claro:** Black sobre Porcelain cumple AA sobrado.
- **Vivid Tangerine** como texto sobre Porcelain no alcanza AA.
- **Blazing Flame** como texto sobre Porcelain queda cerca pero no alcanza AA para texto normal.
- **Solución:** Enlaces con color naranja. Sin subrayado. Se distinguen por color respecto al texto; hover refuerza con cambio de tono.

```css
a {
  color: var(--link);
  text-decoration: none;
}
a:hover {
  color: var(--link-hover);
}
:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}
```

**Focus:** En modo claro y oscuro, `--focus: var(--brand-4)` mantiene calma editorial. Si se prefiere focus más intenso (brand-5), usar `box-shadow` con alpha en lugar de outline sólido.

**Botones y CTAs:** Contraste seguro = texto Black sobre fondos naranjas.

```css
.button {
  background: var(--primary);
  color: var(--text-on-primary);
}
.button:hover {
  background: var(--primary-hover);
}
```

### Capa 3: Componentes

Nunca usan hex ni brand tokens.

```css
.button {
  background: var(--primary);
  color: var(--text-on-primary);
}

.card {
  background: var(--surface);
}
```

Esto permite: Dark mode, Rebranding, Tema alterno — sin tocar componentes.

---

## 7. Ejemplo visual completo

### Poema destacado

```html
<article class="poem-card poem-card--featured">
  <h2 class="poem-card__title">El ángel caído</h2>
  <p class="poem-card__excerpt">
    Yo caí por amor al pensamiento...
  </p>
  <a href="/poem/el-angel-caido" class="poem-card__link">
    Leer
  </a>
</article>
```

```css
.poem-card {
  background: var(--surface);
  color: var(--text);
}

.poem-card__title {
  font-family: var(--font-heading);
}

.poem-card__link {
  color: var(--link);
  text-decoration: none;
}
.poem-card__link:hover {
  color: var(--link-hover);
}
```

No hay estilos arbitrarios. Todo fluye desde los tokens. Enlaces sin subrayado.

---

## 8. Dark mode

No se añaden colores. Solo se reasignan roles (`prefers-color-scheme: dark`). Opcional según `22-tendencias-ux-ui-sistema-editorial`.

**Regla de focus:** En modo claro, focus = brand-4 (más sereno) o brand-5 (más intenso) según accesibilidad y fatiga visual. En modo oscuro, focus = brand-4 por legibilidad y menor agresividad sobre fondo negro.

**Surface en dark mode:** Khaki Beige sobre negro crea contraste fuerte y deliberado; tarjetas como papel sobre fondo oscuro. Decisión estética clara, no error.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg: var(--brand-1);       /* Black */
    --text: var(--brand-2);     /* Porcelain */
    --text-muted: var(--brand-3);
    --surface: var(--brand-3);  /* Khaki Beige - protagonista sobre negro */
    --border: var(--brand-2);   /* Porcelain */

    --link: var(--brand-4);     /* Vivid Tangerine - contrasta bien en negro */
    --link-hover: var(--brand-5);
    --focus: var(--brand-4);    /* menor agresividad en lectura oscura */

    --header-bg: var(--brand-1);
    --footer-bg: var(--brand-1);

    --primary: var(--brand-4);
    --primary-hover: var(--brand-5);
  }
}
```

La identidad sigue intacta. Mantener contraste AA en todos los estados.

---

## 9. WordPress

Este sistema se traduce directamente a:

- style.css
- theme.json
- Variables CSS globales
- Tokens de editor

El editor no puede romper la identidad.

---

## 10. Estado del sistema

| Capa | Estado |
|------|--------|
| Paleta | Cerrada |
| Tipografía | Cerrada |
| Ritmo editorial | Cerrado |
| Layout | Cerrado |
| Tokens | Cerrados |
| Dark mode | Opcional |
| Logo | Pendiente |
| theme.json | Pendiente |

---

## 11. Tendencias aplicadas al sistema editorial

Qué se adopta y qué se evita (lectura, claridad, accesibilidad, performance vs. personalización, ruido, invasión) está definido en:

**→ [22-tendencias-ux-ui-sistema-editorial.md](22-tendencias-ux-ui-sistema-editorial.md)**

Ahí se encuentra:

- **Regla práctica:** adoptar lo que mejora lectura, claridad, accesibilidad y performance; evitar lo que introduce personalización, ruido visual o comportamiento invasivo.
- **Filosofía de diseño editorial:** minimalismo como estructura, no como estética; principios, riesgos reales, decisiones permitidas y anti-patrones; equivalencia HTML/WordPress — sección 1 de ese documento.
- **Tabla de adopción y minimalismo:** qué adoptar, qué evitar; implementación — sección 2 de ese documento.
- **Design tokens** (alineados con esta identidad), **performance-first**, **accesibilidad por defecto**, **micro-interacciones funcionales**, **storytelling editorial** (ritmo y jerarquía).
- **Opcional:** dark mode, formas orgánicas en dosis mínimas.
- **Evitar como base:** experiencias agentic, popups/smart triggers, motion “de show”.
- **Bloque listo para implementación:** checklist de maqueta estática y equivalencia en WordPress — sección 4 de ese documento.

---

## Regla final

Nada visual se decide fuera de este sistema. Ni en HTML. Ni en WordPress. Ni en plugins.

La obra vive dentro de esta gramática.

---

**Versión del documento:** 1.7  
**Identidad:** Black, Porcelain, Khaki Beige, Vivid Tangerine, Blazing Flame.
