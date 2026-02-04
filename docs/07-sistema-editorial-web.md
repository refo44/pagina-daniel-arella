# Daniel Arella — Sistema editorial para la web v2.0

Este documento define el marco para **escribir y editar** textos en el sitio (no la poética de Daniel, sino cómo la obra se presenta en pantalla). Complementa:

- `02-identidad-corporativa` (tipografía, ritmo, layout)  
- `plataforma-autor-plan`  
- `guia-voz-microcopy-ux` y `voice-dictionary`  

---

## 1. Niveles de texto

En el sitio conviven tres niveles de texto:

1. **Texto de obra**  
   - Poemas, relatos, ensayos, textos breves (fragmentos, aforismos).  
   - Se respetan saltos de línea, estrofas y puntuación original.  

2. **Texto editorial**  
   - Presentaciones breves, notas de contexto, biografía, descripciones de libro.  
   - Habla en voz de autor o de editorial pequeña.  

3. **Texto de sistema (UI/UX)**  
   - Botones, estados, mensajes, navegación.  
   - Voz de “editor silencioso” (sobria, cálida, intelectual).  

Cada nivel tiene reglas distintas; este documento se centra en 2 y 3 (la obra vive libre en 1).

---

## 2. Ensayos en la web

### 2.1 Longitud y estructura

Recomendación (no obligación):

- Ensayo breve: 800–1500 palabras.  
- Ensayo medio: 1500–3000 palabras.  
- Ensayo largo: >3000 palabras (considerar PDF o formato “libro web”).  

Estructura sugerida:

- Título (`h1`)  
- Subtítulo o abstract corto (campo `essay_abstract`)  
- Cuerpo del ensayo  
- Sección de notas / referencias (si aplica)  

### 2.2 Notas

- Mantener notas largas al final del texto (“Notas” o “Referencias”).  
- En el texto, usar marcadores discretos (superíndices o corchetes).  
- Evitar notas invasivas en mitad del verso o de la línea poética.  

---

## 3. Poemas en la web

### 3.1 Respiración y formato

- Respetar saltos de línea y estrofas tal como en el original.  
- Evitar justificados; alineación a la izquierda.  
- No romper versos para “llenar” pantalla.  

### 3.2 Poema completo vs fragmento

- En páginas de **archivo / listado**, mostrar solo título y 1–3 versos o líneas breves.  
- En página **single**, mostrar el poema completo.  

Si se usan fragmentos:

- Marcarlo editorialmente cuando importe (“Fragmento de…”, “Del libro…”).  

---

## 4. Textos breves y relatos

### 4.1 Textos breves (fragmentos, aforismos)

- Piezas autónomas; una idea por página o por bloque.  
- En listados, agrupar por tema o serie.  
- Evitar saturar la página sin navegación clara.  

### 4.2 Relatos

- Tratar cada `story` como una unidad clara.  
- Ofrecer navegación sencilla (Siguiente / Anterior / Volver a relatos).  

---

## 5. Biografía y “Sobre el autor”

La bio no es un CV pegado; es una **entrada editorial a la obra**.

Fuentes sugeridas: biografía larga, CV y archivo del autor en `content-source/` (Docus o equivalente).  

Reglas:

- Bio corta en Home y About (3–5 líneas).  
- Bio larga en About o sección “Trayectoria”.  
- Integrar logros y premios con tono sobrio, sin lenguaje de marketing.  

---

## 6. Prensa y enlaces externos

Sección “Prensa” o “En otros lugares”:

- Listar revistas, blogs y antologías donde aparece Daniel.  
- Usar títulos y medios como se presentan en el CV.  
- Evitar “clip” largo de texto; basta con fragmentos y enlaces.  

Formato sugerido:

- Título de pieza / entrevista / reseña  
- Medio y año  
- Enlace  

---

## 7. Idiomas (es/en)

Reglas mínimas:

- Mantener la **misma estructura** de secciones en ambos idiomas (cuando existan).  
- Bio corta y larga siempre traducidas.  
- No traducir títulos de libros ni de poemas salvo decisión explícita (pueden mantenerse en español con nota en inglés).  

Ejemplos:

- ES: “Poemas recientes” → EN: “Recent poems”.  
- ES: “El Arcángel” (título de libro) → EN: “El Arcángel (poetry collection)”.  

---

## 8. Jerarquía visual y editorial

Recordatorio desde `02-identidad-corporativa`:

- H1: 3rem Fraunces (titulares principales).  
- H2/H3: bajan escalonadamente.  
- Cuerpo: 18px Fraunces, 1.6 de interlineado, 65ch máximo.  

Aplicación editorial:

- Máximo un H1 por página.  
- No usar más de dos niveles de subtítulos en documentos largos (H2 / H3).  
- Mantener consistencia en cómo se titulan listados, archivos y fichas.  

---

## 9. Qué decide el autor (no el sistema)

Este documento no fija:

- Temas, tonos, ni enfoques de los textos.  
- Si un poema se publica completo o no.  
- Si un ensayo debe ser breve o largo.  

Lo que hace es **evitar que la web deforme la obra** (leyendo mal, cortando mal, saturando, o usando lenguaje ajeno a la voz de Daniel).

---

## 10. Checklist para nuevos textos

Antes de publicar un nuevo texto (ensayo, nota, presentación) en el sitio:

- ¿Respeta la jerarquía visual (H1/H2, cuerpo, márgenes)?  
- ¿Sigue la voz del sistema (sobria, cálida, intelectual)?  
- ¿Está claro si es texto de obra o texto editorial?  
- ¿Los enlaces y notas están colocados donde no rompen el ritmo de lectura?  
- ¿Se mantendría legible en móvil (sin bloques interminables)?  

Si todo esto se cumple, el texto encaja en el sistema sin que el sistema lo traicione.

---

**Versión del documento:** 2.0

