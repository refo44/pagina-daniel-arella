# Inventario de contenido fuente — Daniel Arella

Referencia rápida de qué hay en `content-source/`, **dimensiones y tamaños**, y cómo usarlo en el sitio.

**Importante:** `content-source/` **solo existe en local** (no se despliega). Para la maqueta estática y el sitio en GitHub o servidor final, hay que **duplicar y copiar** el material necesario en una carpeta dentro de **`public/`** (por ejemplo `public/assets/images/`, `public/assets/pdf/`) y usar esos archivos como assets. No enlazar nunca a `content-source/` desde el código.

### Estructura del directorio (reorganizada)

| Carpeta | Contenido |
|---------|-----------|
| `author-photos/` | Fotos de Daniel Arella. Nombres: `daniel-arella-01.jpg` … `daniel-arella-14`. |
| `illustrations/` | Dibujos de escritores y artistas (~250 imágenes, 95 autores). Ej. `Pablo Picasso (3).jpg`. |
| `books/pdf/` | Libros en PDF. Nombres: `daniel-arella-*.pdf`, `espacios-gelindo-casasola-*.pdf`. |
| `books/covers/` | Portadas y flyers. Nombres: `espacios-*`, `arovertiente-flyer-*`, `concurso-ula-*`, `portada-al-fondo-*`. |
| `documents/` | Textos: CV, biografía, archivo Venezuela. Nombres en kebab-case. |
| `press-events/` | Premios y eventos. `premio-rey-david-2021-finalistas.jpg`; resto `press-01.jpeg` … `press-50.jpeg`. |

**Correspondencia nombres antiguos → nuevos:** `content-source/RENAME-MAP.md`.

---

## 1. Fotos de autor

**Carpeta:** `content-source/author-photos/`  
**Cantidad:** 14 archivos (12 .jpg, 2 .jpeg). Nombres actuales: `daniel-arella-01.jpg` … `daniel-arella-14.jpeg`. Ver `RENAME-MAP.md` para correspondencia con nombres antiguos.

### 1.1 Dimensiones y tamaño de archivo

| Archivo | Dimensiones (px) | Tamaño aprox. | Uso sugerido |
|---------|------------------|---------------|--------------|
| daniel-arella-02.jpg | 1536 × 2048 | 312 KB | Alta res. prensa / Sobre el autor |
| daniel-arella-06.jpg | 1536 × 2048 | 279 KB | Alta res. prensa |
| daniel-arella-12.jpg | 1080 × 1350 | 203 KB | Sobre el autor (principal) |
| daniel-arella-04.jpg | 1440 × 1440 | 560 KB | Galería / alternativa |
| daniel-arella-09.jpg | 1153 × 1153 | 244 KB | Alternativa |
| daniel-arella-08.jpg | 960 × 960 | 337 KB | Thumbnail / galería |
| daniel-arella-03.jpg | 960 × 960 | 137 KB | Thumbnail |
| daniel-arella-05.jpg | 960 × 640 | 235 KB | Horizontal (destacado) |
| daniel-arella-01.jpg | 960 × 720 | 47 KB | Ligera, galería |
| daniel-arella-14.jpeg | 1600 × 900 | 307 KB | Horizontal (evento?) |
| daniel-arella-11.jpg | 607 × 1080 | 53 KB | Vertical |
| daniel-arella-13.jpeg | 636 × 960 | 86 KB | Vertical |
| daniel-arella-10.jpg | 413 × 414 | 44 KB | Solo thumbnail (baja res.) |
| daniel-arella-07.jpg | 525 × 350 | 27 KB | Solo thumbnail (baja res.) |

**Uso en el sitio:**
- **Sobre el autor:** `daniel-arella-12.jpg` (1080×1350) o `daniel-arella-02.jpg` (1536×2048) como principal.
- **Prensa (descargable):** `daniel-arella-02.jpg` o `daniel-arella-06.jpg` (1536×2048).
- Las de 525, 413 px de lado (07, 10) solo para miniaturas.

---

## 2. Imágenes — Dibujos de escritores y artistas

**Carpeta:** `content-source/illustrations/`  
**Cantidad:** 250 archivos .jpg, **95 autores/artistas** distintos (por nombre de archivo).

### 2.1 Dimensiones

