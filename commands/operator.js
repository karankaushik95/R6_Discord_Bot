const {
    prefix
} = require('../config.json');
const Discord = require('discord.js');
const {
    operator
} = require('../dbObjects');
const {
    Op
} = require('sequelize');

module.exports = {
    name: 'operator',
    description: 'Show info about an operator',
    aliases: ['op', 'ops', 'operators'],
    usage: '<operator_name>',
    cooldown: 5,
    args: true,
    async execute(message, args) {
        const operatorName = args[0].charAt(0).toUpperCase() + args[0].slice(1);

        // SELECT * FROM Operator WHERE Operator.Name = operatorName LIMIT 1;
        const required = await operator.findOne({
            where: {
                name: operatorName
            }
        });

        // Empty query, operator not found
        if (required == null) {
            return message.channel.send("That operator does not exist. Are you sure it's a real operator?"); // Just a little bit of sass
        }


        // Use an embed message to beautifully present operator information!
        const exampleEmbed = new Discord.MessageEmbed()
        exampleEmbed.setColor('#0099ff')
        exampleEmbed.setTitle(required.get('unit'))
        exampleEmbed.setURL(required.get('unitlink'))
        exampleEmbed.setAuthor(required.get('name'), required.get('ingameimage'), required.get('namelink'))
        exampleEmbed.setThumbnail(required.get('image'))
        exampleEmbed.addFields({
            name: 'Speed',
            value: required.get('speed'),
            inline: true
        }, {
            name: 'Armour',
            value: required.get('armour'),
            inline: true
        }, {
            name: '\u200b',
            value: '\u200b'
        });
        exampleEmbed.addField('Primary 1', required.get('primary1'), true);
        if (required.get('primary2') !== null) {
            exampleEmbed.addField('Primary 2', required.get('primary2'), true);
        }
        if (required.get('primary3') !== null) {
            exampleEmbed.addField('Primary 3', required.get('primary3'), true);
        }
        exampleEmbed.addField('\u200b', '\u200b', false);
        exampleEmbed.addField('Secondary 1', required.get('secondary1'), true);
        if (required.get('secondary2') !== null) {
            exampleEmbed.addField('Secondary 2', required.get('secondary2'), true);
        }
        if (required.get('secondary3') !== null) {
            exampleEmbed.addField('Secondary 3', required.get('secondary3'), true);
        }
        exampleEmbed.addField('\u200b', '\u200b', false);
        exampleEmbed.addField('Gadget 1', required.get('gadget1'), true);
        exampleEmbed.addField('Gadget 2', required.get('gadget2'), true);
        exampleEmbed.addField('\u200b', '\u200b', false);
        exampleEmbed.addField('Ability', required.get('ability'), false);
        message.channel.send("Here's " + operatorName + "'s information!");
        message.channel.send(exampleEmbed);
    },
};