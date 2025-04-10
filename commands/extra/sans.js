module.exports = {
	name: 'sans',
	description: 'sans vector sans vector',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "Do you wanna have a **BOT** time? *vectorlovania starts playing*", "none", "zjeAdwC.png");
	},
};
