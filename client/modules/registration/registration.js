'use strict';
Template.registration.events({
  // handle the form submission
  'submit form': function(event) {
    console.log('submitting league!');

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var league = {
      firstName: event.target.fname.value,
      lastName: event.target.lname.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      name: event.target.league.value
    };


    function showAlert() {
      $('#success-alert')
        .fadeIn(900)
        .delay(900)
        .fadeOut(900);
      // console.log("Cool");
    }

    if (league) {
      Meteor.call('addLeague', league, showAlert);
    }
    console.log(league);

  }
});
Template.registration.created = function() {

  // Handling input from the registration template here

};