- **Rango:** desde ~480×640 px hasta **3264×3264 px** (la mayoría entre 1500–3200 px por lado).
- Son escaneos o fotos de obra en **alta resolución**; aptos para web si se redimensionan al publicar.

### 2.2 Autores/artistas en la carpeta (listado)

A. S. Puskin, Albert Marquet, Alfred De Musset, Alfred Jarry, André François, André Malraux, Anónimo (China), Antoine De Saint-Exupéry, Arthur Rimbaud, Ben Shahn, Benedict Ganescu, Caran D'Ache, Charles Baudelaire, Christian Morgenstern, Constantin Brancusi, Daniel Mróz, Daumier, Dino Buzzati, Drumul Frunzei, Dunoyer De Segonzac, E.T.A. Hoffman, Edward Lear, Emile Cohl, Eugen Dragutescu, Eugen Ionescu, Federico García Lorca, Fernand Léger, Florin Puca, Francis Picabia, François Rabelais, Franz Kafka, Franz Marc, G. Tomaziu, George Braque, George Calinescu, George Topirceanu, Geta Bratescu, Giovanni Battista Bracelli, Grandville, Guillaume Apollinaire, Gustave Doré, H. G. Wells, Hans Georg Rauch, Henri Matisse, Henri Michaux, Herman Hesse, Ivan Generalic, Jacques Cellier De Reims, Jean Cocteau, Jean Dubuffet, Jerzy Flisak, Joan Miró, Juan Ramón Jiménez, L. N. Tolstoi, Laurent De Brunhoff, Le Corbusier, Lewis Carroll, Louise De Vilmorin, Lucia Dem. Balacescu, Man Ray, Marc Chagall, Margareta Sterian, Marijan Pogacnic, Mateiu Caragiale, Maurice Sinet, Max Ernst, Miguel Hernández, N. Tonitza, Norman McLaren, Odilon Redon, Pablo Picasso, Paul Klee, Paul Valéry, Pierre Bonnard, Prosper Mérimée, Robert Desnos, Rudyard Kipling, Salvador Dalí, Saul Steinberg, Slawomir Mrozek, Thomas Mann, Tiberiu Nicorescu, Tudor Arghezi, Victor De Vasarely, Vincent Van Gogh, Vladimir Maiakovski, W. M. Thackeray, Wassily Kandinsky, Yves Tanguy.

*Nota:* Hay dos archivos con nombre de cámara (IMG_…, PANO_…); conviene renombrar o asignar autor al importar.

### 2.3 Uso posible en el sitio
- **Sección editorial o “Referencias” / “Inspiraciones”:** galería o selección con pie de imagen (autor de la obra).
- **Ilustración de contexto** en ensayos o páginas temáticas, siempre con crédito y permiso si aplica.
- **Atmósfera visual** en Home o Archivo (uso muy medido para no distraer de la obra de Daniel).

**Importante:** Verificar derechos de uso antes de publicar; muchas son obras de autores con derechos.

---

## 3. Imágenes de libros (portadas/flyers) y de prensa/eventos

**Portadas y flyers:** `content-source/books/covers/` — Espacios, 1 004–1 042, Captura (portada Al fondo…).  
**Prensa y eventos:** `content-source/press-events/` — Finalistas, todos los archivos WhatsApp (carteles, diplomas, presentaciones, etc.).

**Nombres en disco:** Imágenes de prensa/eventos se llaman `premio-rey-david-2021-finalistas.jpg` y `press-01.jpeg` … `press-50.jpeg`. Correspondencia con nombres WhatsApp antiguos en `RENAME-MAP.md`.

### 3.1 Dimensiones (resumen)

| Origen | Dimensiones (px) | Ubicación | Uso sugerido |
|--------|------------------|-----------+--------------|
| arovertiente-flyer-*, concurso-ula-*, espacios-*, portada-al-fondo-* | 291–1170 | `books/covers/` | Portadas, flyers, libro Espacios. |
| premio-rey-david-2021-finalistas.jpg | 1080 × 1267 | `press-events/` | Sobre el autor / Prensa. |
| press-01 … press-50.jpeg | 168×299 – 2048×2048 | `press-events/` | Ver RENAME-MAP y tabla 3.2; ≥ 800 px útiles para web. |

### 3.2 Archivos en `press-events/` (press-01 … press-50)

