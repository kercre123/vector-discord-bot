module.exports = {
	name: 'come',
	description: 'Come here',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		if (args[0] === "here") {
			cmdFile.vectorEmbed(message, "none", "none", "CzobMV6.gif");
		}
	},
};
