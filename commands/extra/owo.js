module.exports = {
	name: 'owo',
	description: 'owo vector',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorEmbed(message, "none", "owo", "AMxcbxv.jpg", "what's this?", "false");
	},
};
