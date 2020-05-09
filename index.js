const {
    prefix,
    token
} = require('./config.json'); // config.json is gitignored because privacy and token

const Discord = require('discord.js'); // Discord JS provides the boilerplate for messing around with Discord and discord servers
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!'); // When the node application has started successfully, this'll log on the console
});

client.login(token); //Login to the discord app using our super secret token

// The main "menu"
client.on('message', message => {

    if(message.content.toLowerCase().includes("good bot")){
        return message.channel.send("Thank you for your kind words. I aim to please");
    }
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else if (args[0] === 'foo') {
            return message.channel.send('bar');
        }
    
        message.channel.send(`First argument: ${args[0]}`);
    }else if (command === 'kick') {
        // grab the "first" mentioned user from the message
        // this will return a `User` object, just like `message.author`
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        
        const taggedUser = message.mentions.users.first();
        
        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    }else if (command === 'avatar') {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
    
        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
    }
});