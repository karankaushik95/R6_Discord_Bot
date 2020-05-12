const {
    prefix
} = require('../config.json');
const Discord = require('discord.js');

module.exports = {
    name: 'operator',
    description: 'Show info about an operator',
    aliases: ['op', 'ops', 'operators'],
    usage: '<operator_name>',
    cooldown: 5,
    args: true,
    execute(message, args) {
        if (args[0] === 'ash') {
            message.channel.send('Here\'s Ash\'s info!');
        }
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('FBI SWAT')
            .setURL('https://discord.js.org/')
            .setAuthor('Ash', 'https://i.imgur.com/wSTFkRM.png', 'https://rainbowsix.fandom.com/wiki/Ash')
            .setDescription('Some description here')
            .setThumbnail('https://vignette.wikia.nocookie.net/rainbowsix/images/4/42/Ash_-_Full_Body.png/revision/latest?cb=20180224040849')
            .addFields({
                name: 'Regular field title',
                value: 'Some value here'
            }, {
                name: '\u200B',
                value: '\u200B'
            }, {
                name: 'Inline field title',
                value: 'Some value here',
                inline: true
            }, {
                name: 'Inline field title',
                value: 'Some value here',
                inline: true
            }, )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
        //message.channel.send(exampleEmbed);
            
    },
};