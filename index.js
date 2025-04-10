const fs = require('fs');
const path = require('node:path');
const {Client, GatewayIntentBits, Collection, ActivityType} = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildPresences,
	]
});
const config = require('./protected/config.json');
const prefix = config.prefix;
fetch = require('node-fetch-commonjs');
client.commands = new Collection();

// Loading commands
const commandsPath = path.resolve(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath, {withFileTypes: true})
	.flatMap(file => file.isDirectory() ? fs.readdirSync(path.join(commandsPath, file.name)).map(subFile => path.join(file.name, subFile))
	: file.name)
	.filter(file => file.endsWith('.js'));

for(const file of commandFiles){ 
	const command = require(`./commands/${file}`); 
	if(!command.name || typeof command.execute !== 'function'){
		console.warn(`Command file (${file}) is missing "name" or "execute" function.`); 
		continue;
	}
	client.commands.set(command.name.toLowerCase(), command); 
}

colorMessage = ["#0099ff", "#39ff14", "#6a0dad", "#ffa500", "#bfff00"][Math.floor(Math.random() * 5)];

// Startup and Status

const activities_list = [
  "with humans! | hey vector help",
  "with my cube! | hey vector help",
  "blackjack! | hey vector help",
  "with other bots! | hey vector help",
  "with my owner in quarantine | hey vector help",
];

client.on("ready", () => {
	console.log('Ready!')
	setInterval(() => {
		const index = Math.floor(Math.random() * activities_list.length); 
		client.user.setPresence({ 
			activities: [{name: activities_list[index], url: 'https://wire.my.to', type: ActivityType.Playing,}],
			status: 'online',
		})
	}, 60000);	
});

// import no-prefix commands
const ohnoFile = require(`./functions/ohnoFile.js`);

client.on('messageCreate', message => {
	msg = message.content.toLowerCase(); 
	const args = message.content.slice(prefix.length).trim().toLowerCase().split(/ +/); // For a more general search, placed all args with lowercase, not sure if leaving it precisely
	const command = args.shift().toLowerCase();
	// Place for no prefix commands
	if(msg === `oh no vectors lewds leaked` || msg == `oh no vector's lewds leaked`) {
		ohnoFile.ohnoCommand(message);
	} 
	// Check for other conditions, and execute commands
	if(message.author.bot || !msg.startsWith(prefix.toLowerCase()) || !client.commands.has(command)) return;
	client.commands.get(command).execute(message, args);
})

client.login(config.token);