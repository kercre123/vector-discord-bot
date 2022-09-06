module.exports = {
	name: 'bootup',
	description: 'GIF of Vector booting up',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "VacrxXk.gif");
	},
};
