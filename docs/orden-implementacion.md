# Orden de implementación — Daniel Arella

Secuencia acordada para llevar el sistema editorial a la web. **No saltar etapas.**

---

## Fase 1: Maqueta estática (actual)

1. **Maqueta responsiva** con:
   - HTML5 semántico
   - CSS3
   - Sin JavaScript de aplicación (solo lo imprescindible si hace falta)
2. Contenido y estructura según: `wireframes.md`, `arquitectura-informacion-navegacion.md`, `arbol-urls-final.md`, `identidad-corporativa.md`, `ui-copy-sheet.md`.

---

## Fase 2: Despliegue estático

3. **Publicar la maqueta** como sitio estático en GitHub (Pages o similar).
4. Validar en vivo: rutas, navegación, lectura en móvil y escritorio.

---

## Fase 3: WordPress

5. **Convertir** la maqueta en theme/template de WordPress.
6. Ajustar a `wordpress-content-model.md` y al árbol de URLs.
7. **Subir** al servidor final y configurar contenido/hosting.

---

## Regla

No escribir código de theme WordPress ni subir a servidor final hasta que la maqueta estática esté desplegada y validada en GitHub.

---

**Versión:** 1.0