Correspondencia **nombre nuevo ↔ nombre WhatsApp antiguo** y orden: `content-source/RENAME-MAP.md`. Rango de dimensiones: 168×299 px hasta 2048×1448 px.

**Archivos con uso identificado:**

| Archivo | Uso sugerido |
|---------|--------------|
| press-01.jpeg | Retrato artístico (944×852) |
| press-02.jpeg | Cartel Kaníbal Quito / web (1823×1823) |
| press-14.jpeg | Escena lectura (1120×1680) |
| press-23.jpeg | Cartel FILBo presentación «Relatos pioneros» (1081×1351) |
| press-32.jpeg | Web / prensa (1536×2048) |
| press-33.jpeg | Cartel Poesía Sci-Fi (1280×720) |
| press-39.jpeg | Diploma Ida Gramcko (2048×1448) |
| press-43.jpeg | Interior «Relatos pioneros» autores/bios (1152×2048) |
| press-44.jpeg | Portada «Relatos pioneros…» (1536×2048) |
| press-45.jpeg | Gato (no editorial) (1080×607) |

El resto (press-03 a press-13, 15 a 22, 24 a 31, 34 a 38, 40 a 42, 46 a 48) revisar contenido; dimensiones por archivo en RENAME-MAP o inspección con `sips`.

### 3.3 Portadas y flyers (`books/covers/`)

| Archivo | Dimensiones (px) | Uso sugerido |
|---------|------------------|--------------|
| arovertiente-flyer-2007-08-24.jpg | 850 × 1170 | Flyer Arovertiente 2007 |
| arovertiente-flyer-2007-09-28.jpg | 850 × 1170 | Flyer Arovertiente 2007 |
| concurso-ula-2008-ganadores-portada.jpg | 850 × 1170 | Portada Ganadores XX Concurso ULA 2008 |
| concurso-ula-2009-ganadores-contraportada.jpg | 850 × 1170 | Contraportada Ganadores XX Concurso (DAES 2009) |
| espacios-gelindo-casasola-portada.jpg | 1152 × 1376 | Libro Espacios (Gelindo Casasola) |
| espacios-gelindo-casasola-contraportada.jpg | 1136 × 1552 | Contraportada Espacios |
| portada-al-fondo-de-la-transparencia.png | 291 × 465 | Portada «Al fondo de la transparencia» (sustituir por alta res.) |

*Nota:* premio-rey-david-2021-finalistas.jpg está en `press-events/` (1080×1267).

- **books/covers/:** espacios-gelindo-casasola-* (libro Espacios); arovertiente-flyer-* (2007); concurso-ula-* (2008/2009); portada-al-fondo-de-la-transparencia.png. Ver §6.2 para title/caption/description.
- **press-events/:** premio-rey-david-2021-finalistas.jpg; press-01 … press-50.jpeg (carteles, diplomas, portadas). Identificados en §3.2 y RENAME-MAP.

### 3.4 Libros en PDF

**Carpeta:** `content-source/books/pdf/`  
**Cantidad:** 7 archivos .pdf

| Archivo | Uso sugerido |
|---------|----------------|
| daniel-arella-al-fondo-de-la-transparencia.pdf | Libro — ficha Book, descarga |
| daniel-arella-relatos-pioneros-ciencia-ficcion-latinoamericana.pdf | Libro — ficha Book, descarga |
| daniel-arella-el-arcangel.pdf | Libro — ficha Book, descarga |
| daniel-arella-el-androgino-ebrio-en-el-haiton.pdf | Libro / obra — ficha |
| daniel-arella-me-vibra-ii.pdf | Libro / obra — ficha |
| daniel-arella-rostro-de-nadie.pdf | Libro / obra — ficha |
| espacios-gelindo-casasola-daniel-arella.pdf | Libro Espacios (compilador D. Arella) — ficha o archivo |

**Documentos (texto):** `content-source/documents/` — CV, biografía larga, archivo Venezuela (.md, .doc, .docx); contenido fuente para páginas Sobre el autor, etc.

---

## 4. Tamaños recomendados para el sitio

Según la identidad (contenido max. ~900 px de ancho), conviene **no subir imágenes más grandes de lo necesario** para ahorrar peso y tiempo de carga.

