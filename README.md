

<div align="center">

# 🌌 NASA Space Apps Sonora 2025 – Sitio Informativo

<p>🚀 Repositorio del sitio estático oficial del evento local <strong>NASA International Space Apps Challenge – Hermosill## ♿ 8. Accesibilidad & Inclusión
Estado (v1.4.0):
| Área | Implementado | Pendiente |
|------|-------------|-----------|
| Landmarks/roles | `banner`, `main`, `contentinfo`, nav ARIA labels | Region labeling granular para mentors/cards |
| FAQ ARIA | `aria-expanded`, `aria-controls`, toggle teclado | Focus outline personalizado, navegación secuencial |
| Modal accesible | `role="dialog"`, `aria-modal`, focus trap, retorno foco | Añadir aria-labelledby dinámico consistente y live region para acciones |
| Mobile menu | aria-expanded toggle dinámico | Cerrar con Esc |
| Mentor reveal | aria-controls/expanded + transición suave | Anuncio en live region al expandir |
| Reduced motion | Detección y desactivación animación principal | Alternativa visual estática placeholder |
| Color contrast | Paleta base cumple (contrastar grises secundarios) | Auditoría formal WCAG completa |
| Atajos teclado | `/` enfoca búsqueda | Atajo cerrar modal (Esc ya), mover entre tarjetas retos |
| Live regions | Resultados retos y grid | Estado "copiado enlace" accesible |3–5 octubre 2025)</strong>.</p>

<p>Diseñado para ser <strong>ligero, claro, rápido, auto-documentado y fácil de extender</strong>.</p>

<!-- Badges / Logos Tecnologías -->
<p>
	<img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
	<img alt="TailwindCSS" src="https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white" />
	<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=222" />
	<img alt="Three.js" src="https://img.shields.io/badge/Three.js-000000?logo=three.js&logoColor=white" />
	<img alt="NASA" src="https://img.shields.io/badge/NASA-0B3D91?logo=nasa&logoColor=white" />
	<img alt="GitHub Pages" src="https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github" />
</p>

<sub>Versionado manual: v1.4.0 (Optimizaciones UX + WhatsApp + FAQ actualizado) • Última actualización: 2025-09-02</sub>

</div>

---

## 🧭 Índice (TOC)
> Sugerencia: En VS Code presiona ⌘⇧P → “Markdown: Create Table of Contents” para regenerar si cambias encabezados.

1. 🎯 Visión General
2. 🧬 Filosofía del Proyecto
3. 🛠️ Stack Tecnológico (con razones)
4. 🗂️ Estructura & Anatomía (multi‑página)
5. 📦 Dependencias Externas / CDN
6. 🧩 Secciones del Sitio (detalle profundo)
7. 🛰️ Animación Three.js (arquitectura técnica)
8. ♿ Accesibilidad & Inclusión
9. ⚡ Performance & Optimización Potencial
10. 🔐 Seguridad & Buenas Prácticas
11. 🧪 Estrategia de Pruebas Manuales
12. 🚀 Ejecución Local & Despliegue
13. 🧭 SEO & Metadatos (plantillas listas)
14. 🧱 Convenciones de Código & Estilo
15. 🔄 Flujo de Contribución / Git (Conventional Commits)
16. 🗺️ Roadmap Detallado (Prioridades / Impacto)
17. 🧰 Extensiones Futuras (Ideas técnicas)
18. 🩺 Troubleshooting (Problemas comunes)
19. ❓ FAQ Técnica Ampliada
20. 📚 Glosario
21. 📝 Licenciamiento, Marcas & Avisos
22. 🙌 Créditos & Reconocimientos
23. 🧷 Marcadores de Edición Segura

---

## 🎯 1. Visión General
Sitio informativo multi-página orientado a participantes, mentores y comunidad. Minimiza fricción para editar, clonar y desplegar.

