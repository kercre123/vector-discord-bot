module.exports = {
	name: 'pounce',
	description: 'Vecr pouncee',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "none", "e2CSOoZ.gif");
	},
};
