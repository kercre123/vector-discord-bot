module.exports = {
	name: 'dummy',
	description: 'Picture of a thicc Vector',
	execute(message, args) {
      	const cmdFile = require(`../../functions/embedFile.js`);
		if(args[0] === "thicc"){
			cmdFile.vectorEmbed(message, "~~damN BOI HE ***THICC*** ( ͡° ͜ʖ ͡°)~~", "none", "3x5duTV.png");
		}
	},
};
