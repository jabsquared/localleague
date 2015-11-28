'use strict';
Meteor.publish('emailDB', function() {
  return EmailDB.find();
});
