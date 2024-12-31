module.exports = {
	name: 'pickup',
	description: 'He pick up da cube',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "mHJSFpw.gif");
	},
};
