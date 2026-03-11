# Daniel Arella — Sitio editorial

Sitio estático de la obra de Daniel Arella: poemas, ensayos, libros, relatos y talleres.

## Estructura

- **`index.html`** — Página de inicio
- **`archivo/`, `book/`, `poem/`, etc.** — Secciones y fichas
- **`assets/`** — CSS, JS, imágenes, favicon, fuentes
- **`parts/`** — Fragmentos HTML reutilizables (header, footer, cards)
- **`docs/`** — Documentación del proyecto (no se sirve como sitio)
- **`content-source/`** — Material de referencia local (no se despliega)

## Ejecución

Header y footer están incluidos directamente en cada HTML (sin build ni fetch).

```bash
npm install
npm run serve    # Sirve en http://localhost:5550
```

## Despliegue en GitHub Pages

1. **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** main
4. **Folder:** / (root)

## Desarrollo local

```bash
npm run lint:css
```
