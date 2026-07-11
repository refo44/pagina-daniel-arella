# Guía reutilizable para compartir en redes sociales

Aprendizajes, límites de plataforma y patrón de implementación.

Esta guía resume cómo implementar una experiencia de compartir consistente en sitios estáticos, aplicaciones web y WordPress. Separa dos problemas que suelen confundirse:

1. Compartir un enlace.
2. Preparar una pieza visual para una publicación o historia.

No todas las plataformas resuelven ambos problemas de la misma forma.

---

## 1. Principio fundamental

El botón de compartir no controla la vista previa. La plataforma receptora visita la URL compartida y lee los metadatos incluidos en el `<head>` de la página.

Para que una vista previa exista, la URL debe:

- Ser pública y usar HTTPS.
- Responder sin autenticación.
- Ser accesible para rastreadores.
- Incluir metadatos Open Graph.
- Referenciar una imagen pública mediante una URL absoluta.
- No depender de JavaScript para crear los metadatos después de cargar la página.

Una URL de `localhost`, una dirección privada o una imagen que todavía no ha sido desplegada no puede producir una vista previa externa.

---

## 2. Metadatos mínimos

Cada página compartible debe tener título, descripción, URL canónica e imagen propios.

```html
<link rel="canonical" href="https://example.com/articulos/mi-articulo/">

<meta property="og:locale" content="es_ES">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Nombre del sitio">
<meta property="og:title" content="Título del contenido">
<meta property="og:description" content="Descripción breve y específica.">
<meta property="og:url" content="https://example.com/articulos/mi-articulo/">
<meta property="og:image" content="https://example.com/assets/social/mi-articulo.jpg">
<meta property="og:image:alt" content="Descripción de la imagen">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título del contenido">
<meta name="twitter:description" content="Descripción breve y específica.">
<meta name="twitter:image" content="https://example.com/assets/social/mi-articulo.jpg">
<meta name="twitter:image:alt" content="Descripción de la imagen">
```

Aunque Twitter ahora se llama X, los nombres `twitter:card`, `twitter:title` y relacionados siguen siendo los metadatos compatibles.

### Reglas importantes

- `og:url` debe coincidir con la URL canónica.
- `og:image` debe ser absoluta; no usar `../imagen.jpg`.
- El título debe identificar el contenido, no repetir únicamente el nombre del sitio.
- La descripción debe funcionar fuera del contexto de la página.
- `og:image:alt` describe la imagen, no repite mecánicamente el título.
- No duplicar bloques Open Graph mediante varios plugins o componentes.

---

## 3. Imagen para vistas previas

Una opción segura para enlaces es:

- Medida: `1200 × 630 px`.
- Relación: aproximadamente `1.91:1`.
- Formato: JPG, PNG o WebP si los destinos previstos lo aceptan.
- Peso recomendado: menor de 1 MB.
- Contenido principal alejado de los bordes para soportar recortes.

No se debe confiar en SVG como imagen social. Algunos rastreadores no lo procesan. Si la imagen editorial es SVG, se genera una versión raster para compartir.

Las portadas verticales y fotografías cuadradas pueden usarse, pero una composición específica de `1200 × 630 px` ofrece resultados más predecibles.

---

## 4. Diferencias entre plataformas

### WhatsApp

WhatsApp recibe un texto con la URL y obtiene la vista previa desde Open Graph. La aplicación puede conservar en caché una versión anterior.

```text
Título del contenido https://example.com/articulos/mi-articulo/
```

El enlace web habitual es:

```js
const text = encodeURIComponent(`${title} ${url}`);
const whatsappUrl = `https://api.whatsapp.com/send?text=${text}`;
```

### Facebook

Facebook usa principalmente Open Graph.

```js
const facebookUrl =
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
```

### X

```js
const xUrl =
  `https://x.com/intent/post?text=${encodeURIComponent(title)}` +
  `&url=${encodeURIComponent(url)}`;
```

### Threads

Threads ofrece un intent web, pero su URL puede cambiar y debe verificarse periódicamente.

```js
const threadsUrl =
  `https://www.threads.com/intent/post?text=${encodeURIComponent(title)}` +
  `&url=${encodeURIComponent(url)}`;
