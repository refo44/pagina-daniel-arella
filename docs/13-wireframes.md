# Daniel Arella — Wireframes. Estructura de pantallas

**Versión 1.9**

Este documento define la arquitectura visible de cada pantalla. No dibuja interfaces. Define jerarquías, bloques y flujo de lectura.

**Se apoya en:** `01-plataforma-autor-plan`, `02-identidad-corporativa`, `05-mapa-pantallas`, `07-sistema-editorial-web`, `10-ui-copy-sheet`, `11-user-journey`, `22-tendencias-ux-ui-sistema-editorial`  
**Alimenta a:** `14-arquitectura-informacion-navegacion`, `16-theme-file-structure`, `17-static-file-structure`

**Regla (doc 22):** El objetivo de cada página debe ser evidente. En páginas de texto: cero animaciones decorativas; solo focus y hover.

---

## 1. Home

**Función editorial:** mostrar qué obra está viva ahora.

Bloques en orden vertical:

- **Cabecera**
- **Obra en curso**
  - Título del libro o ciclo activo
  - Breve texto editorial
  - Enlace “Abrir el libro”
- **Poema destacado**
  - Título
  - 2 a 4 versos
  - Enlace “Leer el poema”
- **Ensayo reciente**
  - Título
  - Fragmento
  - Enlace “Leer el ensayo”
- **Taller próximo**
  - Título
  - Fecha y modalidad
  - Enlace “Abrir el taller”
- **Entrada al archivo**
  - Enlace “Explorar archivo”
- **Correspondencia**
  - Texto breve
  - Campo de correo
  - Botón “Recibir nuevos textos”
- **Pie**

Nada en Home es una lista larga. Todo es selección editorial.

---

## 2. Single poema

**Función:** permitir leer sin distracciones y sin perder contexto.

Bloques:

- Cabecera
- Breadcrumb
- Título
- Texto del poema
- Este texto pertenece al libro → Enlace al libro
- Navegación: Anterior, Siguiente, Volver al archivo
- Pie

---

## 3. Single libro

**Función:** representar una obra como un cuerpo.

Bloques:

- Cabecera
- Breadcrumb
- Título
- Descripción editorial
- Resumen de la obra
- Cita o fragmento breve
- Sección de ediciones
  - Edición destacada (si existe)
  - Lista o tarjetas de ediciones
  - Por edición: cubierta, sello, año, ISBN, formato
  - Enlaces externos: editorial, Amazon, librería, marketplace (solo si aplican)
  - Descargas: PDF, EPUB (solo si aplican y siempre asociadas a la edición correcta)
- Dónde encontrar el libro
  - Goodreads
  - Editorial
  - Librería o marketplace
- Índice de textos: Poemas, Ensayos, Relatos
- Prensa y referencias
  - Enlaces a medios, revistas o blogs externos
  - Nunca materiales propios del sitio
- Pie

Regla: una obra puede tener varias ediciones dentro de la misma ficha. Las ediciones no crean una nueva pantalla ni una nueva URL.

---

## 4. Single ensayo

**Función:** lectura continua y crítica.

Bloques:

- Cabecera
- Breadcrumb
- Título
- Abstract
- Cuerpo del ensayo
- Notas o referencias
- Este texto pertenece al libro
- Navegación: Ensayo anterior, Siguiente ensayo, Volver al archivo
- Pie

---

## 5. Single relato

**Función:** lectura narrativa sin interrupciones.

Bloques:

- Cabecera
- Breadcrumb
- Título
- Texto del relato
- Este texto pertenece al libro
- Navegación: Relato anterior, Siguiente relato, Volver al archivo
- Pie

---

## 6. Single taller

**Función:** informar y permitir contacto.

Bloques:

- Cabecera
- Título
- Descripción
- Datos: Fecha, Lugar, Modalidad
- Programa curricular completo en la ficha y descarga del mismo contenido en PDF (bloque opcional)
- Relación con libro
- Llamada a acción: Enviar solicitud, Contactar
- Pie

**Listado de talleres:**

- Próximos talleres, ordenados por fecha de inicio ascendente
- Talleres realizados, ordenados por fecha de inicio descendente
- Estado vacío independiente para cada grupo
- En talleres de varios días, la clasificación y el orden usan el primer día

