const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log(`Logged into ${client.guilds.size} servers, ready!`);
});
client.on('message', message => {
	switch(message) {
		case "Cherri":
			message.channel.send("WHERE IS SHE!? I WANNA PLAY! IM A GOOD BOY!");
			break;
		case "Kurama~":
			message.channel.send('Of course! *holds out a tray of cookies* For you, <@267987286761799680>');
			break;
	}
});
client.login(config.token);