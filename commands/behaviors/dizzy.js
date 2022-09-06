module.exports = {
	name: 'dizzy',
	description: 'a',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "mPkDx8m.gif");
	},
};