Objetivos clave:
| Objetivo | Estado | Comentario |
|----------|--------|------------|
| Carga rápida | ✅ | HTML estático + CDNs diferidos + preload favicon |
| Fácil de mantener | ✅ | Arquitectura plana + separación CSS/JS + scripts modulares |
| Visual atractivo | ✅ | Tailwind + animación 3D optimizada (cap conexiones=800) + planeta centrado |
| Extensible | 🟡 | Datos retos aún embebidos (plan JSON externo) |
| SEO básico | ✅ | Meta description, OG/Twitter, canonical, JSON-LD (Event / FAQ / ItemList) |
| Accesibilidad clave | ✅ Parcial | Roles, aria-expanded, focus trap modal, mobile menu aria-expanded |
| Rendimiento animación | ✅ | Pausa en tab oculta + respeta prefers-reduced-motion |
| Interacción avanzada retos | ✅ | Filtros dificultad, orden, resaltado, URL persistente |
| Comunidad WhatsApp | ✅ | CTA verde prominente en hero para unirse al grupo |
| Información práctica | ✅ | FAQ actualizado con comida, sede visible en hero, bootcamp prominente |

## 🧬 2. Filosofía del Proyecto
Minimalismo pragmático: agrega sólo lo que aporta valor directo a participantes. Evita complejidad accidental (build steps, bundlers) hasta que la escala lo justifique.

Principios:
- “Primero claridad” → Documentación exhaustiva antes de crecer.
- “Costo cognitivo bajo” → Contribuir debe tomar <5 min de onboarding.
- “Separación evolutiva” → Migrar a framework sólo al superar 1 página / múltiples fuentes dinámicas.

## 🛠️ 3. Stack Tecnológico (y por qué)
| Tecnología | Rol | Razón de Elección | Alternativa Futuro |
|------------|-----|-------------------|--------------------|
| HTML5 | Estructura | Estático, universal | Astro / Next.js |
| TailwindCSS CDN | Estilos | Velocidad + consistencia | Hoja CSS propia / PostCSS |
| JavaScript Vanilla | Interacción | Suficiente para toggles | Alpine.js / Svelte |
| Three.js | Fondo animado | Ecosistema maduro | Regl / custom WebGL |
| Shields.io | Badges | Visual rápido | Assets locales |

## 🗂️ 4. Estructura & Anatomía
Arquitectura multi‑página ligera (estado real del repo):
```
index.html       # Landing principal: hero animada, timeline, retos destacados, mentores (reveal), bootcamp (resumen), sede, FAQ
retos.html       # Explorador completo de 19 retos con búsqueda y filtros
bootcamp.html    # Página dedicada al bootcamp presencial (programa + registro externo)
css/styles.css   # Estilos custom complementando Tailwind CDN
js/index.js      # Escena Three.js + menú, FAQ, modal mentor, utilidades
js/retos.js      # Búsqueda avanzada y filtrado de retos (versión extendida)
favicon.svg      # Ícono SVG
README.md        # Esta documentación
```
Nota: README anterior referenciaba `flyer.html` y `js/flyer-hero.js`, pero esos archivos no existen actualmente en el repositorio. Mantener el historial separado si se reintroducen; de lo contrario, ignorar.

### index.html
```
<head> Tailwind config inline, fuentes, Three.js, estilos custom ligeros </head>
<body>
	<header> Navegación (incluye link a Página Retos) </header>
	<main>
		#inicio (Hero + canvas animado + sede visible + CTAs principales + WhatsApp)
		#fechas (timeline vertical)
		#retos (overview 19 retos + 3 tarjetas destacadas + CTAs a página retos)
		#equipo (mentores con reveal 4→9)
		#bootcamp (virtual / local)
		#sede (venue info detallado)
		#faq (acordeón con comida, costos, equipos, etc.)
	</main>
	<footer> Resumen + redes + recordatorios de elegibilidad </footer>
	<script defer> js/index.js (animación + menú + FAQ + modal + mentor reveal) </script>
</body>
```