| Uso en el sitio | Ancho máximo recomendado | Formato |
|-----------------|--------------------------|---------|
| Foto autor (Sobre el autor, Home) | 900–1200 px | JPG/WebP, calidad 80–85% |
| Foto autor para prensa (descargable) | 1500–2000 px | JPG, alta calidad |
| Portada de libro (ficha) | 600–800 px | JPG/WebP |
| Thumbnail (listados, galería) | 400–600 px | JPG/WebP |
| Dibujos (galería / ilustración) | 800–1200 px por lado | JPG, comprimido |
| Imágenes en cuerpo de texto | max. 900 px | JPG/WebP |

**Nota:** Las fotos de autor de 1536×2048 y 1080×1350 ya son válidas para web; se pueden usar a tamaño real o redimensionar a 1200 px de ancho para la página. Las de 413–525 px solo como thumbnail. Los Dibujos conviene servirlos redimensionados (ej. 1200 px lado largo) para no cargar 3 MP por imagen.

---

## 5. Metadata existente en las imágenes

Se revisó la metadata que traen las imágenes (con las herramientas del sistema: `sips`, etc.). Resumen:

### 5.1 Qué sí traen (y sirve)

| Campo | Dónde aparece | Uso para el sitio |
|-------|----------------|-------------------|
| **Dimensiones** (pixelWidth × pixelHeight) | Todas | Ya usadas en este inventario; el CMS o el tema pueden usarlas para aspect-ratio o redimensionado. |
| **DPI** | Todas | Mayoría a **72** (estándar web). **Espacios.jpg** y **Espacios2.jpg** a **200** → origen pensado para impresión; en web se sirve por píxeles, el DPI no cambia el tamaño en pantalla. |
| **Formato** | Todas | jpeg / png; útil para elegir tipo MIME y compresión. |
| **Perfil de color** | Varias | uRGB, sRGB; sirve para no alterar colores al convertir; en web conviene exportar a sRGB. |

Esta metadata **técnica** es suficiente para decidir redimensionado y formato; no hace falta reescribirla si el CMS no la usa.

### 5.2 Qué no traen (o no de forma fiable)

En las muestras revisadas **no** aparecen de forma utilizable:

- **Título / ImageDescription** (para `title` o alt)
- **Caption** (pie de foto)
- **Copyright / Autor** (crédito o derechos)
- **EXIF de cámara** (marca, modelo, fecha) — en muchas no hay EXIF o está vacío

Por tanto, **no se puede depender de la metadata embebida** para el texto alternativo, el crédito ni el copyright en el sitio.

### 5.3 Cómo sacar partido a lo que hay

- **Fotos de autor:** No hay descripción en archivo. **Aportar en el CMS** al subir: alt tipo “Retrato de Daniel Arella” o “Daniel Arella, autor”, y copyright si aplica.
- **Dibujos de escritores y artistas:** El **nombre del archivo** suele indicar autor de la obra (ej. `Pablo Picasso (3).jpg`, `Federico García Lorca (1).jpg`). Sirve como base para:
  - **Caption / crédito:** “Pablo Picasso”, “Federico García Lorca”.
  - **Alt:** “Dibujo de Pablo Picasso” o descripción breve.
  - Al importar, se puede usar el nombre de archivo (sin número de copia) como campo “autor de la obra” o “crédito”.
- **Imágenes de la raíz (Espacios, Finalistas, WhatsApp):** Sin metadata descriptiva. **Añadir en el CMS** título, alt y crédito según el uso (libro, evento, prensa).

### 5.4 Recomendación

- **No asumir** que alt, caption o copyright vienen en la imagen; **rellenarlos siempre** al subir al WordPress (o al medio que uses).
- Opcional: al preparar assets, usar **EXIF/IPTC** (con herramienta tipo ExifTool) para escribir **Copyright** y **ImageDescription** en las imágenes que vayan a publicar; así la metadata acompaña al archivo aunque el CMS no la lea.

---

## 6. Title, caption y description por imagen

Textos listos para copiar al CMS (alt, título, pie de foto, descripción). Generados tras inspección de cada imagen.

### 6.1 Fotos de autor (`author-photos/`)

