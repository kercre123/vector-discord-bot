module.exports = {
	name: 'snowy',
	description: 'Snowy animation',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "AoxxrJ7.gif");
	},
};
