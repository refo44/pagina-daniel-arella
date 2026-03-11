# Daniel Arella — Árbol de URLs final

**Geografía oficial de la obra**  
**Versión 2.3**

Este documento define todas las rutas reales del sitio por idioma, tipo de obra y archivo. No es un menú ni un sitemap técnico. Es el mapa del territorio que WordPress y el theme deben respetar.

**Se apoya en:** `01-plataforma-autor-plan`, `03-arquitectura-editorial`, `04-wordpress-content-model`, `05-mapa-pantallas`, `14-arquitectura-informacion-navegacion`  
**Alimenta a:** `16-theme-file-structure`, `17-static-file-structure`

**Si una URL no está aquí, no existe.**

---

## 1. Regla base

Toda URL del sitio cumple:

```
/{idioma}/{tipo o página}/
/{idioma}/{tipo}/{slug}
```

Nunca hay rutas por:

- fecha
- autor
- categorías genéricas
- feeds
- archivos automáticos de WordPress

El sitio es una biblioteca de obra, no un CMS público.

---

## 2. Idiomas

El idioma es siempre el primer nivel del árbol.

| Prefijo | Idioma |
|---------|--------|
| `/es/` | Español (neutro venezolano) |
| `/en/` | English |

La raíz `/` solo redirige a `/es/` o muestra selector de idioma. No se sirve contenido sin prefijo de idioma.

---

## 3. Páginas fijas

Una página por función editorial. Un slug por idioma.

| Función | ES | EN |
|---------|-----|-----|
| Inicio | `/es/` | `/en/` |
| Archivo | `/es/archivo/` | `/en/archive/` |
| Sobre el autor | `/es/sobre-el-autor/` | `/en/about/` |
| Correspondencia | `/es/correspondencia/` | `/en/correspondence/` |
| Contacto | `/es/contacto/` | `/en/contact/` |
| Servicios editoriales | `/es/servicios-editoriales/` | `/en/editorial-services/` |
| Prensa | `/es/prensa/` | `/en/press/` |
| Derechos | `/es/derechos/` | `/en/rights/` |
| Biblioteca de audio | `/es/biblioteca-audio/` | `/en/audio-library/` |
| videoteca | `/es/videoteca/` | `/en/video-library/` |

`/es/archivo/` es el punto de entrada editorial al corpus completo.

No existen variantes ni duplicados. Biblioteca de audio y videoteca según `01-plataforma-autor-plan`; las rutas de fichas (single) se añadirán cuando se defina el modelo de contenido.

---

## 4. Tipos de obra

Cada tipo tiene un eje propio.

### Singles

| Tipo | ES | EN |
|------|-----|-----|
| Poema | `/es/poem/{slug}` | `/en/poem/{slug}` |
| Libro | `/es/book/{slug}` | `/en/book/{slug}` |
| Ensayo | `/es/essay/{slug}` | `/en/essay/{slug}` |
| Relato | `/es/story/{slug}` | `/en/story/{slug}` |
| Taller | `/es/talleres/{slug}` | `/en/workshops/{slug}` |
| Artículo | `/es/blog/{slug}` | `/en/blog/{slug}` |

Los slugs de tipo permanecen en inglés para consistencia técnica.

### Listados por tipo

| Tipo | ES | EN |
|------|-----|-----|
| Listado de poemas | `/es/poem/` | `/en/poem/` |
| Listado de libros | `/es/book/` | `/en/book/` |
| Listado de ensayos | `/es/essay/` | `/en/essay/` |
| Listado de relatos | `/es/story/` | `/en/story/` |
| Listado de talleres | `/es/talleres/` | `/en/workshops/` |
| Listado de artículos | `/es/blog/` | `/en/blog/` |

---

## 5. Archivo por taxonomías

El archivo se navega por criterios editoriales, no por fechas.

### tema

| ES | EN |
|-----|-----|
| `/es/tema/{slug}` | `/en/topic/{slug}` |

Ejemplo: `/es/tema/memoria`, `/en/topic/memory`

### periodo

| ES | EN |
|-----|-----|
| `/es/periodo/{slug}` | `/en/period/{slug}` |

Ejemplo: `/es/periodo/2019-2022/`

### forma (opcional)

Si se implementa la taxonomía `form` (`03-arquitectura-editorial`):

| ES | EN |
|-----|-----|
| `/es/forma/{slug}` | `/en/form/{slug}` |

---

## 6. Árbol completo (esqueleto)

```
/
/es/
/es/archivo/
/es/sobre-el-autor/
/es/correspondencia/
/es/contacto/
/es/servicios-editoriales/
/es/prensa/
/es/derechos/
/es/biblioteca-audio/
/es/videoteca/

/es/poem/
/es/poem/{slug}
/es/book/
/es/book/{slug}
/es/essay/
/es/essay/{slug}
/es/story/
/es/story/{slug}
/es/talleres/
/es/talleres/{slug}
/es/blog/
/es/blog/{slug}

/es/tema/{slug}
/es/periodo/{slug}

/en/… (espejo exacto)
/en/topic/{slug}
/en/period/{slug}
/en/form/{slug}
```

Nada más existe. Las rutas `/es/biblioteca-audio/` y `/es/videoteca/` (y sus singles, si se implementan singles) se detallan al desarrollar según `01-plataforma-autor-plan`.

---

## 7. Estados sin URL propia

Estos no generan rutas nuevas.

| Estado | Dónde ocurre |
|--------|--------------|
| Sin resultados | En listados o archivos |
| Archivo vacío | En listados |
| 404 | Cualquier URL fuera del árbol |

El mensaje y las salidas están definidos en `10-ui-copy-sheet` y `14-arquitectura-informacion-navegacion`.

---

## 8. Qué hace el theme con este árbol

El theme usa este árbol para:

- Decidir qué plantilla cargar
- Construir breadcrumbs
- Generar navegación
- Evitar enlaces inválidos
- Mantener simetría ES / EN

Ejemplo:

| URL | Plantilla |
|-----|-----------|
| `/es/poem/slug` | single-poem.php |
| `/es/poem/` | archive-poem.php |
| `/es/book/slug` | single-book.php |
| `/es/book/` | archive-book.php |
| `/es/essay/slug` | single-essay.php |
| `/es/essay/` | archive-essay.php |
| `/es/story/slug` | single-story.php |
| `/es/story/` | archive-story.php |
| `/es/talleres/slug` | single-workshop.php |
| `/es/talleres/` | archive-workshop.php |
| `/es/blog/slug` | single.php |
| `/es/blog/` | archive-post.php |
| `/es/tema/memoria` | taxonomy-topic.php |
| `/es/periodo/2019-2022/` | taxonomy-period.php |
| `/es/archivo/` | page-archivo.php |
| `/es/sobre-el-autor/` | page-sobre-el-autor.php |
| `/es/contacto/` | page-contacto.php |
| `/es/servicios-editoriales/` | page-servicios-editoriales.php |
| `/es/prensa/` | page-prensa.php |
| `/es/derechos/` | page-derechos.php |
| `/es/correspondencia/` | page-correspondencia.php |

---

Todas las rutas usan trailing slash final.

---

## Regla final

Este árbol es el territorio oficial de la obra. WordPress no puede inventar rutas fuera de él. El lector nunca cae en un callejón sin salida. La obra siempre se recorre como una biblioteca viva.

