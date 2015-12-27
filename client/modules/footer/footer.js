'use strict';
Template.footer.events({

  // handle the form submission
  'submit form': function(event) {
    console.log('submit!');

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var user = {
      // firstName : event.target.firstName.value,
      // lastName : event.target.lastName.value,
      email: event.target.email.value
    };

    function showAlert() {
      $('#success-alert')
        .fadeIn(900)
        .delay(900)
        .fadeOut(900);
      //TODO: Add a reminder to test sarah beta
      // console.log("Cool");
    }
    if (user) {
      Meteor.call('addUser', user, showAlert);
    }
  }


});

smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( toggle, anchor ) {} // Function to run after scrolling
});


Meteor.startup(function () {
  console.log("running");
    smoothScroll.init();
});
