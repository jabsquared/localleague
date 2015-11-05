'use strict';
Meteor.methods({
  addIdea: function(text, onSuccess) {
    // Validations go here

    Ideas.insert({
      idea: text,
      createdAt: new Date(),
    }, function(error, _id) {
      if (_id !== null) {
        if (onSuccess) {
          onSuccess();
        }
      }
    });
  },
});
