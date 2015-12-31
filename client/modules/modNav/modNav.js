'use strict';
FlowRouter.route('/reg', {
  action: function() {
    console.log("working route");
    BlazeLayout.render("layout", {
      layout: "registration"
    });
  }
});

FlowRouter.route('/payment', {
  action: function() {
    console.log("working route");
    BlazeLayout.render("layout", {
      layout: "payment"
    });
  }
});
