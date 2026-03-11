# Daniel Arella — User Journey

**Versión 1.6**

Este documento describe cómo se mueve un lector real dentro del territorio editorial. No es un diagrama técnico ni un flujo de conversión. Es una serie de recorridos de lectura y encuentro.

Sirve para validar:

- Arquitectura de información
- Navegación
- Microcopy
- Jerarquía de pantallas

**Se apoya en:** `01-plataforma-autor-plan`, `03-arquitectura-editorial`, `05-mapa-pantallas`, `10-ui-copy-sheet`  
**Alimenta a:** `12-user-journey-diagram`, `14-arquitectura-informacion-navegacion`

---

## 1. Lector llega y comienza a leer

**Objetivo:** entrar directamente en la obra sin fricción.

**Recorrido:**

- Inicio
- → Ve la obra en curso o el poema destacado
- → “Leer el poema” o “Abrir el libro”
- → Página de poema o libro
- → “Siguiente poema” o “Volver al libro”
- → Continúa leyendo dentro del mismo universo
- → “Explorar archivo” cuando quiere ampliar

El lector no debería llegar primero a un menú. Siempre entra por una pieza viva. También puede entrar por el Archivo si busca explorar la obra completa o por Libros si quiere recorrer la obra editorial publicada.

---

## 2. Lector explora el corpus

**Objetivo:** descubrir la obra completa sin perder orientación.

**Recorrido:**

- Archivo
- → Elige tipo (Poemas, Ensayos, Relatos, Artículos)
- → Aplica filtro por tema o periodo
- → Abre una pieza
- → Ve el contexto: “Este poema pertenece a [Libro]” o “Más textos de este tema”
- → Abre el libro o sigue explorando por filtros
- → Vuelve al Archivo si quiere cambiar de eje

El lector siempre sabe si está leyendo una pieza independiente o parte de un libro.

---

## 3. Lector sigue un libro

**Objetivo:** leer una obra como un cuerpo coherente.

**Recorrido:**

- Libros
- → Entra a un libro
- → Lee la descripción
- → Entra al índice
- → Abre un poema, ensayo o relato
- → “Siguiente” o “Anterior”
- → Regresa al índice del libro
- → Consulta ficha bibliográfica, prensa o descarga si existe
- → Vuelve al Archivo o al Home

El libro se comporta como una unidad de lectura, no como una página aislada.

---

## 4. Lector se acerca al autor

**Objetivo:** comprender quién escribe y cómo acompañar la obra.

**Recorrido:**

- Inicio, Archivo o Libros
- → Sobre el autor
- → Lee biografía y trayectoria
- → Decide:
  - “Recibir nuevos textos” (Correspondencia)
  - “Contactar” (Contacto)

No se pide registro. No se empuja. Se invita.

---

## 5. Lector entra en la correspondencia

**Objetivo:** crear una relación directa, silenciosa y sostenida.

**Recorrido:**

- Correspondencia
- → Lee texto breve sobre qué recibirá
- → Introduce su correo
- → “Recibir nuevos textos”
- → Ve mensaje de confirmación
- → Sale sin ruido

La experiencia se siente como una carta, no como una campaña.

---

## 6. Lector busca talleres

**Objetivo:** ver si hay actividad viva alrededor de la obra.

**Recorrido:**

- Inicio o menú
- → Talleres
- → Ve lista de próximos o activos
- → “Abrir el taller”
- → Lee descripción, fechas y relación con libros
- → “Enviar solicitud de inscripción” o “Contactar”
- → Sale

Los talleres se leen como una extensión de la obra, no como un producto.

---

## 6.1 Lector busca servicios editoriales

**Objetivo:** entender qué tipo de acompañamiento editorial ofrece el autor y abrir un canal de contacto directo.

**Recorrido:**

- Sobre el autor, Home o Footer
- → Servicios editoriales
- → Lee introducción, alcance y tipos de servicio
- → “Solicitar información” o “Contactar”
- → Contacto
- → Envía la consulta

La salida nunca es una tabla de precios ni un checkout. El recorrido conserva tono editorial y deriva a una conversación.

---

## 6.2 Lector explora audio y video (cuando exista)

**Objetivo:** escuchar o ver la obra cuando estén disponibles Biblioteca de audio y Videoteca.

**Recorrido previsto:**

- Archivo o menú
- → Biblioteca de audio o Videoteca
- → Listado de piezas (poemas en audio, audiolibros, podcast; o poemas leídos, conferencias, clases) — cada pieza enlaza o embebe contenido en servicios externos (YouTube, Vimeo, Spotify, etc.)
- → Reproduce en la plataforma externa o en embed
- → “Explorar archivo” o “Volver”

Misma lógica que el resto del archivo: la obra se recorre sin ruido. Ver `01-plataforma-autor-plan`.

---

## 7. Lector llega desde afuera

**Objetivo:** no perderse si llega por un enlace directo.

Puede llegar desde un buscador, una revista, un enlace o una cita.

**Recorrido:**

- Llega a un poema, ensayo, relato, libro o artículo desde Google, una revista o un PDF
- → Lee la pieza
- → Ve el breadcrumb y el contexto
- → “Abrir el libro” o “Explorar archivo”
- → Entra al territorio completo de la obra

Ninguna pieza es un callejón sin salida.

---

## 8. Estados de fricción

Cuando algo no existe o no está disponible:

- “Este texto no existe o fue retirado.”
- "No hay textos que coincidan con la búsqueda."
- “Este contenido no está disponible.” → “Explorar archivo” → “Volver”

Siempre hay un camino de regreso a la obra.

---

## Regla de validación

Un recorrido es correcto si:

1. El lector puede empezar a leer en menos de dos clics.
2. Siempre hay un “siguiente”, un “volver” o un “abrir el libro”.
3. Siempre existe un camino hacia otra pieza de la obra.
4. Nunca siente que entró en una app o en una tienda.

