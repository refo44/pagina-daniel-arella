# Daniel Arella — Tendencias UX/UI aplicadas al sistema editorial

Esta sección no describe modas. Define qué tendencias contemporáneas fortalecen un sitio de autor y cuáles deben evitarse para proteger la lectura, la claridad y la voz editorial.

**Sobre artículos tipo “tendencias 2026” (p. ej. Elementor):**  
Suelen mezclar dos cosas: tendencias reales (tokens, performance, accesibilidad) y empuje comercial hacia un stack (builder, popups, etc.). Para Daniel Arella conviene quedarse con lo **estructural** y filtrar todo lo que compite con la lectura.

Muchas tendencias 2026 son reales, pero **no todas aplican a un sitio editorial de autor**. Si las aplicas sin filtro, puedes terminar construyendo una web espectacular… pero no una buena web para leer. Este documento es el filtrado específico para Daniel Arella, alineado con todo lo ya decidido.

**Regla práctica del proyecto (formulación única de referencia):**

> Se adopta todo lo que mejora **lectura, claridad, accesibilidad y performance**.  
> Se evita todo lo que introduce **personalización, ruido visual o comportamiento invasivo**.

En el resto del documento, cuando una decisión dependa de “sitio editorial, no comercial”, se remite a esta regla. El sitio no es una app, ni una landing, ni un producto interactivo; es una plataforma editorial centrada en texto.

---

## 1. Principio rector

El diseño 2026 se mueve en dos direcciones:

- Interfaces espectaculares: 3D, animación, hiperpersonalización.
- Interfaces humanas: tipografía, ritmo, silencio, claridad.

Daniel Arella pertenece deliberadamente al segundo grupo.

La prioridad es: lectura larga, concentración, identidad tipográfica, estabilidad visual, performance.

**Distinción para que el documento envejezca bien:**  
- **Política del sistema:** no depende del año (performance, accesibilidad, lectura, estabilidad). Es la base.  
- **Tendencias compatibles:** cosas que hoy se citan como “tendencia” pero aquí se adoptan como base técnica. Si en el futuro cambian los artículos, el sistema no cambia.

Si una tendencia no pasa el filtro de la Regla práctica, no entra al sistema.

---

## 2. Filosofía de diseño editorial: minimalismo como estructura, no como estética

Esta sección define el **carácter del sitio**. Términos normalizados en este documento: **minimalismo editorial** (alias: neo-minimalismo funcional); **design tokens** (alias: roles semánticos).

Para Daniel Arella el minimalismo no es estilo, moda ni branding: es una **disciplina de edición visual** para proteger el texto. Daniel Arella no necesita *verse* minimalista; necesita **comportarse como un espacio editorial**: estructura limpia, navegación corta, tipografía dominante, mucho aire, cero espectáculo. Sensación objetivo: revista, cuaderno, sala de lectura (no producto digital).

---

### 2.1 Principios

#### Minimalismo como sistema de decisiones, no como estética

Principio base para conservar:

> El minimalismo no consiste en quitar cosas. Consiste en que **cada elemento tenga una función**.

En un sitio editorial las funciones reales son pocas y claras:

- leer
- orientarse
- volver al contenido
- navegar entre textos

Todo lo demás es ruido.

#### Minimalismo como respuesta a la saturación

El minimalismo nació para resolver un problema: **exceso de ruido visual**. En un sitio editorial encaja porque el contenido ya es denso, el lector necesita foco (no estímulo) y el silencio visual forma parte del tono.

**Traducción para Daniel Arella:** El diseño no debe “acompañar” el texto. Debe **retirarse** para que el texto exista.

#### Objetivo de cada página evidente

El objetivo de cada página debe ser evidente. Eso protege de uno de los errores más comunes: diseñar primero y pensar después.

| Página | Objetivo |
|--------|----------|
| Inicio | Orientar al lector |
| Página de texto | Sostener la lectura |
| Página de sección | Organizar contenido |
| Página de autor | Contextualizar la voz |

### 2.2 “Menos es más” como disciplina

No se trata de quitar cosas por quitar.

Cada elemento en pantalla debe justificar su presencia con una función clara: guiar, jerarquizar, permitir interacción o dar contexto. Si no cumple ninguna de esas cuatro, sobra.

### 2.3 Tipografía + espacio en blanco como sistema

