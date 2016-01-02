'use strict';
Meteor.methods({
  addLeague: function(league, onSuccess) {
    // Validations go here
    // EmailDB._ensureIndex('email', {
    //   unique: 1,
    //   sparse: 1
    // });


    LeagueDB.insert({
      _id: league.email,
      firstName: league.firstName,
      lastName: league.lastName,
      phone: league.phone,
      name: league.name,
      registerDate: new Date(),
    }, function(error, _id) {
      if (_id !== null) {
        if (error) {
          if (error.code === 11000) {
            return console.log("Duplicated Email");
          }
          // return console.log(error);
        } else if (onSuccess) {
          console.log('League info successfully submitted!');
          onSuccess();
        }
      }
    });
  },
  addUser: function(user, onSuccess) {
    // Validations go here
    // EmailDB._ensureIndex('email', {
    //   unique: 1,
    //   sparse: 1
    // });

    EmailDB.insert({
      _id: user.email,
      signupDate: new Date(),
    }, function(error, _id) {
      if (_id !== null) {
        if (error) {
          if (error.code === 11000) {
            return console.log("Duplicated Email");
          }
          // return console.log(error);
        } else if (onSuccess) {
          onSuccess();
        }
      }
    });
  }
});
