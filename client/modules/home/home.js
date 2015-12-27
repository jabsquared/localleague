// $('#success-alert').fadeOut(0);
// $("#success-alert").hide();
// $("#success-alert").toggleClass("active");
// $("#success-alert").slideUp();
'use strict';
Template.home.created = function() {
console.log("home Template created");


  $("#nav ul li a[href^='#']").on('click', function(e) {

    console.log("how about here");

     // prevent default anchor click behavior
     e.preventDefault();

     // store hash
     var hash = this.hash;

     // animate
     $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 300, function(){

         // when done, add hash to url
         // (default click behaviour)
         window.location.hash = hash;
       });

  });



  //
  // $('body').scrollspy({
  //   target: '.navbar-fixed-top'
  // });


  //
  //
  // $(function() {
  //   $('a.page-scroll').bind('click', function(event) {
  //     console.log("Clicked");
  //     var $anchor = $(this);
  //     $('html, body').stop().animate({
  //       scrollTop: $($anchor.attr('href')).offset().top
  //     }, 1500, 'easeInOutExpo');
  //     event.preventDefault();
  //   });
  //
  // });
};
