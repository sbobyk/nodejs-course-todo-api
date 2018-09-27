var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
//library imports
var express = require('express');
var bodyParser = require('body-parser');

//local imports
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


//app is gonna store express
var app = express();
app.use(bodyParser.json());

//configuring the route, resource creation. sending json the express app
app.post('/todos', (req, res) => {
  //CREATING A TODOS THAT COMES FROM THE User
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc); //it sends the doc back
  }, (e) => {
    res.status(400).send(e);
  });
});

//read todos con get method
app.listen(3000, () => {
  console.log('Started on port 3000');
})