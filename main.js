const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log(`Logged into ${client.guilds.size} servers, ready!`);
});
client.on('message', message => {
	if(message.author.bot || message.content.indexOf(config.prefix) !== 0) return;
	const args = message.content.slice(config.prefix.length).trim().split(" ");

	try {
		let cmd = require(`./commands/${args[0]}.js`)
	} catch(e) {

	}
});
try {
	client.login(config.token);
} catch(e) {
	console.error(e);
}