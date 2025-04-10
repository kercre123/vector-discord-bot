module.exports = {
	name: 'sleep',
	description: 'He sleepy',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "yZXFaHY.gif");
	},
};
