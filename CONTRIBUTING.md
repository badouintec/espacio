# 🤝 Guía de Contribución - III Coloquio Espacio y Sostenibilidad 2025

¡Gracias por tu interés en contribuir al sitio web del III Coloquio Internacional de Espacio y Sostenibilidad 2025! Esta guía te ayudará a participar de manera efectiva en el proyecto.

---

## 📋 Tabla de Contenidos

- [🎯 Cómo Contribuir](#-cómo-contribuir)
- [🐛 Reportar Problemas](#-reportar-problemas)
- [💡 Sugerir Mejoras](#-sugerir-mejoras)
- [🔧 Configuración de Desarrollo](#-configuración-de-desarrollo)
- [📝 Estándares de Código](#-estándares-de-código)
- [🔄 Proceso de Pull Request](#-proceso-de-pull-request)
- [🎨 Guía de Estilo](#-guía-de-estilo)
- [📞 Contacto](#-contacto)

---

## 🎯 Cómo Contribuir

### 🌟 **Formas de Contribuir**

1. **🐛 Reportar bugs** y problemas técnicos
2. **💡 Sugerir mejoras** de funcionalidad o UX
3. **🎨 Mejoras de diseño** y accesibilidad
4. **📝 Mejorar documentación** y guías
5. **⚡ Optimizaciones** de performance
6. **🌍 Traduciones** y localización
7. **🧪 Testing** en diferentes dispositivos/navegadores

### 🚀 **Primeros Pasos**

1. **Fork** el repositorio
2. **Clona** tu fork localmente
3. **Crea una branch** para tu contribución
4. **Realiza** tus cambios
5. **Testea** thoroughly
6. **Envía** un pull request

---

## 🐛 Reportar Problemas

### 📋 **Antes de Reportar**

- [ ] Busca en [issues existentes](https://github.com/badouintec/espacio/issues) si ya fue reportado
- [ ] Verifica que el problema persiste en la versión más reciente
- [ ] Reproduce el problema en diferentes navegadores/dispositivos
- [ ] Recopila información detallada del error

### 📝 **Template de Issue**

```markdown
## 🐛 Descripción del Bug

**Resumen breve**: [Describe el problema en una línea]

## 🔄 Pasos para Reproducir

1. Ve a '...'
2. Haz clic en '...'
3. Scroll hasta '...'
4. Observa el error

## ✅ Comportamiento Esperado

[Describe qué debería pasar]

## ❌ Comportamiento Actual  

[Describe qué está pasando en realidad]

## 🖥️ Información del Sistema

- **OS**: [ej. Windows 10, macOS 12, Ubuntu 20.04]
- **Navegador**: [ej. Chrome 95, Firefox 93, Safari 15]
- **Versión**: [ej. 95.0.4638.69]
- **Dispositivo**: [ej. iPhone 13, Samsung Galaxy S21, Laptop]
- **Resolución**: [ej. 1920x1080, 375x667]

## 📷 Screenshots

[Si aplica, agrega screenshots que ayuden a explicar el problema]

## 📎 Información Adicional

[Cualquier otra información relevante sobre el problema]
```

### 🏷️ **Labels de Issues**

- 🐛 `bug` - Algo no está funcionando
- ✨ `enhancement` - Nueva característica o mejora
- 📝 `documentation` - Mejoras en documentación
- ❓ `question` - Pregunta adicional
- 🔥 `urgent` - Requiere atención inmediata
- 🎨 `design` - Relacionado con UX/UI
- ⚡ `performance` - Mejoras de rendimiento
- ♿ `accessibility` - Mejoras de accesibilidad

---

## 💡 Sugerir Mejoras

### 🎯 **Template de Feature Request**

```markdown
## 💡 Descripción de la Mejora

**Resumen**: [Describe la mejora en una línea]

## 🤔 Problema Actual

[Explica el problema o limitación actual]

## 🎯 Solución Propuesta

[Describe la solución que te gustaría ver]

## 🔄 Alternativas Consideradas

[Describe alternativas que has considerado]

## 📊 Impacto Esperado

- **Usuarios afectados**: [Todos, móviles, desktop, etc.]
- **Prioridad**: [Alta, Media, Baja]
- **Complejidad estimada**: [Simple, Moderada, Compleja]

## 📎 Información Adicional

[Mockups, referencias, links útiles, etc.]
```

---

## 🔧 Configuración de Desarrollo

### 📋 **Prerrequisitos**

- Git instalado
- Editor de código (recomendado: VS Code)
- Navegador moderno con DevTools
- Conocimiento básico de HTML, CSS, JavaScript

### ⚙️ **Setup Local**

```bash
# 1. Fork y clona el repositorio
git clone https://github.com/TU_USERNAME/espacio.git
cd espacio

# 2. Crea una branch para tu feature
git checkout -b feature/nombre-descriptivo

# 3. Realiza tus cambios
# ... edita archivos ...

# 4. Testea tus cambios localmente
# Abre index.html en navegador o usa un servidor local
python -m http.server 8000

# 5. Commit tus cambios
git add .
git commit -m "tipo: descripción breve de cambios"

# 6. Push a tu fork
git push origin feature/nombre-descriptivo

# 7. Crea pull request en GitHub
```

### 🛠️ **Herramientas Recomendadas**

#### **VS Code Extensions**
- HTML CSS Support
- Auto Rename Tag
- CSS Peek
- Prettier - Code formatter
- Live Server
- GitLens

#### **Browser Extensions** (para testing)
- Web Developer
- ColorZilla
- Accessibility Insights
- Lighthouse

---

## 📝 Estándares de Código

### 🎨 **CSS Guidelines**

```css
/* ✅ CORRECTO: Usar variables CSS */
.component {
  background-color: var(--color-azul-marino);
  color: var(--color-blanco);
}

/* ❌ INCORRECTO: Hardcodear colores */
.component {
  background-color: #132542;
  color: #FFFFFF;
}

/* ✅ CORRECTO: Nomenclatura BEM */
.card {}
.card__header {}
.card__body {}
.card--featured {}

/* ✅ CORRECTO: Mobile-first media queries */
.component {
  /* Estilos móvil */
  font-size: 14px;
}

@media (min-width: 768px) {
  .component {
    /* Estilos tablet+ */
    font-size: 16px;
  }
}
```

### 🔧 **JavaScript Guidelines**

```javascript
// ✅ CORRECTO: Usar const/let
const element = document.getElementById('hero');
let isVisible = false;

// ❌ INCORRECTO: Usar var
var element = document.getElementById('hero');

// ✅ CORRECTO: Funciones flecha para callbacks
elements.forEach(el => {
  el.addEventListener('click', handleClick);
});

// ✅ CORRECTO: Nombres descriptivos
const initializeCarousel = () => {
  // Lógica del carousel
};

// ❌ INCORRECTO: Nombres genéricos
const init = () => {
  // ¿Qué inicializa?
};
```

### 📱 **HTML Guidelines**

```html
<!-- ✅ CORRECTO: Estructura semántica -->
<section class="about">
  <header>
    <h2 class="section-title">Acerca del Evento</h2>
  </header>
  <article>
    <p>Contenido descriptivo...</p>
  </article>
</section>

<!-- ✅ CORRECTO: Alt text descriptivo -->
<img src="speaker.jpg" alt="Dr. María González, especialista en hidrogeología">

<!-- ❌ INCORRECTO: Alt text genérico -->
<img src="speaker.jpg" alt="imagen">

<!-- ✅ CORRECTO: Clases descriptivas -->
<button class="btn btn-primary btn-register">
  Registrarse Ahora
</button>
```

---

## 🔄 Proceso de Pull Request

### 📋 **Checklist Pre-PR**

- [ ] ✅ Código sigue los estándares establecidos
- [ ] ✅ Cambios testeados en múltiples navegadores
- [ ] ✅ Responsive design verificado
- [ ] ✅ Accesibilidad validada
- [ ] ✅ No hay errores en consola
- [ ] ✅ Performance no degradado
- [ ] ✅ Documentación actualizada si es necesario

### 📝 **Template de Pull Request**

```markdown
## 🎯 Descripción

[Describe qué cambios incluye este PR]

## 🔗 Issue Relacionado

Fixes #[número_de_issue]

## 🔄 Tipo de Cambio

- [ ] 🐛 Bug fix
- [ ] ✨ Nueva feature
- [ ] 💥 Breaking change
- [ ] 📝 Documentación
- [ ] 🎨 Cambios de estilo/UI
- [ ] ⚡ Mejora de performance
- [ ] ♿ Mejora de accesibilidad

## 🧪 Testing

- [ ] Testeado en Chrome
- [ ] Testeado en Firefox  
- [ ] Testeado en Safari
- [ ] Testeado en dispositivos móviles
- [ ] Testeado con screen readers
- [ ] Performance verificado

## 📷 Screenshots

[Antes y después si aplica]

## 📋 Checklist

- [ ] Mi código sigue los estándares del proyecto
- [ ] He realizado self-review de mi código
- [ ] He comentado código complejo/confuso
- [ ] He actualizado documentación relacionada
- [ ] Mis cambios no generan nuevos warnings
- [ ] He testeado que no rompo funcionalidad existente
```

### 🔍 **Proceso de Review**

1. **Automated checks** ejecutados
2. **Code review** por maintainers
3. **Feedback** e iteraciones si es necesario
4. **Approval** y merge
5. **Deploy** automático a GitHub Pages

---

## 🎨 Guía de Estilo

### 🖌️ **Paleta de Colores**

```css
/* USAR SOLO ESTAS VARIABLES */
:root {
  --color-azul-marino: #132542;    /* Headers, navegación */
  --color-azul-medio: #22395a;     /* Botones, acentos */
  --color-azul-oceano: #2D89EF;    /* Enlaces, secundarios */
  --color-azul-brillante: #1E90FF; /* CTA, hover states */
  --color-blanco: #FFFFFF;         /* Texto en fondos oscuros */
  --color-gris-claro: #F4F5F7;     /* Fondos de sección */
  --color-gris-medio: #7A8A99;     /* Texto secundario */
  --color-negro: #111111;          /* Texto principal */
}
```

### 📐 **Espaciado**

```css
/* USAR MÚLTIPLOS DE 8px */
.spacing-xs { margin: 8px; }
.spacing-sm { margin: 16px; }
.spacing-md { margin: 24px; }
.spacing-lg { margin: 32px; }
.spacing-xl { margin: 48px; }
.spacing-xxl { margin: 64px; }
```

### 🔤 **Tipografía**

```css
/* FAMILIAS DE FUENTE */
body {
  font-family: 'Lato', sans-serif; /* Cuerpo de texto */
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Josefin Sans', sans-serif; /* Títulos */
}

/* TAMAÑOS RESPONSIVOS */
.text-xs { font-size: 12px; }
.text-sm { font-size: 14px; }
.text-base { font-size: 16px; }
.text-lg { font-size: 18px; }
.text-xl { font-size: 20px; }
.text-2xl { font-size: 24px; }
.text-3xl { font-size: 30px; }
.text-4xl { font-size: 36px; }
```

### 🎯 **Componentes Estándar**

```html
<!-- Botón primario -->
<button class="btn btn-primary btn-lg">
  Acción Principal
</button>

<!-- Botón secundario -->
<button class="btn btn-outline-primary btn-lg">
  Acción Secundaria
</button>

<!-- Sección estándar -->
<section id="seccion" class="section-padding">
  <div class="container">
    <div class="section-header text-center">
      <h2 class="section-title">Título</h2>
      <div class="section-sub">Subtítulo</div>
    </div>
    <!-- Contenido -->
  </div>
</section>
```

---

## 📊 Testing Guidelines

### 🔍 **Testing Checklist**

#### **Funcionalidad**
- [ ] Navegación funciona en todas las páginas
- [ ] Enlaces externos abren en nueva pestaña
- [ ] Formularios validan correctamente
- [ ] Carousel responde a controles manuales
- [ ] Menú móvil se despliega correctamente

#### **Responsive Design**
- [ ] Mobile (320px-767px) ✅
- [ ] Tablet (768px-1023px) ✅
- [ ] Desktop (1024px+) ✅
- [ ] Landscape vs Portrait ✅

#### **Cross-Browser**
- [ ] Chrome (latest) ✅
- [ ] Firefox (latest) ✅
- [ ] Safari (latest) ✅
- [ ] Edge (latest) ✅

#### **Performance**
- [ ] Page load < 3 segundos
- [ ] No console errors
- [ ] Images optimizadas
- [ ] CSS/JS minificado

#### **Accesibilidad**
- [ ] Contraste WCAG AA ✅
- [ ] Navegación por teclado ✅
- [ ] Screen reader friendly ✅
- [ ] Alt text en imágenes ✅

---

## 📞 Contacto

### 💬 **Canales de Comunicación**

- **🐛 Issues**: [GitHub Issues](https://github.com/badouintec/espacio/issues)
- **💡 Discusiones**: [GitHub Discussions](https://github.com/badouintec/espacio/discussions)
- **📧 Email**: [contacto del proyecto]
- **📱 Urgente**: [información de contacto urgente]

### 👥 **Maintainers**

- **@badouintec** - Project Lead
- **[Otros maintainers]** - Contributors

### ⏰ **Tiempo de Respuesta**

- **Issues**: 24-48 horas
- **Pull Requests**: 2-5 días laborales
- **Preguntas**: 24 horas
- **Emergencias**: Mismo día

---

## 🙏 Reconocimientos

### 🌟 **Contribuidores**

Gracias a todas las personas que han contribuido a este proyecto:

<!-- Se auto-generará con GitHub contributors -->

### 📚 **Recursos Utilizados**

- [Bootstrap Documentation](https://getbootstrap.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)

---

<div align="center">

**🤝 Construyendo juntos el futuro de la divulgación científica**

*¡Tu contribución hace la diferencia!* 🌎🇲🇽🇺🇸

</div>