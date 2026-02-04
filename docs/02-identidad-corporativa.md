# Daniel Arella — Corporate Identity & Editorial System v1.3

This document defines the complete visual, typographic, and editorial identity for the Daniel Arella author site and blog. All design, layout, and content presentation must follow these rules.

This is not a theme. Not a blog. It is an **author platform**.

---

## 1. Brand Overview

- **Name:** Daniel Arella  
- **Context:** Author site and blog (poetry, philosophy, essays).  
- **Tone:** Literary, bohemian, precise, contemporary.  
- **Positioning:** A serious poet and philosopher publishing in a living digital space.

The green and mint palette suggests freshness and intellectual clarity. The typography provides voice, rhythm, and editorial authority.

---

## 2. Color Palette (Strict)

Only these five colors may be used. No additional colors, grays, tints, or gradients are allowed.

| Name             | Hex       | Role                          |
|------------------|-----------|-------------------------------|
| **Neon Ice**     | `#7cfef0` | Links, focus, highlights       |
| **Tropical Mint** | `#6bffb8` | Cards, secondary UI           |
| **Tropical Mint 2** | `#2ceaa3` | Primary actions             |
| **Shamrock**     | `#28965a` | Section backgrounds           |
| **Hunter Green** | `#2a6041` | Header, footer, dark areas    |

### 2.1 Color usage and accessibility

- **Text on Hunter Green or Shamrock:** Use white or Neon Ice for sufficient contrast.  
- **Text on light backgrounds:** Use Hunter Green or Shamrock for body text.  
- Check contrast ratios (WCAG AA minimum) when pairing text and background.

### 2.2 Palette in code-friendly formats (reference)

CSV: `7cfef0,6bffb8,2ceaa3,28965a,2a6041`  
With #: `#7cfef0, #6bffb8, #2ceaa3, #28965a, #2a6041`  
Array: `["7cfef0","6bffb8","2ceaa3","28965a","2a6041"]`  
Object: `{"Neon Ice":"7cfef0","Tropical Mint":"6bffb8","Tropical Mint 2":"2ceaa3","Shamrock":"28965a","Hunter Green":"2a6041"}`

---

## 3. Typography System

Only two font families are allowed.

### 3.1 Fraunces

Primary serif and authorial voice.

**Used for:** Poems, essays, headings, quotes, philosophical text.  
**Weights:** 400, 600, 700.

### 3.2 Source Sans 3

UI and editorial infrastructure.

**Used for:** Navigation, buttons, metadata, forms, tags, dates.  
**Weights:** 400, 600.

**Rules:** Never introduce additional fonts. Use Fraunces italics for emphasis. No script, display, handwritten or monospace fonts.

---

## 4. Editorial Rhythm

This defines how text breathes.

### 4.1 Body text

| Property            | Value              |
|---------------------|--------------------|
| Font                | Fraunces           |
| Size                | 18px (1.125rem)    |
| Line height         | 1.6                |
| Max line width      | 65ch               |
| Paragraph spacing   | 1em                |

This ensures philosophical and poetic reading comfort.

### 4.2 Headings

| Element | Font     | Weight | Size   |
|---------|----------|--------|--------|
| H1      | Fraunces | 700    | 3rem   |
| H2      | Fraunces | 600    | 2.2rem |
| H3      | Fraunces | 600    | 1.6rem |
| H4      | Fraunces | 600    | 1.2rem |

### 4.3 Poems

Poetry must breathe.

| Property      | Value        |
|---------------|--------------|
| Font          | Fraunces     |
| Size          | 1.1rem       |
| Line height   | 1.7          |
| Margin bottom | 2em          |
| Text align    | left         |
| Max width     | 55ch         |

No justification. No compressed lines.

### 4.4 Quotes and aphorisms

| Property | Value                          |
|----------|---------------------------------|
| Font     | Fraunces italic                 |
| Size     | 1.2rem                          |
| Color    | Shamrock or Hunter Green        |
| Margin   | 2em vertical                    |

### 4.5 Metadata and UI text

| Property       | Value        |
|----------------|--------------|
| Font           | Source Sans 3|
| Size           | 0.9rem       |
| Line height    | 1.4          |
| Letter spacing | 0.02em       |

Used for: dates, categories, navigation, buttons, footnotes.

---

## 5. Layout Grammar

| Element            | Rule                          |
|--------------------|-------------------------------|
| Max content width  | 900px or 65ch                 |
| Column count       | Single                        |
| Backgrounds        | White or Shamrock for content |
| Margins            | Generous vertical spacing     |
| Grid               | Editorial, not modular        |git 

No dense grids. No magazine columns. Everything flows vertically.

---

## 6. Brand Character

Daniel Arella is presented as:

**A poet and philosopher with a singular voice, publishing in a living digital space.**

The system must feel:
- literary  
- slightly strange  
- calm  
- contemplative  
- modern  
- not corporate  
- not decorative  

---

## 7. Implementation

All styles must reference CSS variables. Colors use a **two-layer architecture**: brand tokens (raw palette) and semantic roles (UI meaning). Components use only roles, never raw brand tokens. This keeps identity strict, palettes swappable, and dark mode trivial.

**Mapping:** brand-1 = Neon Ice, brand-2 = Tropical Mint, brand-3 = Tropical Mint 2, brand-4 = Shamrock, brand-5 = Hunter Green.

### 7.1 Brand tokens (layer 1)

