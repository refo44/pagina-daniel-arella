# Daniel Arella — Árbol de URLs final

**Geografía oficial de la obra**  
**Versión 2.0**

Este documento define todas las rutas reales del sitio por idioma, tipo de obra y archivo. No es un menú ni un sitemap técnico. Es el mapa del territorio que WordPress y el theme deben respetar.

Este árbol es la traducción directa de:

- `04-wordpress-content-model`
- `05-mapa-pantallas`
- `03-arquitectura-editorial`
- `14-arquitectura-informacion-navegacion`

**Si una URL no está aquí, no existe.**

---

## 1. Regla base

Toda URL del sitio cumple:

```
/{idioma}/{tipo o página}/{slug}
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
| `/es/` | Español |
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
| Prensa | `/es/prensa/` | `/en/press/` |
| Derechos | `/es/derechos/` | `/en/rights/` |

No existen variantes ni duplicados.

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

### Listados por tipo

| Tipo | ES | EN |
|------|-----|-----|
| Poemas | `/es/poem/` | `/en/poem/` |
| Libros | `/es/book/` | `/en/book/` |
| Ensayos | `/es/essay/` | `/en/essay/` |
| Relatos | `/es/story/` | `/en/story/` |
| Talleres | `/es/talleres/` | `/en/workshops/` |
| Blog | `/es/blog/` | `/en/blog/` |

---

## 5. Archivo por taxonomías

El archivo se navega por criterios editoriales, no por fechas.

### Tema

| ES | EN |
|-----|-----|
| `/es/tema/{slug}` | `/en/topic/{slug}` |

Ejemplo: `/es/tema/memoria`, `/en/topic/memory`

### Periodo

| ES | EN |
|-----|-----|
| `/es/periodo/{slug}` | `/en/period/{slug}` |

Ejemplo: `/es/periodo/2019-2022`

---

## 6. Árbol completo (esqueleto)

```
/
/es/
/es/archivo/
/es/sobre-el-autor/
/es/correspondencia/
/es/contacto/
/es/prensa/
/es/derechos/

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
```

Nada más existe.

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
| `/es/tema/memoria` | taxonomy-topic.php |
| `/es/periodo/2019-2022` | taxonomy-period.php |
| `/es/archivo/` | page-archivo.php |

---

## Regla final

Este árbol es el territorio oficial de la obra. WordPress no puede inventar rutas fuera de él. El lector nunca cae en un callejón sin salida. La obra siempre se recorre como una biblioteca viva.

---

**Versión:** 2.0  
**Depende de:** `04-wordpress-content-model`, `05-mapa-pantallas`, `03-arquitectura-editorial`, `14-arquitectura-informacion-navegacion`
