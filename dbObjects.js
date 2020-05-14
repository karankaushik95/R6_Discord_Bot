/*
Just abstracting away our database connection and usage from the main index.js
*/

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/rainbow6.db'
});

var operator = require('./models/operator_model.js')(sequelize, Sequelize);

module.exports = {operator};
