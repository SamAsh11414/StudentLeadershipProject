// ctrl+c always helps
const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();


client.on('ready', () => {
    console.log('bot is ready');

});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split('/ +/');
    const command = args.shift().toLowerCase();

    

    if (message.content.startsWith ('!Hi')) {
        message.channel.send('Hi')
    } else if (message.content.startsWith ('!beep')) {
        message.channel.send('boop')
    } else if (message.content === '!server') {
        message.channel.send(`This server is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nYour ID: ${message.author.id}`)
    } else if (message.content.startsWith ('!Hug')) {
        if (!message.mentions.users.size) {
            return message.reply('You have to say who you are mentioning')
        }
        const taggedUser = message.mentions.users.first();

        message.channel.send(`You hugged: ${taggedUser.username}`);
    } else if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
    
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    } 
});


client.login(token);