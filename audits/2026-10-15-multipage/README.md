# GOMIBET: estructura de cuatro páginas

Dirección elegida por el responsable: natural y cercana, con fotografía, verde y betabel.

Rutas: Inicio (`/`), Producto (`/producto/`), Proyecto (`/proyecto/`) y Experiencias (`/experiencias/`). Cada ruta tiene un título, descripción y H1 propios, con navegación activa renderizada en servidor. Se comparten cabecera, pie y mejoras GSAP mediante `SiteLayout.astro`.

Inicio ofrece una presentación y accesos al resto del sitio. La formulación, comparación, propósito, proceso, imágenes y testimonios permanecen en sus páginas correspondientes. La sección molecular con puntos interactivos se retiró de las rutas; sus tres explicaciones se conservan en desplegables nativos dentro de Producto. Estos desplegables funcionan también sin JavaScript.

Validación sobre la salida de producción en Chrome:
- Cuatro rutas × 14 anchos de pantalla entre 320 y 1920 px: 56 comprobaciones sin desbordamientos horizontales ni de texto detectados.
- Recursos de imagen con origen definido comprobados; se excluyó el elemento de imagen vacío del visor cerrado. Al abrir el visor se comprobó la carga de la imagen seleccionada.
- Sin enlaces internos rotos entre rutas o anclas.
- Menú móvil: navegación de Inicio a Producto comprobada.
- Galería: apertura, cambio de imagen, Escape y retorno del foco comprobados.
- Ingredientes: apertura de desplegable y funcionamiento sin JavaScript comprobados.
- Enlace antiguo `/#sinergia` redirige a `/producto/#sinergia`.
- Animaciones normales: ningún bloque de revelación quedó invisible en las cuatro rutas.
- Sin excepciones de JavaScript, respuestas HTTP locales de error ni avisos GSAP de elementos ausentes.
- Compilación estática completada: cuatro páginas.

Se inspeccionaron capturas completas en escritorio. Estas pruebas no equivalen a validar dispositivos físicos, todos los motores de navegador o el contenido nutricional. Los pendientes de contenido recogidos en auditorías anteriores no se alteraron con este cambio de estructura.
