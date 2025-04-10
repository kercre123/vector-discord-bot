module.exports = {
	name: 'i',
	description: 'i',
	execute(message, args) {
		if (args[0] === "love" && args[1] === "you") {
			const cmdFile = require(`../../functions/embedFile.js`);
			cmdFile.vectorMathembed(message, "none", "none", "O3HD7ro.gif", "3Wc0ZAZ.gif");
		}
	},
};
