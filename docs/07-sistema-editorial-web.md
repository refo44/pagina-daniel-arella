# Daniel Arella — Sistema editorial para la web

**Versión 2.4**

Este documento define el marco para escribir, editar y presentar textos en el sitio. No define la poética de Daniel, sino la forma en que la obra habita la pantalla.

**Complementa:** `02-identidad-corporativa`, `01-plataforma-autor-plan`, `03-arquitectura-editorial`, `04-wordpress-content-model`, `05-mapa-pantallas`, `06-estrategia-publicacion`, `08-guia-voz-microcopy-ux`, `09-voice-dictionary`  
**Alimenta a:** `10-ui-copy-sheet`, `13-wireframes`

---

## 1. Niveles de texto

En la plataforma conviven tres niveles claramente separados:

### 1. Texto de obra

Poemas, relatos, ensayos, fragmentos, aforismos.

- Se respetan saltos de línea, estrofas y puntuación original.
- No se adapta a la web sacrificando ritmo o forma.

### 2. Texto editorial

Presentaciones, descripciones de libro, bio, notas de contexto.

- Voz de editorial pequeña o del propio autor.
- Acompaña la obra sin explicarla de más.

### 3. Texto de sistema

Botones, navegación, mensajes de estado, formularios.

- Voz del editor silencioso.
- Sobria, cálida, intelectual.

**Este documento regula los niveles 2 y 3. La obra, en el nivel 1, no se toca.**

---

## 2. Ensayos en la web

### 2.1 Longitud

Rangos orientativos:

- **Breve:** 800 a 1500 palabras
- **Medio:** 1500 a 3000
- **Largo:** más de 3000, considerar formato de libro web o PDF. Dividir en secciones si supera 5000 palabras.

La longitud nunca es una restricción estética, solo una guía de legibilidad.

### 2.2 Estructura

Un ensayo estándar contiene:

- Título
- Abstract breve si existe
- Cuerpo
- Notas o referencias si aplica

No se interrumpe el flujo con cajas, popups o llamadas externas.

Evitar párrafos excesivamente largos.

### 2.3 Notas

- Las notas largas van al final.
- En el texto se marcan con superíndices o corchetes.
- No se colocan notas dentro de versos o frases poéticas.

---

## 3. Poemas en la web

### 3.1 Respiración

- Saltos de línea y estrofas intactos.
- Alineación a la izquierda.
- Nunca justificar ni compactar.

### 3.2 Vista de archivo

**En listados:**

- Mostrar título
- Opcionalmente uno a tres versos o líneas
- El excerpt no debe superar tres líneas

**En página individual:**

- El poema completo, sin cortes.
- Si se muestra un fragmento, debe indicarse con claridad.

### 3.3 Títulos

El título forma parte del poema. Nunca se sustituye por encabezados editoriales.

---

## 4. Textos breves y relatos

### 4.1 Fragmentos y aforismos

- Cada pieza debe poder leerse sola.
- En listados se agrupan por tema o libro.
- Nunca se apilan sin contexto ni navegación.

### 4.2 Relatos

Cada relato es una unidad:

- Página individual
- Navegación anterior y siguiente
- Enlace a archivo de relatos
- Los relatos no se dividen en múltiples páginas

### 4.3 Artículos y notas (blog)

Los artículos y notas del autor (definidos como Article en `03-arquitectura-editorial`) siguen las reglas de voz y legibilidad. En WordPress se implementan como post. Estructura más flexible que los ensayos; pueden ser breves o extensos según el propósito. Nunca lenguaje promocional.

---

## 5. Biografía y Sobre el autor

La biografía es una entrada editorial a la obra, no un currículum.

**Reglas:**

- Bio corta para Home y navegación.
- Bio larga para Sobre el autor.
- Logros, premios y publicaciones se mencionan sin lenguaje de marketing.
- Los premios aparecen como bloque breve dentro de `Sobre el autor`; no abren categoría, archivo ni página independiente.

---

## 6. Prensa y referencias

La sección Prensa muestra solo dónde aparece la obra en fuentes externas.

**Formato:**

- Título de la pieza
- Medio
- Año
- Enlace

Solo entran aquí:

- noticias
- artículos
- reseñas
- menciones
- referencias editoriales publicadas fuera del sitio

No entran aquí:

- posts del blog propio
- páginas del sitio
- retratos, carteles, diplomas o archivos internos
- fichas de circulación del libro dentro del propio ecosistema del sitio

No se reproducen artículos completos salvo permiso explícito.

No añadir comentarios editoriales a las referencias.

Si un enlace externo ya no existe:

- mantener la referencia solo si puede verificarse
- marcarla como referencia archivada o como enlace original no disponible
- no inventar extractos ni reconstruir el contenido
- no dejar enlaces rotos visibles como si siguieran activos

---

## 7. Idiomas

**Principios:**

- La estructura del sitio es la misma en todos los idiomas.
- El español usa variante neutra venezolana (autor venezolano).
- Bio y páginas fijas siempre traducidas.
- Libros y poemas mantienen su título original salvo decisión expresa.

Un mismo texto no mezcla idiomas.

Las traducciones conservan la estructura del original.

**Ejemplo:** “El Arcángel” se mantiene como título. En inglés se puede añadir una nota breve.

---

## 8. Jerarquía visual y tipografía

Las reglas tipográficas se definen en `02-identidad-corporativa`:

- Un H1 por página.
- H2 y H3 solo para estructura real.
- Texto de cuerpo legible en móvil y escritorio.
- Nunca usar títulos como decoración.
- Tipografía: Fraunces para obra y títulos; Source Sans 3 para metadatos y UI. Ritmo y medida en 02.

---

## 9. Qué decide el autor

El sistema no decide:

- Qué publicar
- Cuánto publicar
- En qué tono
- En qué orden

Solo asegura que la obra no se rompa al pasar por la web.

La voz editorial debe permanecer coherente en todo el sitio.

---

## 10. Checklist editorial

Antes de publicar:

1. ¿El texto respira en pantalla?
2. ¿Se distingue obra de editorial y de sistema?
3. ¿La voz es sobria y clara?
4. ¿Las notas no interrumpen la lectura?
5. ¿Se entiende en móvil sin perder ritmo?
6. ¿Los fragmentos o citas indican claramente si el texto está incompleto?

**Si la respuesta es sí, el texto pertenece a este territorio.**

