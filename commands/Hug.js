module.exports = {
	name: 'hug',
	description: 'Give Some Hugs',
	execute(message, args) {
		if (!message.mentions.users.size) {
            return message.reply('You have to say who you are mentioning')
        }
        const taggedUser = message.mentions.users.first();
        
        message.channel.send(`You hugged: ${taggedUser.username}`);
	},
};