**Cambios recientes v1.4.0:**
- Hero: Planeta centrado (earth.position.x=0), sede visible con emoji 📍, CTA WhatsApp verde prominente
- Copy actualizado: 19 retos (era 18), call-to-action bootcamp integrado en párrafo principal
- UX: Eliminadas categorías de retos del index (simplificación visual)
- FAQ: Reemplazada pregunta edad por comida disponible
- A11y: Mobile menu con aria-expanded, botón mentor reveal con aria-controls
- Performance: Script mentor reveal migrado de inline a js/index.js

### retos.html
Características actuales (v1.3.0):
- Buscador client‑side con debounce y resaltado `<mark>`.
- Filtros de dificultad (toggle multi-selección) con persistencia en URL (`?d=`) y estado accesible (`aria-pressed`).
- Orden dinámico: relevancia (orden fuente), título A‑Z, “dificultad” (por número de niveles).
- Botón Reset + botón Copiar enlace (clipboard API) con feedback visual (✔ / 🔗).
- Persistencia de búsqueda via parámetro `?q=` restaurada al recargar / compartir.
- Atajo de teclado `/` enfoca el campo de búsqueda.
- Live region (`aria-live="polite"`) para conteo de resultados y grid.
- JSON-LD adicional (`ItemList`) para mejorar semántica de listado.
- Lazy loading de imágenes (`loading="lazy"`).

Optimización futura: externalizar `CHALLENGES_DATA` → `challenges.json`, incorporar precache vía Service Worker y caching ETag.

### bootcamp.html
Página informativa separada para el bootcamp presencial. Incluye:
* Head propio con meta/OG y JSON-LD `Event` (fecha 27 septiembre 2025).
* CTA de registro externo.
* Secciones: hero descriptivo, tarjetas informativas (fecha / sede / breaks / snacks), beneficios, motivos (por qué asistir) y programa horario.
* Reutiliza estilos globales y componentes visuales coherentes (paleta + botones).
* Carga sólo `js/index.js` para compartir lógica de menú y (potencialmente) modal mentor aunque en esta página no se despliegan tarjetas de mentor.

### Bloques JS (estado actualizado v1.4.0)
| Bloque | Función | Estado | Mejora futura |
|--------|---------|--------|---------------|
| Animación Three.js | Escena + canvas hero | Optimizado: cap conexiones=800, pausa hidden tab, reduce motion, planeta centrado | Spatial hashing / limitar grado por partícula |
| Partículas + Líneas | Fondo dinámico | Cap de 800 conexiones/frame | Instancing + heurística distancia adaptativa |
| Menú móvil | Toggle en todas las páginas | OK + aria-expanded toggle | Cerrar con *Esc* |
| FAQ | Acordeón exclusivo + flecha ▲/▼ | ARIA + teclas Enter/Espacio | Añadir navegación con flechas arriba/abajo |
| Modal Mentor | Focus trap + retorno foco (solo data enriquecida para Edgar León) | ARIA dialog base | Enriquecer dataset completo + feedback live |
| Mentor Reveal | 4 visibles → expandir a 9 | Migrado de inline a js/index.js + aria-controls/expanded + transición suave | Clase utilitaria en lugar de display inline |
| Retos (búsqueda) | Filtro + resaltado | Avanzado (19 retos confirmados) | Autocomplete + extracción a JSON externo |
| Filtros dificultad | Multi-estado + persistencia | OK | Botón “solo uno” (ctrl+click) |
| Ordenamiento | Select simple | OK | Orden por “popularidad” (si métrica futura) |
| Copiar enlace | Clipboard API | Feedback ✔ | Toast accesible |

## 📦 5. Dependencias Externas
| Recurso | URL | Notas |
|---------|-----|-------|
| Tailwind CDN | https://cdn.tailwindcss.com | Config extendida inline |
| Inter Font | Google Fonts | Sugerir `preconnect` (ya incluido) |
| Three.js r128 | CDNJS | Versión fija evita rupturas |