```

### Instagram

Instagram no ofrece un intent web general para crear publicaciones o historias desde una página. Tampoco convierte una URL pegada en una publicación o historia en una tarjeta Open Graph.

La solución web realista es:

- Generar una imagen `1080 × 1080 px` para una publicación.
- Generar una imagen `1080 × 1920 px` para una historia.
- En móvil, compartir el archivo mediante Web Share API si el sistema lo admite.
- En computadora, descargar el archivo para subirlo manualmente.

Una web no puede seleccionar Instagram automáticamente, elegir entre feed e historia dentro de la aplicación ni añadir el sticker de enlace.

---

## 5. Web Share API

`navigator.share()` abre el selector nativo del sistema. Su disponibilidad y comportamiento varían entre navegadores y sistemas operativos.

Para compartir un enlace:

```js
const shareData = {
  title,
  text: description,
  url,
};

if (typeof navigator.share === "function") {
  await navigator.share(shareData);
}
```

Para compartir una imagen:

```js
const shareData = {
  files: [imageFile],
  title,
  text: `${title}\n${url}`,
};

if (
  typeof navigator.share === "function" &&
  typeof navigator.canShare === "function" &&
  navigator.canShare(shareData)
) {
  await navigator.share(shareData);
}
```

### Condiciones y límites

- Requiere HTTPS, salvo excepciones de desarrollo local.
- Debe ejecutarse como consecuencia directa de una acción del usuario.
- `navigator.share` puede existir en computadoras y abrir interfaces inesperadas.
- La presencia de la API no garantiza que una aplicación específica aparezca.
- `AbortError` significa normalmente que el usuario canceló; no debe mostrarse como fallo.
- Si `navigator.canShare({ files })` devuelve `false`, se ofrece la descarga.

Para una experiencia consistente, puede abrirse primero un panel propio y reservar el selector nativo para acciones que realmente lo necesitan, como enviar una imagen a una aplicación instalada.

---

## 6. Panel propio y fallbacks

Un panel propio evita diferencias entre macOS, Windows y Linux y mantiene visibles las mismas opciones.

Debe incluir:

- Facebook.
- X.
- WhatsApp.
- Threads.
- Imagen para publicación de Instagram.
- Imagen para historia de Instagram.
- Copiar enlace.

El orden debe responder a las plataformas prioritarias del proyecto, no a una lista universal.

### Copiar enlace

Se usa primero Clipboard API y después un fallback basado en selección:

```js
const copyText = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
};
```

Los fallos de permisos deben generar un mensaje que permita copiar manualmente la URL.

---

## 7. Generación de imágenes para Instagram

La imagen puede generarse en el navegador con `<canvas>` a partir de `og:image`.

El proceso recomendado es:

1. Leer la imagen social configurada en el `<head>`.
2. Cargarla desde el mismo origen para evitar restricciones de CORS.
3. Crear un canvas de `1080 × 1080` o `1080 × 1920`.
4. Pintar el fondo de marca.
5. Dibujar la imagen con ajuste `contain` para evitar cortes.
6. Añadir nombre del sitio y título con márgenes seguros.
7. Convertir el canvas a JPG.
8. Crear un objeto `File`.
9. Compartirlo en móvil o descargarlo en computadora.

```js
const blob = await new Promise((resolve) => {
  canvas.toBlob(resolve, "image/jpeg", 0.9);
});

