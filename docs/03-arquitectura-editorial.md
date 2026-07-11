# Daniel Arella — Arquitectura editorial

**Versión 3.0**

Esta capa se apoya en la identidad corporativa y en el plan maestro (`01-plataforma-autor-plan`). No la reemplaza. La vuelve operativa.

Define cómo existe la obra de Daniel Arella dentro de WordPress como un sistema editorial, no como una colección de entradas. Su función es permitir que el lector recorra un corpus de forma clara, estable y legible.

No organiza publicaciones. Organiza una obra.

---

## 1. Entidades principales

Solo existen las entidades que un lector necesita para leer, recorrer y comprender la obra.

| Tipo | Qué representa |
|------|----------------|
| Poem | Poema individual |
| Book | Libro o manuscrito que puede reunir poemas, ensayos y relatos |
| Essay | Texto de pensamiento, crítica o reflexión |
| Story | Relato o pieza narrativa |
| Workshop | Taller o curso vinculado a la obra |
| Article | Artículos, notas o textos breves publicados fuera de los libros |
| Page | Inicio, Archivo, Sobre el autor, Correspondencia, Contacto, Servicios editoriales, Prensa, Derechos |

En WordPress:

- `poem`, `book`, `essay`, `story`, `workshop` son Custom Post Types.
- `page` se usa para páginas fijas.
- `post` se usa solo para Article.

Un poema nunca es un post. Un libro nunca es una página.

**Essay** pertenece al corpus intelectual del autor. **Article** corresponde a textos circunstanciales (publicaciones externas, notas, columnas o reflexiones breves).

**Book:** Un Book puede contener poemas, ensayos y relatos, pero también puede existir sin contenido interno (como obra editorial o referencia bibliográfica). Un Book representa la obra como unidad editorial estable, aunque esa obra tenga varias ediciones, reimpresiones o cubiertas distintas.

---

## 2. Qué no existe

No existen entidades técnicas independientes para:

- ciclos
- series
- colecciones
- estados
- versiones
- premios

Las ediciones no se modelan como entidad, CPT, taxonomía ni URL propia. Se expresan dentro de cada `Book` como información editorial anidada: sello, año, ISBN, cubierta, formato, enlaces de compra o descarga.

Los premios y reconocimientos tampoco generan entidad, categoría, taxonomía ni página propia. Se integran como bloque breve dentro de `Sobre el autor` o como contexto editorial dentro de una pieza cuando sea relevante.

La arquitectura nunca duplica lo que la escritura ya puede decir.

---

## 3. Taxonomías

La obra se organiza solo por dimensiones que un lector entiende y usa.

| Taxonomía | Uso |
|-----------|-----|
| topic | Tema |
| period | Periodo o etapa de la obra |
| form | Forma (opcional; solo si se usa) |

Se aplican a: poem, book, essay, story, workshop y article. La taxonomía `form` se añade solo si el corpus lo requiere.

No existen taxonomías para:

- idioma
- estado
- editorial
- formato
- modalidad

Esos datos viven como campos simples dentro de cada pieza cuando es necesario mostrarlos.

El idioma se gestiona mediante el sistema multilenguaje del sitio (no como taxonomía editorial).

**Regla de clasificación:** Cada pieza debería tener como máximo 1 periodo y 1–3 temas. Evitar clasificaciones excesivas.

---

## 3.1 Bloques de contenido enriquecido (ej. ajedrez)

Algunos temas dentro de `essay` o `article` necesitan estructura interna más allá de texto corrido: ajedrez es el primer caso real (`tema/ajedrez`), con notación de jugadas, diagramas de tablero y ejercicios con nivel de dificultad y solución.

**Regla:** esto no crea un CPT ni una taxonomía nueva. `tema=ajedrez` ya identifica el corpus; lo que hacía falta era estructura *dentro* de la pieza. Se resuelve con bloques de contenido reutilizables, igual que `quote-block` ya existe para citas:

| Bloque | Qué representa |
|--------|-----------------|
| Notación de ajedrez | Texto de jugadas en notación algebraica |
| Diagrama de tablero | Imagen de una posición, con alt descriptivo y leyenda de la jugada |
| Ejercicio de ajedrez | Planteamiento + nivel de dificultad + solución oculta (`<details>`) |

El nivel de dificultad vive **en el bloque del ejercicio, no en la pieza completa**: un mismo ensayo puede traer ejercicios de dificultad distinta, así que no puede ser taxonomía ni campo a nivel de `essay`/`article`.

Detalle de implementación: `17-static-file-structure` §7 (maqueta), `18-css-architecture` §5 (BEM), `04-wordpress-content-model` §8 (bloques Gutenberg).

Este patrón — bloques reutilizables dentro de una pieza, sin CPT nuevo — es el que se repite si aparece otro tema con necesidades estructurales similares (por ejemplo, partituras musicales o fórmulas). No se crea una entidad nueva por cada tema; se crean bloques.

---

## 4. Relaciones

Las únicas relaciones estructurales son las que crean caminos de lectura reales.

| Desde | Hacia |
|-------|-------|
| Poem | Book |
| Essay | Book |
| Story | Book |
| Workshop | Book |
| Article | Book (opcional) |

La relación con Book es opcional. Un poema, ensayo o relato puede existir fuera de un libro.

**Book** muestra automáticamente: poemas del libro, ensayos del libro, relatos del libro, talleres relacionados. Esto aclara cómo se reconstruye el libro dentro del sitio.

Esto permite:

- “Este poema pertenece a [Libro]”
- “Abrir el libro”
- “Leer más del libro”

No existen jerarquías laterales, grafos ni sistemas de colección paralelos.

