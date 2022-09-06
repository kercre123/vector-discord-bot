module.exports = {
	name: 'hello',
	description: 'Say hi to vector',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "CiJT3G1.gif");
	},
};
