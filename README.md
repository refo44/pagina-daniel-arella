# Daniel Arella — Sitio editorial

Sitio estático de la obra de Daniel Arella: poemas, ensayos, libros, relatos y talleres.

## Estructura

El sitio se sirve desde la raíz del repositorio (compatible con GitHub Pages).

- **`index.html`** — Página de inicio
- **`archivo/`, `book/`, `poem/`, etc.** — Secciones y fichas
- **`css/`, `js/`** — Estilos y scripts
- **`assets/`** — Imágenes, favicon, fuentes
- **`parts/`** — Fragmentos HTML reutilizables (header, footer, cards)
- **`docs/`** — Documentación del proyecto (no se sirve como sitio)
- **`content-source/`** — Material de referencia local (no se despliega)

## Despliegue en GitHub Pages

1. En el repositorio: **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** main (o la rama que uses)
4. **Folder:** / (root)

El archivo `.nojekyll` en la raíz desactiva Jekyll para servir los archivos estáticos tal cual.

## Desarrollo local

```bash
npm install
npm run lint:css
```

Para previsualizar con un servidor local:

```bash
python3 -m http.server 8000
```

Luego abrir `http://localhost:8000`.
