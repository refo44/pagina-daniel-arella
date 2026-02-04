# Daniel Arella — Estrategia de publicación v2.0

Este documento no define qué va a publicar Daniel, sino **cómo puede vivir la obra en el tiempo** dentro de la plataforma sin romper nada. Es un marco de decisión autorial.

Se apoya en: `01-plataforma-autor-plan`, `03-arquitectura-editorial`, `04-wordpress-content-model`.  

---

## 1. Ritmo general

**Preguntas para Daniel (no técnicas):**

- ¿Prefiere ciclos de publicación (por libros/ciclos) o flujo continuo (por fecha)?  
- ¿Quiere temporadas claras (ej. “Ciclo X”, luego pausa, luego “Libro Y”) o una presencia constante con menos énfasis en temporadas?  

**Opciones de ritmo (compatibles con el sistema):**

- **Por libros:**  
  - Cada etapa se articula alrededor de un `book` (inédito o publicado).  
  - Fragmentos, poemas y ensayos se ordenan bajo ese libro; los ciclos se narran en la página del libro o con enlaces.  
  - El Home destaca el libro activo (obra en curso).  

- **Por flujo cronológico:**  
  - Poemas/ensayos entran con fecha; el archivo permite ver por periodo y tipo.  
  - El Home rota elementos recientes pero manteniendo una “obra en curso” fija.  

---

## 2. Obra en curso

La pregunta central del Home: **“Esta es la obra que estoy escribiendo ahora.”**

**Decisiones a tomar por Daniel:**

- ¿Qué se considera “obra en curso” ahora? (libro, ciclo, etapa, investigación).  
- ¿Cada cuánto cambia esa obra en curso en el Home?  
- ¿Se anuncia explícitamente (texto editorial) o solo se manifiesta por selección de piezas?  

**Implementación (resumen):**

- Un `book` marcado como destacado (obra en curso).  
- Uno o varios `poem` y `essay` marcados como “featured” alimentan bloques de Home.  

---

## 3. Qué entra al archivo web

No toda la obra tiene que estar en el sitio.

**Preguntas:**

- ¿Se publican libros completos o solo fragmentos?  
- ¿Se publican poemas inéditos o solo ya editados?  
- ¿Se incluyen ensayos académicos largos o solo textos adaptados?  

**Estrategias posibles:**

- **Archivo completo**: reproducir la mayor parte de la obra (libros, ciclos, ensayos) con PDFs cuando aplique.  
- **Archivo parcial**: solo fragmentos representativos de cada libro y ciclo; PDFs llevan al texto completo.  
- **Capas de visibilidad**:  
  - Capa 1: textos para lectura general.  
  - Capa 2: PDFs/EPUBs más extensos.  

---

## 4. PDFs, EPUBs y descargas

**Preguntas:**

- ¿Qué libros se pueden descargar?  
- ¿Con qué licencia o permiso?  

**Posibles reglas:**

- Libros agotados en papel → PDF descargable.  
- Libros en circulación → solo fragmentos + enlace a editorial.  
- Ensayos académicos → PDF abierto o bajo aviso de uso educativo/personal.  

**Textos de apoyo:** ver `guia-voz-microcopy-ux.md` y `voice-dictionary.md` (vocabulario “Descargar / Adquirir”).  

---

## 5. Correspondencia (email)

La correspondencia es un **ritmo editorial propio**.

**Decisiones:**

- ¿Con qué frecuencia envía cartas? (cuando haya algo que decir, mensual, por ciclo, por libro).  
- ¿Qué tipo de contenido llevan? (poemas nuevos, notas de lectura, avances de libros, reflexiones).  

**Reglas sugeridas:**

- Solo escribir cuando haya algo que aporte al lector.  
- Mantener la carta alineada con la voz: sobria, cálida, intelectual (ver `guia-voz-microcopy-ux.md`).  

---

## 6. Talleres y actividades

Los `workshop` son parte de la vida de la obra, no un “producto aparte”.

**Preguntas:**

- ¿Se anuncian todos los talleres o solo los de ciertas líneas (heteronimia, poesía mística, etc.)?  
- ¿Se archivan talleres pasados como parte de la historia de la obra?  

**Opciones:**

- Mostrar solo talleres “Próximo / En curso” en Home; los pasados quedan en archivo de Talleres.  
- Relacionar talleres con libros (`workshop_book`) para darles contexto.  

---

## 7. Multilingüe (es/en)

**Preguntas:**

- ¿Qué se traduce primero: poemas, bio, libros, ensayos?  
- ¿Hay textos que existan solo en un idioma y otros en ambos?  

**Posible estrategia:**

- Siempre traducir: bio corta, About, Contacto, información de libros.  
- Traducir selectivamente: poemas/ensayos clave.  
- Marcar claramente idioma en archivo y filtros.  

---

## 8. Resumen de decisiones (para Daniel)

Este documento no exige respuestas inmediatas, pero estructura las decisiones futuras:

- Ritmo: ciclos / libros / fechas.  
- Obra en curso: qué es ahora y con qué frecuencia cambia.  
- Nivel de apertura del archivo: completo vs parcial.  
- Política de descargas: qué está disponible y cómo.  
- Ritmo y tono de la correspondencia.  
- Visibilidad y archivo de talleres.  
- Alcance de las traducciones.  

El sistema ya soporta todas estas variantes. Las respuestas a estas preguntas solo afectan **cómo se usan** los tipos de contenido y campos definidos en `04-wordpress-content-model`, no su estructura.

---

**Versión del documento:** 2.0

