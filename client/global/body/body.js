// // $('#success-alert').fadeOut(0);
// // $("#success-alert").hide();
// // $("#success-alert").toggleClass("active");
// // $("#success-alert").slideUp();
// 'use strict';
// Template.body.created = function() {
//   // $('body').scrollspy({target: '.navbar-fixed-top'});
//
//   $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//       var $anchor = $(this);
//       $('html, body').stop().animate({
//         scrollTop: $($anchor.attr('href')).offset().top
//       }, 1500, 'easeInOutExpo');
//       event.preventDefault();
//     });
//
//   });
//
//   // Closes the sidebar menu
//   $("#menu-close").click(function(e) {
//     e.preventDefault();
//     $("#sidebar-wrapper").toggleClass("active");
//   });
//
//   // Opens the sidebar menu
//   $("#menu-toggle").click(function(e) {
//     e.preventDefault();
//     $("#sidebar-wrapper").toggleClass("active");
//   });
//
//   // Scrolls to the selected menu item on the page
//   $(function() {
//     $('a[href*=#]:not([href=#])').click(function() {
//       if (location.pathname.replace(/^\//, '') ===
//       this.pathname.replace(/^\//, '') ||
//       location.hostname === this.hostname) {
//
//         var target = $(this.hash);
//         target = target.length ?
//         target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//           $('html,body').animate({
//             scrollTop: target.offset().top
//           }, 1000);
//           return false;
//         }
//       }
//     });
//   });
//
//   //Enable map scroll on click
//   // $('.map')
//   //   .click(function() {
//   //     $('.map iframe').css("pointer-events", "auto");
//   //   });
//
//   // Disable scroll zooming and bind back the click event
//   var onMapMouseleaveHandler = function() {
//     var that = $(this);
//
//     that.on('click', onMapClickHandler);
//     that.off('mouseleave', onMapMouseleaveHandler);
//     that.find('iframe').css("pointer-events", "none");
//   };
//
//   var onMapClickHandler = function() {
//     var that = $(this);
//
//     // Disable the click handler until the user leaves the map area
//     that.off('click', onMapClickHandler);
//
//     // Enable scrolling zoom
//     that.find('iframe').css("pointer-events", "auto");
//
//     // Handle the mouse leave event
//     that.on('mouseleave', onMapMouseleaveHandler);
//   };
//
//   // Enable map zooming with mouse scroll when the user clicks the map
//   $('.map').on('click', onMapClickHandler);
//
//   // Listen for enter key to submit idea form
//   // $('.idea-input').keydown(function(event) {
//   //       if (event.keyCode == 13) {
//   //           this.form.submit();
//   //           return false;
//   //        }
//   //   });
// };
//



Meteor.startup(function() {
  Stripe.setPublishableKey('pk_test_gGsssQZSj9M6t5prPRcZhp8s');

});

Meteor.startup(function() {
    var handler = StripeCheckout.configure({
        key: 'pk_test_gGsssQZSj9M6t5prPRcZhp8s',
        token: function(token) {}
    });
});

Router.route('/', function () {
  this.render('home');
});

 Router.route('/reg', function () {
   this.render('registration');
 });


//
//  Meteor.startup(function() {
//
//    // event.preventDefault();
//    console.log("running");
//    event.preventDefault()
//     smoothScroll.init({
//       selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
//       selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
//       speed: 3000, // Integer. How fast to complete the scroll in milliseconds
//       easing: 'easeOutCubic', // Easing pattern to use
//       updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
//       offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
//       callback: function(toggle, anchor) {} // Function to run after scrolling
//     });
// });

Meteor.startup(function(){
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});
