// ctrl+c always helps
const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const { token } = require('./Token.json');
const { kMaxLength } = require('buffer');

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
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#F07C0F')
	.setTitle('Help')
	.setDescription('You came to the right place for help!')
	.addFields(
		{ name: 'List of commands this bot has', value: '@SamAsh#6197 is always looking for things to add' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '!help', value: 'Opens a help menu', inline: true },
        { name: '!server:', value: 'Provides basic information on the server', inline: true },
        { name: '!hug', value: 'Give someone in the server a hug, cause they might need it.', inline: true },
        { name: '!froshpres', value: 'Displays the contact information for The Freshman President', inline: true },
        { name: '!froshvp', value: 'Displays the contact information for The Freshman Vice President', inline: true },
        { name: '!froshtreasurer', value: 'Displays the contact information for The Freshman Treasurer', inline: true },
        { name: '!froshsec', value: 'Displays the contact information for the Freshman Secretary', inline: true },
        { name: '!froshparli', value: 'Displays the contact information for The Freshman Parlimentarian', inline: true },
        { name: '!froshcouncil', value: 'Displays the contact information for the entire Freshman Executive Board', inline: true },
	)
	.setTimestamp()
    .setFooter('Bot created by Samuel Ashkenas', 'https://Sammyashkenas.com');
    message.channel.send(exampleEmbed);

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
    
    else if (message.content.startsWith ("!fundraising")) {
        client.commands.get('?tres').execute(message, args);
    }
});


client.login(token);