Only five real colors. No semantics.

```css
:root {
  --brand-1: #7cfef0;
  --brand-2: #6bffb8;
  --brand-3: #2ceaa3;
  --brand-4: #28965a;
  --brand-5: #2a6041;
}
```

### 7.2 Semantic UI roles (layer 2)

Primary, secondary, accent, etc. point to roles that map to the palette. Nothing points directly to a hex value in component CSS.

```css
:root {
  /* Core */
  --bg: #ffffff;
  --text: var(--brand-5);
  --text-muted: var(--brand-4);

  /* UI hierarchy */
  --primary: var(--brand-3);
  --primary-text: var(--brand-5);
  --secondary: var(--brand-2);
  --secondary-text: var(--brand-5);
  --accent: var(--brand-1);

  /* Links and focus */
  --link: var(--brand-5);
  --link-hover: var(--brand-4);
  --focus: var(--brand-1);

  /* Surfaces */
  --surface: var(--brand-2);
  --surface-strong: var(--brand-4);

  /* Layout */
  --header-bg: var(--brand-5);
  --header-text: #ffffff;
  --footer-bg: var(--brand-5);
  --footer-text: #ffffff;
  --border: var(--brand-3);
}
```

### 7.3 Components use only roles

Components never use `--brand-*` or hex. They use semantic variables only.

```css
.button-primary {
  background: var(--primary);
  color: var(--primary-text);
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
}

a {
  color: var(--link);
}
a:hover { color: var(--link-hover); }
:focus-visible { outline-color: var(--focus); }
```

### 7.4 Palette swap or dark mode

To change palette: only edit the five `--brand-*` values. To add dark mode: override the semantic roles inside a media query. No new colors; no coupling.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg: var(--brand-5);
    --text: #ffffff;
    --text-muted: var(--brand-1);
    --surface: var(--brand-4);
    --primary: var(--brand-3);
    --link: var(--brand-1);
    --header-bg: var(--brand-5);
    --footer-bg: var(--brand-5);
  }
}
```

### 7.5 Full :root (tokens, roles, typography, editorial)

Single place to define everything. Use this as the base for `style.css` or the theme.

```css
:root {
  /* ——— Brand tokens (layer 1) ——— */
  --brand-1: #7cfef0;
  --brand-2: #6bffb8;
  --brand-3: #2ceaa3;
  --brand-4: #28965a;
  --brand-5: #2a6041;

  /* ——— Semantic UI roles (layer 2) ——— */
  --bg: #ffffff;
  --text: var(--brand-5);
  --text-muted: var(--brand-4);
  --primary: var(--brand-3);
  --primary-text: var(--brand-5);
  --secondary: var(--brand-2);
  --secondary-text: var(--brand-5);
  --accent: var(--brand-1);
  --link: var(--brand-5);
  --link-hover: var(--brand-4);
  --focus: var(--brand-1);
  --surface: var(--brand-2);
  --surface-strong: var(--brand-4);
  --header-bg: var(--brand-5);
  --header-text: #ffffff;
  --footer-bg: var(--brand-5);
  --footer-text: #ffffff;
  --border: var(--brand-3);

  /* ——— Fonts ——— */
  --font-heading: 'Fraunces', serif;
  --font-body: 'Source Sans 3', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;

  /* ——— Editorial rhythm ——— */
  --text-base-size: 1.125rem;
  --line-height-body: 1.6;
  --paragraph-spacing: 1em;
  --measure-max: 65ch;
  --size-h1: 3rem;
  --size-h2: 2.2rem;
  --size-h3: 1.6rem;
  --size-h4: 1.2rem;
  --size-poem: 1.1rem;
  --line-height-poem: 1.7;
  --poem-margin-bottom: 2em;
  --poem-max-width: 55ch;
  --size-quote: 1.2rem;
  --quote-margin: 2em;
  --size-meta: 0.9rem;
  --line-height-meta: 1.4;
  --letter-spacing-meta: 0.02em;
  --content-max-width: 65ch;
}
```

---

## 8. Logo and wordmark

To be defined later. Must follow palette and typography.

---

## 9. Optional extensions

The identity system is complete as defined above. Two optional extensions may be added in the future without changing the core identity:

1. **Dark mode**  
   May be implemented using semantic color roles mapped to the existing five-color palette. No new colors may be introduced.

2. **WordPress theme.json**  
   May be added to lock the palette and typography inside the Gutenberg editor, preventing the use of non-brand colors or fonts.

3. **Multilingual (i18n)**  
   The site supports multiple languages (Spanish and English primary, extensible). All theme UI strings must be translatable (text domain). Content and URL strategy are defined in the editorial architecture (`03-arquitectura-editorial` §10).

---

## 10. Final status

| Element            | Status           |
|--------------------|------------------|
| Color palette      | Final            |
| Typography         | Final            |
| Editorial rhythm   | Final            |
| Layout grammar     | Final            |
| Brand voice        | Final            |
| Dark mode          | Optional         |
| WordPress theme.json | Optional       |
| Multilingual / i18n | Defined (editorial architecture) |
| Logo               | Optional future  |

---

**Document version:** 1.3  
**Palette:** Neon Ice, Tropical Mint, Tropical Mint 2, Shamrock, Hunter Green.

The next logical step is to turn this into **theme.json**, **style.css**, and a WordPress theme skeleton so the identity exists in the real web.
