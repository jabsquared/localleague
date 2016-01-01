'use strict';
Template.signup.events({

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
    console.log(user);
  }
});
