# Orden de implementación — Daniel Arella

Secuencia acordada para llevar el sistema editorial a la web. **No saltar etapas.**

---

## Fase 1: Maqueta estática (actual)

1. **Maqueta responsiva** con:
   - HTML5 semántico
   - CSS3 (1 CSS principal, roles semánticos, sin hex en componentes)
   - JS mínimo con `defer` (solo navegación, formularios, accesibilidad)
2. Contenido y estructura según: `13-wireframes`, `14-arquitectura-informacion-navegacion`, `15-arbol-urls-final`, `02-identidad-corporativa`, `10-ui-copy-sheet`.
3. **Validar contra checklist** de `22-tendencias-ux-ui-sistema-editorial` (sección 13.0) antes de dar por cerrada la fase.

---

## Fase 2: Despliegue estático

3. **Publicar la maqueta** como sitio estático en GitHub (Pages o similar).
4. Validar en vivo: rutas, navegación, lectura en móvil y escritorio.

---

## Fase 3: WordPress

5. **Convertir** la maqueta en theme/template de WordPress.
6. Ajustar a `04-wordpress-content-model` y al árbol de URLs.
7. **Subir** al servidor final y configurar contenido/hosting.

---

## Regla

No escribir código de theme WordPress ni subir a servidor final hasta que la maqueta estática esté desplegada y validada en GitHub.

---

**Versión:** 1.0
