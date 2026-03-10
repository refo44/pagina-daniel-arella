# Daniel Arella — Arquitectura de información y flujo de navegación

**Mapa de navegación y enlaces vivos**  
**Versión 2.2**

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

**Regla de cantidad (22-tendencias-ux-ui-sistema-editorial):** Menú de 3 a 5 ítems. Menos opciones = menos fricción cognitiva.

### Cabecera

Estructura consolidada (5 ítems máximo):

| Enlace | Destino |
|--------|---------|
| Inicio | Home |
| Archivo | Archivo general (poemas, ensayos, relatos, libros, artículos) |
| Sobre el autor | Sobre el autor |
| Talleres | Listado Talleres |
| Correspondencia | Correspondencia |

**Opcional (plan maestro):** Biblioteca de audio, Videoteca — accesibles desde Archivo o como ítem de cabecera según decisión de menú (máx. 5 ítems en cabecera). Ver `01-plataforma-autor-plan`.

**Opcional:** Selector de idioma como control auxiliar (icono), no como ítem principal.

**En pie, no en cabecera:** Contacto, Prensa, Derechos. La cabecera prioriza orientación hacia la obra y el autor.

No incluir nunca en cabecera: Prensa, Derechos, piezas individuales, libros concretos.

### Pie

| Enlace | Destino |
|--------|---------|
| Prensa | Prensa |
| Derechos | Derechos |
| Contacto | Contacto |
| Correspondencia | Correspondencia |

Orden fijo: Prensa → Derechos → Contacto → Correspondencia.  
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

**Nunca:** feeds cronológicos, carruseles, bloques de “lo más visto”, “más contenido”.

---

## 4. Single Poema

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Abrir el libro” (si pertenece a uno) | Single Libro | Primario |
| “Siguiente poema” | Poema siguiente | Primario |
| “Poema anterior” | Poema anterior | Secundario |
| “Volver al libro” | Single Libro | Secundario |
| “Explorar archivo” | Archivo | Secundario |
| Breadcrumb | Inicio → Archivo → Poemas → Poema | Secundario |

**Nunca:** poemas aleatorios, bloques de recomendación.

---

## 5. Single Libro

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada texto del índice | Poema, Ensayo o Relato | Primario |
| “Descargar PDF / EPUB” | Descarga | Secundario |
| “Explorar archivo” | Archivo | Secundario |
| Breadcrumb | Inicio → Archivo → Libros → Libro | Secundario |

**Nunca:** “otros libros”, “libros relacionados”.

---

## 6. Single Ensayo

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Abrir el libro” (si pertenece) | Single Libro | Primario |
| “Siguiente ensayo” | Ensayo siguiente | Primario |
| “Ensayo anterior” | Ensayo anterior | Secundario |
| “Explorar ensayos” | Archivo Ensayos | Secundario |
| Breadcrumb | Inicio → Archivo → Ensayos → Ensayo | Secundario |

**Nunca:** listas genéricas de ensayos sin relación.

---

## 7. Single Relato

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Abrir el libro” (si pertenece) | Single Libro | Primario |
| “Siguiente relato” | Relato siguiente | Primario |
| “Relato anterior” | Relato anterior | Secundario |
| “Explorar relatos” | Archivo Relatos | Secundario |
| Breadcrumb | Inicio → Archivo → Relatos → Relato | Secundario |

**Nunca:** listas genéricas de relatos sin relación.

---

## 8. Single Taller

| Enlace | Destino | Tipo |
|--------|---------|------|
| Libro relacionado | Single Libro | Primario |
| “Enviar solicitud” o “Contactar” | Contacto | Primario |
| “Volver a talleres” | Listado Talleres | Secundario |

**Nunca:** otros talleres sueltos dentro del single.

---

## 8.1 Single Artículo

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Siguiente artículo” | Artículo siguiente | Primario |
| “Artículo anterior” | Artículo anterior | Secundario |
| “Explorar archivo” o “Artículos” | Archivo Blog | Secundario |
| Breadcrumb | Inicio → Archivo → Artículos → Artículo | Secundario |

**Nunca:** listas genéricas de artículos sin relación.

---

## 9. Archivo y listados

Archivo general y por tipo (Poemas, Libros, Ensayos, Relatos, Talleres, Artículos).

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada ítem | Single correspondiente | Primario |
| Filtros (tipo, tema, periodo) | Mismo archivo refinado | Secundario |
| Inicio | Home | Secundario |

**Nunca:** bloques de “destacados”, “sugeridos”, “más leídos”.

---

## 9.1 Biblioteca de audio y Videoteca (plan maestro)

Cuando estén implementadas (`01-plataforma-autor-plan`):

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada pieza de audio/vídeo | Single correspondiente (si existe) o reproductor externo (embed) | Primario |
| Filtros por tipo | Mismo listado refinado | Secundario |
| “Explorar archivo” / Inicio | Archivo o Home | Secundario |

Misma regla que el resto del archivo: sin bloques de recomendación ni ruido. El audio y el vídeo se alojan en servicios externos (YouTube, Vimeo, Instagram Reels, Spotify, etc.); el sitio solo enlaza o embebe.

---

## 10. Tema y Periodo

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada ítem | Single correspondiente | Primario |
| “Explorar archivo” | Archivo | Secundario |

**Nunca** mezclar piezas fuera del término activo.

---

## 11. Sobre el autor

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Recibir nuevos textos” | Correspondencia | Primario |
| “Contactar” | Contacto | Secundario |

**Nunca:** listas de obras dentro del texto salvo mención editorial explícita.

---

## 12. Correspondencia

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Recibir nuevos textos” | Confirmación en la misma página | Primario |
| “Volver” | Home o Sobre el autor | Secundario |

Una sola acción.

---

## 13. Contacto

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Enviar” | Confirmación | Primario |
| “Volver” | Home o Sobre el autor | Secundario |

---

## 14. Prensa

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada referencia | Medio externo | Secundario |

---

## 15. Derechos

| Enlace | Destino | Tipo |
|--------|---------|------|
| Contacto | Contacto | Secundario |

---

## 16. Estados

### Sin resultados

| Enlace | Destino |
|--------|---------|
| “Explorar archivo” | Archivo |
| “Volver” | Página anterior |

### 404

| Enlace | Destino |
|--------|---------|
| “Explorar archivo” | Archivo |
| “Volver” | Inicio |

### Archivo vacío

| Enlace | Destino |
|--------|---------|
| “Explorar archivo” | Archivo |
| “Inicio” | Home |

**Nunca** dejar una pantalla sin salida.

---

## 17. Regla final

Si un enlace no empuja la lectura hacia:

- La obra
- El libro
- El archivo
- La relación con el autor

**no existe.**

Este sistema impide que el sitio se convierta en un feed, una tienda o un laberinto.

---

**Versión:** 2.2  
**Se apoya en:** `01-plataforma-autor-plan`, `03-arquitectura-editorial`, `05-mapa-pantallas`, `10-ui-copy-sheet`, `11-user-journey`, `13-wireframes`, `22-tendencias-ux-ui-sistema-editorial`
