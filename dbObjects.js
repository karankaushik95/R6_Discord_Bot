const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/rainbow6.db'
});

var operator = require('/models/operator_model.js')(sequelize, Sequelize);


operator.prototype.getItems = function() {
	return operator.findAll({
		where: { name: this.name },
	});
};

module.exports = {operator};
