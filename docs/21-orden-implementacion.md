# Daniel Arella — Orden de implementación

**Secuencia acordada para llevar el sistema editorial a la web**  
**Versión 1.1**

**No saltar etapas.**

**Se apoya en:** `01-plataforma-autor-plan`, `02-identidad-corporativa`, `03-arquitectura-editorial`, `04-wordpress-content-model`, `10-ui-copy-sheet`, `13-wireframes`, `14-arquitectura-informacion-navegacion`, `15-arbol-urls-final`, `16-theme-file-structure`, `17-static-file-structure`, `18-css-architecture`, `19-assets-strategy`, `20-content-source-inventario`, `22-tendencias-ux-ui-sistema-editorial`, `23-estandares-accesibilidad`, `24-principios-layout`

---

## Fase 0: Preparación

1. Revisar documentos rectores.
2. Confirmar árbol de URLs (`15-arbol-urls-final`).
3. Confirmar inventario de contenido (`20-content-source-inventario`).
4. Seleccionar assets prioritarios.

Esto evita empezar la maqueta sin insumos cerrados.

---

## Fase 1: Maqueta estática

1. **Maqueta responsiva** con:
   - HTML5 semántico
   - CSS3 (1 CSS principal, roles semánticos, sin hex en componentes)
   - Stylelint configurado según `18-css-architecture` (sección 9)
   - JS mínimo con `defer` (solo navegación, formularios, accesibilidad)
   - Assets y fuentes según `19-assets-strategy`
2. Contenido y estructura según: `13-wireframes`, `14-arquitectura-informacion-navegacion`, `15-arbol-urls-final`, `17-static-file-structure`, `18-css-architecture`, `02-identidad-corporativa`, `10-ui-copy-sheet`.
3. Validar accesibilidad base según `23-estandares-accesibilidad`.
4. **Validar contra checklist** de `22-tendencias-ux-ui-sistema-editorial` (sección 4: Checklist de maqueta estática) antes de dar por cerrada la fase.

---

## Fase 2: Despliegue estático

1. **Publicar la maqueta** como sitio estático en GitHub Pages o equivalente.
2. Validar en vivo: rutas, navegación, lectura en móvil y escritorio.

**Confirmar que la maqueta estática ya resuelve:**
- Navegación
- Copy
- Responsive
- Estructura editorial
- Assets principales

Eso formaliza el criterio de paso a WordPress.

---

## Fase 3: Integración WordPress

1. **Convertir** la maqueta en theme según `16-theme-file-structure`.
2. Ajustar a `04-wordpress-content-model` y al árbol de URLs (`15-arbol-urls-final`).
3. Configurar URLs y plantillas.

---

## Fase 4: Carga y publicación

1. **Importar** contenido y assets al entorno WordPress según `20-content-source-inventario`; asociar a fichas Book, Poem, etc.

**Prioridad de contenido:**
1. Fotos de autor
2. Portadas de libros
3. PDFs de libros
4. Prensa y eventos
5. Ilustraciones de terceros

2. Asociar imágenes y PDFs a entidades.
3. Configurar hosting.
4. Validar en vivo:
   - Enlaces rotos
   - SEO técnico básico
   - Performance
   - Formularios
   - Carga de PDFs e imágenes

**No importar automáticamente todo `content-source/`.** Solo se publica el material seleccionado y optimizado para web.

---

## Regla

No iniciar la conversión a WordPress ni la publicación final hasta que la maqueta estática esté desplegada y validada.

---

## Relación con otros documentos

- **Fase 0:** `01-plataforma-autor-plan`, `15-arbol-urls-final`, `20-content-source-inventario`.
- **Fase 1:** `17-static-file-structure` define el árbol de archivos; `18-css-architecture` las reglas CSS y Stylelint; `19-assets-strategy` iconos, fuentes y JS; `24-principios-layout` layout y espaciado.
- **Fase 3:** `16-theme-file-structure` mapea HTML → plantillas PHP.
- **Fase 4:** `20-content-source-inventario` detalla qué copiar de content-source a assets y cómo asociar a entidades.

Cada fase depende de la validación completa de la fase anterior. No se corrige arquitectura en fases posteriores.
