# Inventario de contenido fuente — Daniel Arella

Referencia rápida de qué hay en `content-source/`, **dimensiones y tamaños**, y cómo usarlo en el sitio.

---

## 1. Fotos de autor

**Carpeta:** `content-source/fotos de autor/`  
**Cantidad:** 14 archivos (12 .jpg, 2 .jpeg)

### 1.1 Dimensiones y tamaño de archivo

| Archivo | Dimensiones (px) | Tamaño aprox. | Uso sugerido |
|---------|------------------|---------------|--------------|
| arella 2.jpg | 1536 × 2048 | 312 KB | Alta res. prensa / Sobre el autor |
| arella5.jpg | 1536 × 2048 | 279 KB | Alta res. prensa |
| Foto Daniel Arella.jpg | 1080 × 1350 | 203 KB | Sobre el autor (principal) |
| arella 7.jpg | 1440 × 1440 | 560 KB | Galería / alternativa |
| Daniel Arella 2.jpg | 1153 × 1153 | 244 KB | Alternativa |
| Daniel 4.jpg | 960 × 960 | 337 KB | Thumbnail / galería |
| arella 3.jpg | 960 × 960 | 137 KB | Thumbnail |
| arella1.jpg | 960 × 640 | 235 KB | Horizontal (destacado) |
| adsfe.jpg | 960 × 720 | 47 KB | Ligera, galería |
| WhatsApp 17.52.19 (2).jpeg | 1600 × 900 | 307 KB | Horizontal (evento?) |
| El libertador.jpg | 607 × 1080 | 53 KB | Vertical |
| WhatsApp 17.52.12.jpeg | 636 × 960 | 86 KB | Vertical |
| Daniel Arella foto 1.jpg | 413 × 414 | 44 KB | Solo thumbnail (baja res.) |
| C- Foto de Autor.jpg | 525 × 350 | 27 KB | Solo thumbnail (baja res.) |

**Uso en el sitio:**
- **Sobre el autor:** “Foto Daniel Arella.jpg” (1080×1350) o “arella 2.jpg” (1536×2048) como principal.
- **Prensa (descargable):** “arella 2.jpg” o “arella5.jpg” (1536×2048); ya son alta resolución.
- Las de 525, 413 px de lado son solo para miniaturas; no usar como imagen principal.

---

## 2. Imágenes — Dibujos de escritores y artistas

**Carpeta:** `content-source/Imágenes - Dibujos de escritores y artistas/`  
**Cantidad:** ~250 archivos .jpg

### 2.1 Dimensiones

- **Rango:** desde ~480×640 px hasta **3264×3264 px** (la mayoría entre 1500–3200 px por lado).
- Son escaneos o fotos de obra en **alta resolución**; aptos para web si se redimensionan al publicar.

Dibujos y obras de autores/artistas (Lorca, Kafka, Picasso, Cocteau, Chagall, Steinberg, Paul Klee, Henri Matisse, etc.).

**Uso posible en el sitio:**
- **Sección editorial o “Referencias” / “Inspiraciones”:** galería o selección con pie de imagen (autor de la obra).
- **Ilustración de contexto** en ensayos o páginas temáticas, siempre con crédito y permiso si aplica.
- **Atmósfera visual** en Home o Archivo (uso muy medido para no distraer de la obra de Daniel).

**Importante:** Verificar derechos de uso antes de publicar; muchas son obras de autores con derechos.

---

## 3. Imágenes sueltas en la raíz de content-source

**Ubicación:** `content-source/` (raíz)

### 3.1 Dimensiones (resumen)

| Origen | Dimensiones (px) | Uso sugerido |
|--------|------------------|--------------|
| 1 004.jpg, 1 026.jpg, 1 041.jpg, 1 042.jpg | 850 × 1170 | Portadas o material editorial (revisar contenido). |
| Espacios.jpg | 1152 × 1376 | Libro/evento Espacios. |
| Espacios2.jpg | 1136 × 1552 | Libro/evento Espacios. |
| Finalistas (1).jpg | 1080 × 1267 | Sobre el autor / Prensa. |
| Captura de pantalla… .png | 291 × 465 | Solo referencia (baja res.). |
| WhatsApp Image… (varios) | desde 168×299 hasta 2048×2048 | Revisar una a una; las más grandes (1536×2048, 1823×1823, etc.) sirven para web; las pequeñas (< 500 px) solo thumbnail o descartar. |

