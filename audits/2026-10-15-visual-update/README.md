# Más imágenes y entrada más pausada

- Se incorporaron imágenes a las tarjetas y al bloque de presentación de Inicio, además de las cabeceras de Producto, Proyecto y Experiencias.
- Se reutilizaron los recursos existentes. Los renders de empaque y laboratorio se identifican como conceptuales. No se añadieron fotos o testimonios de personas inventadas.
- Laboratorio y empaque se sirven en WebP (aprox. 104 y 66 KB), con dimensiones explícitas. Las imágenes fuera de la cabecera utilizan carga diferida.
- La entrada se mantiene al menos 1800 ms, con salida de 260 ms: aproximadamente dos segundos en condiciones normales. El límite de espera pasa a 3000 ms y el respaldo CSS a 3500 ms. Esta versión usa la clave de sesión v2 para que se pueda ver tras la actualización.
- Se conservan la omisión por movimiento reducido, el cierre inmediato por clic o teclado y la presentación una vez por sesión de pestaña.

Validación: compilación de cuatro rutas correcta; 56 comprobaciones responsive sin desbordamientos detectados; enlaces y galería correctos; recursos locales sin errores HTTP. La prueba de entrada confirma que sigue visible después de 950 ms, termina automáticamente, no se repite al navegar o recargar y se omite sin JavaScript, con movimiento reducido o con almacenamiento bloqueado. Se inspeccionaron capturas de Inicio y Producto.
