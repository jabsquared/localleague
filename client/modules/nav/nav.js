'use strict';
Template.nav.rendered = function() {
  // Closes the Responsive Menu on Menu Item Click
  $('body').scrollspy({target: '.navbar'});

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') ===
        this.pathname.replace(/^\//,'') &&
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 999);
          return false;
        }
      }
    });
  });

  $('.navbar-collapse a').click(function(){
    $('.navbar-toggle:visible').click();
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > 300) {
      $('nav').addClass('navbar-shrink');
    } else {
      $('nav').removeClass('navbar-shrink');
    }
  });
};
