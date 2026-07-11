# Daniel Arella — Corporate Identity and Editorial System

**Versión 2.8**

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
| Pergamino | #f3e0cc | Lienzo principal, orientación y pausas |
| Terracota | #974319 | Superficies editoriales, texto secundario, bordes |
| Siena | #802e0e | Acento base: enlaces, botones, foco |
| Castaño | #472015 | Acento intenso: hover, énfasis |
| Blanco | #ffffff | Superficies de contenido y lectura sostenida |

**Nota de versión 2.2:** Terracota, Siena y Castaño se recalibraron en una rampa tonal coherente — un solo matiz (H 20° → 17° → 13°) que se desplaza levemente hacia el rojo a medida que oscurece, como el comportamiento real de los pigmentos de tierra. Antes eran tres tonos cálidos con matiz inconsistente (H 9° / 24° / 14° — Castaño no continuaba la rampa de los otros dos) y Terracota pasaba el mínimo de contraste AA como texto sobre Pergamino por muy poco margen (5.03:1). La rampa nueva da más margen en los tres pasos (5.22 / 7.06 / 11.00 sobre Pergamino) sin cambiar Tinta, Pergamino ni Blanco, y sin alterar el territorio cálido de tierra y arcilla que define la marca.

### Guía visual

Imagina el sitio así:

```
[ Header: Tinta ]
    [ Isotipo ] Daniel Arella
                 Cuaderno de las fulminaciones
--------------------------
[ Superficie de lectura: Blanco ]
    Destacado
--------------------------
Text: Tinta
Links: Siena → Castaño en hover
Buttons: Siena con texto Pergamino → Castaño en hover
```

Todo se construye con estas seis tintas. Pergamino sostiene el lienzo y las pausas; Blanco permite distinguir superficies informativas —tarjetas, listados, paneles y lectura sostenida—. El hero usa Terracota con texto Pergamino para atraer atención sin confundirse con una superficie de lectura.

| Combinación | Fondo | Texto |
|-------------|-------|-------|
| Página general | Pergamino | Tinta |
| Superficie de contenido | Blanco | Tinta |
| Bloque de lectura sostenida | Blanco | Tinta |
| Cabecera / pie | Tinta | Pergamino |
| Superficies editoriales | Terracota | Pergamino |
| Botones / CTAs | Siena | Pergamino |
| Hover botones | Castaño | Pergamino |

**Nota:** Terracota como fondo de superficie editorial no sostiene texto Tinta — su contraste (2.8:1) queda por debajo de AA. Cuando Terracota es fondo, el texto va en Pergamino (5.2:1, AA). Tinta sobre Terracota solo se usa para iconografía o acentos grandes (≥3:1), nunca para texto corrido.

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

Los únicos colores reales. El orden es semántico: 1–2 son los neutros base, 3–5 son acentos y 6 es el fondo exclusivo de lectura sostenida.

```css
--brand-1: #0d1303;  /* Tinta - neutro oscuro principal */
--brand-2: #f3e0cc;  /* Pergamino - neutro claro base */
--brand-3: #974319;  /* Terracota - acento medio: superficies editoriales, bordes, texto secundario */
--brand-4: #802e0e;  /* Siena - acento base de interacción */
--brand-5: #472015;  /* Castaño - acento intenso (hover, énfasis) */
--brand-6: #ffffff;  /* Blanco - fondo de lectura sostenida */
```

### Capa 2: Roles semánticos

Cómo se usan. Alineado con `22-tendencias-ux-ui-sistema-editorial` (design tokens y accesibilidad).

