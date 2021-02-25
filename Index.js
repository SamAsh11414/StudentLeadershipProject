// ctrl+c always helps
const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const { token } = require('./Token.json');
const { kMaxLength } = require('buffer');
const Keyv = require('keyv'); 
const keyv = new Keyv('')

const client = new Discord.Client();
const prefixes = new Keyv('sqlite://path/to.sqlite');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const meetings = new Map();
function addMeeting(name, date, time, description) { meetings.add(new Date())}

keyv.on('error', err => console.error('Keyv connection error:', err))

function iterFromString(string) {
    return string[Symbol.iterator]();
}

function until(fn, iterator) {
    let result = '';
    for (
        let nextChar = iterator.next();
        !fn(nextChar.value);
        nextChar = iterator.next()
    ) {
        if (nextChar.done) break;
        result += nextChar.value;
    }
    return result;
}

function whitespace(char) { return char === ' ' }

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

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split('/ +/');
    // const command = args.shift().toLowerCase();

    const iter = iterFromString(message.content);
    const commandString = until(whitespace, iter);

    switch (commandString) {
        case '!help':
            client.commands.get('help').execute(message, args);
            break;
        case '!server':
            client.commands.get('server').execute(message, args);
        case '!hug': 
            client.commands.get('hug').execute(message, args);
            break;
        case '!froshtreasurer': 
            client.commands.get('tres').execute(message, args);
            break;
        case '!froshpres': 
            client.commands.get('pres').execute(message, args);
            break;
        case '!froshvp': 
            client.commands.get('vp').execute(message, args);
            break;
        case '!events':
            client.commands.get('events').execute(message, args);
            break;
        case '!froshsec': 
            client.commands.get('sec').execute(message, args);
            break;
        case '!froshparli': 
            client.commands.get('parli').execute(message, args);
            break;
        case '!froshcouncil':
            client.commands.get('pres').execute(message, args);
            client.commands.get('vp').execute(message, args);
            client.commands.get('tres').execute(message, args);
            client.commands.get('sec').execute(message, args);
            client.commands.get('parli').execute(message, args);
            break;
        case '!':
            client.command.get('').execute(message, args);
            break;
        case '!fundraising':
            client.commands.get('?tres').execute(message, args);
            break;
    }
});


client.login(token);
