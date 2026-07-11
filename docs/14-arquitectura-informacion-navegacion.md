# Daniel Arella — Arquitectura de información y flujo de navegación

**Mapa de navegación y enlaces vivos**  
**Versión 2.7**

Este documento define qué enlaces salen de cada pantalla, a dónde van, en qué orden y cuáles no deben existir. No describe diseño ni layout. Es la capa que conecta el sistema editorial con el código y con la experiencia real del lector.

Sirve para que:

- El desarrollador sepa exactamente qué imprimir.
- El lector no se pierda.
- La obra se lea como obra, no como feed.

**Se apoya en:** `01-plataforma-autor-plan`, `03-arquitectura-editorial`, `05-mapa-pantallas`, `10-ui-copy-sheet`, `11-user-journey`, `13-wireframes`, `22-tendencias-ux-ui-sistema-editorial`  
**Alimenta a:** `15-arbol-urls-final`, `16-theme-file-structure`, `17-static-file-structure`

---

## 1. Principios estructurales

| Tipo de enlace | Función |
|----------------|---------|
| **Primario** | Continuar la lectura o entrar en una pieza de obra. Un solo foco claro por contexto. |
| **Secundario** | Contexto o salida ordenada del flujo actual. |
| **Prohibido** | Ruido editorial que rompe el recorrido de la obra. |

**Regla central:** Cada pantalla debe ofrecer un siguiente paso de lectura o una salida clara al corpus. Nunca un laberinto.

---

## 2. Navegación global

**Regla de cantidad:** la cabecera debe ser clara y legible, pero puede superar 5 ítems si eso evita esconder una sección estructural.

### Cabecera

Dos niveles. El primero es la navegación estructural fija; el segundo agrupa las secciones de circulación externa y multimedia que crecieron después de la v2.6 de este documento.

**Nivel 1 — estructural:**

| Enlace | Destino |
|--------|---------|
| Inicio | Home |
| Archivo | Archivo general (poemas, ensayos, relatos, artículos) |
| Libros | Listado Libros |
| Sobre el autor | Sobre el autor |
| Servicios editoriales | Servicios editoriales |
| Talleres | Listado Talleres |
| Contacto | Contacto |

`Libros` no cuelga de `Archivo`: es una sección editorial con acceso directo desde cabecera.

**Nivel 2 — circulación y multimedia:**

| Enlace | Destino |
|--------|---------|
| Blog | Listado Blog |
| Eventos | Listado Eventos |
| Galería | Galería |
| Videos y audios | Multimedia (videos, audios, reels) |

Eventos y Galería se adoptaron formalmente a la arquitectura en la v2.7 de este documento (antes existían en el sitio sin mapa). Multimedia reemplaza los conceptos separados "Biblioteca de audio" / "Videoteca" del plan maestro: en la implementación real ambos se unificaron en una sola sección con pestañas internas (Videos, Audios, Reels) en vez de dos páginas distintas.

**Opcional:** Selector de idioma como control auxiliar (icono), no como ítem principal.

**Regla de Prensa:** Prensa nunca aparece en cabecera, en ningún nivel. Es una sección de referencia externa (evidencia, no obra) y vive únicamente en el pie. Esta regla se mantiene sin cambios respecto a versiones anteriores.

No incluir nunca en cabecera: Prensa, Derechos, piezas individuales, libros concretos.

### Pie

El pie ya no replica el sitemap completo (16 enlaces). Muestra solo los destinos de referencia/administrativos que no viven en la cabecera, más una salida explícita al mapa completo:

| Enlace | Destino |
|--------|---------|
| Servicios editoriales | Servicios editoriales |
| Prensa | Prensa |
| Derechos | Derechos |
| Contacto | Contacto |
| Correspondencia | Correspondencia |
| Ver todo el sitio | `/sitemap.html` — índice completo de todas las secciones, agrupado por función editorial |

Orden fijo: Servicios editoriales → Prensa → Derechos → Contacto → Correspondencia → Ver todo el sitio.
No redes sociales ni enlaces externos salvo prensa.

`sitemap.html` existe como página real (no solo archivo opcional de referencia, como sugería `17-static-file-structure` v1.3) precisamente para sostener este pie reducido sin perder wayfinding hacia Poemas, Ensayos, Relatos, Tema, Periodo, Forma, etc.

---

## 3. Home

| Enlace | Destino | Tipo |
|--------|---------|------|
| Título del libro activo | Single Libro | Primario |
| “Leer el poema” (destacado) | Single Poema | Primario |
| Ensayo reciente | Single Ensayo | Primario |
| Taller próximo | Single Taller | Primario |
| “Explorar archivo” | Archivo | Secundario |
| “Recibir nuevos textos” | Correspondencia | Secundario |
| “Servicios editoriales” (si aparece) | Servicios editoriales | Secundario |

**Nunca:** feeds cronológicos, carruseles, bloques de “lo más visto”, “más contenido”.

Breadcrumb no aplica.

### Fondos según función informativa