| Archivo | Title | Caption | Description (alt / descripción breve) |
|---------|-------|---------|----------------------------------------|
| **daniel-arella-12.jpg** | Daniel Arella — Retrato | Retrato de Daniel Arella. | Hombre con cabello oscuro y rizado, camisa oscura abotonada y dos collares. Fondo con cartel tipo Vespa y cuadros. Retrato de pecho, mirada directa. |
| **daniel-arella-02.jpg** | Daniel Arella — Retrato con gafas | Retrato cercano de Daniel Arella con gafas y bufanda. | Primer plano: cabello oscuro rizado, gafas de montura negra, bufanda oscura. Fondo desenfocado claro. |
| **daniel-arella-06.jpg** | Daniel Arella — Retrato interior | Daniel Arella, retrato directo. | Retrato de medio cuerpo: cabello recogido, gafas, barba de chivo, camisa oscura. Fondo con puerta y cabecero. |
| **daniel-arella-04.jpg** | Daniel Arella — Retrato en la niebla | Daniel Arella sonriendo en un entorno natural. | Retrato tipo selfie: sonrisa amplia, cabello rizado largo, jersey con patrones. Fondo brumoso. |
| **daniel-arella-05.jpg** | Daniel Arella con «Relatos pioneros…» | Daniel Arella con el libro Relatos pioneros de la ciencia ficción latinoamericana. | De pie, sonriendo, camisa blanca y blazer, mostrando el libro. Fondo con cristaleras. |
| **daniel-arella-03.jpg** | Daniel Arella con estatua de Buda | Daniel Arella en un espacio con escultura de Buda. | Retrato casual: gafas negras, chaqueta con franjas. Al fondo estatua de Buda; techo industrial. |
| **daniel-arella-08.jpg** | Daniel Arella — Retrato con mandala | Daniel Arella sentado ante un tapiz con mandala. | Medio cuerpo: gafas negras, camiseta bicolor. Fondo: tapiz turquesa con mandala blanco. |
| **daniel-arella-09.jpg** | Daniel Arella — Mirada pensativa | Retrato de Daniel Arella con la mano en el mentón. | Primer plano: cabello rizado, gafas redondas, mano en barbilla. Fondo oscuro desenfocado. |
| **daniel-arella-10.jpg** | Daniel Arella al aire libre | Daniel Arella ante una escultura de piedra. | Retrato exterior: barba, gafas, chaqueta oscura. Fondo: escultura de piedra, ramas y cielo. |
| **daniel-arella-01.jpg** | Daniel Arella — Retrato sonriente | Retrato de Daniel Arella con sonrisa. | Cabeza y hombros: cabello rizado, gafas metálicas, sonrisa amplia. Fondo pared gris. |
| **daniel-arella-07.jpg** | Daniel Arella — Retrato en blanco y negro | Retrato en blanco y negro en la naturaleza. | Pecho para arriba: cabello rizado, camisa a cuadros. Fondo follaje y árboles. Luz natural. |
| **daniel-arella-11.jpg** | Daniel Arella junto al globo «América del Sur» | Daniel Arella junto a un globo terráqueo. | En cuclillas junto a globo: continentes azul y naranja. Camisa beige, sonrisa suave. |
| **daniel-arella-13.jpeg** | Daniel Arella — Retrato (vertical) | Retrato vertical de Daniel Arella. | Retrato en formato vertical para galería o perfil. |
| **daniel-arella-14.jpeg** | Daniel Arella — Retrato (horizontal) | Retrato horizontal de Daniel Arella. | Retrato en formato horizontal; revisar contexto (evento o galería). |

---

### 6.2 Imágenes en `books/covers/` y `press-events/`

