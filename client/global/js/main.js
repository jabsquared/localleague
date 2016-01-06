'use strict';
Meteor.subscribe('emailDB');

Meteor.subscribe('leagueDB');

Router.route('/', function () {
  this.render('home');
});

Router.route('/reg', function () {
  this.render('registration');
});

Router.route('/sup', function () {
  this.render('signup');
})

Meteor.startup(function () {
  new WOW().init();

  // Stripe Setup:
  // Stripe.setPublishableKey('pk_test_gGsssQZSj9M6t5prPRcZhp8s');
  // var handler = StripeCheckout.configure({
  //   key: 'pk_test_gGsssQZSj9M6t5prPRcZhp8s',
  //   token: function (token) {
  //
  //   }
  // });

});

Template.body.created = function () {
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

};
