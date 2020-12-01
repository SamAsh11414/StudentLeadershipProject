// ctrl+c always helps
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}




client.on('ready', () => {
    console.log('bot is ready');

});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split('/ +/');
    const command = args.shift().toLowerCase();

    

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } 
    
     else if (message.content === '!server') {
         client.commands.get('server').execute(message, args);
        
    } else if (message.content.startsWith ('!Hug')) {
        if (!message.mentions.users.size) {
            return message.reply('You have to say who you are mentioning')
        }
        const taggedUser = message.mentions.users.first();

        message.channel.send(`You hugged: ${taggedUser.username}`);
    } 
    
});


client.login(token);