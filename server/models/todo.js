//We require mongoose
var mongoose = require('mongoose');

//Creating a model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength:1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

//We export the model that we have created
module.exports = {Todo};