En un sitio de lectura: la **tipografía** es la voz; el **espacio en blanco** es el ritmo. No se necesitan gráficos, bloques llamativos ni recursos decorativos. Se necesitan: jerarquía, aire, continuidad visual.

**Jerarquía visual clara (central para lectura larga):**  
En un sitio de autor la jerarquía se construye con: tamaño tipográfico, interlineado, espaciado vertical, peso de fuente. **No** con colores, cajas, fondos ni módulos. La tipografía es el sistema.

**Espacio en blanco como herramienta narrativa:**  
No es solo diseño. En un sitio editorial el espacio en blanco funciona como pausa, respiración y ritmo; tiene que ver con el tono del contenido.

### 2.4 Navegación y estructura

Menús de 3 a 5 elementos: decisión estructural correcta para un sitio editorial (ver Regla práctica).

Ejemplo de sistema que vive cómodamente con poco:

- Inicio
- Textos
- Ensayos
- Libro
- Autor

Nada más. Menos opciones = menos fricción cognitiva.

### 2.5 Anti-patrones

| Riesgo | Descripción | Regla para este proyecto |
|--------|-------------|----------------------------|
| **Minimalismo sin personalidad** | Todo se ve igual, genérico; desaparece la voz. | La identidad se sostiene en tipografía, ritmo, tono y composición. **No en efectos.** |
| **Simplificar y perder información** | Esconder cosas, reducir navegación, complicar el acceso. | **La claridad nunca puede sacrificar el acceso al contenido.** |
| **No todo contenido cabe** | Algunos formatos piden más recursos. | Aquí: texto largo, ensayo, reflexión, narrativa; estructura limpia, jerarquía clara, mucho aire. |

**Qué ignorar:** IA, VR, inmersivas (rompen obra estable). “Minimalismo caliente”: solo portada o secciones especiales; **nunca en artículos.** Para leads, conversiones, CTAs, marketing: ver Regla práctica.

**Se sostiene en:** Tipografía fuerte (Fraunces + Source Sans 3), espacios amplios, navegación simple, paleta corta (roles semánticos), ritmo vertical claro. **No se sostiene en:** efectos, animaciones decorativas, ilustraciones constantes, módulos decorativos.

### 2.6 Reglas operativas

Reglas concretas que tienen valor estructural:

| Regla | Contenido |
|-------|-----------|
| **1. Función evidente** | Cada elemento en pantalla debe cumplir una función evidente. Si no guía, no jerarquiza, no organiza o no permite interactuar, sobra. |
| **2. Navegación corta** | Menos navegación es mejor navegación. Menú de 3 a 5 ítems (p. ej. Inicio, Textos, Ensayos, Libro, Autor). |
| **3. Contenido visual justificado** | Las imágenes no decoran; acompañan el texto. Si no aportan sentido, mejor no usarlas. |
| **4. Mobile first** | Cuerpos cómodos, líneas no demasiado largas, botones grandes, márgenes generosos. |
| **5. Minimalismo bien hecho** | Velocidad, legibilidad, estabilidad visual. Sitio sin build, CSS único, JS mínimo. |

### 2.7 Traducción técnica: HTML estático y WordPress

La filosofía no cambia entre maqueta y CMS: un CSS principal, variables (design tokens / roles semánticos), sin capas de conversión, sin efectos en zona de lectura.

**Criterios verificables (auditoría de implementación):**

| # | Criterio | Debe cumplirse |
|---|----------|----------------|
| 1 | **Tipografía** | Máximo 2 familias; 1 tamaño base de cuerpo; jerarquías fijas H1–H3. |
| 2 | **Color** | Ningún componente usa hex directo; solo roles semánticos. |
| 3 | **Lectura** | Ancho de columna objetivo (60–70ch); ritmo vertical consistente. |
| 4 | **Motion** | En páginas de texto: cero animaciones decorativas; solo focus y hover. |
| 5 | **WordPress** | `theme.json` bloquea paleta y fuentes; el editor no habilita estilos libres ni bloques con animación en contenido. |

---

**Resumen:** Principios (2.1), menos es más (2.2), tipografía y blanco (2.3), navegación (2.4), anti-patrones (2.5), reglas operativas (2.6), traducción técnica y criterios verificables (2.7). Minimalismo editorial = disciplina de edición visual.

---

## 3. Tendencias: tabla de adopción y aplicación

