const {EmbedBuilder} = require('discord.js')

module.exports = {
helpMain: function helpMain(message) {
  const finalEmbed = new EmbedBuilder()
    .setColor(colorMessage)
    .setTitle("Help & Commands")
    .addFields(
      {
        name: "Links:", 
        value: ":robot: **[Invite Me](https://discordapp.com/oauth2/authorize?client_id=600070592837844995&scope=bot&permissions=3247104)**\n:tools: **[Support Server](https://discord.gg/bVqd5pj)**\n :ballot_box: **[Vote for me on top.gg!](https://top.gg/bot/600070592837844995)**\n :earth_americas: **[Vector Bot Website!](https://wire.my.to/)**",
        inline: true
      }, 
      {
        name: "Animations/behaviors:", 
        value: "`hey vector help behaviors`", 
        inline: false
      }, 
      {
        name: "Cube tricks:", 
        value: "`hey vector help cube`", 
        inline: false
      },
      {
        name: "Weather commands:", 
        value: "`hey vector help weather`", 
        inline: false
      },
      {
        name: "Celebration animations:", 
        value: "`hey vector help celebration`", 
        inline: false
      },
      {
        name: "Extra commands:", 
        value: "`hey vector help extra`", 
        inline: false
      },
      {
        name: "Info about the bot and it's creators:", 
        value: "`hey vector help info`", 
        inline: false
      },
    )
    
    .setImage("https://i.imgur.com/BnPJS65.png")
    .setTimestamp()
    .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL()});
    message.channel.send({ embeds: [finalEmbed] })
  },
helpBehaviors: function helpBehaviors(message) {
  const finalEmbed = new EmbedBuilder()
    .setColor(colorMessage)
    .setTitle("My behaviors/animations:")
    .addFields(
        { 
          name: "hey vector good robot", 
          value: "**hey vector bad robot**", 
          inline: false },
        { 
          name: "hey vector sleepwalk", 
          value: "**hey vector angry**", 
          inline: true },
        { 
          name: "hey vector fistbump request", 
          value: "**hey vector fistbump give**", 
          inline: false },
        { 
          name: "hey vector nestle", 
          value: "**hey vector fall**", 
          inline: false },
        { 
          name: "hey vector i love you", 
          value: "**hey vector sorry**", 
          inline: false },
        { 
          name: "hey vector whats my name", 
          value: "**hey vector dizzy**", 
          inline: false },
        { 
          name: "hey vector pet", 
          value: "**hey vector ptdr**", 
          inline: true },
        { 
          name: "hey vector good morning", 
          value: "**hey vector goodnight**", 
          inline: false },
        { 
          name: "hey vector push", 
          value: "**hey vector dance**", 
          inline: false },
        { 
          name: "hey vector hello", 
          value: "**hey vector shut up**", 
          inline: false },
        { 
          name: "hey vector come here", 
          value: "**hey vector go home**", 
          inline: false },
        { 
          name: "hey vector startle", 
          value: "**hey vector sleep**", 
          inline: false },
        { 
          name: "hey vector scan", 
          value: "**hey vector bootup**", 
          inline: false }
    )
    
    .setTimestamp()
    .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL()});
    message.channel.send({ embeds: [finalEmbed] })
  },
helpCube: function helpCube(message) {
  const finalEmbed = new EmbedBuilder()
    .setColor(colorMessage)
    .setTitle("My cube tricks:")
    .addFields(
        { 
          name: "hey vector pickup", 
          value: "**hey vector roll**", 
          inline: false },
        { 
          name: "hey vector wheelie", 
          value: "**hey vector yeet**", 
          inline: false },
        { 
          name: "hey vector pounce", 
          value: "**any many more soon...**", 
          inline: false }
    )
    
    .setTimestamp()
    .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL()});
    message.channel.send({ embeds: [finalEmbed] })
  },
helpWeather: function helpWeather(message) {
  const finalEmbed = new EmbedBuilder()
    .setColor(colorMessage)
    .setTitle("My weather animations:")
    .addFields(
        { 
          name: "hey vector sunny", 
          value: "**hey vector rainy**", 
          inline: false },
        { 
          name: "hey vector starry", 
          value: "**hey vector stormy**", 
          inline: false },
        { 
          name: "hey vector cloudy", 
          value: "**hey vector snowglobe**", 
          inline: false },
        { 
          name: "hey vector snowy", 
          value: "**hey vector weather <zip code>**", 
          inline: false }
    )
    
    .setTimestamp()
    .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL()});
    message.channel.send({ embeds: [finalEmbed] })
  },
helpCelebration: function helpCelebration(message) {
  const finalEmbed = new EmbedBuilder()
    .setColor(colorMessage)
    .setTitle("My celebration animations:")
    .addFields(
        { 
          name: "hey vector holidays", 
          value: "**hey vector celebrate**", 
          inline: false },
        { 
          name: "hey vector new year", 
          value: "**hey vector cool shades**", 
          inline: false }
    )
    .setTimestamp()
    .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL()});
    message.channel.send({ embeds: [finalEmbed] })
  },
helpInfo: function helpInfo(message) {
  const finalEmbed = new EmbedBuilder()
    .setColor(colorMessage)
    .setTitle("Info commands:")
    .addFields(
        { name: 
          "hey vector info", 
          value: "**hey vector credits**", 
          inline: false },
        { name: 
          "hey vector about", 
          value: "***hey vector Project Victor***", 
          inline: false },
        { name: 
          "hey vector invite", 
          value: "***hey vector website***", 
          inline: false },
        { name: 
          "hey vector servers", 
          value: "***hey vector uptime***", 
          inline: false }
    )
    
    .setTimestamp()
    .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL()});
    message.channel.send({ embeds: [finalEmbed] })
  },
helpExtra: function helpInfo(message) {
  const finalEmbed = new EmbedBuilder()
    .setColor(colorMessage)
    .setTitle("Other/Extra:")
    .addFields(
        { 
          name: "hey vector alexa", 
          value: "**hey vector owo**", 
          inline: false },
        { 
          name: "hey vector dummy thicc", 
          value: "**hey vector pew pew**", 
          inline: false },
        { 
          name: "hey vector sans", 
          value: "**hey vector thonk**", 
          inline: false },
        { 
          name: "hey vector iwmv", 
          value: "**hey vector nyoom**", 
          inline: false },
        { 
          name: "hey vector ahoy", 
          value: "**hey vector cursed**", 
          inline: false },
        { 
          name: "hey vector tread lettuce", 
          value: "**hey vector bricked**", 
          inline: false }
    )
    
    .setTimestamp()
    .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL()});
    message.channel.send({ embeds: [finalEmbed] })
  }
};