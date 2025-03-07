const { EmbedBuilder} = require("discord.js");

module.exports = {
infoMain: function infoMain(message, args) {
    const usedMemory = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const [days, hours, minutes, seconds] = [
      Math.floor(message.client.uptime / 86400000), 
      Math.floor((message.client.uptime % 86400000) / 3600000), 
      Math.floor((message.client.uptime % 3600000) / 60000), 
      Math.floor((message.client.uptime % 60000) / 1000),
    ];
    const uptime = `${days} days (${hours} hours, ${minutes} minutes)`
    const finalEmbed = new EmbedBuilder()
      .setColor(colorMessage)
      .setTitle("Vector Bot Information")
      .setFields(
        {
          name: "Servers I am on:", 
          value: `\`${message.client.guilds.cache.size}\``,
          inline: false
        }, 
        {
          name: "Owner:", 
          value: "`Wire (kercre123)`",
          inline: false
        },
        {
          name: "Bot library:", 
          value: "`discord.js`"
        },
        {
          name: "Uptime:", 
          value: `\`${uptime}\``,
          inline: false
        }, 
        {
          name: "RAM Usage:", 
          value: `\`${usedMemory}MB\``
        })
      .setTimestamp()
      .setImage("https://top.gg/api/widget/600070592837844995.png")
      .setFooter({text: message.author.username, iconURL: message.author.avatarURL()});
    message.channel.send({embeds: [finalEmbed]});
  }, 
projectvic: function projectvic(message, args){
  const finalEmbed = new EmbedBuilder()
    .setFields({
        name: "See our project page!",
        value: "https://www.project-victor.org/",
        inline: false,
    }, 
    {
      name: "Self-host your own server for Vector using Wirepod!", 
      value: "https://github.com/kercre123/WirePod"
    },
    {
      name: "See and fork Vector's source code (__only DEV bots__) at", 
      value: "https://github.com/kercre123/victor"

    })
    .setThumbnail("https://i.imgur.com/FPQsUlB.png")
    .setFooter({text: message.author.username, iconURL: message.author.avatarURL()})
    .setTimestamp()
    .setColor(colorMessage);
  message.channel.send({embeds: [finalEmbed]});
}, 
botcredits: function botcredits(message, args){ 
  const finalEmbed = new EmbedBuilder() 
    .setFields({
      name: "Created by",
      value: "**kercre123**",
      inline: false, 
    }, 
    {
      name: "Some of the GIFs were recorded by", 
      value: "**Redwish#6203**", 
      inline: false,
    },
    {
      name: "Idea", 
      value: "**[『Galaxyミ★』]#3641**", 
      inline: false, 
    }, 
    {
      name: "Inspired by", 
      value: "**Anki Inc.**", 
      inline: false, 
    })
    .setFooter({text: message.author.username, iconURL: message.author.avatarURL()})
    .setTimestamp()
    .setColor(colorMessage);
  message.channel.send({embeds: [finalEmbed]});
}, 
botwebsite: function botwebsite(message, args){
  const finalEmbed = new EmbedBuilder()
    .setFields({
      name: "Website", 
      value: "https://wire.my.to/", 
      inline: false, 
    })
    .setFooter({text: message.author.username, iconURL: message.author.avatarURL()})
    .setTimestamp()
    .setColor(colorMessage); 
  message.channel.send({embeds: [finalEmbed]});
}, 
botuptime: function botuptime(message, args){
  const [days, hours, minutes, seconds] = [
    Math.floor(message.client.uptime / 86400000), 
    Math.floor((message.client.uptime % 86400000) / 3600000), 
    Math.floor((message.client.uptime % 3600000) / 60000), 
    Math.floor((message.client.uptime % 60000) / 1000),
  ];
  const uptime = `${days} days (${hours} hours and ${minutes === 1 ? "1 minute" : `${minutes} minutes`})`;
  const finalEmbed = new EmbedBuilder() 
    .setFields({
      name: "Uptime:", 
      value: uptime
    })
    .setFooter({text: message.author.username, iconURL: message.author.avatarURL()})
    .setTimestamp()
    .setColor(colorMessage); 
  message.channel.send({embeds: [finalEmbed]});
},
botservers: function botservers(message, args){ 
  const finalEmbed = new EmbedBuilder()
    .setFields({
      name: "Server count:", 
      value: `\`${message.client.guilds.cache.size}\``, 
      inline: false,
    })
    .setTimestamp()
    .setFooter({text: message.author.username, iconURL: message.author.avatarURL()})
    .setColor(colorMessage);
  message.channel.send({embeds: [finalEmbed]});
}, 
aboutbot: function aboutbot(message, args){
  const finalEmbed = new EmbedBuilder()
    .setFields({
        name: "Hi, I am the Vector robot! I was made by a company called Anki. They were a good company, made good updates for me, but they recently went out of business.", 
        value: "Luckily, a company called Digital Dream Labs has bought their assets! I am going to stay alive, and be officially open source!", 
        inline: false,
    })
    .setColor(colorMessage)
    .setFooter({text: message.author.username, iconURL: message.author.avatarURL()})
    .setTimestamp();
  message.channel.send({embeds: [finalEmbed]});
}, 
botinvite: function botinvite(message, args){
  const finalEmbed = new EmbedBuilder()
    .setFields({
      name: "Invite Link:", 
      value: "https://discordapp.com/oauth2/authorize?client_id=600070592837844995&scope=bot&permissions=3247104", 
      inline: false,
    })
    .setColor(colorMessage)
    .setTimestamp()
    .setFooter({text: message.author.username, iconURL: message.author.avatarURL()}); 
  message.channel.send({embeds: [finalEmbed]})
}
};