```css
/* Semantic roles */
--bg: var(--brand-2);           /* Pergamino */
--page-bg: var(--brand-2);      /* Pergamino - lienzo principal */
--content-bg: var(--brand-6);   /* Blanco - superficies con contenido */
--reading-bg: var(--brand-6);   /* Blanco - lectura concentrada */
--text: var(--brand-1);         /* Tinta */
--text-muted: var(--brand-3);  /* Terracota - metadatos, UI secundaria (evita opacity) */
--surface: var(--brand-3);      /* Terracota - superficies editoriales */
--border: var(--brand-3);       /* Terracota - bordes; usar con moderación */

--link: var(--brand-4);         /* Siena - acento base */
--link-hover: var(--brand-5);   /* Castaño - acento intenso */
--focus: var(--brand-4);        /* Siena - acento de foco */

--header-bg: var(--brand-1);    /* Tinta */
--footer-bg: var(--brand-1);    /* Tinta */
--text-on-dark: var(--brand-2);        /* Pergamino - texto sobre header/footer/skip-link */
--text-on-dark-accent: var(--brand-3); /* Terracota - estado "página actual" sobre header */
--border-on-dark: var(--brand-2);      /* Pergamino - divisores sobre header/footer */
--focus-on-dark: var(--brand-2);       /* Pergamino - anillo de foco sobre superficies Tinta */
--scrim: rgb(13 19 3 / 30%);           /* Tinta con alpha - overlays sobre imagen */
--hero-bg: var(--brand-3);      /* Terracota - impacto visual */
--hero-text: var(--brand-2);    /* Pergamino - texto sobre hero */
--hero-action: var(--brand-5);  /* Castaño - acción principal del hero */

--primary: var(--brand-4);      /* Siena - acento base */
--primary-hover: var(--brand-5); /* Castaño - acento intenso */
--text-on-primary: var(--brand-2); /* Pergamino - texto sobre botones/CTAs */
```

**Regla de superficies oscuras:** Header, footer y el skip-link usan Tinta de fondo; su texto e iconos nunca son un brand token crudo (`--brand-2`) sino el rol `--text-on-dark`. Lo mismo aplica a bordes y foco sobre esas superficies (`--border-on-dark`, `--focus-on-dark`). Esto es lo que separa Capa 2 de Capa 1: un componente nunca decide "quiero Pergamino", decide "quiero texto legible sobre esta superficie oscura", y el rol resuelve el hex.

Los componentes solo consumen roles, nunca hex directo.

**Regla de fondos claros:** Pergamino es el lienzo de orientación, navegación y pausa. Blanco distingue superficies informativas: tarjetas, listados, paneles, controles y lectura sostenida. No se usa en contenedores vacíos ni como alternancia automática.

**Regla del hero:** El hero no es una superficie de lectura. Su función es resaltar, atraer y conducir hacia una acción; usa Terracota (`--hero-bg`) con texto Pergamino (`--hero-text`) y una acción Castaño accesible.

**Regla de lectura concentrada:** El bloque tipográfico de poemas, ensayos, relatos, artículos, notas del autor y documentación se presenta sobre `--reading-bg` (Blanco) con `--text` (Tinta, `#0d1303`), sin depender de su extensión. El título, los metadatos, las imágenes, los paneles, la multimedia, las acciones y la navegación permanecen fuera. “Oscuro” significa el color de texto definido por el tema, nunca negro puro `#000000`.

**Dos objetivos UX:** En lectura continua domina la legibilidad, aunque el resultado sea visualmente más sobrio. En portadas, navegación, destacados y llamadas a la acción puede dominar el atractivo visual, siempre sin trasladar ese impacto al cuerpo de lectura.

**Regla de superficie:** Terracota se reserva para acentos editoriales puntuales, texto secundario, bordes y navegación contextual. No debe convertirse en fondo extensivo de lectura.

**Sin alternancia decorativa:** Las bandas del home conservan Pergamino; sus unidades de contenido usan Blanco para distinguirse con claridad. La decisión responde a agrupación y legibilidad, no a la posición de la sección.

**Separación visual:** (1) Primero: whitespace. (2) Segundo: ritmo vertical. (3) Tercero: borde suave (brand-3). Evitar contornos fuertes o marcos pesados.

### Accesibilidad de contraste