- **Espacios.jpg**, **Espacios2.jpg** — Relación con “Espacios” (gelindo casasola); libro o evento.
- **1 004–1 042.jpg** — Mismo formato 850×1170; revisar si son portadas o material de apoyo.
- **Finalistas (1).jpg** — Premio/finalista; Sobre el autor o Prensa.
- **WhatsApp Image…** — Revisar y renombrar al subir; descartar las de muy baja resolución (< 400 px).

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

### 6.1 Fotos de autor (`fotos de autor/`)

| Archivo | Title | Caption | Description (alt / descripción breve) |
|---------|-------|---------|----------------------------------------|
| **Foto Daniel Arella.jpg** | Daniel Arella — Retrato | Retrato de Daniel Arella. | Hombre con cabello oscuro y rizado, camisa oscura abotonada y dos collares (cuentas y colgantes). Fondo con cartel tipo Vespa y cuadros. Retrato de pecho para arriba, mirada directa a cámara. |
| **arella 2.jpg** | Daniel Arella — Retrato con gafas | Retrato cercano de Daniel Arella con gafas y bufanda. | Primer plano de Daniel Arella: cabello oscuro rizado, gafas de montura negra, bufanda oscura y camisa a cuadros. Fondo desenfocado claro. Mirada directa, expresión serena. |
| **arella5.jpg** | Daniel Arella — Retrato interior | Daniel Arella, retrato directo. | Retrato de medio cuerpo: cabello recogido, gafas de montura negra, barba de chivo, camisa oscura de botones. Fondo con puerta y cabecero de cama; techo con textura. Mirada frontal, expresión seria. |
| **arella 7.jpg** | Daniel Arella — Retrato en la niebla | Daniel Arella sonriendo en un entorno natural. | Retrato tipo selfie: sonrisa amplia, cabello rizado largo, gafas con detalle verde/azul, jersey con cremallera y patrones naranja y azul. Fondo brumoso, paisaje natural desenfocado. |
| **arella1.jpg** | Daniel Arella con «Relatos pioneros…» | Daniel Arella con el libro Relatos pioneros de la ciencia ficción latinoamericana. | Daniel Arella de pie, sonriendo, con camisa blanca y blazer oscuro, mostrando el libro (portada con título y “Daniel Arella”, editor Rebeca). Fondo con cristaleras y estructuras industriales; posible espacio cultural. |
| **arella 3.jpg** | Daniel Arella con estatua de Buda | Daniel Arella en un espacio con escultura de Buda. | Retrato casual: cabello recogido, gafas negras, chaqueta negra con franjas blancas. Al fondo, estatua grande de Buda en tonos grises; techo industrial. Mirada a cámara, expresión tranquila. |
| **Daniel 4.jpg** | Daniel Arella — Retrato con mandala | Daniel Arella sentado ante un tapiz con mandala. | Retrato de medio cuerpo: gafas negras, camiseta bicolor (gris y azul), sentado en el suelo apoyado en la pared. Fondo: tapiz turquesa con mandala blanco; ventana con rejas y plantas. |
| **Daniel Arella 2.jpg** | Daniel Arella — Mirada pensativa | Retrato de Daniel Arella con la mano en el mentón. | Primer plano: cabello rizado oscuro, gafas redondas de montura negra, mano apoyada en barbilla. Camisa clara visible. Fondo oscuro desenfocado. Mirada directa, expresión reflexiva. |
| **Daniel Arella foto 1.jpg** | Daniel Arella al aire libre | Daniel Arella ante una escultura de piedra. | Retrato exterior: cabello rizado largo, barba, gafas con montura verde-azul, chaqueta oscura. Fondo: escultura de piedra con drapeado y manos; ramas y cielo nublado. Mirada a cámara. |
| **adsfe.jpg** | Daniel Arella — Retrato sonriente | Retrato de Daniel Arella con sonrisa. | Cabeza y hombros: cabello rizado abundante, gafas redondas metálicas, sonrisa amplia, jersey claro de punto. Fondo pared gris con estantes. Expresión cercana y amable. |
| **C- Foto de Autor.jpg** | Daniel Arella — Retrato en blanco y negro | Retrato en blanco y negro de Daniel Arella en la naturaleza. | Retrato de pecho para arriba: cabello rizado oscuro, camisa clara a cuadros, mirada contemplativa ligeramente desviada. Fondo desenfocado de follaje y árboles. Estilo atemporal, luz natural. |
| **El libertador.jpg** | Daniel Arella junto al globo «América del Sur» | Daniel Arella junto a un globo terráqueo con las Américas. | Daniel Arella en cuclillas junto a un globo grande: continentes en azul y naranja, “AMERICA DEL SUR” y “OCEANO ATLANTICO” visibles. Camisa beige, pantalón gris, bolso y pulsera azul. Sonrisa suave, mirada hacia un lado. |
| **WhatsApp Image 17.52.12.jpeg** | Daniel Arella — Retrato (vertical) | Retrato vertical de Daniel Arella. | Retrato en formato vertical para uso en galería o perfil. |
| **WhatsApp Image 17.52.19 (2).jpeg** | Daniel Arella — Retrato (horizontal) | Retrato horizontal de Daniel Arella. | Retrato en formato horizontal; revisar contexto (evento o galería). |

