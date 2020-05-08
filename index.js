const { prefix, token } = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token); 


client.on('message', message => {
    if (message.content === '!help') {
        message.channel.send('I am a bot for assisting you with Rainbow 6 Siege. Use the following commands to ask me stuff!');
    }
});