| Archivo | Title | Caption | Description (alt / descripción breve) |
|---------|-------|---------|----------------------------------------|
| **espacios-gelindo-casasola-portada.jpg** | Portada interior — Espacios, Gelindo Casasola | Página de «Espacios»: título, Gelindo Casasola, compiladores Stephen Marsh Planchart y Daniel Arella. | Página de libro: “Espacios” y “GELINDO CASASOLA”; “COMPILADORES: Stephen Marsh Planchart, Daniel Arella”; editorial Gobierno de Venezuela. Franja vertical en B/N con seta/hongo. |
| **espacios-gelindo-casasola-contraportada.jpg** | Contraportada — Espacios (biografías) | Contraportada de «Espacios» con biografías de Casasola, Planchart y Daniel Arella. | Contraportada: biografías de Gelindo Casasola (D. A.), Stephen Marsh Planchart y Daniel Arella (Caracas 1988, Letras ULA, DAES 2009, Free-jazz 2010). Logos Gobierno Bolivariano y Ministerio de Cultura; ISBN 9789801428367. |
| **premio-rey-david-2021-finalistas.jpg** | II Premio Rey David de Poesía Bíblica (2021) — Finalistas | Lista de finalistas del II Premio Rey David de Poesía Bíblica Iberoamericana 2021. | Cartel: pintura de Miguel Elías (figura con corona); título del premio; texto de Tiberíades/SBE/Fondo Jacqueline Alencar; 265 obras; 12 libros finalistas, entre ellos «El arcángel». “Pinturas de Miguel Elías”. |
| **arovertiente-flyer-2007-08-24.jpg** | Flyer — Recital de poesía Arovertiente (2007) | Flyer del recital de poesía Arovertiente, 24 agosto 2007, con cita de Rilke. | Flyer B/N: “RECITAL DE POESÍA / AROVERTIENTE”; paisaje con dos árboles desnudos; cita Rilke: “Sólo en la forma dada en tu renuncia se hace árbol verdadero”; lugar Librerías del Sur (Av. 3 Calle 23), viernes 24 agosto 2007, 7 PM. |
| **arovertiente-flyer-2007-09-28.jpg** | Flyer — Recital Arovertiente (28 sept 2007) | Flyer del recital Arovertiente, Museo Histórico Religioso de Ejido, con cita de Rafael Cadenas. | Flyer B/N: “RECITAL DE POESÍA” / “AROVERTIENTE”; imagen artística; cita: “Él sabe que este hábito maligno vuelve más penosa su deficiencia” — Rafael Cadenas; lugar Museo Histórico Religioso de Ejido, frente Plaza San Pío X; viernes 28 septiembre 2007, 7 PM. |
| **concurso-ula-2008-ganadores-portada.jpg** | Portada — Ganadores XX Concurso Cuento, Ensayo y Poesía (2008) | Portada de la publicación ganadores del XX Concurso ULA, Mérida 2008. | Portada: “GANADORES DEL XX CONCURSO / CUENTO, ENSAYO Y POESIA”; Universidad de Los Andes, Vicerrectorado Académico, Dirección de Asuntos Estudiantiles, Área de Cultura; ilustración bodegón; Mérida, 2008. |
| **concurso-ula-2009-ganadores-contraportada.jpg** | Contraportada — Ganadores XX Concurso (DAES 2009) | Contraportada con lista de ganadores; Daniel Arella, Primera mención cuento por «Moises». | Contraportada: premios Cuento, Ensayo, Poesía; Primera mención cuento: «Moises», Daniel Antonio Arella, Estudiante Escuela de Letras, Facultad Humanidades y Educación; DAES Mérida, 2009. |
| **portada-al-fondo-de-la-transparencia.png** | Portada — Al fondo de la transparencia (Daniel Arella) | Portada del libro «Al fondo de la transparencia», Daniel Arella. | Portada: “Daniel Arella”, “Al fondo de la transparencia”; ilustración de ojo abstracto en azul y blanco; Fundación Editorial El perro y la rana; Ediciones Caminos de Altair. Baja resolución (291×465); sustituir por escaneo o foto de portada en alta res. |
| **press-01.jpeg** | Daniel Arella — Retrato artístico | Retrato de Daniel Arella con efecto artístico y fondo psicodélico. | Retrato sonriente, cabello rizado, barba, gafas; brillo blanco-rosado sobre la cabeza; fondo de ondas estilizadas en azul, púrpura y magenta. Para Sobre el autor o galería si se desea estilo más experimental. |
| **press-33.jpeg** | Cartel — Poesía Sci-Fi (2024) | Cartel del evento Poesía Sci-Fi, Daniel Arella, 29 sep 2024. | Cartel: “POESÍA SCI-FI / VERSOS DE LATINOAMÉRICA”; foto de Daniel Arella; domingo 29/sep/24, 13.00 hrs MX, 15.00 hrs VEN; Anaquel Literario, Anagnel Literario, Basarides. Para Prensa o archivo de eventos. |
| **press-39.jpeg** | Diploma — Mención honrosa Ida Gramcko (2024) | Diploma LP5 Editora a Daniel Arella por mención honrosa, ensayo «Desde el inframundo del lenguaje». | Diploma: LP5 Editora a Daniel Arella; mención honrosa I Premio de Ensayo sobre la obra de Ida Gramcko, ensayo “Desde el inframundo del lenguaje”; Santiago de Chile, 21 septiembre 2024; sello y firma Gladys Mendía, Editora. Para Sobre el autor / Prensa. |
| **press-14.jpeg** | Escena de lectura | Dos personas en banco leyendo; ambiente natural con muro de piedra. | Hombre con pelo rizado y gafas leyendo papeles; mujer con libro abierto; banco de madera, muro de piedra. Uso opcional (contexto literario); revisar si Daniel desea incluirla. |
| **press-02.jpeg** | Cartel — Kaníbal Festival Poesía Quito (Daniel Arella invitado) | Daniel Arella, invitado internacional al Festival Internacional de Poesía de Quito (Kaníbal). | Cartel: “INVITADOS INTERNACIONALES”; retrato B/N de Daniel Arella (1988, Venezuela); fragmento de poema (“Me dijiste que me esperabas…”); logo Kaníbal · Festival Internacional de Poesía de Quito; organiza Murcielagario; auspicia Centro Cultural Benjamín Carrión; colaboran Universidad Andina, etc. Para Prensa / eventos. |
| **press-23.jpeg** | Cartel — Presentación «Relatos pioneros…» FILBo 30 | Presentación del libro en Feria del Libro de Bogotá, 24 abril. | Cartel naranja FILBo 30 (18 abril–2 mayo): portada “Relatos pioneros de la ciencia ficción latinoamericana”, Daniel Arella y Rebeca Roca; foto de Daniel Arella; presentación 24 abril, 1:00 p.m., Sala Jorge Isaacs; Venezuela, Monte Ávila, El perro y la rana. Para Libro / Prensa. |
| **press-28.jpeg** | Cartel — Galería Siete Piezas (poesía, 27 abril) | Daniel Arella en lectura de poesía, evento Galería Siete Piezas. | Cartel: “GALERÍA SIETE PIEZAS”; viernes y sábado 27 abril; Birosca Carioca AV2 C24; POESÍA: Rolando Ramírez, Daniel Arella (viernes y sábado 7:30 p.m.); dibujo, fotografía, escultura, pintura, cortometrajes. Para Prensa / eventos. |
| **press-43.jpeg** | Contraportada / interior — Relatos pioneros (autores y bios) | Interior del libro con lista de autores y biografías de Daniel Arella y Rebeca Roca. | Página: título “Relatos pioneros de la ciencia ficción latinoamericana”; texto del compilador Daniel Arella; lista de autores (Nervo, Darío, Palma, Lugones, Quiroga, Borges, Cortázar, etc.); biografías Daniel Arella (Caracas 1988, Letras ULA, premio cuento 2009, Free-jazz 2010, Al fondo de la transparencia 2012) y Rebeca Roca (ilustradora). Para ficha del libro. |
| **press-44.jpeg** | Portada — Relatos pioneros de la ciencia ficción latinoamericana | Portada del libro; Daniel Arella selección y prólogo, Rebeca Roca ilustraciones. | Portada en gris: “Daniel Arella · Selección y prólogo”; “RELATOS PIONEROS DE LA CIENCIA FICCIÓN LATINOAMERICANA”; “Rebeca Roca · Ilustraciones”; dibujo B/N de hombre con sombrero y brazo mecánico (estilo steampunk); logo El perro y la rana. Para ficha del libro / portada. |
| **press-45.jpeg** | (Uso no editorial) | Gato gris, primer plano. | Retrato de gato; ojos verdes, fondo desenfocado. No usar como asset del sitio salvo decisión explícita (ej. sección personal). |
| **press-03 … press-50** (resto) | (Revisar por archivo) | Revisar cada imagen: evento, presentación, prensa, retrato. | Asignar title/caption/description al subir; renombrar (ej. evento-fecha-descripcion). Ver tabla 3.2 para dimensiones. Todos en `press-events/`. |

