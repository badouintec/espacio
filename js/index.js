// JavaScript para III Coloquio Internacional de Espacio y Sostenibilidad 2025
// Versión corregida - Estructura limpia y funcional

document.addEventListener('DOMContentLoaded', function () {
  
  // --- Configuración del Carrusel ---
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const totalSlides = slides.length;

  if (slides.length > 0 && dots.length > 0) {
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
  }

  // --- Funcionalidad de Pestañas de Participantes ---
  const participantesTabs = document.querySelectorAll('.participantes-tab');
  const participantesContents = document.querySelectorAll('.participantes-content .tab-content');

  if (participantesTabs.length > 0) {
    participantesTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
        
        // Remover clase active de todas las pestañas
        participantesTabs.forEach(t => {
          t.classList.remove('active');
          t.classList.remove('border-coloquio-ocean', 'text-coloquio-navy');
          t.classList.add('border-transparent', 'text-coloquio-gray');
        });

        // Activar pestaña clickeada
        this.classList.add('active');
        this.classList.add('border-coloquio-ocean', 'text-coloquio-navy');
        this.classList.remove('border-transparent', 'text-coloquio-gray');

        // Mostrar contenido correspondiente
        participantesContents.forEach(content => {
          content.classList.remove('active');
          content.classList.add('hidden');
        });

        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
          targetContent.classList.add('active');
          targetContent.classList.remove('hidden');
        }
      });
    });
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (question && answer) {
      question.addEventListener('click', () => {
        const isExpanded = answer.classList.contains('hidden');
        
        // Cerrar todas las otras FAQ
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherIcon = otherItem.querySelector('.faq-icon');
            otherAnswer.classList.add('hidden');
            otherIcon.style.transform = 'rotate(0deg)';
          }
        });

        // Toggle actual
        if (isExpanded) {
          answer.classList.remove('hidden');
          icon.style.transform = 'rotate(45deg)';
        } else {
          answer.classList.add('hidden');
          icon.style.transform = 'rotate(0deg)';
        }
      });
    }
  });

  // --- FAQ Categories ---
  const faqCategories = document.querySelectorAll('.faq-category');
  const faqSections = document.querySelectorAll('.faq-section');

  if (faqCategories.length > 0) {
    faqCategories.forEach(category => {
      category.addEventListener('click', function() {
        const targetCategory = this.getAttribute('data-category');
        
        // Actualizar botones
        faqCategories.forEach(cat => {
          cat.classList.remove('active', 'bg-coloquio-ocean', 'text-white');
          cat.classList.add('bg-white', 'text-coloquio-navy');
        });
        
        this.classList.add('active', 'bg-coloquio-ocean', 'text-white');
        this.classList.remove('bg-white', 'text-coloquio-navy');

        // Mostrar sección correspondiente
        faqSections.forEach(section => {
          section.classList.add('hidden');
        });

        const targetSection = document.querySelector(`.faq-section.${targetCategory}`);
        if (targetSection) {
          targetSection.classList.remove('hidden');
        }
      });
    });
  }

  // --- Galería Simple - Efectos Hover y Interacciones ---
  const galeriaCards = document.querySelectorAll('#galeria .bg-gradient-to-br');
  
  if (galeriaCards.length > 0) {
    galeriaCards.forEach(card => {
      // Efecto de hover mejorado
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
        card.style.transition = 'all 0.3s ease';
        card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      });

      // Click para animación de "vista previa" simple
      card.addEventListener('click', () => {
        const titulo = card.querySelector('h3').textContent;
        const descripcion = card.querySelector('p').textContent;
        
        // Animación de feedback
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          card.style.transform = 'translateY(-8px) scale(1.02)';
        }, 150);

        // Mensaje temporal (opcional)
        console.log(`📸 Vista de galería: ${titulo} - ${descripcion}`);
      });
    });
  }

  // --- Menu Mobile ---
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    
    mobileMenuButton.addEventListener('click', () => { 
      const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('hidden'); 
    });

    // Cerrar menú al hacer click en enlaces
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Smooth Scroll para enlaces ancla ---
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // --- Header transparencia en scroll ---
  const header = document.querySelector('header');
  if (header) {
    function updateHeaderTransparency() {
      if (window.scrollY > 100) {
        header.classList.add('bg-opacity-95');
        header.classList.remove('bg-opacity-80');
      } else {
        header.classList.add('bg-opacity-80');
        header.classList.remove('bg-opacity-95');
      }
    }

    // Throttle function para optimizar performance
    function throttle(func, limit) {
      let lastFunc;
      let lastRan;
      return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(function() {
            if ((Date.now() - lastRan) >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      }
    }

    window.addEventListener('scroll', throttle(updateHeaderTransparency, 10));
  }

  console.log('🚀 III Coloquio Internacional de Espacio y Sostenibilidad 2025 - Sitio web cargado correctamente');
});