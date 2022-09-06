module.exports = {
	name: 'bricked',
	description: 'Picture of a bricked Vector',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "_brick_", "none", "jzvUUrX.jpg");
	},
};
