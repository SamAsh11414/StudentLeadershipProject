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
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  var args = message.content.slice(prefix.length).trim().split('/ +/');
  var command = args.shift().toLowerCase();

  if (message.content.startsWith('!Hi')) {
    message.channel.send('Hi');
  } else if (message.content.startsWith('!beep')) {
    message.channel.send('boop');
  } else if (message.content === '!server') {
    message.channel.send("This server is: ".concat(message.guild.name, "\nTotal members: ").concat(message.guild.memberCount, "\nYour ID: ").concat(message.author.id));
  } else if (message.content.startsWith('!Hug')) {
    if (!message.mentions.users.size) {
      return message.reply('You have to say who you are mentioning');
    }

    var taggedUser = message.mentions.users.first();
    message.channel.send("You hugged: ".concat(taggedUser.username));
  } else if (message.channel.send('avatar')) {
    if (!message.mentions.users.size) {
      return message.channel.send("<".concat(message.author.displayAvatarURL({
        format: "png",
        dynamic: true
      }), ">"));
    }

    var avatarList = message.mentions.users.map(function (user) {
      return "".concat(user.username, "'s avatar: <").concat(user.displayAvatarURL({
        format: "png",
        dynamic: true
      }), ">");
    });
    message.channel.send(avatarList);
  } else if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send("You didn't provide any arguments, ".concat(message.author, "!"));
    }

    message.channel.send("Command name: ".concat(command, "\nArguments: ").concat(args));
  }
});
client.login(token);