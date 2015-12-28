'use strict';
Meteor.publish('emailDB', function() {
  return EmailDB.find();
});
Meteor.publish('users', function() {
  return UserDB.find();
});