- **Texto sobre fondos claros:** Tinta sobre Pergamino y Blanco cumple AA sobrado (14.70:1 / 18.89:1).
- **Terracota** como texto sobre Pergamino: 5.22:1 (AA). Sobre Blanco: 6.70:1 (AA).
- **Siena** como texto sobre Pergamino: 7.06:1. Sobre Blanco: 9.07:1 (AA).
- **Castaño** como texto sobre Pergamino: 11.00:1. Sobre Blanco: 14.14:1 (AAA en ambos).
- **Terracota como fondo:** solo sostiene texto Pergamino (5.22:1). Tinta sobre Terracota cae a 2.82:1 — no usar para texto corrido, solo para iconografía o acentos grandes.
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

**Botones y CTAs:** Contraste seguro = texto Pergamino sobre fondos Siena / Castaño.

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
  color: var(--text-on-dark);
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
  color: var(--text-on-dark);
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

## 9. Isotipo y firma de marca

El símbolo del rostro con cabello rizado y anteojos es el **isotipo oficial**. La firma principal combina el isotipo con el nombre **Daniel Arella** y el lema editorial **Cuaderno de las fulminaciones**, ambos compuestos en Fraunces; el símbolo no sustituye el nombre en la cabecera ni crea una tercera tipografía.

### Lema editorial

**Cuaderno de las fulminaciones** es el subtítulo oficial de la plataforma y forma parte permanente de la firma de marca.

- Se escribe siempre con mayúscula inicial, sin comillas y sin punto final.
- Aparece debajo de **Daniel Arella** en la cabecera de todas las páginas y usa el mismo rol Terracota (`--text-on-dark-accent`) de los enlaces activos. En hover/active cambia a Castaño junto con el nombre y el isotipo; en foco de teclado hereda el color del nombre.
- Aparece inmediatamente después del H1 **Daniel Arella** en la portada.
- Se presenta en cursiva y con menor jerarquía que el nombre; nunca compite con títulos de obras o páginas.
- No sustituye descripciones SEO, entradillas editoriales ni títulos de contenido.

### Variantes oficiales

| Variante | Archivo | Fondo | Uso |
|----------|---------|-------|-----|
| Tinta transparente | `assets/logo/logo-mark-tinta.svg` | Transparente | Fondos Pergamino o Blanco |
| Pergamino transparente | `assets/logo/logo-mark-pergamino.svg` | Transparente | Cabecera y pie Tinta |
| Tinta sobre Pergamino | `assets/logo/logo-mark-tinta-on-pergamino.svg` | Pergamino | Piezas que requieren una superficie cerrada |

Cada variante SVG tiene una versión PNG de 1024 px en la misma carpeta. Los archivos terminados en `-transparent.png` conservan canal alfa.

### Reglas de uso

- Usar siempre una variante de color de la paleta Tierra viva; no recolorear con tonos externos.
- Mantener la proporción original y dejar aire alrededor del cabello; no recortar, deformar, rotar ni añadir sombras.
- En la cabecera, usar el isotipo como máscara decorativa junto al nombre y el lema editorial visibles. Hereda el color del enlace de marca: Pergamino en reposo y Castaño en hover/active, igual que **Daniel Arella**. Se oculta a tecnologías de asistencia porque el texto contiguo ya identifica el enlace.
- Tamaño mínimo recomendado del isotipo: 32 px en interfaz y 16 px únicamente como favicon.
- Sobre fondos claros se usa Tinta; sobre Tinta se usa Pergamino. La versión con fondo propio se reserva para contextos donde no se controla la superficie.

### Favicon

El favicon deriva del mismo isotipo en Tinta sobre Pergamino. El set oficial vive en `assets/favicon/` e incluye SVG, ICO, Apple Touch Icon y PNG de 192 y 512 px para el manifest.

---

## 10. WordPress

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

## 11. Estado del sistema

| Capa | Estado |
|------|--------|
| Paleta | Cerrada |
| Tipografía | Cerrada |
| Ritmo editorial | Cerrado |
| Layout | Cerrado |
| Tokens | Cerrados |
| Dark mode | Excluido |
| Logo | Cerrado |
| theme.json | Pendiente |

---

## 12. Tendencias aplicadas al sistema editorial

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

**Versión del documento:** 2.8
**Identidad:** Tierra viva — Tinta, Pergamino, Terracota, Siena, Castaño y Blanco.
