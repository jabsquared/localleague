'use strict';
Template.nav.created = function() {
  // Closes the Responsive Menu on Menu Item Click
  $('body').scrollspy({target: '.navbar-fixed-top'});


  // $('.navbar-collapse a').click(function(){
  //   console.log('CLICKED!');
  //   $('.navbar-toggle:visible').click();
  // });
  $(function() {
    $('.nav a').on('click', function() {
      if ($('.navbar-toggle').css('display') !== 'none') {
        $('.navbar-toggle').trigger('click');
      }
    });
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > 300) {
      $('nav').addClass('navbar-shrink');
    } else {
      $('nav').removeClass('navbar-shrink');
    }
  });
};
