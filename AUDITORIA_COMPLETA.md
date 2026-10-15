# Auditoría completa de la página

Fecha: 15 de octubre de 2026. Proyecto: Gomitas Fortificadas.

## Resultado

La versión estática compilada pasa las pruebas funcionales descritas abajo. Se corrigieron problemas de estructura, movimiento reducido, legibilidad y peso de imágenes. Quedan observaciones sobre el contenido y datos de publicación; el resultado técnico no valida la formulación ni sus afirmaciones de salud.

## Alcance

Se revisaron todos los componentes usados por la página: cabecera y menú, portada, propósito, galería, formulación, exploración de ingredientes, comparativa, proceso, consideraciones técnicas, testimonios, cierre y pie. También se revisaron layout, metadatos, CSS, scripts, configuración y referencias a recursos locales.

| Área | Resultado comprobado |
| --- | --- |
| Compilación | `bun run build` completado sin errores. |
| Responsive | Chrome, anchos 320, 360, 375, 390, 414, 640, 641, 768, 900, 901, 1024, 1280, 1440 y 1920 px; sin desbordamiento horizontal ni texto desbordado en títulos, párrafos, citas y celdas. |
| Imágenes | Las imágenes de las secciones cargaron correctamente en la matriz. Galería conserva acceso al JPG original. |
| Navegación | Destinos de todos los enlaces internos existentes; ningún ID duplicado. Menú móvil cierra y mueve el foco a la sección elegida. |
| Galería | Abrir, siguiente, anterior mediante teclado, Escape, cierre y foco de retorno comprobados a 320 px. |
| Ingredientes interactivos | Los tres diálogos abren en 320 × 740 y 844 × 390 px; sin desbordamiento horizontal, con bloqueo del fondo, Escape y retorno del foco. También se comprobó el botón de cierre. |
| Animaciones | Recorrido con movimiento normal en 390, 901 y 1440 px: ningún bloque de revelación quedó con opacidad cero. |
| Movimiento reducido | Cambio de preferencia emulado en Chrome; el resumen queda visible, sin transformación. |
| Sin JavaScript | Portada y testimonios presentes; imágenes abren por enlaces nativos. Se añadió alternativa desplegable para los tres ingredientes. |
| Errores de ejecución | Sin excepciones de JavaScript ni respuestas HTTP locales de error en las pruebas de producción. |
| Estructura | Un H1, idioma español y jerarquía de encabezados corregida en formulación y proceso. |
| Seguridad básica del código | No se encontraron formularios de captura, llamadas a APIs, almacenamiento local ni inserciones mediante innerHTML en el código de la página. Esto no equivale a una auditoría de seguridad de dependencias o del hosting. |

## Correcciones realizadas

- Formulación y proceso utilizan H2 como encabezados de sección y niveles descendentes para su contenido, manteniendo su diseño.
- El resumen del proyecto usa GSAP matchMedia; cambiar a movimiento reducido restaura el contenido. Su entrada termina en lugar de mantener el texto semitransparente durante el desplazamiento.
- Se añadió foco visible al control del menú móvil.
- Se mejoraron el color de etiquetas secundarias y dos acentos de texto para facilitar la lectura. No se certificó todo el contraste WCAG.
- Se añadieron dimensiones explícitas y carga diferida a las imágenes de formulación y anatomía.
- Se generaron WebP para las cinco imágenes utilizadas. Se preservaron los originales. El preload de portada apunta a la misma imagen que se muestra.
- Se añadieron conexiones anticipadas a los servidores de fuentes y se reemplazó el favicon de Astro por la marca «ni».
- Se corrigió «Hydration» a «Hidratación» y se unificó «y» en los nombres de etapas.
- Los diálogos contienen el desplazamiento para reducir saltos hacia la página de fondo.
- La exploración de ingredientes ofrece desplegables nativos cuando JavaScript está desactivado.

### Peso de las imágenes usadas

| Recurso | JPG original | WebP mostrado |
| --- | ---: | ---: |
| Portada | 634.982 B | 75.548 B |
| Anatomía | 532.977 B | 51.592 B |
| Sinergia | 681.810 B | 65.104 B |
| Galería 1 | 617.137 B | 63.618 B |
| Galería 2 | 769.658 B | 124.816 B |
| Total | 3.236.564 B | 380.678 B |

Reducción aproximada del 88,2 % en estos recursos. Es una comparación de archivos, no una medición de tiempo de carga o de Core Web Vitals. Abrir el visor descarga la imagen JPG original seleccionada.

## Observaciones pendientes de contenido

1. **Dosificación infantil:** el texto indica 7–10 mg por gomita como 50–70 % del VDR sin definir la edad o referencia. No debe tomarse como una pauta validada. La [ficha del NIH sobre hierro](https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/) distingue recomendaciones por edad; confirmar con el responsable técnico el aporte y su porcentaje antes de publicar como recomendación de consumo.
2. **Afirmaciones categóricas:** «elimina el estreñimiento, las náuseas», «absorción intacta» y «hasta por 3 veces» requieren fuentes específicas aplicables a esta formulación. La ficha general del NIH no demuestra estas afirmaciones para el producto del proyecto.
3. **Ficha y testimonios:** Karen menciona quinoa, betabel y naranja; la ficha presenta bisglicinato ferroso, vitamina C y alternativas de gelificación. Se conservaron ambos, tal como se solicitó; aún debe aclararse si corresponden al mismo producto.
4. **Gelificación:** se describen pectina y gelatina como alternativas mientras el punto interactivo presenta una matriz vegetal. Confirmar cuál utiliza el producto final antes de comunicar que es apto para veganos.
5. **Testimonios:** se conservaron los textos y atribuciones proporcionados. La autorización de publicación no es verificable desde el repositorio.

## Publicación y límites

- Se dispone de título, descripción, idioma, viewport, favicon y metadatos Open Graph de texto. Falta conocer el dominio público para definir URL canónica y metadatos de URL/imagen social completos; no se inventaron URLs.
- La revisión funcional final usa la salida `dist/`, servida temporalmente en local. El servidor de desarrollo mostró respuestas 504 de dependencias precompiladas después de compilar mientras estaba activo; ese fallo no apareció en producción. Tras reiniciar el servidor, se verificaron también galería, diálogo y alternativa sin JavaScript en desarrollo, sin errores locales.
- Las pruebas se ejecutaron en Chrome de escritorio con tamaños de ventana y preferencia de movimiento emulados. No se probaron Safari, Firefox, dispositivos físicos, lectores de pantalla reales ni todos los escenarios de zoom o conexión lenta.
- No se ejecutaron Lighthouse, axe, análisis de vulnerabilidades de dependencias ni una certificación WCAG. Tampoco se verificó la configuración del proveedor de hosting o un dominio publicado.
- La auditoría anterior permanece en `RESPONSIVE_AUDIT.md`. Las evidencias de esta revisión están en `audits/2026-10-15/browser-results.json` y `audits/2026-10-15/motion-results.json`.
