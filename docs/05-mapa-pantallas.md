# Daniel Arella — Mapa de pantallas

Lista de qué pantallas existen. No describe diseño; solo qué vistas hay que construir.

Es el índice de lo que se wireframea y se implementa.

**Todas las pantallas existen por idioma** (/es/, /en/).

**Referencia:** `01-plataforma-autor-plan`, `03-arquitectura-editorial`, `04-wordpress-content-model`

---

## Páginas fijas

- Inicio  
- Archivo  
- Sobre el autor  
- Correspondencia (implementada — ver `14-arquitectura-informacion-navegacion` §14)
- Contacto  
- Servicios editoriales  
- Prensa  
- Derechos y uso de la obra  
- Mapa del sitio (`sitemap.html` — índice completo, enlazado desde el pie)

---

## Secciones adoptadas después del plan original

- Eventos (listado + single) — memoria editorial de lecturas, presentaciones y festivales. Adoptada en v2.7 de `14-arquitectura-informacion-navegacion`; antes existía en el sitio sin mapa.
- Galería (listado único, sin fichas) — selección visual de fotografías y contexto del autor. Misma adopción v2.7.
- Multimedia (listado único, sin fichas) — reemplaza los dos ítems de plan maestro "Biblioteca de audio" y "Videoteca": la implementación real los unificó en una sola página con bloques internos (Videos, Audios, Reels) en vez de dos rutas separadas.

---

## Vistas de contenido (single)

- Poema  
- Libro  
- Libro (tabla de contenidos)  
- Ensayo  
- Relato  
- Taller  
- Artículo  
- Evento

No hay ficha individual para piezas de audio, video ni imágenes de galería: cada elemento enlaza o embebe el servicio externo directamente (YouTube, SoundCloud, Instagram) desde el listado.

---

## Listados

- Libros  
- Poemas  
- Ensayos  
- Relatos  
- Talleres  
- Blog (artículos)  
- Archivo general  
- Tema (archivo por tema)  
- Periodo (archivo por periodo)  
- Forma (archivo por forma)
- Eventos
- Galería
- Multimedia

---

## Estados

- Resultados de búsqueda  
- Sin resultados de búsqueda  
- Sin resultados de archivo  
- 404 (texto no existe o fue retirado)  
- Archivo vacío  

---

**Versión:** 1.5
