'use strict';
Meteor.publish('emailDB', function() {
  return EmailDB.find();
});

Meteor.publish('leagueDB', function() {
  return LeagueDB.find();
});