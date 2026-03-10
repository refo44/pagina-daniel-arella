# User Journey Diagram — Daniel Arella

**Versión 1.4**

Diagrama en Mermaid. Basado en `11-user-journey`. Score 1–5: fluidez del paso (5 = sin fricción). Actor: **Lector**.

**Se apoya en:** `11-user-journey`  
**Alimenta a:** `14-arquitectura-informacion-navegacion`

---

```mermaid
---
id: b495bc49-148b-476b-ae24-dd7c139adae0
---
journey
    title Daniel Arella — Recorridos del lector
    section Llega y lee
      Ve inicio (obra en curso o poema): 5: Lector
      Leer poema o Abrir libro: 5: Lector
      Página de poema o libro: 5: Lector
      Siguiente poema o Volver al libro: 5: Lector
      Explorar archivo: 5: Lector
    section Explora corpus
      Entra al Archivo: 5: Lector
      Elige tipo (Poemas, Ensayos, Relatos, Libros, Artículos): 5: Lector
      Filtro por tema o periodo: 5: Lector
      Abrir una pieza: 5: Lector
      Ve contexto (pertenece a un libro): 5: Lector
      Abre libro o sigue explorando: 5: Lector
    section Sigue un libro
      Entra al Libro: 5: Lector
      Lee descripción: 5: Lector
      Abrir índice del libro: 5: Lector
      Abre poema, ensayo o relato: 5: Lector
      Siguiente pieza o Anterior: 5: Lector
      Consulta ficha, prensa o descarga si existe: 5: Lector
    section Se acerca al autor
      Sobre el autor: 5: Lector
      Lee biografía y trayectoria: 5: Lector
      Recibir nuevos textos o Contactar: 5: Lector
    section Correspondencia
      Lee qué recibirá: 5: Lector
      Introduce correo: 5: Lector
      Recibir nuevos textos: 5: Lector
      Ve confirmación y sale: 5: Lector
    section Busca talleres
      Entra a Talleres: 5: Lector
      Ve talleres próximos o activos: 5: Lector
      Abrir el taller: 5: Lector
      Lee descripción, fechas y relación con libros: 5: Lector
      Enviar solicitud de inscripción o Contactar: 5: Lector
    section Llega desde afuera
      Llega a una pieza (poema, ensayo, relato, libro, artículo): 5: Lector
      Lee la pieza: 5: Lector
      Ve breadcrumb y contexto del texto: 5: Lector
      Abrir libro o Explorar archivo: 5: Lector
    section Explora audio y video (cuando exista)
      Entra a Biblioteca de audio o Videoteca: 5: Lector
      Ve listado de piezas: 5: Lector
      Reproducir (embed o enlace externo): 5: Lector
      Explorar archivo o Volver al archivo: 5: Lector
    section Estados de fricción
      Búsqueda sin resultados: 2: Lector
      Contenido no existe o no disponible: 2: Lector
      Explorar archivo o Volver al archivo: 5: Lector
```

---

**Referencia:** `11-user-journey`
