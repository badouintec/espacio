(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
     jQuery('#clock').countdown('2025/10/03',function(event){
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> Días</div> '
      +'<div class="time-entry hours"><span>%H</span> Horas</div> '
      +'<div class="time-entry minutes"><span>%M</span> Minutos</div> '
      +'<div class="time-entry seconds"><span>%S</span> Segundos</div> '));
    });

    /* Mobile Navigation Mejorada */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'div',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '',
        openedSymbol: '',
        init: function(){
          // Agregar overlay
          if (!$('.mobile-menu-overlay').length) {
            $('body').append('<div class="mobile-menu-overlay"></div>');
          }
        },
        beforeOpen: function(trigger) {
          $('.mobile-menu-overlay').addClass('active');
          $('.navbar-toggler').addClass('active');
          $('body').addClass('menu-open');
        },
        beforeClose: function(trigger) {
          $('.mobile-menu-overlay').removeClass('active');
          $('.navbar-toggler').removeClass('active');
          $('body').removeClass('menu-open');
        }
    });

    // Cerrar menú al hacer click en overlay
    $(document).on('click', '.mobile-menu-overlay', function() {
      $('.mobile-menu').slicknav('close');
    });

    // Cerrar menú al hacer click en un enlace
    $(document).on('click', '.slicknav_nav a', function() {
      $('.mobile-menu').slicknav('close');
    });

    // Prevenir scroll del body cuando el menú está abierto
    $('body').on('menu-open', function() {
      $('body').css('overflow', 'hidden');
    });

    // Restaurar scroll cuando se cierra el menú
    $('.mobile-menu').on('close', function() {
      $('body').css('overflow', 'auto');
    });

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