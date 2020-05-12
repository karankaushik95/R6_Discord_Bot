const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/rainbow6.db'
});

var test = sequelize.authenticate()
    .then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log("SOMETHING DONE GOOFED");
    })
    .done();

var operator = require('./models/operator_model.js')(sequelize, Sequelize);


operator.sync();