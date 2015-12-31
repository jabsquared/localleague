'use strict';


console.log("home Template created");

FlowRouter.route('/', {
  action: function() {
    console.log("working route");
    BlazeLayout.render("onlyNav", {
      nav: "nav"
    });
  }
});
