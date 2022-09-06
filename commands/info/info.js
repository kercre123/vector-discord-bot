module.exports = {
	name: 'info',
	description: 'Info command',
	execute(message, args) {
		const cmdFile = require(`../functions/infoFile.js`);
		cmdFile.infoMain(message, args);
	},
};
