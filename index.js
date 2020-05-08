const { prefix, token } = require('./config.json'); // config.json is gitignored because privacy and token

const Discord = require('discord.js'); // Discord JS provides the boilerplate for messing around with Discord and discord servers
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!'); // When the node application has started successfully, this'll log on the console
});

client.login(token); //Login to the discord app using our super secret token

// The main "menu"
client.on('message', message => {
    if (message.content === `${prefix}help`) {
        message.channel.send('I am a bot for assisting you with Rainbow 6 Siege. Use the following commands to ask me stuff!');
    }
});