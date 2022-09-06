module.exports = {
helpMain: function helpMain(message) {
  const finalEmbed = new Discord.MessageEmbed()
    .setColor(colorMessage)
    .setTitle("Help & Commands")
    .addField(
      "Links:",
      ":robot: **[Invite Me](https://discordapp.com/oauth2/authorize?client_id=600070592837844995&scope=bot&permissions=3247104)**\n:tools: **[Support Server](https://discord.gg/bVqd5pj)**\n :ballot_box: **[Vote for me on top.gg!](https://top.gg/bot/600070592837844995)**\n :earth_americas: **[Vector Bot Website!](https://wire.my.to/)**",
      true
    )
    .addField("Animations/behaviors:", "`hey vector help behaviors`", false)
    .addField("Cube tricks:", "`hey vector help cube`", false)
    .addField("Weather commands:", "`hey vector help weather`", false)
    .addField("Celebration animations:", "`hey vector help celebration`", false)
    .addField("Extra commands:", "`hey vector help extra`", false)
    .addField(
      "Info about the bot and it's creators:",
      "`hey vector help info`",
      false
    )
    .setImage("https://i.imgur.com/BnPJS65.png")
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(finalEmbed);
  },
helpBehaviors: function helpBehaviors(message) {
  const finalEmbed = new Discord.MessageEmbed()
    .setColor(colorMessage)
    .setTitle("My behaviors/animations:")
    .addField("hey vector good robot", "**hey vector bad robot**", false)
    .addField("hey vector sleepwalk", "**hey vector angry**", true)
    .addField("hey vector fistbump request", "**hey vector fistbump give**", false)
    .addField("hey vector nestle", "**hey vector fall**", false)
    .addField("hey vector i love you", "**hey vector sorry**", false)
    .addField("hey vector whats my name", "**hey vector dizzy**", false)
    .addField("hey vector pet", "**hey vector ptdr**", true)
    .addField("hey vector good morning", "**hey vector goodnight**", false)
    .addField("hey vector push", "**hey vector dance**", false)
    .addField("hey vector hello", "**hey vector shut up**", false)
    .addField("hey vector come here", "**hey vector go home**", false)
    .addField("hey vector startle", "**hey vector sleep**", false)
    .addField("hey vector scan", "**hey vector boot**", false)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(finalEmbed);
  },
helpCube: function helpCube(message) {
  const finalEmbed = new Discord.MessageEmbed()
    .setColor(colorMessage)
    .setTitle("My cube tricks:")
    .addField("hey vector pickup", "**hey vector roll**", false)
    .addField("hey vector wheelie", "**hey vector yeet**", false)
    .addField("hey vector pounce", "**any many more soon...**", false)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(finalEmbed);
  },
helpWeather: function helpWeather(message) {
  const finalEmbed = new Discord.MessageEmbed()
    .setColor(colorMessage)
    .setTitle("My weather animations:")
    .addField("hey vector sunny", "**hey vector rainy**", false)
    .addField("hey vector starry", "**hey vector stormy**", false)
    .addField("hey vector cloudy", "**hey vector snowglobe**", false)
    .addField("hey vector snowy", "**hey vector weather <zip code>**", false)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(finalEmbed);
  },
helpCelebration: function helpCelebration(message) {
  const finalEmbed = new Discord.MessageEmbed()
    .setColor(colorMessage)
    .setTitle("My celebration animations:")
    .addField("hey vector holidays", "**hey vector celebrate**", false)
    .addField("hey vector new year", "**hey vector cool shades**", false)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(finalEmbed);
  },
helpInfo: function helpInfo(message) {
  const finalEmbed = new Discord.MessageEmbed()
    .setColor(colorMessage)
    .setTitle("Info commands:")
    .addField("hey vector info", "**hey vector credits**", false)
    .addField("hey vector about", "***hey vector Project Victor***", false)
    .addField("hey vector invite", "***hey vector website***", false)
    .addField("hey vector servers", "***hey vector uptime***", false)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(finalEmbed);
  },
helpExtra: function helpInfo(message) {
  const finalEmbed = new Discord.MessageEmbed()
    .setColor(colorMessage)
    .setTitle("Other/Extra:")
    .addField("hey vector alexa", "**hey vector owo**", false)
    .addField("hey vector dummy thicc", "**hey vector pew pew**", false)
    .addField("hey vector sans", "**hey vector thonk**", false)
    .addField("hey vector iwmv", "**hey vector nyoom**", false)
    .addField("hey vector ahoy", "**hey vector cursed**", false)
    .addField("hey vector tread lettuce", "**hey vector bricked**", false)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(finalEmbed);
  }
};