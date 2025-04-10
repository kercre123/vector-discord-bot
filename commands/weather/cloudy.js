module.exports = {
	name: 'cloudy',
	description: 'Cloudy animation',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "UbS3wXO.gif");
	},
};
