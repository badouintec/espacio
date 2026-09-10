# Espacio y Sostenibilidad — sitio web

Sitio de la ONG **Espacio y Sostenibilidad** (democratizar la complejidad planetaria para un planeta más sano; ver el panorama completo desde el espacio), organizadora del Coloquio. Anuncia el **IV Coloquio Internacional de Espacio y Sostenibilidad** (Salud ambiental y territorio · 10, 11 y 12 de febrero de 2027 · Ciudad de México), con archivo de las ediciones 2023 (Guadalajara), 2024 (Morelia) y 2025 (Hermosillo).

Estado editorial: **anuncio inicial / save the date**. Primera Circular, Convocatoria de Carteles, sede específica, programa y registro se publican como *Próximamente* hasta que existan sus destinos reales.

## Stack

- HTML estático + Tailwind (CDN) + CSS propio (`css/styles.css`) + JavaScript vanilla (`js/index.js`).
- Sin build. Se despliega tal cual en Cloudflare Pages (`wrangler.toml`, `_headers`, `_redirects`).

## Estructura

| Ruta | Contenido |
| ---- | --------- |
| `index.html` | Home 2027: hero, “El territorio también determina nuestra salud”, tres aplicaciones (Black Marble, emisiones, de observar a decidir), Primera Circular y Carteles, referentes 2027, cuatro ediciones, cobertura, FAQ, CTA final. |
| `ediciones.html` | Historia 2023 → 2024 → 2025 → 2027 y **archivo completo de Hermosillo 2025** (programa, ponentes, temas, fuentes). |
| `referencias.html` | Todas las fuentes: referentes científicos 2027 (Black Marble, U.S. GHG Center) y archivo/cobertura por edición. |
| `data/references.json` | **Única fuente de verdad** de las referencias (título, institución, año, URL, categoría, descripción, thumbnail). |
| `js/references.data.js` | Generado a partir del JSON; lo consumen las páginas para pintar las tarjetas. |
| `assets/thumbs/` | Miniaturas cacheadas de fuentes públicas (NASA, earth.gov, gob.mx…). Las de medios se enlazan en caliente con fallback local. |
| `assets/img/` | Logo, cartel oficial 2027 (`hero-2027.jpg`, hero a sangre; `hero-2027-source.png` original) e imagen Open Graph (`og-2027.jpg`, generada con `scripts/make-og.mjs`). |
| `scripts/` | Utilidades locales (Node ≥ 18, sin dependencias). |
| `docs/spec-edicion-2027.md` | Documento maestro de contenido y criterios editoriales de la edición 2027. |
| `archive/2025/` | Material heredado de 2025 que no forma parte del sitio vigente: respaldo del home anterior, página de retos de Space Apps Sonora (`/retos.html` redirige aquí), imágenes de hero y documentación de 2025. |

## Referencias y miniaturas

```bash
node scripts/build-references.mjs            # resuelve thumbnails solo para entradas sin imagen
node scripts/build-references.mjs --refresh  # vuelve a resolver todo
```

Orden de extracción: `og:image` → `twitter:image` → `link[rel=image_src]` → primera imagen editorial → favicon → fallback local (SVG con iniciales, generado en el navegador). Las URLs relativas se normalizan, hay timeout, y una fuente caída nunca rompe el proceso: la tarjeta conserva la imagen previa o usa el fallback.

- `imageOverride` en el JSON fuerza una imagen editorial concreta (usado en earth.gov, cuyo `og:image` es un logo genérico).
- `status: "offline"` marca una referencia histórica cuyo sitio está caído (EO4SDG): se muestra sin enlace activo ni thumbnail.
- `homeOrder` define qué tarjetas aparecen en el home (máx. 6 técnicas + 6 de archivo).
- `scripts/extract-rendered-images.mjs` (opcional, requiere Playwright) ayuda a encontrar la imagen editorial de páginas renderizadas con JavaScript.
- `scripts/make-og.mjs` genera la imagen Open Graph a partir del cartel (requiere Playwright + Chrome).

## Activar documentos cuando existan

En `index.html`, agregar `data-doc-url="docs/primera-circular-2027.pdf"` (y opcionalmente `data-doc-size="1.2 MB"`) al contenedor `.doc-card__action` correspondiente. `js/index.js` convierte el botón “Próximamente” en “Descargar Primera Circular” y cambia el estado a “Disponible”. Lo mismo aplica a la Convocatoria de Carteles.

## Cautelas editoriales (ver `docs/spec-edicion-2027.md`)

- NASA Black Marble y el U.S. Greenhouse Gas Center se citan como **referentes científicos y tecnológicos**, no como organizadores, aliados o patrocinadores de 2027.
- Black Marble mide radiancia nocturna, no salud; Black Marble HD (30 m) es un producto modelado para visualización.
- Muchos datasets del U.S. GHG Center cubren Estados Unidos; gases de efecto invernadero ≠ contaminantes del aire.
- No inventar sede, ponentes, programa, precios, fechas límite ni categorías de carteles.

## Sistema visual

Derivado del cartel oficial: cielo azul-noche (`--sky`), teal del logotipo (`--teal`), ondas de puntos y líneas de contorno dibujadas en canvas (`canvas.waves`, `js/index.js`), IBM Plex Mono para datos y etiquetas, anillos como marcadores. Los tokens viven al final de `css/styles.css` ("Sistema visual 2027 v2" y "v3"). La v3 añade la gramática editorial tomada de nasa.gov, NASA Earth Science, GEO y ESA: secciones `sec--white/paper/sky/deep`, escala `display`, cabeceras `sec-head`, franja índice `index-strip`, listas de reglas finas `hairline-list`, reportajes `feature`, tarjetas con imagen dominante `ref-card--overlay`, créditos `credit` y pie `site-footer`.

## Desarrollo local

```bash
python3 -m http.server 8787   # o cualquier servidor estático
```
