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
          name: "Uptime:", 
          value: `\`${uptime}\``,
          inline: false
        }, 
        {
          name: "RAM Usage:", 
          value: `${usedMemory}MB`
        })
      .setTimestamp()
      .setFooter({text: message.author.username, iconURL: message.author.avatarURL()});
    message.channel.send({embeds: [finalEmbed]});
  }, 
projectvic: function projectvic(message, args){
  const finalEmbed = new EmbedBuilder()
    .setTitle("Project Victor Information")
    .setDescription("**[Official Main Page](https://www.project-victor.org/)**")
    .addFields({
        name: "About:",
        value: "**Project Victor is a very small, but diverse group of talented developers, who have done this kind of thing before, that want to make the Anki Vector function without these servers. We want each owner to host their own server on a Jetson Nano (maybe even a Raspberry Pi). We want to rebuild him as 100% open-source, so the community can make their own updates for him.**",
        inline: false
      })
    .setThumbnail("https://i.imgur.com/FPQsUlB.png")
    .setFooter({text: message.author.username, iconURL: message.author.avatarURL()})
    .setTimestamp()
    .setColor(colorMessage);
  message.channel.send({embeds: [finalEmbed]});
}, 
botcredits: function botcredits(message, args){ 
  const finalEmbed = new EmbedBuilder() 
    .setTitle("Vector Bot Credits")
    .setDescription("**Wire (kercre123)** - Owner & Developer")
    .setFooter({text: message.author.username, iconURL: message.author.avatarURL()})
    .setTimestamp()
    .setColor(colorMessage);
  message.channel.send({embeds: [finalEmbed]});
}, 
botwebsite: function botwebsite(message, args){
  const finalEmbed = new EmbedBuilder()
    .setTitle("Vector Bot Website")
    .setDescription("**🌎[Website](https://wire.my.to)")
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
  const uptime = `${days} days (${hours} hours, ${minutes} minutes)`
  const finalEmbed = new EmbedBuilder() 
    .setTitle("Vector Bot Uptime")
    .setDescription(uptime)
    .setFooter({text: message.author.username, iconURL: message.author.avatarURL()})
    .setTimestamp()
    .setColor(colorMessage); 
  message.channel.send({embeds: [finalEmbed]});
},
botservers: function botservers(message, args){ 
  const finalEmbed = new EmbedBuilder()
    .setTitle("Vector Bot Servers Count")
    .setDescription(`\`${message.client.guilds.cache.size}\``)
    .setTimestamp()
    .setColor(colorMessage);
  message.channel.send({embeds: [finalEmbed]});
}, 
aboutbot: function aboutbot(message, args){
  const finalEmbed = new EmbedBuilder()
    .setTitle("About this Bot")
    .setDescription("This simple discord.js is designed to send GIFs of the cute robot, Anki Vector. Commands are in hey vector help. I use Imgur to upload the GIFs, and use RichEmbed to display them. I try to keep each GIF at a small resolution so they load fast. Commands include: celebrate, snowglobe, new year, yeet, pet, ptdr, angry, good robot, bad robot, any MANY more.")
    .setColor(colorMessage)
    .setTimestamp();
  message.channel.send({embeds: [finalEmbed]});
}
};