---

## 5. Rutas y URLs

Cada tipo tiene una ruta clara y estable.

| Tipo | Ruta |
|------|------|
| Poem | /poem/slug |
| Book | /book/slug |
| Essay | /essay/slug |
| Story | /story/slug |
| Article | /blog/slug |
| Workshop | /talleres/slug |

Las rutas base permanecen iguales en todos los idiomas. Solo cambia el prefijo de idioma. Ejemplo: `/es/poem/slug`, `/en/poem/slug`.

---

## 6. Home editorial

La home no es un feed ni una vitrina. Responde a una sola idea:

**Esta es la obra que está viva ahora.**

Muestra:

- Libro activo
- Poema destacado
- Ensayo reciente
- Taller próximo
- Acceso al Archivo
- Correspondencia

El tiempo no manda. La obra manda.

---

## 7. Archivo

El archivo funciona como una biblioteca. Se puede recorrer por:

- Tipo (poemas, ensayos, relatos, artículos)
- Tema
- Periodo

Nunca solo por fecha. Los filtros son pocos, visibles y claros.

`Libros` conserva su propio listado editorial y su acceso directo desde navegación principal. No se presenta como subnivel de `Archivo`.

---

## 7.1 Biblioteca de audio y videoteca (plan maestro)

Según `01-plataforma-autor-plan`, la arquitectura de información incluye dos secciones adicionales:

- **Biblioteca de audio:** poemas en audio, temas musicales, audiolibros, podcast.
- **Videoteca:** música, poemas leídos, videopoemas, rap, conferencias, clases.

**Alojamiento:** El audio y el vídeo **no se suben al servidor del sitio**. Se alojan en la nube o en servicios de terceros (p. ej. YouTube, Vimeo, Instagram Reels, Spotify, SoundCloud, etc.). El sitio solo almacena enlaces o códigos de inserción (embed) y los muestra en listado o en ficha. Así se evita almacenar archivos pesados en el hosting y se aprovechan reproductores y CDN de esas plataformas.

Estas secciones forman parte del territorio editorial. Su modelo de contenido (tipos, campos: URL externa, embed, miniatura) se definirá al implementarlas; hasta entonces se consideran listados navegables con posible ficha por pieza. La navegación y las URLs se describen en `14-arquitectura-informacion-navegacion` y `15-arbol-urls-final`.

Estas piezas no forman parte del corpus textual (poem, essay, story). Funcionan como material audiovisual asociado a la obra.

---

## 8. Descargas y derechos

Las descargas de obras, si existen, viven dentro de Book. Un Book también puede funcionar solo como ficha editorial y bibliográfica, sin archivos públicos.

Ahí pueden vivir, a nivel de obra o de edición:

- PDF (si se publica)
- EPUB (si se publica)
- Editorial
- Año
- ISBN
- Cubierta
- Enlaces externos de compra o consulta (Amazon, editorial, librería o marketplace), verificados para esa edición
- Goodreads como red social de lectores, catálogo comunitario y fuente de reseñas y recomendaciones, separado de los puntos de venta
- Aviso breve de derechos

No hay tienda ni sistema de licencias dentro del sitio. El libro se presenta como obra, no como producto, pero puede enlazar a puntos externos de compra o consulta cuando eso ayuda a localizar una edición real.

Si una obra tiene varias ediciones, la página del Book las presenta como variantes editoriales de la misma obra, no como libros distintos ni como duplicados del archivo.

El orden interno de un Book se define manualmente para respetar la secuencia editorial del libro.

Un Workshop puede incluir de forma opcional un programa curricular. Cuando existe, la ficha muestra el contenido completo en HTML y ofrece el mismo programa en un único PDF descargable. Este archivo es material de apoyo de la ficha, no una obra, edición, entidad ni URL independiente. Si no existe un programa autorizado, no se muestran el bloque curricular ni la descarga.

### 8.1 Comentarios

Todos los libros (`book`) y artículos (`post`) permiten comentarios en su página individual. Los comentarios no aparecen en tarjetas, listados ni otros tipos de contenido.

WordPress conserva cada comentario como parte de su sistema nativo. La publicación está sujeta a moderación y Akismet filtra el spam. Los comentarios no crean una entidad editorial, taxonomía ni ruta independiente.

### 8.2 Compartir

Todos los libros y artículos incluyen la acción “Compartir”. Los talleres y eventos la incluyen únicamente mientras su fecha los mantenga en los grupos de próximos. En teléfonos y tabletas la acción usa el selector nativo cuando está disponible; en computadoras con macOS, Windows o Linux siempre abre el panel propio con Facebook, X, WhatsApp, Threads y copia del enlace.

Compartir no crea metadatos editoriales, contadores públicos ni integraciones de seguimiento con redes sociales.

---

## 9. Multilenguaje

El sitio es multilingüe por diseño.

**Principios:**

- Un contenido por idioma
- Una sola estructura
- Prefijo por idioma
- Selector visible

**Se traducen:**

- Páginas
- Bio
- Libros
- Talleres
- Selección de poemas y ensayos

La identidad visual es la misma en todos los idiomas.

---

## 10. Qué permite este sistema

Daniel puede:

- Publicar libros completos
- Publicar poemas sueltos
- Reordenar su obra
- Traducir
- Activar o cerrar talleres
- Cambiar el foco del Home

Sin que nada se rompa.

---

## Regla final

Si una estructura no ayuda a leer mejor o recordar mejor la obra, no existe.

---

**Versión:** 3.0  
**Depende de:** `01-plataforma-autor-plan`, `02-identidad-corporativa`  
**Alimenta a:** `04-wordpress-content-model`
