module.exports = {
cursedCommand: function cursedCommand(message) {
  const cursed1 = "https://i.imgur.com/D5B02R3.jpg";
  const cursed2 = "https://i.imgur.com/qS5kek7.jpg";
  const cursed3 = "https://i.imgur.com/Mj14DCT.jpg";
  const cursed4 = "https://i.imgur.com/wQkuGwG.png";
  const cursed5 = "https://i.imgur.com/hJ0DEX9.png";
  const cursed6 = "https://i.imgur.com/OAr6fhb.png";
  const cursed7 = "https://i.imgur.com/3VpkUek.png";
  const cursed8 = "https://cdn.discordapp.com/attachments/600046142264180797/746004460924436520/image0.jpg";
  const cursed = [cursed1, cursed2, cursed3, cursed4, cursed5, cursed6, cursed7, cursed8];
  const cursedMath = Math.floor(Math.random() * cursed.length);
  const finalEmbed = new Discord.MessageEmbed()
    .setColor(colorMessage)
    .setImage(cursed[cursedMath]);
  message.channel.send(finalEmbed);
}
};