module.exports = {
	name: 'shut',
	description: 'All commands starting with shut (like shut up)',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		if (args [0] === "up") {
			cmdFile.vectorEmbed(message, "none", "none", "5RYeWTz.gif");
		}
	},
};
