"use strict";

// ctrl+c always helps
var fs = require('fs');

var Discord = require('discord.js');

var _require = require('./config.json'),
    prefix = _require.prefix;

var _require2 = require('./Token.json'),
    token = _require2.token;

var _require3 = require('buffer'),
    kMaxLength = _require3.kMaxLength;

var client = new Discord.Client();
client.commands = new Discord.Collection();
var commandFiles = fs.readdirSync('./commands').filter(function (file) {
  return file.endsWith('.js');
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = commandFiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var file = _step.value;

    var command = require("./commands/".concat(file));

    client.commands.set(command.name, command);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

client.on('ready', function () {
  console.log('bot is ready');
  client.user.setPresence({
    status: "online",
    game: {
      name: "SamAsh#6197 Program Me",
      type: "Streaming"
    }
  });
});
client.on('message', function (message) {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  var args = message.content.slice(prefix.length).trim().split('/ +/');
  var command = args.shift().toLowerCase();

  if (message.content === '!help') {
    var exampleEmbed = new Discord.MessageEmbed().setColor('#F07C0F').setTitle('Help').setDescription('You came to the right place for help!').addFields({
      name: 'List of commands this bot has',
      value: '@SamAsh#6197 is always looking for things to add'
    }, {
      name: "\u200B",
      value: "\u200B"
    }, {
      name: '!help',
      value: 'Opens a help menu',
      inline: true
    }, {
      name: '!server:',
      value: 'Provides basic information on the server',
      inline: true
    }, {
      name: '!hug',
      value: 'Give someone in the server a hug, cause they might need it.',
      inline: true
    }, {
      name: '!froshpres',
      value: 'Displays the contact information for The Freshman President',
      inline: true
    }, {
      name: '!froshvp',
      value: 'Displays the contact information for The Freshman Vice President',
      inline: true
    }, {
      name: '!froshtreasurer',
      value: 'Displays the contact information for The Freshman Treasurer',
      inline: true
    }, {
      name: '!froshsec',
      value: 'Displays the contact information for the Freshman Secretary',
      inline: true
    }, {
      name: '!froshparli',
      value: 'Displays the contact information for The Freshman Parlimentarian',
      inline: true
    }, {
      name: '!froshcouncil',
      value: 'Displays the contact information for the entire Freshman Executive Board',
      inline: true
    }).setTimestamp().setFooter('Bot created by Samuel Ashkenas', 'https://Sammyashkenas.com');
    message.channel.send(exampleEmbed);
  } else if (message.content === '!server') {
    client.commands.get('server').execute(message, args);
  } else if (message.content.startsWith('!hug')) {
    client.commands.get('hug').execute(message, args);
  } else if (message.content.startsWith('!froshtreasurer')) {
    client.commands.get('tres').execute(message, args);
  } else if (message.content.startsWith('!froshpres')) {
    client.commands.get('pres').execute(message, args);
  } else if (message.content.startsWith('!froshvp')) {
    client.commands.get('vp').execute(message, args);
  } else if (message.content.startsWith('!froshsec')) {
    client.commands.get('sec').execute(message, args);
  } else if (message.content.startsWith('!froshparli')) {
    client.commands.get('parli').execute(message, args);
  } else if (message.content.startsWith("!froshcouncil")) {
    client.commands.get('pres').execute(message, args);
    client.commands.get('vp').execute(message, args);
    client.commands.get('tres').execute(message, args);
    client.commands.get('sec').execute(message, args);
    client.commands.get('parli').execute(message, args);
  } else if (message.content.startsWith("!fundraising")) {
    client.commands.get('?tres').execute(message, args);
  }
});
client.login(token);