## 🧩 6. Secciones (Detalle Profundo)
Cada sección responde a una pregunta del usuario final:
| Sección | Pregunta que responde | KPI UX |
|---------|-----------------------|--------|
| Hero | ¿Qué es y cuándo? | Tiempo hasta entender propósito (<3s) |
| Fechas | ¿Cuándo sucede cada hito? | Claridad línea temporal |
| Retos | ¿Qué puedo construir? | Clicks al enlace oficial |
| Mentores | ¿Quién me apoya? | Tiempo para encontrar skill |
| Bootcamp | ¿Cómo me preparo? | Registro Bootcamp / visitas |
| Sede | ¿Dónde voy? | Reducción dudas logísticas |
| FAQ | ¿Tengo dudas? | Disminución de preguntas repetidas |

## 🛰️ 7. Animación Three.js
Características técnicas (index.html):
- Geometría: `SphereGeometry(1.8,24,24)` wireframe, opacidad ligera.
- Partículas: 300 puntos pseudoaleatorios en cubo 30³.
- Conexiones: doble bucle O(n²) (300→ ~45k comparaciones). Aceptable hoy. Optimización futura: spatial hashing (grid) o limitar grado.
- Render loop: `requestAnimationFrame` sin throttling.

Optimizaciones sugeridas:
| Tipo | Acción | Ganancia |
|------|--------|----------|
| CPU | Limitar conexiones por partícula (ej. <= 6) | Reduce GC / buffers |
| GPU | Usar `BufferGeometry` reutilizable (ya) | Mantiene VRAM estable |
| Energía | Pausar cuando pestaña no visible (Page Visibility API) | Ahorro batería |

## ♿ 8. Accesibilidad & Inclusión
Estado (v1.3.0):
| Área | Implementado | Pendiente |
|------|-------------|-----------|
| Landmarks/roles | `banner`, `main`, `contentinfo`, nav ARIA labels | Region labeling granular para mentors/cards |
| FAQ ARIA | `aria-expanded`, `aria-controls`, toggle teclado | Focus outline personalizado, navegación secuencial |
| Modal accesible | `role="dialog"`, `aria-modal`, focus trap, retorno foco | Añadir aria-labelledby dinámico consistente y live region para acciones |
| Reduced motion | Detección y desactivación animación principal | Alternativa visual estática placeholder |
| Color contrast | Paleta base cumple (contrastar grises secundarios) | Auditoría formal WCAG completa |
| Atajos teclado | `/` enfoca búsqueda | Atajo cerrar modal (Esc ya), mover entre tarjetas retos |
| Live regions | Resultados retos y grid | Estado “copiado enlace” accesible |

## ⚡ 9. Performance & Optimización Potencial
Resumen técnico actual:
- Scripts `defer` + pausa animación fuera de foco → menor bloqueo main thread.
- Preload favicon + prefetch `retos.html` (mejora navegación percibida).
- Animación limitada (cap conexiones=800) → reducción CPU respecto a O(n²) completo.
- Imágenes placeholder (pendiente optimizar formato real WebP/AVIF).

Oportunidades (prioridad ordenada):
| Mejora | Impacto | Costo | Notas |
|--------|---------|-------|-------|
| Purga Tailwind (PurgeCSS) | ↓ CSS transfer | Medio | Requiere build step mínimo |
| Split animación en módulo lazy | ↓ JS inicial | Bajo | Cargar solo above-the-fold |
| Reemplazar placeholders por WebP | ↓ Bytes | Bajo | Añadir `type` fallback |
| Service Worker cache estático | FCP offline | Medio | Precaución invalidación |
| SRI + CSP | Seguridad | Bajo | Añadir cabeceras en hosting |
| Preload Inter (woff2) | LCP tipográfico | Bajo | Evita FOIT |

## 🔐 10. Seguridad & Buenas Prácticas
Estado:
- Superficie de ataque baja (solo lectura, sin formularios).
- Pendiente: Subresource Integrity para Tailwind y Three.js.
- Pendiente: Política CSP (al menos `default-src 'self'; script-src 'self' cdnjs.cloudflare.com cdn.tailwindcss.com` ...).
- Recomendado: Versionar assets críticos (cache busting) cuando se introduzca build.

