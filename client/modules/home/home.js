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
};