Las **políticas del sistema** (sección 2) no dependen del año. Esta sección traduce “tendencias” citadas en artículos a **estado de adopción** y **implementación en Daniel Arella**. Si en el futuro cambian las modas, el sistema no cambia; solo se revisa si algo nuevo pasa el filtro de la Regla práctica.

### 3.0 Tabla de adopción

| Tendencia | Estado | Por qué entra o no entra | Implementación en Daniel Arella |
|-----------|--------|---------------------------|---------------------------------|
| Design tokens (roles semánticos) | Adoptar | Consistencia, control editorial, menos variaciones | `:root` + roles semánticos; `theme.json` bloquea paleta y tipografías |
| Performance-first | Adoptar | Lectura rápida, menos fricción | 1 CSS, JS mínimo con defer, imágenes con dimensiones, evitar plugins pesados |
| Accesibilidad-first | Adoptar | Lectura inclusiva, cumplimiento real | Contraste AA, focus visible, headings correctos, teclado completo, reduced motion |
| Micro-interacciones | Adoptar con cuidado | Solo feedback, no espectáculo | Hover, focus, estados de botón, menú móvil; nada en cuerpo de texto |
| Dark mode | Opcional | Útil si no rompe contraste | `prefers-color-scheme` reasigna roles, sin nueva paleta |
| Storytelling | Adoptar con cuidado | Ritmo tipográfico sí, scrollytelling no | Ritmo vertical y jerarquía; no parallax ni efectos de scroll |
| Personalización por IA | Evitar | Rompe obra estable y añade complejidad | A futuro solo búsqueda o relacionados, sin journeys dinámicos |
| AR/VR, 3D | Evitar | Distracción y costo técnico | No aplica |
| Parallax y efectos profundos | Evitar | Compite con lectura | Si acaso en home puntual, nunca en artículos |

### 3.1 Minimalismo editorial como principio rector

En Daniel Arella el minimalismo no es una estética. Es una **disciplina de edición visual** para proteger el texto (ver sección 2).

**Se adopta un minimalismo de lectura:** tipografía protagonista, ritmo vertical generoso, jerarquía clara, paleta corta con roles semánticos, navegación mínima, micro-interacciones solo funcionales.

**No se adopta un minimalismo de conversión:** CTAs invasivos, landings disfrazadas de home, módulos decorativos, animación como espectáculo. Ver Regla práctica.

**Criterio operativo:** Si un recurso visual no mejora orientación, jerarquía, lectura o accesibilidad, se elimina.

### 3.2 Design tokens (detalle de implementación)

Arquitectura de variables (design tokens / roles semánticos): 5 colores, tipografía, espaciado. `:root` con `--brand-*` y roles; componentes solo consumen roles, nunca hex. En WordPress: `theme.json` bloquea paleta y tipografías. Ver `02-identidad-corporativa` y tabla 3.0.



Es exactamente la arquitectura de variables ya definida: 5 colores, roles semánticos, tipografía, espaciado, medidas de lectura.

**Cómo se ve en este sistema:**

- `:root` con tokens de marca (`--brand-*`) y roles semánticos (`--bg`, `--text`, `--link`, `--surface`, `--border`, etc.).
- Los componentes solo consumen **roles**, nunca hex directo.
- En WordPress se refleja en **theme.json** para bloquear paleta y tipografías dentro del editor.

**Ejemplo:**

- `--brand-1` … `--brand-5` (paleta estricta).
- `--bg`, `--text`, `--text-muted`, `--link`, `--link-hover`, `--focus`, `--surface`, `--border`, `--header-bg`, `--footer-bg`, etc. (roles).

Ver `identidad-corporativa.md` sección 7 (Implementación).

### 3.3 Performance-first (detalle)

Esto es obligatorio, no opcional.

**Checklist real (maqueta estática):**

- 1 CSS principal.
- JS mínimo con `defer`.
- Imágenes optimizadas y con `width`/`height`.
- `loading="lazy"` donde aplique.
- Evitar CDN para librerías y fuentes (priorizar auto-hospedado cuando sea posible).
- Sin frameworks pesados.

**Equivalente en WordPress:**

- Un único `style.css` (o bien `theme.json` + estilos del theme).
- Scripts encolados solo si son necesarios; `defer` por defecto.
- Imágenes optimizadas desde el CMS; `width`/`height` en markup.
- Evitar plugins que inyecten CSS/JS masivo.

**Impacto editorial:**

