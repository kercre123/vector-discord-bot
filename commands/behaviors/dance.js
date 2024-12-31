module.exports = {
	name: 'dance',
	description: 'He groovy',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "ULGC5oq.gif");
	},
};
