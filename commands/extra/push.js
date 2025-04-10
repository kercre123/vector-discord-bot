module.exports = {
	name: 'push',
	description: 'Vector push another vector',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "4W3WsrA.gif");
	},
};
