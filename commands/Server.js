module.exports = {
	name: 'server',
	description: 'command to see info on the server',
	execute(message, args) {
        message.channel.send(`This server is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nYour ID: ${message.author.id}`)
	},
};