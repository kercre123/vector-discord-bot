module.exports = {
	name: 'go',
	description: 'Go home',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		if (args[0] === "home") {
			cmdFile.vectorEmbed(message, "none", "none", "ndT9wUd.gif");
		}
	},
};