- Lectura rápida.
- Menos fricción.
- Sensación de solidez.

---

### 3.4 Diseño inclusivo y accesible (regla fija)

Esto no es tendencia. Es **base estructural**. En un sitio de lectura tiene impacto directo. Debe quedar como **regla fija del proyecto**, no como recomendación.

**Aplicación concreta en este sistema:**

- Contraste real AA en: texto, links, botones.
- Navegación por teclado completa.
- `:focus-visible` claro (el color de acento de la paleta es idóneo como outline).
- Alt text en imágenes.
- Jerarquía semántica correcta: h1 → h2 → h3 ordenados.
- Formularios con labels reales.
- Respeto a `prefers-reduced-motion`.
- Enlaces con estados claros (no solo color: subrayado o peso donde aplique).

**Impacto editorial:** Mayor comodidad, inclusión real, lectura prolongada sin fatiga.

---

### 3.5 Minimalismo editorial (desarrollo completo)

Ver **3.1** y **sección 2**. No se repite aquí. _Contenido anterior (distinción) eliminado para evitar duplicación; ver Regla práctica._

### 3.6 Micro-interacciones funcionales (solo sutiles y útiles)

Sí, pero solo donde **confirman una acción**.

**Dónde aplicarlas:**

- Hover de links.
- Focus de inputs.
- Estados de botones.
- Apertura del menú móvil.
- Validación de formularios.

**Dónde NO:**

- En lectura continua.
- En bloques de texto largos.
- En títulos editoriales.

**Regla:** Si la animación no explica una acción, sobra.

### 3.7 Sostenibilidad digital

Encaja con el enfoque técnico del proyecto.

**Traducción práctica:**

- Sitio liviano.
- Sin frameworks pesados.
- Sin animaciones costosas.
- Imágenes optimizadas.
- JS mínimo.

Coincide con: CSS nativo, sin build, performance-driven design.

### 3.8 Storytelling editorial (ritmo y jerarquía)

“Storytelling” aquí no es scrollytelling cinematográfico. Es:

- Titulares con presencia.
- Blancos y ritmo vertical.
- Medida de lectura (p. ej. 65ch).
- Transiciones mínimas entre secciones.

La narrativa es la obra; la UI no compite con ella.

### 3.9 Tipografía como elemento central

Punto clave y muy alineado con el proyecto.

**Ya en uso:**

- Fraunces como voz editorial.
- Jerarquía fuerte de títulos.
- Ritmo tipográfico como estructura visual.

**Vale explorar:**

- Variable fonts si hay buenas versiones.
- Escalas tipográficas cuidadas.
- Proporciones consistentes.

Menos archivos de fuente, mejor performance, identidad fuerte sin añadir familias nuevas.

---

### 3.10 Dark mode y theming dinámico (opcional)

El sistema semántico ya lo hace trivial. Solo implementarlo si se mantiene legibilidad y contraste (p. ej. `prefers-color-scheme: dark` reasignando roles, sin nuevos colores).

---

### 3.11 Formas orgánicas y anti-grid (solo en dosis mínimas)

En este proyecto:

- Separadores suaves entre secciones, curvas discretas en cards o banners: aceptable si no rompen la legibilidad.
- No romper grillas ni medida de lectura por “tendencia”.

---

## 4. Tendencias que SOLO aplicar con mucho cuidado

No como sistema base. Solo en contextos muy acotados y con criterio.

### 4.0.1 IA y personalización

Para un e-commerce puede ser clave. Para un sitio de autor, no tanto.

**Problemas que introduce:**

- Rompe la idea de **obra estable**.
- Añade complejidad técnica.
- Genera dependencia de plugins o servicios externos.
- Cambia la experiencia editorial entre usuarios.

**Recomendación:** No como sistema base. Quizás en el futuro: buscador inteligente, recomendación de artículos relacionados. No personalización agresiva.

### 4.0.2 Imágenes y video interactivo

Puede ser útil solo en contextos puntuales.

**Sí (con medida):**

- Video embebido.
- Imagen con pie editorial.
- Portada especial.

**No:**

- Video como fondo constante.
- 360° o experiencias inmersivas.
- Interacción narrativa compleja que compita con el texto.

---

## 5. Tendencias que NO aportan al proyecto

Pueden ser atractivas en otros tipos de sitio; aquí restan más de lo que suman.

### 5.1 AR / VR

