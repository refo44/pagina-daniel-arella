# Daniel Arella — Arquitectura de información y flujo de navegación

**Mapa de navegación y enlaces vivos**  
**Versión 2.0**

Este documento define qué enlaces salen de cada pantalla, a dónde van, en qué orden y cuáles no deben existir. No describe diseño ni layout. Es la capa que conecta el sistema editorial con el código y con la experiencia real del lector.

Sirve para que:

- El desarrollador sepa exactamente qué imprimir.
- El lector no se pierda.
- La obra se lea como obra, no como feed.

**Referencia:** `mapa-pantallas.md`, `wireframes.md`, `user-journey.md`, `arquitectura-editorial.md`, `ui-copy-sheet.md`

---

## 1. Principios estructurales

| Tipo de enlace | Función |
|----------------|---------|
| **Primario** | Continuar la lectura o entrar en una pieza de obra. Un solo foco claro por contexto. |
| **Secundario** | Contexto o salida ordenada del flujo actual. |
| **Prohibido** | Ruido editorial que rompe el recorrido de la obra. |

**Regla central:** Cada pantalla debe ofrecer un siguiente paso de lectura o una salida clara al corpus. Nunca un laberinto.

---

## 2. Navegación global

### Cabecera

| Enlace | Destino |
|--------|---------|
| Inicio | Home |
| Archivo | Archivo general |
| Sobre el autor | Sobre el autor |
| Talleres | Listado Talleres |
| Correspondencia | Correspondencia |
| Contacto | Contacto |
| Idioma | Selector de idioma |

No incluir nunca en cabecera: Prensa, Derechos, piezas individuales, libros concretos.

### Pie

| Enlace | Destino |
|--------|---------|
| Prensa | Prensa |
| Derechos | Derechos |
| Contacto | Contacto |
| Correspondencia | Correspondencia |

Orden fijo: Prensa → Derechos → Contacto → Correspondencia.  
No redes sociales ni enlaces externos salvo prensa.

---

## 3. Home

| Enlace | Destino | Tipo |
|--------|---------|------|
| Título del libro activo | Single Libro | Primario |
| “Leer el poema” (destacado) | Single Poema | Primario |
| Ensayo reciente | Single Ensayo | Primario |
| Taller próximo | Single Taller | Primario |
| “Explorar archivo” | Archivo | Secundario |
| “Recibir nuevos textos” | Correspondencia | Secundario |

**Nunca:** feeds cronológicos, carruseles, bloques de “lo más visto”, “más contenido”.

---

## 4. Single Poema

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Abrir el libro” (si pertenece a uno) | Single Libro | Primario |
| “Siguiente poema” | Poema siguiente | Primario |
| “Poema anterior” | Poema anterior | Secundario |
| “Volver al libro” | Single Libro | Secundario |
| “Explorar archivo” | Archivo | Secundario |
| Breadcrumb | Inicio → Archivo → Poemas → Poema | Secundario |

**Nunca:** poemas aleatorios, bloques de recomendación.

---

## 5. Single Libro

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada texto del índice | Poema, Ensayo o Relato | Primario |
| “Descargar PDF / EPUB” | Descarga | Secundario |
| “Explorar archivo” | Archivo | Secundario |
| Breadcrumb | Inicio → Archivo → Libros → Libro | Secundario |

**Nunca:** “otros libros”, “libros relacionados”.

---

## 6. Single Ensayo

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Abrir el libro” (si pertenece) | Single Libro | Primario |
| “Siguiente ensayo” | Ensayo siguiente | Primario |
| “Ensayo anterior” | Ensayo anterior | Secundario |
| “Explorar ensayos” | Archivo Ensayos | Secundario |
| Breadcrumb | Inicio → Archivo → Ensayos → Ensayo | Secundario |

**Nunca:** listas genéricas de ensayos sin relación.

---

## 7. Single Relato

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Abrir el libro” (si pertenece) | Single Libro | Primario |
| “Siguiente relato” | Relato siguiente | Primario |
| “Relato anterior” | Relato anterior | Secundario |
| “Explorar relatos” | Archivo Relatos | Secundario |
| Breadcrumb | Inicio → Archivo → Relatos → Relato | Secundario |

**Nunca:** listas genéricas de relatos sin relación.

---

## 8. Single Taller

| Enlace | Destino | Tipo |
|--------|---------|------|
| Libro relacionado | Single Libro | Primario |
| “Enviar solicitud” o “Contactar” | Contacto | Primario |
| “Volver a talleres” | Listado Talleres | Secundario |

**Nunca:** otros talleres sueltos dentro del single.

---

## 9. Archivo y listados

Archivo general y por tipo (Poemas, Libros, Ensayos, Relatos, Talleres).

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada ítem | Single correspondiente | Primario |
| Filtros (tipo, tema, periodo) | Mismo archivo refinado | Secundario |
| Inicio | Home | Secundario |

**Nunca:** bloques de “destacados”, “sugeridos”, “más leídos”.

---

## 10. Tema y Periodo

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada ítem | Single correspondiente | Primario |
| “Explorar archivo” | Archivo | Secundario |

**Nunca** mezclar piezas fuera del término activo.

---

## 11. Sobre el autor

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Recibir nuevos textos” | Correspondencia | Primario |
| “Contactar” | Contacto | Secundario |

**Nunca:** listas de obras dentro del texto salvo mención editorial explícita.

---

## 12. Correspondencia

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Recibir” | Confirmación en la misma página | Primario |
| “Volver” | Home o Sobre el autor | Secundario |

Una sola acción.

---

## 13. Contacto

| Enlace | Destino | Tipo |
|--------|---------|------|
| “Enviar” | Confirmación | Primario |
| “Volver” | Home o Sobre el autor | Secundario |

---

## 14. Prensa

| Enlace | Destino | Tipo |
|--------|---------|------|
| Cada referencia | Medio externo | Secundario |

---

## 15. Derechos

| Enlace | Destino | Tipo |
|--------|---------|------|
| Contacto | Contacto | Secundario |

---

## 16. Estados

### Sin resultados

| Enlace | Destino |
|--------|---------|
| “Explorar archivo” | Archivo |
| “Volver” | Página anterior |

### 404

| Enlace | Destino |
|--------|---------|
| “Explorar archivo” | Archivo |
| “Volver” | Inicio |

### Archivo vacío

| Enlace | Destino |
|--------|---------|
| “Explorar archivo” | Archivo |
| “Inicio” | Home |

**Nunca** dejar una pantalla sin salida.

---

## 17. Regla final

Si un enlace no empuja la lectura hacia:

- La obra
- El libro
- El archivo
- La relación con el autor

**no existe.**

Este sistema impide que el sitio se convierta en un feed, una tienda o un laberinto.

---

**Versión:** 2.0  
**Depende de:** `mapa-pantallas.md`, `wireframes.md`, `user-journey.md`, `arquitectura-editorial.md`, `ui-copy-sheet.md`