---

### 6.2 Imágenes en la raíz de `content-source/`

| Archivo | Title | Caption | Description (alt / descripción breve) |
|---------|-------|---------|----------------------------------------|
| **Espacios.jpg** | Portada interior — Espacios, Gelindo Casasola | Página de «Espacios»: título, Gelindo Casasola, compiladores Stephen Marsh Planchart y Daniel Arella. | Página de libro: “Espacios” y “GELINDO CASASOLA”; “COMPILADORES: Stephen Marsh Planchart, Daniel Arella”; editorial Gobierno de Venezuela. Franja vertical en B/N con seta/hongo. |
| **Espacios2.jpg** | Contraportada — Espacios (biografías) | Contraportada de «Espacios» con biografías de Casasola, Planchart y Daniel Arella. | Contraportada: biografías de Gelindo Casasola (D. A.), Stephen Marsh Planchart y Daniel Arella (Caracas 1988, Letras ULA, DAES 2009, Free-jazz 2010). Logos Gobierno Bolivariano y Ministerio de Cultura; ISBN 9789801428367. |
| **Finalistas (1).jpg** | II Premio Rey David de Poesía Bíblica (2021) — Finalistas | Lista de finalistas del II Premio Rey David de Poesía Bíblica Iberoamericana 2021. | Cartel: pintura de Miguel Elías (figura con corona); título del premio; texto de Tiberíades/SBE/Fondo Jacqueline Alencar; 265 obras; 12 libros finalistas, entre ellos «El arcángel». “Pinturas de Miguel Elías”. |
| **1 004.jpg** | Flyer — Recital de poesía Arovertiente (2007) | Flyer del recital de poesía Arovertiente, 24 agosto 2007, con cita de Rilke. | Flyer B/N: “RECITAL DE POESÍA / AROVERTIENTE”; paisaje con dos árboles desnudos; cita Rilke: “Sólo en la forma dada en tu renuncia se hace árbol verdadero”; lugar Librerías del Sur (Av. 3 Calle 23), viernes 24 agosto 2007, 7 PM. |
| **1 026.jpg**, **1 041.jpg**, **1 042.jpg** | (Mismo formato 850×1170) | Revisar si son otros flyers o portadas de Arovertiente/eventos. | Mismo tamaño que 1 004; inspeccionar contenido para asignar title/caption/description específicos. |
| **Captura de pantalla… .png** | (Referencia) | Solo referencia; baja resolución. | No usar como asset principal; revisar si hace falta conservar. |
| **WhatsApp Image…** (resto) | (Revisar por archivo) | Revisar cada imagen: evento, presentación, prensa. | Asignar title/caption/description al subir según contenido; renombrar archivo (ej. evento-fecha-descripcion). |

---

### 6.3 Dibujos de escritores y artistas (`Imágenes - Dibujos de escritores y artistas/`)

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

Para el resto de archivos de la carpeta, usar **Caption** = “Dibujo de [Autor]” extrayendo el nombre del nombre de archivo (sin el número entre paréntesis) y **Description** genérica: “Dibujo o ilustración de [Autor]. Reproducción fotográfica.” Verificar siempre **derechos de uso** antes de publicar.

---

## 7. Resumen por tipo de uso

| Tipo de uso        | Origen principal                          | Acción sugerida |
|--------------------|-------------------------------------------|------------------|
| Foto de autor      | `fotos de autor/`                         | Principal: 1080×1350 o 1536×2048. Prensa: arella 2/arella5. |
| Portadas / libros  | Raíz (850×1170), Libros en pdf            | Asociar a cada Book; redimensionar a 600–800 px si hace falta. |
| Eventos / prensa   | Finalistas (1080×1267), Espacios, WhatsApp | Revisar y usar las de ≥ 800 px de lado. |
| Ilustración editorial | Dibujos (250 imgs, 480–3264 px)       | Selección; servir a 800–1200 px; créditos y derechos. |

---

**Versión:** 1.3