Totalmente fuera de escala para un sitio editorial literario.

Aporta espectacularidad, pero castiga: performance, foco en el texto, mantenimiento. No aplica.

### 5.2 Parallax, cinemagraphs, efectos profundos

Son atractivos, pero **compiten con la lectura**.

Si se usan: solo en home, solo en secciones muy específicas. **Nunca en páginas de texto.**

### 5.3 Tipografía animada

Peligrosa para lectura.

Aceptable solo: en una portada puntual, en una landing especial. **No como lenguaje del sistema.** La tipografía debe respirar, no moverse.

### 5.4 Experiencias agentic, popups y smart triggers

- **Popups y smart triggers:** Casi siempre compiten con la lectura. Si algún día se usan, solo para suscripción simple o aviso importante puntual, con reglas estrictas de frecuencia.
- **Experiencias agentic / journeys dinámicos:** Van contra la obra estable; añaden complejidad y mantenimiento. Un sitio de autor sostiene una voz, no se adapta a cada visitante.

---

## 6. Otras tendencias que NO se adoptan como sistema

Resumen de lo que puede tener sentido en otros proyectos pero no como base aquí.

### 6.1 Motion “de show”

Scroll effects, animaciones constantes, kinetic typography: no como base. Solo para una portada especial puntual, nunca para poemas, ensayos ni texto principal. La tipografía debe respirar, no moverse.

### 6.2 3D e interfaces inmersivas

No aportan valor al objetivo principal (peor performance, mayor complejidad, distracción). Si se busca materialidad, lograrla con tipografía, blancos, ritmo vertical y composición.

### 6.3 Anti-grid, brutalismo, caos visual

La identidad del proyecto es **editorial silenciosa**. Si se rompe la rigidez, solo con jerarquía tipográfica, ritmo vertical y asimetría mínima controlada; no con estética agresiva, ruido visual ni layouts caóticos.

---

## 7. Decisión estratégica del sistema

Esto se puede fijar como regla oficial del proyecto.

**Se adopta como base:**

- Performance como prioridad estructural.
- Accesibilidad desde el inicio.
- Tipografía como protagonista.
- Dark mode opcional.
- Micro-interacciones funcionales.

**Se evita como sistema:**

- Personalización por IA.
- 3D e inmersión visual.
- Animación tipográfica en lectura.
- Estéticas rebeldes que compiten con el contenido.

---

## 8. Impacto en la maqueta estática

Checklist rápido:

- CSS ligero.
- JS mínimo.
- Tipografía clara y dominante.
- Ritmo vertical amplio.
- Navegación simple.
- Sin efectos innecesarios.

---

## 9. Equivalente en WordPress

La migración no cambia la filosofía.

Mantener:

- Theme limpio.
- Pocos plugins.
- Contenido protagonista.
- Diseño estable.
- Performance controlada.

---

## 10. Posicionamiento implícito

En 2026 hay saturación de:

- interfaces espectaculares
- animaciones constantes
- experiencias hiperactivas

Un sitio silencioso y tipográfico se vuelve distintivo.

No por parecer moderno. Por parecer autoral.

---

## 11. Lectura global: tendencias 2026 que sí aplican

Si se juntan todas las fuentes (Elementor, WordPress, UX, tendencias generales), hay un patrón claro:

**Las verdaderas tendencias 2026 no son visuales. Son estructurales.**

Las que se repiten en todos lados y encajan con este proyecto:

- Performance-first
- Accessibility-first
- Tipografía protagonista
- Minimalismo funcional → en este sistema: **neo-minimalismo funcional** (principio rector, 3.1 y sección 2)
- Sistemas basados en variables / tokens
- Diseño sostenible
- Microinteracciones funcionales

Aplicadas con filtro editorial: mejoran lectura, claridad, accesibilidad y performance. Las que son solo espectáculo o personalización se dejan fuera.

---

## 12. Conclusión

El diseño contemporáneo no exige más efectos. Exige más intención.

Para una plataforma literaria:

- la claridad es identidad
- la tipografía es diseño
- el ritmo es experiencia

Y esa dirección ya está alineada con el sistema Daniel Arella.

---

## 13. Bloque listo para identidad e implementación

Este bloque puede pegarse o referenciarse desde la documentación de identidad y del theme.

### 13.0 Checklist de maqueta estática

