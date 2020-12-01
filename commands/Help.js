module.exports = {
	name: 'help',
	description: 'help menu',
	execute(message, args) {
		message.channel.send('```\n!help: Opens a help menu\n!server: Provides basic information on the server\n!hug Give someone in the server a hug, cause they might need it.\n!froshpres: Displays the contact information for The Freshman President\n!froshvp: Displays the contact information for The Freshman Vice President\n!froshtreasurer: Displays the contact information for The Freshman Treasurer\n!froshsec: Displays the contact information for the Freshman Secretary\n!froshparli: Displays the contact information for The Freshman Parlimentarian\n!froshcouncil: Displays the contact information for the entire Freshman Executive Board ```');
	},
};