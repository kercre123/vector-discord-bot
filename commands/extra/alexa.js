module.exports = {
	name: 'alexa',
	description: 'He gets possessed',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "5eo4wlQ.gif");
	},
};