const file = new File([blob], "contenido-story.jpg", {
  type: "image/jpeg",
});
```

### Errores comunes

- Dibujar una imagen remota sin CORS y contaminar el canvas.
- Recortar una portada para llenar el formato.
- Colocar texto demasiado cerca de los bordes.
- Usar tipografías no cargadas antes de dibujar.
- Generar archivos demasiado pesados.
- Suponer que Web Share enviará el archivo directamente a Instagram.

---

## 8. Accesibilidad

El panel debe:

- Usar `<dialog>` o un patrón modal accesible.
- Tener un título asociado con `aria-labelledby`.
- Incluir un botón de cierre con nombre accesible.
- Cerrarse con `Escape`.
- Mantener el foco dentro del modal mientras esté abierto.
- Mostrar confirmaciones y errores mediante una región `aria-live`.
- Usar botones para acciones y enlaces para destinos.
- Mantener estados de foco visibles.

Las imágenes sociales no sustituyen el texto alternativo de las imágenes visibles en la página.

---

## 9. Seguridad y privacidad

- Aplicar `encodeURIComponent()` a título, texto y URL en intents.
- Usar `target="_blank"` con `rel="noopener noreferrer"`.
- No incluir información privada en la URL.
- No añadir SDKs de seguimiento solo para compartir.
- Evitar contadores sociales si requieren rastreo de terceros.
- Validar cualquier URL configurada desde un CMS.

---

## 10. WordPress

En WordPress, los metadatos deben generarse en el servidor dentro de `<head>`.

La fuente recomendada es:

- Título: `get_the_title()`.
- Descripción: extracto editorial o resumen controlado.
- URL: `get_permalink()`.
- Imagen: imagen destacada o campo social específico.
- Tipo: `article` para entradas y tipos editoriales equivalentes.

Si se usa un plugin SEO, se debe permitir que ese plugin sea la única fuente de Open Graph para evitar etiquetas duplicadas. Las imágenes sociales deben registrarse como campos editoriales cuando no coincidan con la imagen destacada.

---

## 11. Pruebas

Las pruebas locales validan el panel y la generación de archivos, pero no validan el rastreo social.

Antes de publicar:

- Verificar que cada página tenga un solo `og:title`, `og:url` y `og:image`.
- Abrir directamente la URL absoluta de la imagen.
- Confirmar que la respuesta sea pública y tenga un tipo MIME correcto.
- Probar el panel con teclado.
- Probar copia de enlace con y sin permiso de Clipboard API.
- Probar generación 1:1 y 9:16.
- Probar Web Share en un teléfono real.

Después de desplegar:

- Inspeccionar el HTML entregado por el servidor.
- Usar el depurador de contenido compartido de Meta para forzar una nueva lectura.
- Compartir la URL en una conversación de prueba de WhatsApp.
- Comprobar los recortes reales en las plataformas prioritarias.
- Repetir la prueba en una URL nueva para distinguir un fallo de caché.

Las plataformas almacenan previews. Corregir el HTML no garantiza una actualización inmediata de enlaces compartidos anteriormente.

---

## 12. Diagnóstico rápido

Si no aparece ninguna vista previa:

1. Confirmar que la URL no sea local.
2. Confirmar que la página y la imagen respondan públicamente.
3. Revisar Open Graph en el HTML recibido, no solo en el DOM.
4. Verificar que `og:image` sea absoluta.
5. Revisar bloqueos por autenticación, firewall o reglas para bots.
6. Solicitar una nueva lectura en el depurador de la plataforma.

Si aparece texto pero no imagen:

1. Abrir `og:image` directamente.
2. Sustituir SVG por JPG o PNG.
3. Revisar tamaño, peso y tipo MIME.
4. Confirmar que la imagen no requiera cookies.

Si funciona en móvil pero no en computadora:

1. No asumir que `navigator.share` se comporta igual.
2. Usar un panel propio en escritorio.
3. Descargar las piezas de Instagram como fallback.

---

## 13. Checklist reutilizable

- [ ] URL pública con HTTPS.
- [ ] URL canónica.
- [ ] Open Graph renderizado en servidor.
- [ ] Twitter Card.
- [ ] Imagen absoluta en formato raster.
- [ ] Vista previa de enlace cercana a `1200 × 630 px`.
- [ ] Imagen de publicación `1080 × 1080 px`.
- [ ] Imagen de historia `1080 × 1920 px`.
- [ ] Panel propio accesible.
- [ ] Intents con parámetros codificados.
- [ ] Copia de enlace con fallback.
- [ ] Web Share de archivos comprobado con `navigator.canShare`.
- [ ] Descarga disponible cuando no se pueden compartir archivos.
- [ ] Prueba en URL desplegada.
- [ ] Revisión de caché social.

---

## Conclusión

Una implementación robusta separa tres capas:

1. Open Graph para vistas previas de enlaces.
2. Intents y copia de URL para compartir desde el navegador.
3. Archivos visuales con proporciones específicas para Instagram.

Ninguna API única cubre las tres. Diseñar fallbacks explícitos produce una experiencia más estable que depender exclusivamente de `navigator.share()`.
