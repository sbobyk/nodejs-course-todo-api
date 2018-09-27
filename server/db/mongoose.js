var MongoClient = require('mongoose');

MongoClient.Promise = global.Promise;
//Connect to the MongoDB db (not needed the callback as in mongo)
MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true })

module.exports = {MongoClient};