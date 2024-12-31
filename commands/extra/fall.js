module.exports = {
	name: 'fall',
	description: 'a',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "QjojNBR.gif");
	},
};
