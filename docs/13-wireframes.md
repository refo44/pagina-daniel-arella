# Daniel Arella — Wireframes. Estructura de pantallas

**Versión 1.6**

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
- Relación con libro
- Llamada a acción: Enviar solicitud, Contactar
- Pie

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

---

## 8.1 Biblioteca de audio (plan maestro)

**Función:** ofrecer la obra en formato sonoro (poemas, audiolibros, podcast, temas musicales).

**Alojamiento:** El audio no se sube al servidor; vive en servicios de terceros (Spotify, SoundCloud, etc.). El sitio muestra enlaces o reproductores embebidos.

Bloques previstos:

- Cabecera
- Título (“Biblioteca de audio”)
- Listado de piezas (título, tipo, enlace o embed)
- Filtros opcionales (tipo: poema, audiolibro, podcast)
- Pie

La ficha de cada pieza (single) se definirá al implementar el modelo de contenido. Ver `01-plataforma-autor-plan`, `05-mapa-pantallas`.

---

## 8.2 Videoteca (plan maestro)

**Función:** ofrecer la obra en formato video (poemas leídos, videopoemas, conferencias, clases, música).

**Alojamiento:** El video no se sube al servidor; vive en servicios de terceros (YouTube, Vimeo, Instagram Reels, etc.). El sitio muestra enlaces o reproductores embebidos (embed).

Bloques previstos:

- Cabecera
- Título: Videoteca
- Listado de piezas (título, tipo, enlace o embed)
- Filtros opcionales (tipo: poema leído, conferencia, etc.)
- Pie

La ficha de cada pieza (single) se definirá al implementar el modelo de contenido. Ver `01-plataforma-autor-plan`, `05-mapa-pantallas`.

---

## 9. Páginas fijas

Estructura común: **Cabecera → Contenido editorial → Pie**

| Página | Contenido |
|--------|-----------|
| **Sobre el autor** | Cabecera, Breadcrumb, Contenido editorial (Foto, Bio corta, Bio larga, Enlaces a libros), Pie |
| **Servicios editoriales** | Cabecera, Breadcrumb, Introducción breve, Lista de servicios, Para quién está dirigido, Trayectoria, Llamada a Contacto, Pie |
| **Correspondencia** | Texto editorial, Campo de correo, Botón “Recibir nuevos textos” |
| **Contacto** | Texto breve, Formulario |
| **Prensa** | Lista de piezas: Medio, Año, Enlace externo o estado archivado |
| **Derechos** | Texto legal y permisos |

Regla para `Servicios editoriales`: no mostrar tarifas ni paquetes. La única salida comercial es “Solicitar información” o “Contactar”.

---

## Regla de validación

Una pantalla es correcta si:

1. Se entiende qué es en tres segundos.
2. La lectura no se interrumpe por bloques inútiles.
3. Siempre hay una salida hacia la obra completa.
4. No hay animaciones decorativas en zona de lectura (doc 22).

