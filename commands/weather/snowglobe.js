module.exports = {
	name: 'snowglobe',
	description: 'Snowglobe animation from 1.4',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "lmioBXv.gif");
	},
};
