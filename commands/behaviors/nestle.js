module.exports = {
	name: 'nestle',
	description: 'a',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "tZgSHz2.gif");
	},
};
