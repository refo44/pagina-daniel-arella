# Daniel Arella — Corporate Identity and Editorial System

**Versión 2.1**

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

Solo existen seis colores reales. No hay grises, no hay degradados, no hay extensiones.

**Regla absoluta:** No puede existir ningún otro color que no esté en la paleta. Fondos, texto, bordes, sombras (con alpha de un color de la paleta), iconos, estados hover/focus — todo proviene exclusivamente de estos seis hex.

**Paleta: Tierra viva**

| Nombre | Hex | Uso principal |
|--------|-----|----------------|
| Tinta | #0d1303 | Cabecera, pie, texto |
| Pergamino | #f3e0cc | Fondo claro principal, tarjetas y formularios |
| Terracota | #b02e17 | Superficies editoriales, texto secundario, bordes |
| Siena | #7e390c | Acento base: enlaces, botones, foco |
| Musgo | #174f18 | Acento intenso: hover, énfasis |
| Blanco | #ffffff | Fondo claro alterno para bandas de contenido |

### Guía visual

Imagina el sitio así:

```
[ Header: Tinta ]
    Daniel Arella
--------------------------
[ Bandas alternas: Pergamino / Blanco ]
    Destacado
--------------------------
Text: Tinta
Links: Siena → Musgo en hover
Buttons: Siena con texto Pergamino → Musgo en hover
```

Todo se construye con estas seis tintas. Los fondos claros alternan entre Pergamino y Blanco; ambos usan Tinta como texto principal.

| Combinación | Fondo | Texto |
|-------------|-------|-------|
| Página general | Pergamino | Tinta |
| Banda alterna | Blanco | Tinta |
| Cabecera / pie | Tinta | Pergamino |
| Superficies editoriales | Terracota | Tinta |
| Botones / CTAs | Siena | Pergamino |
| Hover botones | Musgo | Pergamino |

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

### Jerarquía tipográfica

| Elemento | Fuente | Tamaño sugerido |
|----------|--------|-----------------|
| Título de obra / página (H1) | Fraunces | 2–2.4rem |
| Subtítulo (H2) | Fraunces | 1.5–1.7rem |
| Secciones (H3) | Fraunces | 1.2–1.3rem |
| Texto corriente | Fraunces | 18px |
| Metadatos | Source Sans 3 | 0.9rem |
| Captions / notas | Source Sans 3 | 0.85rem |

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
| Una columna | La lectura principal de poemas y ensayos ocurre en una sola columna. |
| 65ch | Ancho humano |
| Espacio | Respiración |
| Sin grids densos | No revista |
| Flujo | No tarjetas tipo app |

Las páginas de exploración (archivo, listados, talleres, publicaciones) pueden usar composición secundaria siempre subordinada al ritmo editorial.

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

Los únicos colores reales. El orden es semántico: 1–2 son los neutros base, 3–5 son acentos y 6 es el fondo claro alterno.

```css
--brand-1: #0d1303;  /* Tinta - neutro oscuro principal */
--brand-2: #f3e0cc;  /* Pergamino - neutro claro base */
--brand-3: #b02e17;  /* Terracota - acento medio: superficies editoriales, bordes, texto secundario */
--brand-4: #7e390c;  /* Siena - acento base de interacción */
--brand-5: #174f18;  /* Musgo - acento intenso (hover, énfasis) */
--brand-6: #ffffff;  /* Blanco - fondo claro alterno */
```

### Capa 2: Roles semánticos

Cómo se usan. Alineado con `22-tendencias-ux-ui-sistema-editorial` (design tokens y accesibilidad).

```css
/* Semantic roles */
--bg: var(--brand-2);           /* Pergamino */
--page-bg: var(--brand-2);      /* Pergamino - lienzo principal */
--content-bg: var(--brand-2);   /* Pergamino - tarjetas y controles */
--section-focus-bg: var(--brand-6); /* Blanco - bandas de foco */
--reading-bg: var(--brand-6);   /* Blanco - lectura concentrada */
--text: var(--brand-1);         /* Tinta */
--text-muted: var(--brand-3);  /* Terracota - metadatos, UI secundaria (evita opacity) */
--surface: var(--brand-3);      /* Terracota - superficies editoriales */
--border: var(--brand-3);       /* Terracota - bordes; usar con moderación */

--link: var(--brand-4);         /* Siena - acento base */
--link-hover: var(--brand-5);   /* Musgo - acento intenso */
--focus: var(--brand-4);        /* Siena - acento de foco */

--header-bg: var(--brand-1);    /* Tinta */
--footer-bg: var(--brand-1);    /* Tinta */

--primary: var(--brand-4);      /* Siena - acento base */
--primary-hover: var(--brand-5); /* Musgo - acento intenso */
--text-on-primary: var(--brand-2); /* Pergamino - texto sobre botones/CTAs */
```

Los componentes solo consumen roles, nunca hex directo.

**Regla de fondos claros:** Pergamino es el lienzo dominante y Blanco se usa en bandas alternas. Las tarjetas y formularios conservan Pergamino para distinguirse dentro de las bandas blancas. Ambos fondos usan Tinta como texto principal.

**Regla de lectura concentrada:** Todo texto completo que requiera atención sostenida —poemas, ensayos, relatos y artículos— se presenta sobre `--reading-bg` (Blanco) con `--text` (Tinta, `#0d1303`). “Oscuro” significa el color de texto definido por el tema, nunca negro puro `#000000`. Pergamino queda para el contexto de navegación, introducciones, tarjetas y contenido secundario.

