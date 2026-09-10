// JavaScript para III Coloquio Internacional de Espacio y Sostenibilidad 2025
// Maneja carrusel, contador regresivo, navegación y funcionalidades interactivas

document.addEventListener('DOMContentLoaded', function () {
  
  // --- Configuración del Carrusel ---
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  // Auto-avance del carrusel cada 5 segundos
  setInterval(nextSlide, 5000);

  // Control manual del carrusel
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // --- Funcionalidad de Pestañas del Programa ---
  const programaTabs = document.querySelectorAll('.programa-tab');
  const tabContents = document.querySelectorAll('.tab-content');

  programaTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Remover clase active de todas las pestañas
      programaTabs.forEach(t => {
        t.classList.remove('active');
        t.classList.remove('border-coloquio-ocean');
        t.classList.add('border-transparent');
        t.classList.remove('text-coloquio-navy');
        t.classList.add('text-coloquio-gray');
      });
      
      // Ocultar todo el contenido
      tabContents.forEach(content => {
        content.classList.remove('active');
        content.classList.add('hidden');
      });
      
      // Activar la pestaña seleccionada
      this.classList.add('active');
      this.classList.remove('border-transparent');
      this.classList.add('border-coloquio-ocean');
      this.classList.remove('text-coloquio-gray');
      this.classList.add('text-coloquio-navy');
      
      // Mostrar el contenido correspondiente
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add('active');
        targetContent.classList.remove('hidden');
      }
    });
  });

  // --- Funcionalidad de Pestañas de Participantes ---
  const participantesTabs = document.querySelectorAll('.participantes-tab');
  const participantesContents = document.querySelectorAll('#participantes .tab-content');

  participantesTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Remover clase active de todas las pestañas de participantes
      participantesTabs.forEach(t => {
        t.classList.remove('active');
        t.classList.remove('border-coloquio-ocean');
        t.classList.add('border-transparent');
        t.classList.remove('text-coloquio-navy');
        t.classList.add('text-coloquio-gray');
      });
      
      // Ocultar todo el contenido de participantes
      participantesContents.forEach(content => {
        content.classList.remove('active');
        content.classList.add('hidden');
      });
      
      // Activar la pestaña seleccionada
      this.classList.add('active');
      this.classList.remove('border-transparent');
      this.classList.add('border-coloquio-ocean');
      this.classList.remove('text-coloquio-gray');
      this.classList.add('text-coloquio-navy');
      
      // Mostrar el contenido correspondiente
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add('active');
        targetContent.classList.remove('hidden');
      }
    });
  });

  // --- Funcionalidad de Galería y Lightbox ---
  const galeriaFilters = document.querySelectorAll('.galeria-filter');
  const galeriaItems = document.querySelectorAll('.galeria-item');
  const noImagesMessage = document.getElementById('no-images');
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxContent = document.getElementById('lightbox-content');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');

  // Filtros de galería
  galeriaFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Actualizar estados de filtros
      galeriaFilters.forEach(f => {
        f.classList.remove('active', 'bg-coloquio-ocean', 'text-white');
        f.classList.add('bg-coloquio-light', 'text-coloquio-navy');
      });
      
      this.classList.add('active', 'bg-coloquio-ocean', 'text-white');
      this.classList.remove('bg-coloquio-light', 'text-coloquio-navy');
      
      // Filtrar imágenes
      let visibleCount = 0;
      galeriaItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filterValue === 'todos' || category === filterValue) {
          item.style.display = 'block';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });
      
      // Mostrar mensaje si no hay imágenes
      if (visibleCount === 0) {
        noImagesMessage.classList.remove('hidden');
      } else {
        noImagesMessage.classList.add('hidden');
      }
    });
  });

  // Lightbox functionality
  galeriaItems.forEach(item => {
    item.addEventListener('click', function() {
      const title = this.querySelector('h3').textContent;
      const description = this.querySelector('p').textContent;
      const category = this.getAttribute('data-category');
      
      // Crear contenido del lightbox basado en la categoría
      let lightboxHTML = '';
      const gradient = getGradientForCategory(category);
      
      lightboxHTML = `
        <div class="aspect-video ${gradient} flex items-center justify-center">
          <div class="text-center text-white p-8">
            <svg class="w-24 h-24 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
              ${getSVGForCategory(category)}
            </svg>
            <h3 class="text-2xl font-bold mb-2">${title}</h3>
            <p class="text-xl">${description}</p>
          </div>
        </div>
      `;
      
      lightboxContent.innerHTML = lightboxHTML;
      lightboxTitle.textContent = title;
      lightboxDescription.textContent = description;
      
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  // Cerrar lightbox
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Función para cerrar lightbox
  function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Función para obtener gradiente según categoría
  function getGradientForCategory(category) {
    switch(category) {
      case 'conferencias': return 'bg-gradient-to-br from-coloquio-ocean to-coloquio-blue';
      case 'talleres': return 'bg-gradient-to-br from-coloquio-blue to-coloquio-bright';
      case 'networking': return 'bg-gradient-to-br from-coloquio-bright to-coloquio-ocean';
      case 'nasa-apps': return 'bg-gradient-to-br from-coloquio-navy to-coloquio-blue';
      default: return 'bg-gradient-to-br from-coloquio-ocean to-coloquio-blue';
    }
  }

  // Función para obtener SVG según categoría
  function getSVGForCategory(category) {
    switch(category) {
      case 'conferencias': return '<path d="M16,18H18V6H16M6.5,18H7.5V6H6.5M9.5,12H10.5V6H9.5M12.5,16H13.5V6H12.5M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.11,4 19,4Z"/>';
      case 'talleres': return '<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>';
      case 'networking': return '<path d="M16,4C18.11,4 19.8,5.69 19.8,7.8C19.8,9.91 18.11,11.6 16,11.6C13.89,11.6 12.2,9.91 12.2,7.8C12.2,5.69 13.89,4 16,4M16,13.4C18.67,13.4 24,14.73 24,17.4V20H8V17.4C8,14.73 13.33,13.4 16,13.4M8,4C10.11,4 11.8,5.69 11.8,7.8C11.8,9.91 10.11,11.6 8,11.6C5.89,11.6 4.2,9.91 4.2,7.8C4.2,5.69 5.89,4 8,4M8,13.4C8.21,13.4 8.53,13.42 8.97,13.45C7.46,14.24 6.5,15.27 6.5,17.4V20H0V17.4C0,14.73 5.33,13.4 8,13.4Z"/>';
      case 'nasa-apps': return '<path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2M12 4.89L11.42 7.58L8.58 8L11.42 8.42L12 11.11L12.58 8.42L15.42 8L12.58 7.58L12 4.89M21 10C21 10 21.5 8.5 21.5 7.5C21.5 6.5 21 5 21 5C21 5 20.5 6.5 20.5 7.5C20.5 8.5 21 10 21 10M16 6C16 6 16.5 4.5 16.5 3.5C16.5 2.5 16 1 16 1C16 1 15.5 2.5 15.5 3.5C15.5 4.5 16 6 16 6Z"/>';
      default: return '<path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>';
    }
  }

  // Cerrar lightbox con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      closeLightbox();
    }
  });

  // --- Funcionalidad FAQ ---
  const faqCategories = document.querySelectorAll('.faq-category');
  const faqSections = document.querySelectorAll('.faq-section');
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Cambio de categorías FAQ
  faqCategories.forEach(category => {
    category.addEventListener('click', function() {
      const targetCategory = this.getAttribute('data-category');
      
      // Actualizar estados de categorías
      faqCategories.forEach(cat => {
        cat.classList.remove('active', 'bg-coloquio-ocean', 'text-white');
        cat.classList.add('bg-white', 'text-coloquio-navy', 'border', 'border-coloquio-light');
      });
      
      this.classList.add('active', 'bg-coloquio-ocean', 'text-white');
      this.classList.remove('bg-white', 'text-coloquio-navy', 'border', 'border-coloquio-light');
      
      // Mostrar/ocultar secciones
      faqSections.forEach(section => {
        if (section.classList.contains(targetCategory)) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  });

  // Funcionalidad accordion FAQ
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.closest('.faq-item');
      const answer = faqItem.querySelector('.faq-answer');
      const icon = this.querySelector('.faq-icon');
      
      // Toggle respuesta
      if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.style.transform = 'rotate(45deg)';
      } else {
        answer.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });

  // --- Contador Regresivo ---
  const eventDate = new Date('2025-10-03T08:00:00-07:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const daysEl = document.getElementById('days');
      const hoursEl = document.getElementById('hours');
      const minutesEl = document.getElementById('minutes');
      const secondsEl = document.getElementById('seconds');

      if (daysEl) {
        const newDays = String(days).padStart(2, '0');
        if (daysEl.textContent !== newDays) {
          daysEl.style.transform = 'scale(1.1)';
          setTimeout(() => daysEl.style.transform = 'scale(1)', 200);
          daysEl.textContent = newDays;
        }
      }

      if (hoursEl) {
        const newHours = String(hours).padStart(2, '0');
        if (hoursEl.textContent !== newHours) {
          hoursEl.style.transform = 'scale(1.1)';
          setTimeout(() => hoursEl.style.transform = 'scale(1)', 200);
          hoursEl.textContent = newHours;
        }
      }

      if (minutesEl) {
        const newMinutes = String(minutes).padStart(2, '0');
        if (minutesEl.textContent !== newMinutes) {
          minutesEl.style.transform = 'scale(1.1)';
          setTimeout(() => minutesEl.style.transform = 'scale(1)', 200);
          minutesEl.textContent = newMinutes;
        }
      }

      if (secondsEl) {
        const newSeconds = String(seconds).padStart(2, '0');
        if (secondsEl.textContent !== newSeconds) {
          secondsEl.style.transform = 'scale(1.1)';
          setTimeout(() => secondsEl.style.transform = 'scale(1)', 200);
          secondsEl.textContent = newSeconds;
        }
      }
    } else {
      // El evento ha comenzado
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
    }
  }

  // Actualizar contador cada segundo
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // --- Navegación Inteligente ---
  const header = document.querySelector('header');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  // Efecto de transparencia en el header
  function updateHeaderTransparency() {
    if (window.scrollY > 50) {
      header.classList.add('bg-coloquio-navy', 'bg-opacity-95');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.add('bg-transparent');
      header.classList.remove('bg-coloquio-navy', 'bg-opacity-95');
    }
  }

  window.addEventListener('scroll', updateHeaderTransparency);
  updateHeaderTransparency();

  // Menú móvil
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú al hacer click en un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // --- Smooth Scrolling ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // --- Animaciones de Scroll (Intersection Observer) ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
      }
    });
  }, observerOptions);

  // Observar elementos para animaciones
  document.querySelectorAll('.hover\\:shadow-lg, .card-hover').forEach(el => {
    observer.observe(el);
  });

  // --- Efectos Hover para Tarjetas ---
  document.querySelectorAll('.hover\\:shadow-lg').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // --- Configuración de Performance ---
  // Reducir animaciones si el usuario prefiere movimiento reducido
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
      el.style.animationDuration = '0.01ms';
      el.style.transitionDuration = '0.01ms';
    });
  }

  // --- Lazy Loading para Imágenes ---
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('opacity-0');
        img.classList.add('opacity-100');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });

  // --- Manejo de Formularios ---
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validación básica
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('border-red-500');
        } else {
          field.classList.remove('border-red-500');
        }
      });

      if (isValid) {
        // Aquí se enviaría el formulario
        console.log('Formulario válido - listo para enviar');
        
        // Mostrar mensaje de éxito
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
        successMessage.textContent = '¡Mensaje enviado correctamente!';
        document.body.appendChild(successMessage);

        setTimeout(() => {
          successMessage.remove();
        }, 3000);

        form.reset();
      }
    });
  });

  // --- Efectos de Teclado ---
  document.addEventListener('keydown', function(e) {
    // Navegación del carrusel con flechas
    if (e.key === 'ArrowLeft') {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    } else if (e.key === 'ArrowRight') {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  });

  // --- Analytics y Tracking (placeholder) ---
  function trackEvent(eventName, properties = {}) {
    // Aquí se integraría con Google Analytics o similar
    console.log('Evento trackeado:', eventName, properties);
  }

  // Trackear clics en botones importantes
  document.querySelectorAll('a[href*="registro"], a[href*="#registro"]').forEach(button => {
    button.addEventListener('click', () => {
      trackEvent('registro_click', { source: button.textContent.trim() });
    });
  });

  // --- Optimizaciones de Rendimiento ---
  // Throttle para eventos de scroll
  function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Aplicar throttle al scroll del header
  window.addEventListener('scroll', throttle(updateHeaderTransparency, 10));

  console.log('🚀 III Coloquio Internacional de Espacio y Sostenibilidad 2025 - Sitio web cargado');
});
      let connections = 0;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          if (connections > maxConnectionsPerFrame) break;
          const p1 = particles[i]; const p2 = particles[j];
          if (p1.distanceTo(p2) < connectionDistance) {
            linePositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
            connections++;
          }
        }
        if (connections > maxConnectionsPerFrame) break;
      }
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      if (lines.geometry.attributes.position) lines.geometry.attributes.position.needsUpdate = true;
      lines.rotation.copy(particleSystem.rotation);
      renderer.render(scene, camera);
    }
    if (!prefersReducedMotion) animate();

    // Pause animation when tab not visible
    document.addEventListener('visibilitychange', () => {
      animationActive = !document.hidden;
      if (animationActive && !prefersReducedMotion) requestAnimationFrame(animate);
    });

    window.addEventListener('resize', () => {
      const width = container.offsetWidth; const height = container.offsetHeight;
      camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height);
    });
  }

  // --- Mobile menu ---
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.setAttribute('aria-expanded','false');
    mobileMenuButton.addEventListener('click', () => { 
      const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('hidden'); 
    });
    document.querySelectorAll('#mobile-menu a').forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = question?.lastElementChild; // direct arrow span
    if (!question || !answer || !icon) return;

    icon.textContent = '▼';

    function collapseAll() {
      document.querySelectorAll('.faq-question').forEach(q => {
        q.setAttribute('aria-expanded','false');
        const arrow = q.lastElementChild;
        if (arrow) arrow.textContent = '▼';
      });
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
    }

    question.addEventListener('click', () => {
      const expanded = question.getAttribute('aria-expanded') === 'true';
      collapseAll();
      if (!expanded) {
        question.setAttribute('aria-expanded','true');
        answer.classList.remove('hidden');
        icon.textContent = '▲';
      }
    });

    question.addEventListener('keydown', e => {
      if (['Enter',' '].includes(e.key)) { e.preventDefault(); question.click(); }
    });
  });

  // --- Smooth Scroll (anchor) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // --- Mentor LinkedIn & Modal ---
  const mentorLinkedIn = {
    'Edgar León': {
      url: 'https://www.linkedin.com/in/edgar-león-sandoval-ph-d-60b36621/?originalSubdomain=mx',
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQERFCiotlgQXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516937870769?e=1759363200&v=beta&t=1WLkaZwcvN_ITyEBpog2QoKAOb3A8GfR9pAjO67wWYA',
      title: 'IA / Deep Learning',
      schedule: 'Sábado 4 de octubre · 10:00 a.m. – 12:00 p.m. (Hackathón)'
    }
  };

  function buildLinkedInIcon(classes = 'w-4 h-4') {
    return `<svg class="${classes}" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-.95 1.82-1.96 3.75-1.96 4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.18c0-1.24-.02-2.84-1.73-2.84-1.74 0-2.01 1.36-2.01 2.75V21H9z"/></svg>`;
  }
  function getInitials(name) { return name.split(/\s+/).map(p => p[0]).slice(0, 2).join('').toUpperCase(); }
  let lastFocusedElement = null;
  function trapFocus(modal) {
    const focusable = modal.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0]; const last = focusable[focusable.length - 1];
    modal.addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }
  function openMentorModal(name) {
    const info = mentorLinkedIn[name];
    const fallbackInitials = getInitials(name);
    const img = info?.image || `https://placehold.co/400x400/0B3D91/DFFF00?text=${encodeURIComponent(fallbackInitials)}`;
    const roleGuess = info?.title || 'Mentor(a)';
    const content = document.getElementById('mentor-modal-content');
    const schedule = info?.schedule || 'Horario por confirmar';
    content.innerHTML = `<div class="text-center"><img src="${img}" alt="Foto de ${name}" class="w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-lg ring-4 ring-space-vibrant-blue/30" loading="lazy" /><h3 id="mentor-modal-title" class="text-2xl font-bold text-slate-800 mb-1">${name}</h3><p id="mentor-modal-desc" class="text-sm text-space-vibrant-blue font-semibold mb-4">${roleGuess}</p>${info?.url ? `<a href="${info.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-space-vibrant-blue text-white font-semibold hover:bg-space-dark-blue transition">${buildLinkedInIcon('w-5 h-5')} <span>Ver LinkedIn</span></a>` : `<button disabled class="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-slate-300 text-slate-600 font-semibold cursor-not-allowed">${buildLinkedInIcon('w-5 h-5')} <span>LinkedIn</span></button>`}<div class="mt-5 text-left bg-slate-50 rounded-md p-4 border border-slate-200"><h4 class="text-xs font-bold tracking-wide text-slate-500 uppercase mb-1">Horario disponible mentorías</h4><p class="text-sm text-slate-700">${schedule}</p></div></div>`;
    const modal = document.getElementById('mentor-modal');
    lastFocusedElement = document.activeElement;
    modal.classList.remove('hidden'); modal.classList.add('flex'); document.body.classList.add('overflow-hidden');
    const focusTarget = modal.querySelector('a,button');
    if (focusTarget) focusTarget.focus();
    trapFocus(modal);
  }
  function closeMentorModal() {
    const modal = document.getElementById('mentor-modal');
    modal.classList.add('hidden'); modal.classList.remove('flex'); document.body.classList.remove('overflow-hidden');
    if (lastFocusedElement) lastFocusedElement.focus();
  }
  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeMentorModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMentorModal(); });

  document.querySelectorAll('.team-card').forEach(card => {
    const nameEl = card.querySelector('h3'); if (!nameEl) return;
    const name = nameEl.textContent.trim();
    const footer = document.createElement('div');
    footer.className = 'mt-4 pt-4 border-t border-slate-200 flex items-center justify-between';
    const link = document.createElement('a');
    const info = mentorLinkedIn[name];
    if (info?.url) {
      link.href = info.url; link.target = '_blank'; link.rel = 'noopener';
      link.className = 'inline-flex items-center gap-2 text-space-vibrant-blue font-semibold text-sm hover:underline';
      link.innerHTML = buildLinkedInIcon() + '<span>LinkedIn</span>';
    } else {
      link.href = '#'; link.setAttribute('aria-disabled','true');
      link.className = 'inline-flex items-center gap-2 text-space-vibrant-blue font-semibold text-sm';
      link.innerHTML = buildLinkedInIcon() + '<span>LinkedIn</span>';
      link.addEventListener('click', e => e.preventDefault());
    }
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'text-xs font-medium text-slate-500 hover:text-space-dark-blue transition';
    btn.textContent = 'Ver más'; btn.addEventListener('click', () => openMentorModal(name));
    footer.appendChild(link); footer.appendChild(btn);
    const paragraphs = card.querySelectorAll('p');
    if (paragraphs.length) { paragraphs[paragraphs.length - 1].after(footer); } else { card.querySelector('.p-6').appendChild(footer); }
  });

  // --- Mostrar todos los mentores (migrado desde inline) ---
  const showAllBtn = document.getElementById('show-all-mentors');
  const teamGrid = document.getElementById('team-grid');
  if (showAllBtn && teamGrid) {
    showAllBtn.setAttribute('aria-expanded','false');
    showAllBtn.setAttribute('aria-controls','team-grid');
    showAllBtn.addEventListener('click', () => {
      Array.from(teamGrid.children).forEach(card => { card.style.display = 'block'; });
      teamGrid.classList.remove('grid-cols-1','sm:grid-cols-2','md:grid-cols-3','lg:grid-cols-4','xl:grid-cols-5');
      teamGrid.classList.add('grid-cols-1','sm:grid-cols-2','lg:grid-cols-4');
      showAllBtn.setAttribute('aria-expanded','true');
      showAllBtn.classList.add('opacity-0','pointer-events-none');
      setTimeout(()=> showAllBtn.remove(),400);
    });
  }
});