---

## 7. Single artículo

**Función:** lectura de notas y artículos del autor.

Bloques:

- Cabecera
- Breadcrumb
- Título
- Texto del artículo
- Navegación: Explorar artículos o Volver al archivo
- Pie

Ver `07-sistema-editorial-web` (4.3), `10-ui-copy-sheet` (6.6).

---

## 8. Archivo

**Función:** explorar la obra como biblioteca.

Bloques:

- Cabecera
- Título
- Filtros: tipo, tema, periodo (y forma, si está implementada)
- Lista de piezas (Título, Tipo, Libro)
- Paginación
- Pie

Regla: `Archivo` no absorbe `Libros`. Los libros tienen su propio listado principal en `/book/` y acceso directo desde cabecera.

---

## 8.1 Multimedia (implementada)

**Función:** ofrecer la obra en formato audio y video en una sola página, en vez de las dos secciones separadas ("Biblioteca de audio", "Videoteca") previstas en el plan original.

**Alojamiento:** Nada se sube al servidor; vive en servicios de terceros (YouTube, SoundCloud, Instagram Reels). El sitio muestra enlaces o reproductores embebidos.

Bloques implementados:

- Cabecera
- Título ("Videos, audios y reels")
- Navegación interna a tres bloques en la misma página: Videos, Audios, Reels
- Cada bloque: listado de piezas (título, tipo, embed), paginación propia
- Pie

Sin ficha individual (single) por pieza: cada elemento enlaza o embebe directamente el servicio externo.

---

## 8.2 Galería (implementada, adoptada tras el plan original)

**Función:** selección visual de fotografías, retratos y contexto del autor.

Bloques implementados:

- Cabecera
- Título ("Galería")
- Cuadrícula de imágenes con pie de foto/crédito cuando aplica
- Pie

Sin ficha individual por imagen. Ver `05-mapa-pantallas`.

---

## 8.3 Eventos (implementada, adoptada tras el plan original)

**Función:** memoria editorial de lecturas, presentaciones y festivales — actividad pública del autor, distinta de Prensa (que reúne solo referencias externas) y de Blog (que reúne artículos propios).

Bloques implementados — listado:

- Cabecera, Breadcrumb
- Título ("Eventos")
- Próximos eventos, ordenados por fecha de inicio ascendente
- Eventos realizados, ordenados por fecha de inicio descendente
- Estado vacío independiente para cada grupo
- En eventos de varios días, la clasificación y el orden usan el primer día
- Cada evento muestra título, fecha/lugar, extracto y enlace
- Pie

Bloques implementados — single:

- Cabecera, Breadcrumb (Inicio → Eventos → Título)
- Título del evento, fecha, lugar, cartel/imagen si existe
- Cuerpo editorial (contexto del evento)
- Enlace al libro presentado si aplica
- "Volver a eventos"
- Pie

---

## 9. Páginas fijas

Estructura común: **Cabecera → Contenido editorial → Pie**

| Página | Contenido |
|--------|-----------|
| **Sobre el autor** | Cabecera, Breadcrumb, Contenido editorial (Foto, Bio corta, Bio larga, Bloque breve de premios y reconocimientos, Enlaces a libros), Pie |
| **Servicios editoriales** | Cabecera, Breadcrumb, Introducción breve, Lista de servicios, Para quién está dirigido, Trayectoria, Llamada a Contacto, Pie |
| **Correspondencia** | Texto editorial, Campo de correo, Botón “Recibir nuevos textos” |
| **Contacto** | Texto breve, Formulario |
| **Prensa** | Lista de piezas: Medio, Año, Enlace externo o estado archivado |
| **Derechos** | Texto legal y permisos |

Regla para `Servicios editoriales`: no mostrar tarifas ni paquetes. La única salida comercial es “Solicitar información” o “Contactar”.

Regla para `Sobre el autor`: los premios se resumen dentro de la página como trayectoria breve. No generan sección autónoma, categoría ni URL propia.

---

## Regla de validación

Una pantalla es correcta si:

1. Se entiende qué es en tres segundos.
2. La lectura no se interrumpe por bloques inútiles.
3. Siempre hay una salida hacia la obra completa.
4. No hay animaciones decorativas en zona de lectura (doc 22).

