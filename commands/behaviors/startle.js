module.exports = {
	name: 'startle',
	description: 'He scawed',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "WixDP1P.gif");
	},
};
