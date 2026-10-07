# Gomitas Fortificadas

Página informativa en español sobre una propuesta de gomitas fortificadas con hierro y vitamina C. Incluye formulación, exploración interactiva de ingredientes, comparación de fuentes de hierro y proceso de elaboración.

## Tecnologías

Astro genera una página estática. React implementa los componentes interactivos, Tailwind CSS los estilos, GSAP las animaciones. El desplazamiento entre secciones utiliza el comportamiento nativo del navegador.

## Requisitos e instalación

Node.js >= 22.12.0 y Bun.

```sh
bun install --frozen-lockfile
```

## Desarrollo

Iniciar el servidor en segundo plano y administrarlo con:

```sh
bun run astro dev --background
bun run astro dev status
bun run astro dev logs
bun run astro dev stop
```

## Compilación

```sh
bun run build
```

La salida estática se genera en `dist/`. Para previsualizarla:

```sh
bun run preview
```

La compilación comprueba que el sitio puede generarse; no sustituye las pruebas de interacción en navegador. Actualmente no hay una suite de pruebas automatizadas.

## Estructura

- `src/pages/index.astro`: composición de la página.
- `src/layouts/Layout.astro`: metadatos y estructura HTML.
- `src/components/sections/`: secciones y diálogo de ingredientes.
- `src/components/sections/ProductGallery.astro`: galería con las dos imágenes nuevas, ampliación accesible y navegación por teclado.
- `src/components/ui/Navigation.astro`: navegación de escritorio y menú móvil.
- `src/components/sections/Testimonials.astro`: testimonios de Karen Sanchez y Azumi Chipana proporcionados por el responsable del proyecto.
- `src/styles/global.css`: estilos globales.
- `public/assets/`: imágenes usadas en la página.

- `src/components/ui/MotionEnhancements.astro`: animaciones GSAP, progreso de lectura y navegación activa; respeta la preferencia de movimiento reducido.

## Comprobación manual

Abrir cada punto de la gomita con clic o Enter. Comprobar el cierre mediante botón, Escape y clic en el fondo; el foco debe volver al punto que abrió el diálogo. Con el diálogo cerrado, su botón de cierre no debe aparecer al navegar con Tab. Revisar también que el contenido del diálogo sea accesible mediante desplazamiento en pantallas pequeñas.

La galería admite clic para ampliar, flechas izquierda/derecha para cambiar de imagen y Escape para cerrar. Al cerrar, el foco regresa a la miniatura inicial.
