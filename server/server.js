var database = require('./database.js')
var Todo = database.Todo
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
var port = 3003

app.listen(port, function () {
    console.log('server listening on port ', port)
})

app.get('/test', function (req, res) {
    res.send('connected to server')
})

app.post('/submit', function (req, res) {
    Todo.create({req.body.todo, req.body.dueDate})
})
