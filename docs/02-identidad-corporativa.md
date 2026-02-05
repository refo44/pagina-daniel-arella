# Daniel Arella — Corporate Identity and Editorial System

**Versión 1.4**

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
| Neon Ice | #7cfef0 | Enlaces, foco, acentos |
| Tropical Mint | #6bffb8 | Superficies, tarjetas |
| Tropical Mint 2 | #2ceaa3 | Botones, acciones primarias |
| Shamrock | #28965a | Fondos de sección |
| Hunter Green | #2a6041 | Cabecera, pie, texto |

### Guía visual

Imagina el sitio así:

```
[ Header: Hunter Green ]
    Daniel Arella
--------------------------
[ Surface: Tropical Mint ]
    Poem card
    Essay card
--------------------------
Text: Hunter Green
Links: Neon Ice
Buttons: Tropical Mint 2
```

No existe el negro. No existe el gris. Todo se construye con estas cinco tintas.

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

Los únicos colores reales.

```css
--brand-1: #7cfef0;
--brand-2: #6bffb8;
--brand-3: #2ceaa3;
--brand-4: #28965a;
--brand-5: #2a6041;
```

### Capa 2: Roles semánticos

Cómo se usan.

```css
--text: var(--brand-5);
--primary: var(--brand-3);
--surface: var(--brand-2);
--link: var(--brand-5);
--focus: var(--brand-1);
```

### Capa 3: Componentes

Nunca usan hex ni brand tokens.

```css
.button {
  background: var(--primary);
  color: var(--text);
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
}
```

No hay estilos arbitrarios. Todo fluye desde los tokens.

---

## 8. Dark mode

No se añaden colores. Solo se reasignan roles.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg: var(--brand-5);
    --text: #ffffff;
    --surface: var(--brand-4);
    --link: var(--brand-1);
  }
}
```

La identidad sigue intacta.

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

## Regla final

Nada visual se decide fuera de este sistema. Ni en HTML. Ni en WordPress. Ni en plugins.

La obra vive dentro de esta gramática.

---

**Versión del documento:** 1.4  
**Identidad:** Neon Ice, Tropical Mint, Tropical Mint 2, Shamrock, Hunter Green.
