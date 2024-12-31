module.exports = {
	name: 'ptdr',
	description: 'a',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "ZsFqc5i.gif");
	},
};