---

### 6.3 Dibujos de escritores y artistas (`illustrations/`)

El **autor/crédito** se toma del nombre del archivo (ej. `Pablo Picasso (3).jpg` → “Pablo Picasso”). Para las ~250 imágenes usar este patrón y, si se desea, una descripción genérica por obra.

**Plantilla por archivo:**
- **Title:** [Nombre del artista] — Dibujo / Obra
- **Caption:** Dibujo de [Nombre del artista]. (O descripción breve si se conoce la obra.)
- **Description:** Dibujo o ilustración de [Nombre del artista]; estilo lineal/figurativo/abstracto según corresponda. Reproducción fotográfica sobre papel.

**Ejemplos (inspeccionados):**

| Archivo | Title | Caption | Description |
|---------|-------|---------|-------------|
| **Pablo Picasso (3).jpg** | Pablo Picasso — Don Quijote | Dibujo de Pablo Picasso: Don Quijote y caballo, estilo lineal. | Dibujo a tinta de Pablo Picasso en estilo lineal y minimalista: figura de Don Quijote sobre caballo (Rocinante). Reproducción sobre papel texturizado. |
| **Federico García Lorca (1).jpg** | Federico García Lorca — Dibujo | Dibujo de Federico García Lorca. | Dibujo en blanco y negro de Federico García Lorca: manos, formas oculares o semillas, gotas y raíz central. Línea continua, estilo gráfico y simbólico. |
| **Franz Kafka (1).jpg** | Franz Kafka — Dibujo | Dibujo de Franz Kafka. | Figura alargada en perfil, de trazo grueso y textura áspera, junto a un bloque rectangular oscuro (edificio o atril); suelo con marcas en M. Estilo expresionista, reminiscente de xilografía. |
| **Jean Cocteau (2).jpg** | Jean Cocteau — La vuelta al mundo en 80 días | Ilustración de Jean Cocteau para «La vuelta al mundo en 80 días» (Jules Verne). | Dibujo a línea: personaje con tocado de plumas y hacha, mujer con vestido y sombrero, locomotora al fondo; texto manuscrito “Le Tour du monde en 80 jours”; firma “Jean”. |
| **Marc Chagall (2).jpg** | Marc Chagall — Escena de teatro | Dibujo de Marc Chagall: escena de teatro o circo. | Escena con músicos (tuba, clarinete, tambor), figura con bigote y sombrero, bailarina con vestido de lunares; texto en cirílico “inicio del espectáculo”; estilo lírico y dinámico. |
| **Saul Steinberg (2).jpg** | Saul Steinberg — Don Quijote y Sancho | Dibujo de Saul Steinberg: Don Quijote y Sancho Panza. | Ilustración minimalista a tinta: caballero con lanza sobre caballo y escudero sobre burro, paisaje esquemático y media luna; estilo geométrico y narrativo. |

