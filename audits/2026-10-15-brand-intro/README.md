# Entrada de marca de GOMIBET

Se añadió `BrandIntro.astro` al layout compartido.

- Se muestra una vez por sesión de pestaña, mediante sessionStorage.
- Presentación mínima de 650 ms cuando el contenido está listo; salida forzada a los 1800 ms más 260 ms de transición.
- No captura foco ni clics; cualquier tecla o pulsación la descarta inmediatamente.
- Se omite con movimiento reducido, JavaScript desactivado o almacenamiento de sesión bloqueado.
- Dispone de un temporizador de salida y un límite de visibilidad CSS independiente.
- No muestra porcentajes de carga simulados ni oculta el contenido a lectores de pantalla.

Comprobaciones en Chrome de la versión compilada: primera entrada visible; navegación y recarga sin repetición; movimiento reducido; JavaScript desactivado; imagen principal retrasada; cierre por teclado; almacenamiento bloqueado. Todas pasaron, sin excepciones de JavaScript.
