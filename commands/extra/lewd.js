module.exports = {
	name: 'lewd',
	description: 'owo',
	execute(message, args) {
		const cmdFile = require(`../functions/lewdFile.js`);
		cmdFile.lewdCommand(message);
	},
};
