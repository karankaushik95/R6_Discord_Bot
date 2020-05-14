/*
This file contains the model mapping for my ORM (Sequelize) to map to the table "operator" in my sqlite3 database
*/ 


module.exports = (sequelize, DataTypes) => {
    return sequelize.define('operator_model', {
        'id': {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        'ingameimage': {
            type: DataTypes.TEXT,
            allowNull: true
        },
        'name': {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        'namelink': {
            type: DataTypes.TEXT,
            allowNull: false
        },
        'unit': {
            type: DataTypes.TEXT,
            allowNull: false
        },
        'unitlink': {
            type: DataTypes.TEXT,
            allowNull: false
        },
        'speed':{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        'armour':{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        'image': {
            type: DataTypes.TEXT,
            allowNull: false
        },
        'primary1': {
            type: DataTypes.TEXT,
            allowNull: false
        },
        'primary2': {
            type: DataTypes.TEXT,
            allowNull: true
        },
        'primary3': {
            type: DataTypes.TEXT,
            allowNull: true
        },
        'secondary1': {
            type: DataTypes.TEXT,
            allowNull: false
        },
        'secondary2': {
            type: DataTypes.TEXT,
            allowNull: true
        },
        'secondary3': {
            type: DataTypes.TEXT,
            allowNull: true
        },
        'gadget1': {
            type: DataTypes.TEXT,
            allowNull: true
        },
        'gadget2': {
            type: DataTypes.TEXT,
            allowNull: true
        },
        'ability': {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: 'operator',
        timestamps: false
    });
};