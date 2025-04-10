module.exports = {
	name: 'sorry',
	description: 'Say sorry to Vector',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorMathembed(message, "none", "none", "g8HrjIv.gif", "NYHCsXB.gif");
	},
};
