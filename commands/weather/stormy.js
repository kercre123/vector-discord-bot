module.exports = {
	name: 'stormy',
	description: 'Stormy animation',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "MH7QnT8.gif");
	},
};