| Bloque | Fondo | Propósito |
|--------|-------|-----------|
| Hero | Pergamino | Orientar y presentar la propuesta del sitio |
| Recomendaciones | Pergamino | Concentrar la prioridad editorial mediante jerarquía y contenido, no mediante un cambio decorativo de fondo |
| Blog | Pergamino | Explorar novedades y recorridos posibles |
| Prensa | Pergamino | Presentar evidencia, referencias y credibilidad |
| Archivo | Pergamino | Navegar el corpus y sus taxonomías |

Blanco se reserva para el bloque tipográfico de lectura sostenida dentro de una página. No se utiliza en secciones de tarjetas, navegación, evidencia o acciones.

---

## 4. Single Poema

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Abrir el libro” (si pertenece a uno) | Single Libro | Primario |
| “Poema anterior” | Poema anterior | Secundario |
| “Siguiente poema” | Poema siguiente | Primario |
| “Volver al libro” | Single Libro | Secundario |
| “Explorar archivo” | Archivo | Secundario |
| Breadcrumb | Inicio → Archivo → Poemas → [Título del poema] | Secundario |

**Nunca:** poemas aleatorios, bloques de recomendación.

---

## 5. Single Libro

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada texto del índice | Poema, Ensayo o Relato | Primario |
| “Descargar PDF / EPUB” (si existe) | Descarga | Secundario |
| Editorial / librería / marketplace (si existe y la ficha es válida) | Punto de consulta o compra externo | Secundario |
| Goodreads (si existe) | Red social de lectores, catálogo, reseñas y recomendaciones | Secundario |
| “Presentación en prensa” o referencias externas | Medio externo o página Prensa | Secundario |
| “Compartir” | Selector nativo o panel con Facebook, X, WhatsApp y copia del enlace | Secundario |
| “Explorar libros” | Listado Libros | Secundario |
| Breadcrumb | Inicio → Libros → [Libro] | Secundario |

**Nunca:** “otros libros”, “libros relacionados”.

Los comentarios pertenecen al final de la página individual y no generan una ruta independiente ni enlaces desde el listado de libros.

---

## 6. Single Ensayo

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Abrir el libro” (si pertenece) | Single Libro | Primario |
| “Ensayo anterior” | Ensayo anterior | Secundario |
| “Siguiente ensayo” | Ensayo siguiente | Primario |
| “Explorar ensayos” | Archivo Ensayos | Secundario |
| Breadcrumb | Inicio → Archivo → Ensayos → [Título del ensayo] | Secundario |

**Nunca:** listas genéricas de ensayos sin relación.

---

## 7. Single Relato

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Abrir el libro” (si pertenece) | Single Libro | Primario |
| “Relato anterior” | Relato anterior | Secundario |
| “Siguiente relato” | Relato siguiente | Primario |
| “Explorar relatos” | Archivo Relatos | Secundario |
| Breadcrumb | Inicio → Archivo → Relatos → [Título del relato] | Secundario |

**Nunca:** listas genéricas de relatos sin relación.

---

## 8. Single Taller

| Enlace | Destino | Tipo |
|--------|---------|------|
| Libro relacionado | Single Libro | Primario |
| “Enviar solicitud de inscripción” o “Contactar” | Contacto | Primario |
| “Descargar programa (PDF)” (si existe) | PDF del programa curricular | Secundario |
| “Compartir” (solo taller próximo) | Selector nativo o panel de redes | Secundario |
| “Volver a talleres” | Listado Talleres | Secundario |

**Nunca:** otros talleres sueltos dentro del single.

---

## 9. Single Artículo

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Artículo anterior” | Artículo anterior | Secundario |
| “Siguiente artículo” | Artículo siguiente | Primario |
| “Explorar archivo” o “Artículos” | Archivo Blog | Secundario |
| “Compartir” | Selector nativo o panel con Facebook, X, WhatsApp y copia del enlace | Secundario |
| Breadcrumb | Inicio → Archivo → Artículos → [Título del artículo] | Secundario |

**Nunca:** listas genéricas de artículos sin relación.

Los comentarios pertenecen al final de la página individual y no generan una ruta independiente ni enlaces desde el listado de artículos.

---

## 9.1 Single Evento

Sección adoptada formalmente en la v2.7 (antes existía en el sitio sin spec). Un evento es memoria editorial de una actividad pública (lectura, presentación, festival), no una entrada de blog ni una pieza de prensa.

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Volver a eventos” | Listado Eventos | Secundario |
| Libro presentado (si aplica) | Single Libro | Primario |
| “Sobre el autor” o “Contacto” (según el evento) | Sobre el autor / Contacto | Secundario |
| “Compartir” (solo evento próximo) | Selector nativo o panel de redes | Secundario |
| Breadcrumb | Inicio → Eventos → [Título del evento] | Secundario |

**Nunca:** listado de "otros eventos" ni cronología tipo feed.

---

## 10. Archivo y listados

Archivo general y por tipo (Poemas, Ensayos, Relatos, Talleres, Artículos). Libros se accede desde su propio listado principal.

