module.exports = {
	name: 'help',
	description: 'help menu',
	execute(message, args) {
		const Helpembed = new Discord.MessageEmbed()
		.setColor('#F07C0F')
		.setTitle('Help')
		.setDescription('You came to the right place for help!')
		.addFields(
			{ name: 'List of commands this bot has', value: '@SamAsh#6197 is always looking for things to add' },
			{ name: '\u200B', value: '\u200B' },
			{ name: '!help', value: 'Opens a help menu', inline: true },
			{ name: '!server:', value: 'Provides basic information on the server', inline: true },
			{ name: '!hug', value: 'Give someone in the server a hug, cause they might need it.', inline: true },
			{ name: '!froshpres', value: 'Displays the contact information for The Freshman President', inline: true },
			{ name: '!froshvp', value: 'Displays the contact information for The Freshman Vice President', inline: true },
			{ name: '!froshtreasurer', value: 'Displays the contact information for The Freshman Treasurer', inline: true },
			{ name: '!froshsec', value: 'Displays the contact information for the Freshman Secretary', inline: true },
			{ name: '!froshparli', value: 'Displays the contact information for The Freshman Parlimentarian', inline: true },
			{ name: '!froshcouncil', value: 'Displays the contact information for the entire Freshman Executive Board', inline: true },
		)
		.setTimestamp()
		.setFooter('Bot created by Samuel Ashkenas', 'https://Sammyashkenas.com');
		message.channel.send(Helpembed);
	},
};