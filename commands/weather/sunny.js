module.exports = {
	name: 'sunny',
	description: 'Sunny animation',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorMathembed(message, "none", "none", "qTO6lBE.gif", "dbJClV9.gif");
	},
};
