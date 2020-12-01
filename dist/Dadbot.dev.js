"use strict";

// ctrl+c always helps
var Discord = require('discord.js');

var _require = require('./config.json'),
    prefix = _require.prefix,
    token = _require.token;

var client = new Discord.Client();
client.on('ready', function () {
  console.log('bot is ready');
});
client.on('message', function (message) {
  if (message.content.startsWith('!Hi')) {
    message.channel.send('Hi');
  } else if (message.content.startsWith('!beep')) {
    message.channel.send('boop');
  } else if (message.content === '!server') {
    message.channel.send("This server name is: ".concat(message.guild.owner));
  }
});
client.login(token);