Los listados de Talleres y Eventos separan agenda y archivo. Las actividades próximas aparecen primero, ordenadas desde la fecha de inicio más cercana; las realizadas se ordenan de la más reciente a la más antigua. Si una actividad dura varios días, se usa el día de inicio para clasificarla y ordenarla.

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada ítem | Single correspondiente | Primario |
| Filtros: tipo, tema, periodo | Mismo archivo refinado | Secundario |
| Inicio | Home | Secundario |

**Nunca:** bloques de “destacados”, “sugeridos”, “más leídos”.

---

## 10.1 Multimedia (implementada — reemplaza Biblioteca de audio / Videoteca)

El plan maestro original (`01-plataforma-autor-plan`) proponía dos secciones separadas: Biblioteca de audio y Videoteca. La implementación real las unificó en una sola página `/multimedia/` con tres bloques internos (Videos, Audios, Reels) en vez de dos rutas distintas. No hay fichas individuales (single) por pieza: cada elemento enlaza o embebe directamente el servicio externo (YouTube, SoundCloud, Instagram).

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada pieza de audio o video | Reproductor externo embebido (YouTube, SoundCloud, Instagram) | Primario |
| Paginación por bloque (Videos/Audios/Reels) | Mismo bloque, página siguiente | Secundario |
| “Explorar archivo” | Archivo | Secundario |

## 10.2 Galería (adoptada en v2.7)

Selección visual de fotografías, portadas y contexto del autor. Sin fichas individuales por imagen; es una página única de tipo listado.

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Explorar archivo” | Archivo | Secundario |

**Nunca:** convertir la galería en un feed de redes sociales embebido.

Misma regla que el resto del archivo: sin bloques de recomendación ni ruido. El audio y el video se alojan en servicios externos (YouTube, Vimeo, Instagram Reels, Spotify, etc.); el sitio solo enlaza o embebe.

---

## 11. Tema y Periodo

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada ítem | Single correspondiente | Primario |
| “Explorar archivo” | Archivo | Secundario |

**Nunca** mezclar piezas fuera del término activo.

---

## 12. Sobre el autor

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Recibir nuevos textos” | Correspondencia | Primario |
| “Contactar” | Contacto | Secundario |
| “Servicios editoriales” | Servicios editoriales | Secundario |

Los premios y reconocimientos se leen dentro de la misma página como parte de la trayectoria, sin abrir una navegación aparte.

**Nunca:** listas de obras dentro del texto salvo mención editorial explícita, ni enlaces a una supuesta sección autónoma de premios.

---

## 13. Servicios editoriales

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Solicitar información” | Contacto | Primario |
| “Contactar” | Contacto | Primario |
| “Sobre el autor” | Sobre el autor | Secundario |

La página presenta servicios de edición, corrección y lectura crítica sin precios públicos. Nunca funciona como tienda, checkout ni tabla tarifaria.

---

## 14. Correspondencia

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Recibir nuevos textos” | Confirmación en la misma página | Primario |
| “Volver” | Home o Sobre el autor | Secundario |

Una sola acción.

**Dos puntos de entrada al mismo objetivo, no dos features distintas:** el campo “Lista de correos” en el pie (presente en todas las páginas) es la captura oportunista y liviana; `/correspondencia/` es el destino editorial dedicado, con texto de contexto, enlazado desde Inicio y Sobre el autor (“Recibir nuevos textos”). Ambos envían al mismo mecanismo de suscripción.

---

## 15. Contacto

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Enviar” | Confirmación | Primario |
| “Volver” | Home o Sobre el autor | Secundario |

Contacto también recibe solicitudes de talleres, prensa y servicios editoriales. No requiere página intermedia adicional.

---

## 16. Prensa

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada referencia | Medio externo (nueva pestaña) | Secundario |

Prensa reúne solo publicaciones externas: artículos, noticias, menciones o referencias editoriales en sitios de terceros.

Nunca incluir en Prensa:

- posts del blog propio
- páginas del sitio
- retratos o carteles propios
- fichas de circulación del libro (editorial, librería, marketplace)

Si un enlace original ya no existe, la referencia puede mantenerse solo como archivada o como referencia sin enlace activo, siempre que sea verificable.

---

## 17. Derechos

| Enlace | Destino | Tipo |
|--------|---------|------|
| Contacto | Contacto | Secundario |

---

## 18. Estados

### Sin resultados

| Enlace | Destino |
|--------|---------|
| “Explorar archivo” | Archivo |
| “Volver” | Página anterior |

### 404

| Enlace | Destino |
|--------|---------|
| “Explorar archivo” | Archivo |
| “Volver” | Página anterior |

### Archivo vacío

| Enlace | Destino |
|--------|---------|
| “Explorar archivo” | Archivo |
| “Inicio” | Home |

**Nunca** dejar una pantalla sin salida.

---

## 19. Regla final

Si un enlace no empuja la lectura hacia:

- La obra
- El libro
- El archivo
- La relación con el autor

**no existe.**

Este sistema impide que el sitio se convierta en un feed, una tienda o un laberinto.

