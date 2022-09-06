module.exports = {
	name: 'wheelie',
	description: 'He do a flip',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "gpq7XMI.gif");
	},
};
