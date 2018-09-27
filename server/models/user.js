//We require mongoose
var mongoose = require('mongoose');

var User = mongoose.model('User', {
  mail: {
    type: String,
    required: true,
    minlength:1,
    trim: true, 
  },
});

//We export the model that we have created
module.exports = {User};