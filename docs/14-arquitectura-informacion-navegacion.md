# Daniel Arella — Arquitectura de información y flujo de navegación

**Mapa de navegación y enlaces vivos**  
**Versión 2.6**

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

Estructura consolidada:

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

**Opcional (plan maestro):** Biblioteca de audio, Videoteca — accesibles desde Archivo o como ítem de cabecera según decisión de menú. Ver `01-plataforma-autor-plan`.

**Opcional:** Selector de idioma como control auxiliar (icono), no como ítem principal.

**En pie, no en cabecera:** Prensa, Derechos, Correspondencia. La cabecera prioriza orientación hacia la obra y el autor.

No incluir nunca en cabecera: Prensa, Derechos, piezas individuales, libros concretos.

### Pie

| Enlace | Destino |
|--------|---------|
| Servicios editoriales | Servicios editoriales |
| Prensa | Prensa |
| Derechos | Derechos |
| Contacto | Contacto |
| Correspondencia | Correspondencia |

Orden fijo: Servicios editoriales → Prensa → Derechos → Contacto → Correspondencia.  
No redes sociales ni enlaces externos salvo prensa.

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
| Goodreads / editorial / librería / marketplace (si existe) | Sitio externo | Secundario |
| “Presentación en prensa” o referencias externas | Medio externo o página Prensa | Secundario |
| “Explorar libros” | Listado Libros | Secundario |
| Breadcrumb | Inicio → Libros → [Libro] | Secundario |

**Nunca:** “otros libros”, “libros relacionados”.

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
| “Volver a talleres” | Listado Talleres | Secundario |

**Nunca:** otros talleres sueltos dentro del single.

---

## 9. Single Artículo

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Artículo anterior” | Artículo anterior | Secundario |
| “Siguiente artículo” | Artículo siguiente | Primario |
| “Explorar archivo” o “Artículos” | Archivo Blog | Secundario |
| Breadcrumb | Inicio → Archivo → Artículos → [Título del artículo] | Secundario |

**Nunca:** listas genéricas de artículos sin relación.

---

## 10. Archivo y listados

Archivo general y por tipo (Poemas, Ensayos, Relatos, Talleres, Artículos). Libros se accede desde su propio listado principal.

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada ítem | Single correspondiente | Primario |
| Filtros: tipo, tema, periodo | Mismo archivo refinado | Secundario |
| Inicio | Home | Secundario |

**Nunca:** bloques de “destacados”, “sugeridos”, “más leídos”.

---

## 10.1 Biblioteca de audio y videoteca (plan maestro)

Cuando estén implementadas (`01-plataforma-autor-plan`):

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada pieza de audio y video | Single correspondiente (si existe) o reproductor externo (embed) | Primario |
| Filtros por tipo | Mismo listado refinado | Secundario |
| “Explorar archivo” / Inicio | Archivo o Home | Secundario |

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

## 18. Regla final

Si un enlace no empuja la lectura hacia:

- La obra
- El libro
- El archivo
- La relación con el autor

**no existe.**

Este sistema impide que el sitio se convierta en un feed, una tienda o un laberinto.