## 🧪 11. Estrategia de Pruebas Manuales (Smoke Tests)
| Nº | Caso | Pasos | Resultado Esperado |
|----|------|-------|--------------------|
| 1 | Navegación interna | Click en cada item del menú | Scroll suave correcto |
| 2 | Menú móvil | Reducir viewport, abrir/cerrar | Toggle fiable sin solapar + aria-expanded |
| 3 | FAQ acordeón | Abrir varias preguntas | Solo una visible a la vez |
| 4 | Animación | Esperar 10s | FPS fluido, sin error consola, planeta centrado |
| 5 | Resize | Cambiar tamaño ventana | Canvas ajusta proporción |
| 6 | Mentor reveal | Click "Ver todos los mentores" | Expandir 4→9, botón desaparece suavemente |
| 7 | WhatsApp CTA | Click botón verde en hero | Abre enlace WhatsApp correctamente |
| 8 | FAQ comida | Abrir pregunta comida | Respuesta afirmativa clara |

## 🚀 12. Ejecución Local & Despliegue
### Local
```bash
# Opción rápida (abrir directamente)
open index.html

# Servidor Python
python3 -m http.server 5173

# Node (npx serve)
npx serve
```
Visita: http://localhost:5173

### GitHub Pages
Settings → Pages → Source: `main` + root → Guardar.

### Netlify / Vercel
Arrastrar & soltar la carpeta o conectar el repo (build = none).

## 🧭 13. SEO & Metadatos (Implementado)
Implementado en `index.html`:
- Meta description, canonical, theme-color, OG + Twitter, JSON-LD (`Event` + `FAQPage`).
- Favicon vectorial optimizado (`favicon.svg` blanco, sin fondo) para escalabilidad.
Implementado en `retos.html`:
- Meta description específica + OG/Twitter + JSON-LD (`ItemList`).

Pendiente / Próximo:
- Generar imagen OG real (1200x630) con branding consistente.
- Sitemap XML + robots.txt.
- Breadcrumb JSON-LD (escala si se añaden nuevas páginas). 

## 🧱 14. Convenciones de Código & Estilo
| Área | Regla |
|------|-------|
| Clases custom | Prefijo `app-` (ej: `app-contact-form`) |
| Constantes JS | UPPER_SNAKE_CASE |
| Funciones JS | camelCase |
| Comentarios | Explicar “por qué”, no “qué” si es obvio |
| Commit messages | Conventional Commits |

## 🔄 15. Flujo de Contribución
1. Crear rama `feature/...` o `fix/...`.
2. Cambios mínimos y atómicos.
3. Ejecutar smoke tests (sección 11).
4. Pull Request con checklist completado.

### Conventional Commits
`feat: añade formulario de contacto`
`fix: corrige cálculo de conexiones en animación`
`docs: agrega sección SEO`
`refactor: extrae lógica acordeón`

## 🗺️ 16. Roadmap Detallado
| ID | Título | Descripción | Prioridad | Impacto |
|----|--------|-------------|-----------|---------|
| R1 | SEO Meta | Metadatos + OG + imagen | ✅ (imagen OG real pendiente) | Descubribilidad |
| R2 | Filtrado Mentores | Categorías / búsqueda | Pendiente | Usabilidad |
| R3 | Contacto | Form + almacenamiento (formsubmit / email) | Pendiente | Conversión |
| R4 | Accesibilidad A11y | Roles + aria + focus visible | ✅ Parcial (mobile menu + mentor reveal + modal base) | Inclusión |
| R5 | PWA Básica | Manifest + ícono + offline shell | Pendiente | Experiencia móvil |
| R6 | Internacionalización | EN/ES toggle | Pendiente | Alcance global |
| R7 | Mapa Interactivo | Embed Leaflet / Maps | Pendiente | Logística |
| R8 | Externalizar datos retos | JSON + fetch + cache | Pendiente | Mantenibilidad |
| R13 | Unificar conteo retos | Ajustar texto index (18→19) | ✅ Completado | Consistencia UX |
| R14 | Dataset mentores ampliado | Añadir LinkedIn + imagen + áreas | Pendiente | Credibilidad |
| R15 | Accesibilidad modal avanzada | Añadir anuncio live + cierre Esc/Shift+Esc y focus sentinels | Pendiente | Inclusión |
| R16 | Extraer script reveal mentores | Mover inline a `js/index.js` | ✅ Completado | Limpieza código |
| R17 | Optimización hero UX | Planeta centrado + sede visible + WhatsApp CTA | ✅ Completado | Conversión |
| R18 | FAQ actualizado | Comida vs edad + JSON-LD sincronizado | ✅ Completado | Información práctica |
| R19 | Simplificación visual | Remover categorías retos del index | ✅ Completado | Claridad UX |
| R9 | SRI + CSP | Integridad + cabeceras | Pendiente | Seguridad |
| R10 | Purga Tailwind | Build con PurgeCSS | Pendiente | Rendimiento |
| R11 | OG Image Generator | Script dinámico o estático | Pendiente | Branding SEO |
| R12 | Analytics Privacy | Métricas sin tracking invasivo | Nuevo | Observabilidad |

