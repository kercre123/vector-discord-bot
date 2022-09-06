const fs = require('fs');
Discord = require('discord.js');
client = new Discord.Client();
const config = require('./protected/config.json');
const prefix = config.prefix
fetch = require('node-fetch');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

colorMessage = ["#0099ff", "#39ff14", "#6a0dad", "#ffa500", "#bfff00"][Math.floor(Math.random() * 5)];

client.on('message', message => {
	msg = message.content.toLowerCase();
	if (!msg.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
		console.log(`${message}`)
	} catch (error) {
		console.error(error);
		message.reply('error occured uh oh');
	}
});

// import no-prefix commands
const ohnoFile = require(`./functions/ohnoFile.js`);

client.on('message', message => {
	if (!message.author.bot) {
		const msg = message.content.toLowerCase();
		// this is the place for commands with no prefix
		if (msg === `oh no vectors lewds leaked`) {
		ohnoFile.ohnoCommand(message);
	} else if (msg === `oh no vector's lewds leaked`) {
		ohnoFile.ohnoCommand(message);
	}
	}
});

const activities_list = [
  "with humans! | hey vector help",
  "with my cube! | hey vector help",
  "blackjack! | hey vector help",
  "with other bots! | hey vector help",
  "with my owner in quarantine | hey vector help",
];

client.on("ready", () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index], { url: 'https://wire.my.to', type: 'PLAYING' });
  }, 60000);
});

client.once('ready', () => {
	console.log('Ready!');
});

client.login(config.token);
