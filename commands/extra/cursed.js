module.exports = {
	name: 'cursed',
	description: ':MARIO:',
	execute(message, args) {
		const cmdFile = require(`../../functions/cursedFile.js`);
		cmdFile.cursedCommand(message);
	},
};
