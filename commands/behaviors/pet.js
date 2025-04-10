module.exports = {
	name: 'pet',
	description: 'a',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		if (args[0] === "the" && args[1] === "damn" && args[2] === "robot") {
			cmdFile.vectorEmbed(message, "none", "none", "ZsFqc5i.gif");
		} else {
			cmdFile.vectorEmbed(message, "none", "none", "HchiX7w.gif");
		}
	},
};
