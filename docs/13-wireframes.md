# Daniel Arella — Wireframes. Estructura de pantallas

**Versión 1.1**

Este documento define la arquitectura visible de cada pantalla. No dibuja interfaces. Define jerarquías, bloques y flujo de lectura.

**Se apoya en:** `02-identidad-corporativa`, `10-ui-copy-sheet`

---

## 1. Home

**Función editorial:** mostrar qué obra está viva ahora.

Bloques en orden vertical:

- **Cabecera**
- **Obra en curso**
  - Título del libro o ciclo activo
  - Breve texto editorial
  - Enlace “Abrir el libro”
- **Poema destacado**
  - Título
  - 2 a 4 versos
  - Enlace “Leer el poema”
- **Ensayo reciente**
  - Título
  - Fragmento
  - Enlace “Leer”
- **Taller próximo**
  - Título
  - Fecha y modalidad
  - Enlace “Ver taller”
- **Entrada al archivo**
  - Enlace “Explorar archivo”
- **Correspondencia**
  - Texto breve
  - Campo de email
  - Botón “Recibir”
- **Pie**

Nada en Home es una lista larga. Todo es selección editorial.

---

## 2. Single poema

**Función:** permitir leer sin distracciones y sin perder contexto.

Bloques:

- Cabecera
- Breadcrumb
- Título
- Texto del poema
- Pertenece al libro → Enlace al libro
- Navegación: Anterior, Siguiente, Volver al archivo
- Pie

---

## 3. Single libro

**Función:** representar una obra como un cuerpo.

Bloques:

- Cabecera
- Título
- Descripción editorial
- Metadatos: Año, Editorial, ISBN
- Índice de textos: Poemas, Ensayos, Relatos
- Descargas: PDF, EPUB. Enlace a editorial
- Pie

---

## 4. Single ensayo

**Función:** lectura continua y crítica.

Bloques:

- Cabecera
- Breadcrumb
- Título
- Abstract
- Cuerpo del ensayo
- Notas o referencias
- Pertenece al libro
- Navegación: Anterior, Siguiente, Volver
- Pie

---

## 5. Single relato

**Función:** lectura narrativa sin interrupciones.

Bloques:

- Cabecera
- Breadcrumb
- Título
- Texto del relato
- Pertenece al libro
- Navegación: Anterior, Siguiente, Volver
- Pie

---

## 6. Single taller

**Función:** informar y permitir contacto.

Bloques:

- Cabecera
- Título
- Descripción
- Datos: Fecha, Lugar, Modalidad
- Relación con libro
- Llamada a acción: Enviar solicitud, Contactar
- Pie

---

## 7. Archivo

**Función:** explorar la obra como biblioteca.

Bloques:

- Cabecera
- Título
- Filtros: Tipo, Tema, Periodo
- Lista de piezas (Título, Tipo, Libro)
- Paginación o carga
- Pie

---

## 8. Páginas fijas

Estructura común: **Cabecera → Contenido editorial → Pie**

| Página | Contenido |
|--------|-----------|
| **Sobre el autor** | Foto, Bio corta, Bio larga, Enlaces a libros |
| **Correspondencia** | Texto editorial, Campo email, Botón “Recibir” |
| **Contacto** | Texto breve, Formulario |
| **Prensa** | Lista de piezas: Medio, Año, Enlace |
| **Derechos** | Texto legal y permisos |

---

## Regla de validación

Una pantalla es correcta si:

1. Se entiende qué es en tres segundos.
2. La lectura no se interrumpe por bloques inútiles.
3. Siempre hay una salida hacia la obra completa.

---

**Versión del documento:** 1.1
