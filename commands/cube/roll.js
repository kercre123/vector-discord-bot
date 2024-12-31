module.exports = {
	name: 'roll',
	description: 'He roll da cube',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "trgzuDK.gif");
	},
};
