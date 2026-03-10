# Daniel Arella — Arquitectura editorial

**Versión 2.4**

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
| Article | Artículos y notas del autor |
| Page | Inicio, Archivo, Sobre el autor, Correspondencia, Contacto, Prensa, Derechos |

En WordPress:

- `poem`, `book`, `essay`, `story`, `workshop` son Custom Post Types.
- `page` se usa para páginas fijas.
- `post` se usa solo para Article.

Un poema nunca es un post. Un libro nunca es una página.

---

## 2. Qué no existe

No existen entidades técnicas para:

- ciclos
- series
- colecciones
- estados
- ediciones internas
- versiones

Todo eso se expresa editorialmente dentro de los libros, textos y relaciones entre piezas.

La arquitectura nunca duplica lo que la escritura ya puede decir.

---

## 3. Organización

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

---

## 4. Relaciones

Las únicas relaciones estructurales son las que crean caminos de lectura reales.

| Desde | Hacia |
|-------|-------|
| Poem | Book |
| Essay | Book |
| Story | Book |
| Workshop | Book |

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

Con idioma: `/es/...`, `/en/...`

La estructura es idéntica en todos los idiomas.

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

- Tipo (poemas, libros, ensayos, relatos)
- Tema
- Periodo

Nunca solo por fecha. Los filtros son pocos, visibles y claros.

---

## 7.1 Biblioteca de audio y Videoteca (plan maestro)

Según `01-plataforma-autor-plan`, la arquitectura de información incluye dos secciones adicionales:

- **Biblioteca de audio:** poemas en audio, temas musicales, audiolibros, podcast.
- **Videoteca:** música, poemas leídos, videopoemas, rap, conferencias, clases.

**Alojamiento:** El audio y el vídeo **no se suben al servidor del sitio**. Se alojan en la nube o en servicios de terceros (p. ej. YouTube, Vimeo, Instagram Reels, Spotify, SoundCloud, etc.). El sitio solo almacena enlaces o códigos de inserción (embed) y los muestra en listado o en ficha. Así se evita almacenar archivos pesados en el hosting y se aprovechan reproductores y CDN de esas plataformas.

Estas secciones forman parte del territorio editorial. Su modelo de contenido (tipos, campos: URL externa, embed, miniatura) se definirá al implementarlas; hasta entonces se consideran listados navegables con posible ficha por pieza. La navegación y las URLs se describen en `14-arquitectura-informacion-navegacion` y `15-arbol-urls-final`.

---

## 8. Descargas y derechos

Las descargas existen solo dentro de Book. Ahí viven:

- PDF
- EPUB
- Editorial
- Año
- ISBN
- Aviso breve de derechos

No hay tienda ni sistema de licencias. El libro se presenta como obra, no como producto.

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

**Versión:** 2.5  
**Depende de:** `01-plataforma-autor-plan`, `02-identidad-corporativa`  
**Alimenta a:** `04-wordpress-content-model`
