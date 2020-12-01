"use strict";

// ctrl+c always helps
var fs = require('fs');

var Discord = require('discord.js');

var _require = require('./config.json'),
    prefix = _require.prefix,
    token = _require.token;

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
});
client.on('message', function (message) {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  var args = message.content.slice(prefix.length).trim().split('/ +/');
  var command = args.shift().toLowerCase();

  if (message.content === '!help') {
    client.commands.get('help').execute(message, args);
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
  }
});
client.login(token);