- [ ] 1 CSS principal; sin fragmentos dispersos.
- [ ] JS mínimo; todo con `defer`.
- [ ] Imágenes con `width` y `height`; optimizadas; `loading="lazy"` donde aplique.
- [ ] Fuentes auto-hospedadas o enlace único; sin CDN innecesario.
- [ ] Tokens en `:root`: `--brand-*` y roles semánticos; componentes solo usan roles.
- [ ] Contraste AA; `:focus-visible` visible (color de acento de la paleta).
- [ ] Jerarquía de headings correcta; enlaces con estado claro.
- [ ] Micro-interacciones solo funcionales (hover/focus, botones, menú, formularios).
- [ ] Sin popups ni triggers invasivos por defecto.
- [ ] Sin animación en texto de lectura.

### 13.1 Equivalencia en WordPress

| Concepto        | En el theme |
|-----------------|------------|
| Tokens y roles  | `theme.json`: paleta y tipografías bloqueadas; `style.css` o archivo de variables con `--brand-*` y roles. |
| Un CSS principal | `style.css` del theme (y/o CSS generado desde `theme.json`); evitar múltiples hojas de estilos de plugins. |
| JS mínimo      | Enqueue solo los scripts necesarios; `defer`; sin jQuery salvo necesidad real. |
| Imágenes       | Responsive/optimizadas vía theme o plugin ligero; `width`/`height` en markup. |
| Accesibilidad  | Contraste y focus en CSS del theme; headings y landmarks en templates. |
| Patrones       | Block patterns (si se usa FSE) o templates PHP que respeten la misma jerarquía y clases. |

**Resumen:**  
Design tokens y roles en `theme.json` + `style.css`. Performance vía un CSS, JS defer, imágenes con dimensiones y lazy. Accesibilidad en markup y CSS. Sin capas comerciales (popups, personalización, motion de show) como base del sistema.

---

## 14. Lectura crítica del checklist WordPress 2026

Este checklist sirve como referencia técnica, pero no todo aplica a una plataforma literaria.  
Se traduce en decisiones concretas según el tipo de proyecto: sitio de autor, centrado en lectura larga, con identidad tipográfica fuerte y mínima fricción.

### 14.1 Diseño adaptativo + móvil primero

✔ Se adopta como base estructural.

- Tipografía legible en móvil sin zoom.
- Línea de lectura cómoda.
- Menú simple y claro.
- Espaciado suficiente para dedos.
- Imágenes escalables.

Encaja con: maqueta responsiva, layout de columna única, ritmo vertical editorial.

### 14.2 Paletas contrastadas + retro / brutalismo

✖ No aplicar como sistema.

La identidad ya está cerrada: paleta fija, coherencia editorial, control tipográfico.  
El brutalismo o el retro agresivo compiten con el contenido.

### 14.3 Tipografía potente

✔ Totalmente alineado con el proyecto.

Refuerza la dirección actual:

- Fraunces como voz.
- Jerarquía tipográfica clara.
- Titulares con presencia.

### 14.4 Adaptabilidad constante

✔ Sí, pero en sentido técnico.

- Código limpio.
- Estructura flexible.
- WordPress como capa editorial.

No significa rediseñar todo cada año, sino algo que pueda crecer sin romperse.

### 14.5 Micro-interacciones y animaciones ligeras

✔ Con moderación.

- Hover en links.
- Feedback en botones.
- Estados de formulario.
- Menú móvil.

No: animaciones decorativas, scroll con efectos, 3D.

### 14.6 Navegación intuitiva y arquitectura clara

✔ Fundamental.

Coincide con:

- Árbol de URLs claro.
- Archivo bien organizado.
- Breadcrumbs.
- Enlaces internos naturales.

### 14.7 Inteligencia artificial en la experiencia

✖ No necesario.

- Añade complejidad.
- Introduce dependencia.
- No mejora la lectura.
- Rompe estabilidad del sitio.

### 14.8 Neo-minimalismo

✔ Muy alineado. En este proyecto no es tendencia: es **principio rector** (3.1 y sección 2).

Espacio en blanco, tipografía fuerte, pocos elementos, paleta corta, reducción como regla. Equivalente visual de escribir con precisión; atrae a lectores atentos y mejora performance. Ver bloque completo en 3.4.

### 14.9 Voz y asistentes

✖ No relevante como sistema base.

Solo podría valorarse a futuro como:

- text-to-speech opcional.
- mejora de accesibilidad.


