module.exports = {
	name: 'help',
	description: 'Show help menu',
	execute(message, args) {
		const cmdFile = require(`../../functions/helpFile.js`);
		if (args[0] === "behaviors") {
			cmdFile.helpBehaviors(message);
		} else if (args[0] === "info") {
			cmdFile.helpInfo(message);
		} else if (args[0] === "extra") {
			cmdFile.helpExtra(message);
		} else if (args[0] === "celebration") {
			cmdFile.helpCelebration(message);
		} else if (args[0] === "weather") {
			cmdFile.helpWeather(message);
		} else if (args[0] === "cube") {
			cmdFile.helpCube(message);
		} else {
			cmdFile.helpMain(message);
		}
	},
};
