'use strict';
Template.nav.created = function() {
  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
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
