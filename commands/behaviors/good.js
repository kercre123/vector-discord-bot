module.exports = {
	name: 'good',
	description: 'All commands that start with good',
	execute(message, args) {
		const cmdFile = require(`../functions/embedFile.js`);
		if (args[0] === "morning") {
			cmdFile.vectorEmbed(message, "Good morning, " + message.author.username + "!", "none", "OhOWQ2B.gif");
		} else if (args [0] === "evening" || args [0] === "afternoon") {
			cmdFile.vectorEmbed(message, "Good evening, " + message.author.username + "!", "none", "Rhi36bd.gif");
		} else if (args [0] === "robot" || args [0] === "bot" || args [0] === "boy") {
			cmdFile.vectorEmbed(message, "none", "none", "thArxEh.gif");
		}
	},
};
