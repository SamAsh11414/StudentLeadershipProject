"use strict";

module.exports = {
  name: 'hug',
  description: 'Give Some Hugs',
  execute: function execute(message, args) {
    if (!message.mentions.users.size) {
      return message.reply('You have to say who you are mentioning');
    }

    var taggedUser = message.mentions.users.first();
    message.channel.send("You hugged: ".concat(taggedUser.username));
  }
};