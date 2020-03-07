var Sequelize = require('sequelize');
var sequelize = new Sequelize('menagerie', 'testuser', 'test', {
    host: 'localhost',
    dialect: 'mysql'
});

var Todos = sequelize.define('todos', {
    task: { type: Sequelize.STRING },
    dueDate: {type: Sequelize.DATE}
})
Todos.sync()

sequelize
    .authenticate()
    .then(function (err) {
    console.log('sequelize has connected')
    })
    .catch(function (err) {
    console.log('unable to connect to database: ', err)
    })


module.exports = Todos;

