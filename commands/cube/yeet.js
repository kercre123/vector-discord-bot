module.exports = {
	name: 'yeet',
	description: 'a',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "ZSKNlBZ.gif");
	},
};
