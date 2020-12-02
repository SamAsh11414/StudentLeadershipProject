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
    client.user.setPresence({
        status: "online",
        game: {
            name: "SamAsh#6197 Program Me",
            type: "Streaming"
        }
    });

});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split('/ +/');
    const command = args.shift().toLowerCase();

    

    if (message.content === '!help') {
        client.commands.get('help').execute(message, args);
    } 
    
    else if (message.content === '!server') {
        client.commands.get('server').execute(message, args);
        
    } 
    
    else if (message.content.startsWith ('!hug')) {
        client.commands.get('hug').execute(message, args);
    } 
    
    else if (message.content.startsWith ('!froshtreasurer')) {
        client.commands.get('tres').execute(message, args);
    } 
    
    else if (message.content.startsWith ('!froshpres')) {
        client.commands.get('pres').execute(message, args);
    }

    else if (message.content.startsWith ('!froshvp')) {
        client.commands.get('vp').execute(message, args);
    }

    else if (message.content.startsWith ('!froshsec')) {
        client.commands.get('sec').execute(message, args);
    }

    else if (message.content.startsWith ('!froshparli')) {
        client.commands.get('parli').execute(message, args);
    }

    else if (message.content.startsWith ("!froshcouncil")) {
        client.commands.get('pres').execute(message, args);
        client.commands.get('vp').execute(message, args);
        client.commands.get('tres').execute(message, args);
        client.commands.get('sec').execute(message, args);
        client.commands.get('parli').execute(message, args);
    }
});


client.login(token);