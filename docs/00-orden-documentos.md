# Orden de los documentos (prefijo numérico)

Los documentos en `docs/` llevan prefijo de dos dígitos (`01-`, `02-`, …) para mantener un orden fijo. El orden sigue la **jerarquía de dependencias**: del “por qué” al “cómo”, y de la estrategia a la implementación.

---

## Justificación del orden

| Rango | Criterio | Motivo |
|-------|----------|--------|
| **01–02** | Visión e identidad | El plan maestro define el territorio; la identidad corporativa es la Capa 1 cerrada del plan. Sin ellos no hay criterio para el resto. |
| **03–05** | Qué existe | Arquitectura editorial (entidades, taxonomías), modelo WordPress (implementación) y mapa de pantallas. Definen *qué* contenido y *qué* pantallas existen. |
| **06–07** | Estrategia y sistema editorial | Estrategia de publicación (Capa 5 del plan) y sistema editorial (Capa 6). Cómo se publica y cómo se escribe. |
| **08–10** | Voz y copy | Guía de voz, diccionario de términos, UI copy sheet. El copy depende de identidad y arquitectura; la navegación y los wireframes los usan después. |
| **11–13** | Experiencia del lector | User journey, diagrama y wireframes. Cómo se recorre el sitio y cómo están hechas las pantallas. |
| **14–15** | Navegación y URLs | Arquitectura de información/navegación (enlaces por pantalla) y árbol de URLs. Dependen de pantallas, copy y recorridos. |
| **16–19** | Implementación técnica | Theme y static file structure, CSS, assets. Convierten la arquitectura en archivos y código. |
| **20–21** | Contenido e implementación | Inventario de fuentes de contenido y orden de implementación (secuencia de trabajo). Últimos porque referencian a casi todo lo anterior. |
| **22** | Criterios contemporáneos | Lectura de tendencias UX/UI 2026 aplicada al sistema editorial. Filtro estratégico para decisiones futuras. Criterio de validación para la revisión de documentos (identidad, CSS, navegación, assets, implementación). |

---

## Regla de dependencias

Ningún documento debe depender de uno con número mayor. El documento `00-orden-documentos` describe este orden y no cuenta en la secuencia de dependencias. Las referencias cruzadas (“Depende de”, “Ver”) apuntan siempre a documentos con prefijo menor o igual. Si se añade un documento nuevo, se asigna el siguiente número disponible y se revisan las referencias.

---

## Lista ordenada (nombres con prefijo)

1. `01-plataforma-autor-plan`
2. `02-identidad-corporativa`
3. `03-arquitectura-editorial`
4. `04-wordpress-content-model`
5. `05-mapa-pantallas`
6. `06-estrategia-publicacion`
7. `07-sistema-editorial-web`
8. `08-guia-voz-microcopy-ux`
9. `09-voice-dictionary`
10. `10-ui-copy-sheet`
11. `11-user-journey`
12. `12-user-journey-diagram`
13. `13-wireframes`
14. `14-arquitectura-informacion-navegacion`
15. `15-arbol-urls-final`
16. `16-theme-file-structure`
17. `17-static-file-structure`
18. `18-css-architecture`
19. `19-assets-strategy`
20. `20-content-source-inventario`
21. `21-orden-implementacion`
22. `22-tendencias-ux-ui-sistema-editorial`