## 🧰 17. Extensiones Futuras (Ideas)
- Sistema de registro local (si se requiere control interno).
- Panel de mentores dinámico via JSON.
- Integración con API NASA (ej: Astronomy Picture of the Day) en sección inspiracional.
- Generación estática con Astro cuando crezcan páginas.

## 🩺 18. Troubleshooting
| Problema | Causa probable | Solución |
|----------|----------------|----------|
| Canvas no se adapta | Falta resize event | Verificar listener activo |
| Lag en móviles viejos | O(n²) conexiones | Reducir `particleCount` a 150 |
| Scroll no suave en Safari viejo | Sin soporte nativo | Polyfill o remover handler JS |
| FAQ no colapsa | Clase `hidden` no aplicada | Revisar listener en `.faq-question` |

## ❓ 19. FAQ Técnica Ampliada
**¿Por qué CDN y no npm?** Minimiza barreras; mejora TTFB percibido inicial.

**¿Cómo versionar cambios grandes?** Crear tag (`git tag v1.2.0 && git push --tags`).

**¿Cómo añadir un script externo nuevo?** Coloca `<script defer src="..."></script>` antes del script inline principal.

**¿Se puede añadir TypeScript?** Sí: migrar a build ligero (esbuild) sólo cuando haya lógica sustancial (>500 líneas JS).

## 📚 20. Glosario
| Término | Definición |
|---------|-----------|
| CTA | Call To Action (llamado a acción principal) |
| Hero | Sección principal superior de un sitio |
| Timeline | Representación cronológica visual |
| PWA | Progressive Web App |

## 📝 21. Licenciamiento, Marcas & Avisos
- Recomendado añadir `LICENSE` (MIT) + nota: “NASA y Space Apps son marcas registradas; este sitio es informativo del evento local”.
- Evitar uso de logos oficiales sin lineamientos aprobados.

## 🙌 22. Créditos & Reconocimientos
Organización local, mentores, comunidad académica y voluntariado tecnológico. Contribuciones abiertas.

## 🧷 23. Marcadores de Edición Segura
Usa estos comentarios para ubicar futuras inserciones:
```html
<!-- INSERT: NUEVA-SECCION-ANTES-DEL-FOOTER -->
```
```html
<!-- INSERT: SCRIPTS-EXTRAS-ABRIR -->
<!-- INSERT: SCRIPTS-EXTRAS-CERRAR -->
```
Cuando modularices JS: crea carpeta `js/` y referencia con `<script defer src="js/hero-scene.js"></script>`.

---

### 🛰️ TL;DR
Sitio estático multi‑página (landing, retos, bootcamp) con animación Three.js optimizada y buscador avanzado de 19 retos. **v1.4.0**: Hero optimizado (planeta centrado, sede visible, WhatsApp CTA), FAQ actualizado (comida), scripts modularizados, accesibilidad mejorada. Próximos pasos: externalizar datos (R8), OG image real, PWA básica y SRI/CSP.

---

<div align="center">Hecho con ✨ para impulsar la curiosidad, el aprendizaje y la exploración. ¡Contribuye! 🤝</div>


