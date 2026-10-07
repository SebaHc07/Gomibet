# Auditoría responsive

Fecha: 6 de octubre de 2026.

## Alcance y resultados

Se revisaron cabecera, portada, propósito, galería, formulación, puntos interactivos, comparativa, proceso, testimonios y pie de página en el navegador integrado.

Anchos comprobados: 320, 375, 390, 640, 641, 768, 900, 901, 1024, 1280, 1440 y 1920 px, con altura de 900 px. No se detectaron desbordamientos de texto en títulos, párrafos, celdas o testimonios. La página no presentó desplazamiento horizontal en esta matriz. Se comprobaron también los límites de distribución de navegación y tabla.

- Menú a 320 px: apertura, navegación a galería, cierre y foco en la sección de destino correctos.
- Comparativa: tarjetas en móvil y tabla desde 641 px; celdas sin desbordamiento interno.
- Galería a 320 × 740 px: apertura, cambio de imagen y cierre correctos; controles de 44 px e imagen contenida en el visor.
- Explicación interactiva a 320 × 740 y 844 × 390 px: apertura y cierre correctos, sin desbordamiento horizontal. En orientación horizontal el contenido tiene desplazamiento vertical dentro del diálogo; el botón de cierre sigue siendo accesible.
- Al cerrar la explicación, el foco vuelve al punto de origen y se desbloquea el fondo.

## Problemas corregidos

1. La animación GSAP reducía los botones interactivos a escala cero antes de entrar en pantalla. Ahora anima sus elementos decorativos y conserva el área de pulsación del botón.
2. El enlace «Descubre la ciencia detrás» tenía un área demasiado baja. Ahora tiene una altura mínima de 44 px.
3. El diálogo de explicación permitía desplazar el fondo. Ahora bloquea el desplazamiento de la página mientras está abierto y lo restaura al cerrar.
4. El menú móvil cerraba dejando el foco en un enlace oculto. Ahora mueve el foco a la sección elegida.
5. La animación de entrada de los puntos utiliza matchMedia y responde al cambio de preferencia de movimiento reducido.

## Validación y límites

`bun run build` completó correctamente después de las correcciones. Se mantuvieron la información técnica, los testimonios y las imágenes existentes.

Las comprobaciones usan tamaños de ventana del navegador integrado. No sustituyen pruebas en dispositivos físicos ni verifican todos los motores de navegador. La preferencia de movimiento reducido se revisó en el código; no se emuló en esta prueba. Esta auditoría se centra en responsive e interacción y no certifica accesibilidad WCAG ni valida las afirmaciones nutricionales.
