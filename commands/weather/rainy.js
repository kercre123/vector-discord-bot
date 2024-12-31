module.exports = {
	name: 'rainy',
	description: 'Rainy animation',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "RU8iwIE.gif");
	},
};
