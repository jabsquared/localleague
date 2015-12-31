'use strict';

// lines 4-6 is just not a good usage of meteor
// Router.route('/', function () {
//   this.render('home');
// });



'use strict';


console.log("home Template created");

FlowRouter.route('/', {
  action: function() {
    console.log("working route");
    BlazeLayout.render("layout", {
      layout: "home"
    });
  }
});

//
//  Router.route('/reg', function () {
//   // this.render('registration');
// });

// Router.route('/payment', function () {
//   this.render('payment');
// })

Meteor.startup(function () {
  new WOW().init();

  // Stripe Setup:
  Stripe.setPublishableKey('pk_test_gGsssQZSj9M6t5prPRcZhp8s');
  // var handler = StripeCheckout.configure({
  //   key: 'pk_test_gGsssQZSj9M6t5prPRcZhp8s',
  //   token: function (token) {
  //
  //   }
  // });

  $(function () {
    $('a[href*=#]:not([href=#])')
      .click(function () {
        if(location.pathname.replace(/^\//, '') ===
          this.pathname.replace(/^\//, '') &&
          location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ?
            target : $('[name=' + this.hash.slice(1) + ']');
          if(target.length) {
            $('html,body')
              .animate({
                scrollTop: target.offset()
                  .top
              }, 1000);
            return false;
          }
        }
      });
  });

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
