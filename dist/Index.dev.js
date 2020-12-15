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

var Keyv = require('keyv');

var keyv = new Keyv('mongodb://user:pass@localhost:27017/SL_bot');
var client = new Discord.Client();
var prefixes = new Keyv('sqlite://path/to.sqlite');
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

var meetings = new Map();

function addMeeting(name, date, time, description) {
  meetings.add(new Date());
}

keyv.on('error', function (err) {
  return console.error('Keyv connection error:', err);
});

function iterFromString(string) {
  return string[Symbol.iterator]();
}

function until(fn, iterator) {
  var result = '';

  for (var nextChar = iterator.next(); !fn(nextChar.value); nextChar = iterator.next()) {
    if (nextChar.done) break;
    result += nextChar.value;
  }

  return result;
}

function whitespace(_char) {
  return _char === ' ';
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
client.on('message', function _callee(message) {
  var args, iter, commandString;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(!message.content.startsWith(prefix) || message.author.bot)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          args = message.content.slice(prefix.length).trim().split('/ +/'); // const command = args.shift().toLowerCase();

          iter = iterFromString(message.content);
          commandString = until(whitespace, iter);
          _context.t0 = commandString;
          _context.next = _context.t0 === '!help' ? 8 : _context.t0 === '!server' ? 10 : _context.t0 === '!hug' ? 11 : _context.t0 === '!froshtreasurer' ? 13 : _context.t0 === '!froshpres' ? 15 : _context.t0 === '!froshvp' ? 17 : _context.t0 === '!events' ? 19 : _context.t0 === '!froshsec' ? 21 : _context.t0 === '!froshparli' ? 23 : _context.t0 === '!froshcouncil' ? 25 : _context.t0 === '!' ? 31 : _context.t0 === '!fundraising' ? 33 : 35;
          break;

        case 8:
          client.commands.get('help').execute(message, args);
          return _context.abrupt("break", 35);

        case 10:
          client.commands.get('server').execute(message, args);

        case 11:
          client.commands.get('hug').execute(message, args);
          return _context.abrupt("break", 35);

        case 13:
          client.commands.get('tres').execute(message, args);
          return _context.abrupt("break", 35);

        case 15:
          client.commands.get('pres').execute(message, args);
          return _context.abrupt("break", 35);

        case 17:
          client.commands.get('vp').execute(message, args);
          return _context.abrupt("break", 35);

        case 19:
          client.commands.get('events').execute(message, args);
          return _context.abrupt("break", 35);

        case 21:
          client.commands.get('sec').execute(message, args);
          return _context.abrupt("break", 35);

        case 23:
          client.commands.get('parli').execute(message, args);
          return _context.abrupt("break", 35);

        case 25:
          client.commands.get('pres').execute(message, args);
          client.commands.get('vp').execute(message, args);
          client.commands.get('tres').execute(message, args);
          client.commands.get('sec').execute(message, args);
          client.commands.get('parli').execute(message, args);
          return _context.abrupt("break", 35);

        case 31:
          client.command.get('').execute(message, args);
          return _context.abrupt("break", 35);

        case 33:
          client.commands.get('?tres').execute(message, args);
          return _context.abrupt("break", 35);

        case 35:
        case "end":
          return _context.stop();
      }
    }
  });
});
client.login(token);