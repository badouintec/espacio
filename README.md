

<div align="center">

# 🌌 NASA Space Apps Sonora 2025 – Sitio Informativo

# 🌌 III Coloquio Internacional de Espacio y Sostenibilidad 2025

<div align="center">

[![Deploy Status](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-FF6600?logo=cloudflare&logoColor=white)](https://espacio2025.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=222)](#)
[![Responsive](https://img.shields.io/badge/Mobile%20First-Responsive-4CAF50)](#)

**Sitio web oficial del III Coloquio Internacional de Espacio y Sostenibilidad**  
*Hermosillo, Sonora • 3 de octubre de 2025*

🚀 **Ciencia y cooperación internacional para la gestión sostenible del agua**

</div>

---

## 📋 Tabla de Contenidos

- [🌟 Características Principales](#-características-principales)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎨 Diseño y UX](#-diseño-y-ux)
- [⚡ Performance](#-performance)
- [♿ Accesibilidad](#-accesibilidad)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Desarrollo Local](#-desarrollo-local)
- [🚀 Deployment](#-deployment)
- [📊 SEO y Analytics](#-seo-y-analytics)
- [🔄 Historial de Cambios](#-historial-de-cambios)

---

## 🌟 Características Principales

### ✨ **Experiencia de Usuario**
- 📱 **Mobile-First Responsive** - Perfecto en todos los dispositivos
- 🎯 **Hero Section Impactante** - Título escalable con gradientes
- 🎨 **Tema de Colores Profesional** - Paleta azul marino espacial
- 🔄 **Animaciones Fluidas** - Hover effects y transiciones suaves
- 📋 **Navegación Intuitiva** - Menú hamburguesa funcional

### 🚀 **Funcionalidad Avanzada**
- 🤖 **FAQ Accordion Dinámico** - JavaScript puro, sin dependencias
- 📅 **Programa Interactivo** - Cronograma detallado del evento
- 🎯 **Temas Prioritarios** - Cards con hover effects
- 🏆 **Ediciones Anteriores** - Historial 2023-2024 con ubicaciones
- 📧 **Integración Luma** - Registro externo optimizado

### ⚡ **Performance & SEO**
- 🔍 **SEO Optimizado** - Meta tags, Open Graph, Twitter Cards
- 📊 **Schema.org Structured Data** - Event + FAQ markup
- 🖼️ **Imágenes Optimizadas** - WebP support, lazy loading
- ⚡ **Carga Rápida** - CSS y JS minificado, CDN optimizado
- 🌐 **PWA Ready** - Service worker y manifest.json

---

## 🛠️ Stack Tecnológico

### **Frontend Core**
```html
HTML5 Semantic          → Estructura accesible y semántica
TailwindCSS v3.4        → Utility-first styling, mobile-first
Vanilla JavaScript      → Sin frameworks, máximo performance
CSS Variables           → Theming dinámico y consistencia
```

### **Tipografía & Assets**
```css
Google Fonts            → Lato (text) + Josefin Sans (headings)
SVG Icons              → Iconografía vectorial escalable
PNG Optimized          → Hero images y logos comprimidos
Favicon Multi-format   → PNG, ICO, Apple Touch Icon
```

### **Integrations & CDN**
```javascript
TailwindCSS CDN        → Fast prototyping y desarrollo
Google Fonts API       → Performance font loading
Luma Events            → Registro externo de participantes
Cloudflare Pages       → Hosting, CDN global y SSL
```

---

## 📁 Estructura del Proyecto

```
espacio/
├── 📄 index.html              # Página principal
├── 📋 ediciones.html          # Historial de ediciones
├── 🎯 retos.html              # Información de retos
├── 🎨 css/
│   └── styles.css             # Estilos customizados + variables
├── ⚡ js/
│   ├── index.js               # Funcionalidad principal
│   └── index_broken.js        # Backup/debugging
├── 🖼️ assets/
│   ├── favicon.png            # Favicon principal
│   ├── logoblanco.png         # Logo header/footer
│   ├── imageHERO.png          # Hero background principal
│   ├── imageHERO2.png         # Hero alternativo
│   └── imagehero3.png         # Hero actual en uso
├── 📋 README.md               # Esta documentación
└── 📝 sitionuevo.md           # Notas de desarrollo
```

---

## 🎨 Diseño y UX

### **Paleta de Colores**
```css
/* Colores Principales */
--coloquio-navy: #132542      /* Azul marino principal */
--coloquio-blue: #22395a      /* Azul secundario */
--coloquio-ocean: #2D89EF     /* Azul brillante (CTAs) */
--coloquio-bright: #1A365D    /* Azul oscuro (hover) */
--coloquio-light: #F4F5F7     /* Gris claro (backgrounds) */
--coloquio-gray: #7A8A99      /* Gris texto secundario */
```

### **Tipografía Responsive**
- **Headings**: Josefin Sans (600-900 weight)
- **Body**: Lato (400-700 weight)
- **Scale**: 14px mobile → 16px desktop
- **Line Height**: 1.6 óptimo para legibilidad

### **Breakpoints Tailwind**
```css
sm: 640px    /* Tablet pequeño */
md: 768px    /* Tablet */
lg: 1024px   /* Laptop */
xl: 1280px   /* Desktop */
2xl: 1536px  /* Desktop grande */
```

---

## ⚡ Performance

### **Optimizaciones Implementadas**
- ✅ **CSS Critical Path** - Estilos inline en `<head>`
- ✅ **JavaScript Defer** - Carga no-bloqueante
- ✅ **Image Optimization** - Compresión y dimensiones correctas
- ✅ **Font Display Swap** - Evita FOIT (Flash of Invisible Text)
- ✅ **Preload Resources** - Assets críticos prioritarios

### **Métricas Target**
```
Lighthouse Score Goal:
Performance: 95+
Accessibility: 100
Best Practices: 100
SEO: 100

Core Web Vitals:
LCP: < 2.5s
FID: < 100ms
CLS: < 0.1
```

### **Oportunidades de Mejora**
- 🔄 **WebP Conversion** - Convertir PNG a WebP (-60% tamaño)
- 🔄 **Image Lazy Loading** - Implementar intersection observer
- 🔄 **Service Worker** - Cache estratégico para repeat visits
- 🔄 **Critical CSS** - Inline critical path, defer non-critical

---

## ♿ Accesibilidad

### **WCAG 2.1 AA Compliance**
- ✅ **Semantic HTML** - Estructura lógica con landmarks
- ✅ **ARIA Labels** - Navigation y interactive elements
- ✅ **Keyboard Navigation** - Tab order y focus management
- ✅ **Color Contrast** - 4.5:1 minimum ratio
- ✅ **Screen Reader** - Alt text y descriptive content

### **Features Implementadas**
```html
<!-- Navegación accesible -->
<nav aria-label="Navegación principal">
<button aria-expanded="false" aria-controls="mobile-menu">

<!-- FAQ accordion -->
<button aria-expanded="false" aria-controls="faq-answer-1">

<!-- Skip links -->
<a href="#contenido-principal" class="sr-only">Saltar al contenido</a>
```

---

## 📱 Responsive Design

### **Mobile-First Approach**
```css
/* Base: Mobile (320px+) */
.hero-title { font-size: 2rem; }

/* Tablet */
@screen sm { .hero-title { font-size: 2.5rem; } }

/* Desktop */
@screen lg { .hero-title { font-size: 4rem; } }
```

### **Grid Systems**
- **Temas**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- **Beneficios**: `grid-cols-1 md:grid-cols-3`
- **Footer**: `grid-cols-1 lg:grid-cols-12`

### **Testing Devices**
- ✅ iPhone SE (375px)
- ✅ iPhone 12 (390px)
- ✅ iPad (768px)
- ✅ iPad Pro (1024px)
- ✅ Desktop (1440px+)

---

## 🔧 Desarrollo Local

### **Setup Rápido**
```bash
# 1. Clonar repositorio
git clone https://github.com/badouintec/espacio.git
cd espacio

# 2. Servir localmente (múltiples opciones)
# Opción A: Python
python -m http.server 8000

# Opción B: Node.js
npx serve .

# Opción C: PHP
php -S localhost:8000

# 3. Abrir en navegador
open http://localhost:8000
```

### **Desarrollo con Live Reload**
```bash
# Usando Live Server (VS Code extension)
# O usando browser-sync
npx browser-sync start --server --files "*.html,css/*.css,js/*.js"
```

---

## 🚀 Deployment

### **Cloudflare Pages**
- 🌐 **URL**: [https://espacio2025.com](https://espacio2025.com)
- 🔄 **Auto Deploy**: Push to `main` branch
- 🌍 **CDN Global**: Edge locations worldwide
- 🔒 **SSL**: Automático con Let's Encrypt

---

## 📊 SEO y Analytics

### **Meta Tags Completos**
```html
<!-- Primary Meta Tags -->
<title>III Coloquio Internacional de Espacio y Sostenibilidad 2025</title>
<meta name="description" content="Resiliencia climática del agua mediante tecnología espacial. 3 octubre 2025, Hermosillo, Sonora">

<!-- Open Graph -->
<meta property="og:title" content="III Coloquio Internacional de Espacio y Sostenibilidad 2025">
<meta property="og:description" content="Ciencia y cooperación internacional para la gestión sostenible del agua">
<meta property="og:image" content="https://espacio2025.com/og-image.png">
<meta property="og:url" content="https://espacio2025.com">
```

### **Structured Data**
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "III Coloquio Internacional de Espacio y Sostenibilidad 2025",
  "startDate": "2025-10-03T08:00:00-07:00",
  "location": {
    "@type": "Place",
    "name": "Tecnológico de Monterrey, Campus Sonora Norte"
  }
}
```

---

## 🔄 Historial de Cambios

### **v2.0.0 - Auditoría Completa y Optimización** *(Septiembre 2025)*
- 🚀 **Responsive Enhancement**: Hero section con breakpoints perfectos
- 🎨 **Card Improvements**: Hover animations y mejor tipografía
- 🔧 **Hamburger Menu Fix**: JavaScript corregido para móviles
- 📝 **Content Update**: Nombres completos ediciones anteriores
- 🧹 **Code Cleanup**: Eliminación secciones obsoletas
- 📚 **README Rewrite**: Documentación completa y profesional

### **v1.4.0 - Contenido Oficial** *(Septiembre 2025)*
- 📋 **FAQ Oficial**: 10 preguntas oficiales reemplazadas
- 🎯 **Temas Prioritarios**: 6 temas oficiales actualizados
- 🏆 **Footer Rediseño**: Layout profesional NASA-worthy
- 🔗 **Luma Integration**: Registro externo optimizado
- 🧹 **Cleanup Masivo**: Eliminación secciones innecesarias

---

## 🤝 Contribuciones

### **Para Desarrolladores**
```bash
# 1. Fork el repositorio
# 2. Crear feature branch
git checkout -b feature/nueva-funcionalidad

# 3. Commit con estilo
git commit -m "feat: añadir nueva sección de sponsors"

# 4. Push y crear PR
git push origin feature/nueva-funcionalidad
```

### **Estilo de Commits**
- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Documentación
- `style:` Formatting, CSS
- `refactor:` Reestructuración
- `perf:` Performance improvements

---

## 📞 Contacto

**Organización**: Tecnológico de Monterrey, Campus Sonora Norte  
**Evento**: III Coloquio Internacional de Espacio y Sostenibilidad  
**Fecha**: 3 de octubre de 2025  
**Ubicación**: Hermosillo, Sonora, México  

**Registro**: [https://luma.com/qhkq8lji](https://luma.com/qhkq8lji)  

---

<div align="center">

**🌌 Espacio y Sostenibilidad 2025**  
*Construyendo el futuro a través de la ciencia y cooperación internacional*

⭐ **Star este repo** si te parece útil • 🐛 **Report bugs** en Issues

</div>

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


