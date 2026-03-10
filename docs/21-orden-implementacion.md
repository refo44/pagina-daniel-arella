# Orden de implementación — Daniel Arella

Secuencia acordada para llevar el sistema editorial a la web. **No saltar etapas.**

**Se apoya en:** `02-identidad-corporativa`, `04-wordpress-content-model`, `10-ui-copy-sheet`, `13-wireframes`, `14-arquitectura-informacion-navegacion`, `15-arbol-urls-final`, `16-theme-file-structure`, `17-static-file-structure`, `18-css-architecture`, `19-assets-strategy`, `20-content-source-inventario`, `22-tendencias-ux-ui-sistema-editorial`

---

## Fase 1: Maqueta estática (actual)

1. **Maqueta responsiva** con:
   - HTML5 semántico
   - CSS3 (1 CSS principal, roles semánticos, sin hex en componentes)
   - JS mínimo con `defer` (solo navegación, formularios, accesibilidad)
2. Contenido y estructura según: `13-wireframes`, `14-arquitectura-informacion-navegacion`, `15-arbol-urls-final`, `17-static-file-structure`, `18-css-architecture`, `02-identidad-corporativa`, `10-ui-copy-sheet`.
3. **Validar contra checklist** de `22-tendencias-ux-ui-sistema-editorial` (sección 4: Checklist de maqueta estática) antes de dar por cerrada la fase.

---

## Fase 2: Despliegue estático

3. **Publicar la maqueta** como sitio estático en GitHub (Pages o similar).
4. Validar en vivo: rutas, navegación, lectura en móvil y escritorio.

---

## Fase 3: WordPress

5. **Convertir** la maqueta en theme/template de WordPress según `16-theme-file-structure`.
6. Ajustar a `04-wordpress-content-model` y al árbol de URLs (`15-arbol-urls-final`).
7. **Subir** contenido al servidor: imágenes, PDFs y textos según `20-content-source-inventario`; asociar a fichas Book, Poem, etc.
8. Configurar hosting y validar en vivo.

---

## Regla

No escribir código de theme WordPress ni subir a servidor final hasta que la maqueta estática esté desplegada y validada en GitHub.

---

## Relación con otros documentos

- **Fase 1:** `17-static-file-structure` define el árbol de archivos; `18-css-architecture` las reglas CSS; `19-assets-strategy` iconos, fuentes y JS.
- **Fase 3:** `16-theme-file-structure` mapea HTML → plantillas PHP; `20-content-source-inventario` detalla qué copiar de content-source a assets y cómo asociar a entidades.

---

**Versión:** 1.1
