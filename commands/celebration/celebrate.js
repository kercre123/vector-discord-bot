module.exports = {
	name: 'celebrate',
	description: 'a',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "Dn1zCB3.gif");
	},
};
