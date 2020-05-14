/*
This file is only run once, the first time before we use our application (and subsequently any time that we modify our database).
This connects our ORM to our database and checks the model definition that we have written to make sure its all good and doesn't cause any issues during 
the time that our bot is running
*/

const Sequelize = require('sequelize'); // Include our ORM

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/rainbow6.db'
}); // Point it to our database

var test = sequelize.authenticate()
    .then(function () {
        console.log("CONNECTED!");
    })
    .catch(function (err) {
        console.log("SOMETHING DONE GOOFED");
    })
    .done(); // Connect to the database

var operator = require('./models/operator_model.js')(sequelize, Sequelize); // Include the model of the table we're going to use


operator.sync(); // Make sure the model definition matches the definition in the table.