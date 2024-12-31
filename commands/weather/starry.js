module.exports = {
	name: 'starry',
	description: 'Starry night',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "ZNVcoap.gif");
	},
};
