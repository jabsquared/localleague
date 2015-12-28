// // $('#success-alert').fadeOut(0);
// // $("#success-alert").hide();
// // $("#success-alert").toggleClass("active");
// // $("#success-alert").slideUp();
'use strict';
Router.route('/', function () {
  this.render('home');
});

Router.route('/reg', function () {
  this.render('registration');
});

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
