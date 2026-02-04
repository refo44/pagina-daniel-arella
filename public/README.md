# public — Assets para la maqueta y el sitio

**`content-source/` solo existe en local** (no se sube al repo). Cualquier material necesario para la maqueta estática o el sitio desplegado debe **duplicarse y copiarse aquí** para usarse como assets.

## Uso

- **Maqueta (HTML/CSS):** copiar en esta carpeta (o en `public/assets/`) las imágenes, PDFs o fuentes que necesites para enlazar desde el HTML.
- **Despliegue estático (GitHub Pages, etc.):** esta carpeta (o su contenido) es lo que se sirve; los assets deben estar aquí.
- **No enlazar nunca** a `content-source/` desde el código: esa ruta no existe en el servidor.

## Estructura sugerida

```
public/
  assets/          ← imágenes, PDFs, fuentes copiados desde content-source
    images/        ← fotos de autor, portadas, prensa (según content-source-inventario)
    pdf/           ← libros en PDF si se ofrecen en la maqueta
  index.html       ← (cuando exista la maqueta)
  …
```

Al copiar, usar los **nombres ya renombrados** (ver `content-source/RENAME-MAP.md` y `docs/content-source-inventario.md`).
