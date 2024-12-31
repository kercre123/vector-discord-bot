const {EmbedBuilder} = require('discord.js')

module.exports = {
	vectorEmbed: function vectorEmbed(message, embedName, embedField, picName, embedField1, embedFieldTF) {
		const finalEmbed = new EmbedBuilder();
		finalEmbed.setColor(colorMessage)
		if (embedName !== "none") {
			finalEmbed.setTitle(`${embedName}`)
     	};
     	if (embedField !== "none") {
			finalEmbed.setFields({name: embedField, value: embedField1, inline: embedFieldTF})
     	}
     	if (picName !== "none") {
     		finalEmbed.setImage(`https://i.imgur.com/${picName}`)
     	}
    	finalEmbed.setFooter({text: message.author.username, iconURL: message.author.avatarURL()})
    	message.channel.send({embeds: [finalEmbed]});
	},
	vectorMathembed: function vectorEmbed(message, embedName, embedField, picName1, picName2, embedField1, embedFieldTF) {
		const finalEmbed = new EmbedBuilder();
		finalEmbed.setColor(colorMessage)
		if (embedName !== "none") {
			finalEmbed.setTitle(`${embedName}`);
     	};
        if (embedField !== "none") {
			finalEmbed.setFields({name: embedField, value: embedField1, inline: embedFieldTF});
     	}
     	const imgOne = `https://i.imgur.com/${picName1}`
     	const imgTwo = `https://i.imgur.com/${picName2}`
     	const imgSet = [imgOne, imgTwo];
  		const imgMath = Math.floor(Math.random() * imgSet.length);
     	finalEmbed.setImage(imgSet[imgMath])
    	finalEmbed.setFooter({text: message.author.username, iconURL: message.author.avatarURL()})
    	message.channel.send({embeds: [finalEmbed]});
	}
};
