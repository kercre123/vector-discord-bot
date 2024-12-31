module.exports = {
	name: 'thonk',
	description: 'he thonk',
	execute(message, args) {
		const cmdFile = require(`../../functions/embedFile.js`);
		cmdFile.vectorMathembed(message, "none", "none", "njSRtLB.png", "ea7dD2d.png");
	},
};
