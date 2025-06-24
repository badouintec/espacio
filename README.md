# 🌍 III Coloquio Internacional de Espacio y Sostenibilidad 2025

**Sitio web oficial del evento de cooperación México-Estados Unidos en gestión hídrica y resiliencia climática mediante tecnología satelital.**

---

## 📋 Tabla de Contenidos

- [🚀 Información General](#información-general)
- [🔧 Estructura del Proyecto](#estructura-del-proyecto)
- [💻 Tecnologías Utilizadas](#tecnologías-utilizadas)
- [🎨 Guía de Estilos](#guía-de-estilos)
- [📁 Documentación de Archivos](#documentación-de-archivos)
- [🌐 Funcionalidades](#funcionalidades)
- [📖 Información del Evento](#información-del-evento)
- [🛠️ Desarrollo](#desarrollo)
- [� Contacto](#contacto)

---

## �🚀 Información General

Este es el sitio web oficial del **III Coloquio Internacional de Espacio y Sostenibilidad 2025**, un evento de cooperación México-Estados Unidos enfocado en la gestión hídrica y resiliencia climática mediante tecnología satelital. El sitio está desarrollado como una landing page responsiva con soporte multiidioma (español e inglés).

### 📅 Fechas y sedes del evento
- **🇲🇽 Hermosillo, Sonora**: 3 octubre 2025, Tec de Monterrey – Campus Hermosillo
- **🇺🇸 Arizona (EE. UU.)**: 14 noviembre 2025, sede por confirmar

---

## � Estructura del Proyecto

```
espacio/
├── index.html                  # Página principal
├── README.md                   # Este archivo
├── license.txt                 # Licencia del proyecto
├── assets/                     # Recursos estáticos
│   ├── css/                    # Hojas de estilo
│   │   ├── animate.css         # Animaciones CSS
│   │   ├── bootstrap.min.css   # Framework Bootstrap
│   │   ├── main.css           # Estilos principales del sitio
│   │   ├── nivo-lightbox.css  # Estilos para lightbox
│   │   └── responsive.css      # Estilos responsivos
│   ├── fonts/                  # Tipografías e iconos
│   │   ├── line-icons.css     # Iconos de línea
│   │   └── LineIcons.*        # Archivos de fuentes de iconos
│   ├── img/                    # Imágenes del sitio
│   │   ├── logo.png           # Logo principal (fondo claro)
│   │   ├── logoblanco.png     # Logo blanco (fondo oscuro)
│   │   ├── fondo1.png         # Imagen de fondo
│   │   ├── hero-area.jpg      # Imagen del área hero
│   │   ├── about/             # Imágenes de la sección about
│   │   ├── background/        # Imágenes de fondo
│   │   ├── blog/              # Imágenes del blog
│   │   ├── event/             # Imágenes de eventos
│   │   ├── speaker/           # Fotos de ponentes
│   │   ├── sponsors/          # Logos de patrocinadores
│   │   └── team/              # Fotos del equipo
│   ├── js/                     # Scripts JavaScript
│   │   ├── jquery-min.js      # Biblioteca jQuery
│   │   ├── bootstrap.min.js   # JavaScript de Bootstrap
│   │   ├── main.js           # Script principal del sitio
│   │   ├── language-manager.js # Gestor de idiomas (en desarrollo)
│   │   ├── translations.js    # Traducciones (en desarrollo)
│   │   └── [otros scripts]    # Librerías adicionales
│   └── video/                  # Videos del sitio
│       └── event.webm         # Video promocional del evento
```

---

## 💻 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica del sitio
- **CSS3**: Estilos con variables CSS personalizadas
- **JavaScript**: Interactividad y funcionalidades dinámicas
- **Bootstrap 4**: Framework CSS responsivo
- **jQuery**: Manipulación del DOM y efectos

### Librerías y Plugins
- **Animate.css**: Animaciones CSS
- **Nivo Lightbox**: Galería de imágenes
- **WOW.js**: Animaciones al hacer scroll
- **CounterUp**: Contadores animados
- **Waypoints**: Detección de elementos en viewport
- **SlickNav**: Menú de navegación móvil

### Fuentes
- **Montserrat**: Títulos y encabezados
- **Inter**: Texto del cuerpo
- **LineIcons**: Iconografía del sitio

---

## 🎨 Guía de Estilos

### Paleta de Colores
El sitio utiliza variables CSS definidas en `main.css`:

```css
:root {
  --space-navy: #003366;      /* Azul marino espacial - títulos y fondos oscuros */
  --ocean-blue: #0078C2;      /* Azul océano - color de marca principal */
  --water-light: #4FAEE8;     /* Azul claro - degradados y elementos secundarios */
  --earth-green: #4CB64F;     /* Verde tierra - acentos y llamadas a la acción */
  --forest-green: #186332;    /* Verde bosque - estados hover */
  --neutral-gray: #C3C4C5;    /* Gris neutro - elementos de soporte */
  --focus-ring: rgba(79,174,232,.6); /* Anillo de enfoque para accesibilidad */
}
```

### Tipografía
- **Títulos (h1-h5)**: Montserrat, peso 700, tamaño base 36px
- **Texto cuerpo**: Inter, peso 400, tamaño 15px, altura de línea 25px

### Comportamiento del Logo
- **Navbar transparente**: Logo blanco (`logoblanco.png`)
- **Navbar con scroll**: Logo negro (`logo.png`)
- **Footer**: Logo blanco, mismo tamaño que navbar

---

## 📁 Documentación de Archivos

### Archivos HTML
- **`index.html`**: Página principal con todas las secciones del sitio web

### Archivos CSS Críticos
- **`main.css`**: Contiene todos los estilos personalizados del sitio, variables CSS, y responsive design
- **`responsive.css`**: Estilos específicos para diferentes tamaños de pantalla

### Scripts JavaScript Principales
- **`main.js`**: Lógica principal del sitio, efectos de scroll, interacciones
- **`language-manager.js`**: ✅ **IMPLEMENTADO** - Gestor para cambio de idiomas ES/EN
- **`translations.js`**: ✅ **IMPLEMENTADO** - Archivo de traducciones ES/EN

### Recursos Multimedia
- **Logos**: Dos versiones (claro/oscuro) para diferentes contextos
- **Imágenes organizadas por sección**: about, blog, events, speakers, sponsors, team
- **Video promocional**: Formato WebM optimizado para web

---

## 🌐 Funcionalidades

### Implementadas
✅ **Diseño responsivo**: Adaptable a móviles, tablets y escritorio  
✅ **Navegación fija**: Navbar que cambia de apariencia al hacer scroll  
✅ **Animaciones**: Efectos de entrada y transiciones suaves  
✅ **Lightbox**: Galería de imágenes con zoom  
✅ **Contadores animados**: Estadísticas del evento  
✅ **Formularios**: Contacto y registro de interés  
✅ **Video background**: Video promocional integrado  
✅ **SEO básico**: Meta tags y estructura semántica  
✅ **Sistema multiidioma**: Botón ES/EN con traducciones dinámicas  

### En Desarrollo
✅ **Sistema multiidioma**: Cambio dinámico ES/EN - ¡IMPLEMENTADO!  
🔄 **Integración con CMS**: Gestión de contenido dinámico  
⏸️ **PWA**: Capacidades de Progressive Web App  

---

## 📖 Información del Evento

### Descripción
El coloquio retoma las experiencias de ediciones anteriores (Guadalajara 2023 y Morelia 2024) para fortalecer la cooperación binacional en gestión de recursos naturales. El programa está estructurado en torno a las cinco líneas del área Water Resources de NASA Applied Sciences y la formación ARSET.

### Aprendizajes de Ediciones Anteriores

#### I Coloquio Guadalajara 2023
- Más de 120 asistentes debatieron sobre las misiones ICESat-2 y GEDI
- Se promovió la ciencia ciudadana a través del programa GLOBE
- Sede: Plataforma Abierta de Innovación de Ciudad Creativa Digital

#### II Coloquio Morelia 2024
- Presentación de Guardián Forestal: herramienta que utiliza imágenes Sentinel-1/2 y Landsat 8/9 para monitorear deforestación por cultivos de aguacate
- Establecimiento de redes permanentes de formación entre instituciones participantes

### Programa NASA Water Resources 2025

| Línea funcional | Aplicación prevista en 2025 |
|-----------------|----------------------------|
| 🏜️ **Sequías** | Mapas semanales de déficit hídrico para organismos de cuenca |
| 🌊 **Caudales e inundaciones** | Pronóstico de avenidas en los ríos Sonora y Santa Cruz |
| 🌱 **Evapotranspiración y riego** | Balance hídrico para el Valle del Yaqui |
| 🦠 **Calidad del agua** | Detección de floraciones algales en presas fronterizas |
| 🌡️ **Efectos climáticos** | Escenarios de estrés hídrico 2030-2050 |

### Ponentes Destacados
- **Sabrina Delgado Arias**, NASA Equity & Environmental Justice Programs
- **Edil Sepúlveda Carlo**, Coordinador de aplicaciones CMS
- **Brian Campbell**, GLOBE Trees & ICESat-2 Education
- **Peder Nelson**, GLOBE Observer Land Cover
- **Christina Moats-Xavier**, Earth Science to Action Strategy
- **Johana Carmona García**, SELPER Latinoamérica
- **Argyro Kavvada**, EO4SDG Toolkit Cities

### Agenda Preliminar
- Paneles técnicos sobre aplicaciones NASA Water Resources
- Talleres prácticos basados en módulos ARSET
- Hackathon estudiantil con datos satelitales
- Sesiones de networking entre instituciones de ambos países

### Aliados Estratégicos
- NASA Applied Sciences
- Programa EO4SDG 
- SELPER Latinoamérica
- UNESCO
- Tecnológico de Monterrey
- Entidades estatales de Sonora y Arizona

---

## �️ Desarrollo

### Requisitos del Sistema
- Navegador web moderno (Chrome 90+, Firefox 88+, Safari 14+)
- VS Code con extensión Live Server (recomendado)

### Instalación Local
1. Clona este repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd espacio
   ```

2. Abre el proyecto en VS Code y usa Live Server:
   - Instala la extensión "Live Server" en VS Code
   - Clic derecho en `index.html` → "Open with Live Server"
   - O usa `Ctrl+Shift+P` → "Live Server: Open with Live Server"

### Normas de Desarrollo
- **No modificar** la estructura HTML existente sin autorización
- **No agregar** nuevos archivos CSS o JS sin consultar
- **Mantener** la consistencia en la paleta de colores definida
- **Verificar** que no queden referencias a templates o contenido placeholder
- **Testear** en dispositivos móviles y diferentes navegadores

### Próximos Hitos
1. **Julio 2025**: Publicar preregistro con formulario en línea
2. **Agosto 2025**: Difundir agenda preliminar detallada
3. **Septiembre 2025**: Crear repositorio de recursos técnicos
4. **Octubre 2025**: Lanzamiento oficial del evento

---

## � Contacto

**Información del Evento:**
- 📧 Email: contacto@espacioysostenibilidad.org
- 🌐 Web: www.espacioysostenibilidad.org
- 📞 Tel: +52 (55) 1234-5678

**Desarrollo Técnico:**
- Para reportar bugs o sugerir mejoras, consulta antes de hacer cambios
- Revisa este README antes de implementar nuevas funcionalidades
- Mantén la documentación actualizada con cualquier cambio significativo

---

*Última actualización: 23 de junio de 2025*
