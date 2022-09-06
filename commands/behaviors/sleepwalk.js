module.exports = {
	name: 'sleepwalk',
	description: 'a',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "yS8qnma.gif");
	},
};
