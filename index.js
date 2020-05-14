const {
    prefix,
    token
} = require('./config.json'); // config.json is gitignored because privacy and token
const fs = require('fs'); // Read files in the file system

const { operator } = require('./dbObjects'); // Models defined based on the Database
const { Op } = require('sequelize'); // ORM

const Discord = require('discord.js'); // Discord JS provides the boilerplate for messing around with Discord and discord servers
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.once('ready', async () => {
    console.log("Ready!"); 
});

client.login(token); //Login to the discord app using our super secret token

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Check if the specified command or their aliases exist in the list of commands that this bot provides
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) {
        return message.channel.send("That command does not exist!"); // Meep moop that command doesn't exist
    }

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`; // Command exists, but improper usage

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});