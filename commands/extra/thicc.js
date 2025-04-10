module.exports = {
	name: 'thicc',
	description: 'Picture of a thicc Vector',
	execute(message, args) {
      	const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "~~damN BOI HE ***THICC*** ( ͡° ͜ʖ ͡°)~~", "none", "3x5duTV.png");
	},
};
