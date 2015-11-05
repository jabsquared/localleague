'use strict';
Template.footer
  .events({

    // handle the form submission
    'submit form': function(event) {
      console.log('submit!');

      // stop the form from submitting
      event.preventDefault();

      // get the data we need from the form
      var idea = event.target.idea.value;

      function showAlert() {
        $('#success-alert').fadeIn(900)
          .delay(900)
          .fadeOut(900);
        //TODO: Add a reminder to test sarah beta
      }
      if (idea) {
        Meteor.call('addIdea', idea, showAlert);
      }
    }
  });