Para el resto de archivos de la carpeta (~250 en total), usar **Caption** = “Dibujo de [Autor]” extrayendo el nombre del nombre de archivo (sin el número entre paréntesis) y **Description** genérica: “Dibujo o ilustración de [Autor]. Reproducción fotográfica.” Verificar siempre **derechos de uso** antes de publicar.

---

## 7. Resumen por tipo de uso

| Tipo de uso        | Origen principal                          | Acción sugerida |
|--------------------|-------------------------------------------|------------------|
| Foto de autor      | `author-photos/` (daniel-arella-01 … 14)   | Principal: 12 o 02 (1536×2048). Prensa: 02, 06. |
| Portadas / libros  | `books/covers/`, `books/pdf/` (7 PDF)     | Asociar a cada Book; redimensionar imágenes a 600–800 px. |
| Eventos / prensa   | `press-events/` (premio-rey-david-2021, press-01…50) | Ver §3.2 y RENAME-MAP; usar las ≥ 800 px. |
| Ilustración editorial | `illustrations/` (250 imgs, 95 autores) | Selección; servir a 800–1200 px; créditos y derechos; ver §2.2 listado autores. |
| Descargas libro   | `books/pdf/`                              | Vincular PDF a fichas Book; ver §3.4. |
| Textos (CV, bio)   | `documents/`                              | Contenido para Sobre el autor, etc. |

---

**Versión:** 1.7 — Renombrado de archivos: kebab-case, descriptivos; author-photos → daniel-arella-NN; books/covers y books/pdf con nombres canónicos; press-events → premio-rey-david-2021, press-01…50. Correspondencia en `content-source/RENAME-MAP.md`.
