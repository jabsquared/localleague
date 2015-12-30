'use strict';
Template.home.created = function() {
  console.log("home Template created");

      console.log("routing better");
      FlowRouter.route('/', {
        action: function() {
          BlazeLayout.render("home", {
            content: "nav"
          });
        }
      });



};
