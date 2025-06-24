(function($) {
  
  "use strict";
    // Función para manejar el cambio de logo según la posición del scroll
  function updateNavbarLogo() {
    var timestamp = new Date().getTime(); // Timestamp para evitar cacheo
    if ($(window).scrollTop() > 200) {
      $('.scrolling-navbar').addClass('top-nav-collapse');
      $('.navbar-brand img').attr('src', 'assets/img/logo.png?' + timestamp); // Logo negro
    } else {
      $('.scrolling-navbar').removeClass('top-nav-collapse');
      $('.navbar-brand img').attr('src', 'assets/img/logoblanco.png?' + timestamp); // Logo blanco
    }
  }
  
  // Ejecutar cuando el DOM esté listo (antes de cargar imágenes y otros recursos)
  $(document).ready(function() {
    // Forzar logo blanco al inicio
    $('.navbar-brand img').attr('src', 'assets/img/logoblanco.png');
    // Comprobar inmediatamente la posición del scroll
    updateNavbarLogo();
  });
  $(window).on('load', function() {
    // Ocultar precargador cuando la página esté completamente cargada
    $('#preloader').fadeOut();
    
    // Verificar nuevamente el logo cuando todo esté cargado
    updateNavbarLogo();
    
    // Inicializar el sistema de idiomas
    if (window.languageManager) {
      window.languageManager.init();
    }
    
    // Configurar el evento de scroll
    $(window).on('scroll', function() {
      updateNavbarLogo();
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */     jQuery('#clock').countdown('2025/11/15',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> <b>:</b> Días</div> '
      +'<div class="time-entry hours"><span>%H</span> <b>:</b> Horas</div> '
      +'<div class="time-entry minutes"><span>%M</span> <b>:</b> Minutos</div> '
      +'<div class="time-entry seconds"><span>%S</span> Segundos</div> '));
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation 
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    }); 

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
     delay: 10,
     time: 1500
    });

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });      

}(jQuery));