module.exports = {
	name: 'bad',
	description: 'All commands that start with bad',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		if (args [0] === "robot" || args [0] === "bot" || args [0] === "boy") {
			cmdFile.vectorEmbed(message, "none", "none", "DQPaimu.gif");
		}
	},
};