**Dos objetivos UX:** En lectura continua domina la legibilidad, aunque el resultado sea visualmente más sobrio. En portadas, navegación, destacados y llamadas a la acción puede dominar el atractivo visual, siempre sin trasladar ese impacto al cuerpo de lectura.

**Regla de superficie:** Terracota se reserva para acentos editoriales puntuales, texto secundario, bordes y navegación contextual. No debe convertirse en fondo extensivo de lectura.

**Alternancia con propósito:** Pergamino y Blanco no alternan por posición, paridad ni decoración. Blanco identifica lectura concentrada o una banda con función de foco informativo; Pergamino identifica orientación, exploración, transición y contexto secundario. La decisión se toma por función dentro de la arquitectura de información.

**Aplicación en el home:** Recomendaciones usa Blanco porque concentra la prioridad editorial; Prensa usa Blanco porque aporta evidencia y credibilidad. Blog y Archivo usan Pergamino porque su función es explorar y navegar el corpus.

**Separación visual:** (1) Primero: whitespace. (2) Segundo: ritmo vertical. (3) Tercero: borde suave (brand-3). Evitar contornos fuertes o marcos pesados.

### Accesibilidad de contraste

- **Texto sobre fondos claros:** Tinta sobre Pergamino y Blanco cumple AA sobrado.
- **Siena** como texto sobre Pergamino o Blanco: verificar contraste AA.
- **Musgo** como texto sobre Pergamino o Blanco: verificar contraste AA.
- **Solución:** Enlaces con color Siena. Se distinguen por color respecto al texto; hover refuerza con cambio de tono.

**Enlaces de navegación o interfaz:** sin subrayado.

**Enlaces dentro de texto editorial** (ensayos, notas, etc.): subrayado discreto para claridad de lectura.

```css
/* Navegación / interfaz: sin subrayado */
a { color: var(--link); text-decoration: none; }
/* Texto editorial: subrayado discreto (clase .prose a o selector en cuerpo de ensayo) */
.prose a { text-decoration: underline; text-underline-offset: 0.2em; }
a:hover { color: var(--link-hover); }
:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}
```

**Focus:** `--focus: var(--brand-4)` mantiene calma editorial en el tema claro único. Si se prefiere focus más intenso (brand-5), usar `box-shadow` con alpha en lugar de outline sólido.

**Botones y CTAs:** Contraste seguro = texto Pergamino sobre fondos Siena / Musgo.

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

.surface-editorial {
  background: var(--surface);
}
```

**Regla editorial de superficies:** Las superficies editoriales son contenedores ocasionales para destacados o contexto. La obra principal se presenta directamente sobre el fondo de lectura. Se usan para: destacados, navegación contextual, módulos secundarios. No para envolver sistemáticamente todos los textos.

Esto permite: Rebranding y tema alterno — sin tocar componentes. **No incluye dark mode:** el sitio usa solo tema claro en todos los dispositivos.

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

No hay estilos arbitrarios. Todo fluye desde los tokens.

---

## 8. Tema claro único (sin dark mode)

El sitio **no incluye dark mode**. Nunca usar `@media (prefers-color-scheme: dark)` ni variantes oscuras de roles.

**Reglas:**
- Un solo tema: paleta Tierra viva en modo claro.
- Declarar `color-scheme: light` en `:root` para que móvil y desktop respeten el mismo tema.
- Ignorar la preferencia de modo oscuro del sistema operativo o del navegador.
- Cabecera y pie (Tinta + Pergamino) forman parte del tema claro; no son un “modo oscuro” alternativo.

**Focus:** `--focus: var(--brand-4)` en todo el sitio. Mantener contraste AA en todos los estados.

---

## 9. WordPress

Este sistema se traduce directamente a:

- style.css
- theme.json
- Variables CSS globales
- Tokens de editor

El editor no puede romper la identidad.

**Restricciones del editor:**

- Paleta bloqueada a los tokens del sistema
- Tipografías bloqueadas a Fraunces y Source Sans 3
- Sin colores personalizados por bloque
- Sin tamaños tipográficos arbitrarios
- Espaciados gobernados por tokens del sistema

---

## 10. Estado del sistema

| Capa | Estado |
|------|--------|
| Paleta | Cerrada |
| Tipografía | Cerrada |
| Ritmo editorial | Cerrado |
| Layout | Cerrado |
| Tokens | Cerrados |
| Dark mode | Excluido |
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
- **Opcional:** formas orgánicas en dosis mínimas.
- **Excluido:** dark mode.
- **Evitar como base:** experiencias agentic, popups/smart triggers, motion “de show”.
- **Bloque listo para implementación:** checklist de maqueta estática y equivalencia en WordPress — sección 4 de ese documento.

---

## Regla final

Nada visual se decide fuera de este sistema. Ni en HTML. Ni en WordPress. Ni en plugins.

La obra vive dentro de esta gramática.

**La lectura siempre domina sobre la interfaz. La interfaz nunca debe competir visualmente con la obra.**

---

**Versión del documento:** 2.1
**Identidad:** Tierra viva — Tinta, Pergamino, Terracota, Siena, Musgo y Blanco.
