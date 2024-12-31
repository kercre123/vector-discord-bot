const { EmbedBuilder } = require("discord.js");

module.exports = {
lewdCommand: function lewdCommand(message) {
  const bad1 = "https://i.imgur.com/mFzlyVw.gif";
  const bad2 = "https://i.imgur.com/zNrS8Nq.gif";
  const bad3 = "https://i.imgur.com/25u7z5H.gif";
  const bad4 = "https://i.imgur.com/IkcCOsq.gif";
  const bad5 = "https://i.imgur.com/28ObUxA.gif";
  const bad6 = "https://i.imgur.com/0b45DJo.gif";
  const bad7 = "https://i.imgur.com/4n5G5XZ.gif";
  const bad8 = "https://i.imgur.com/eNY7BUz.gif";
  const bad9 = "https://i.imgur.com/awFlUxA.jpg";
  const bad10 = "https://i.imgur.com/H0SfpYP.jpg";
  const bad11 = "https://i.imgur.com/EFqiZ9C.jpg";
  const bad = [bad1, bad2, bad3, bad4, bad5, bad6, bad7, bad8, bad9, bad10, bad11];
  const badMath = Math.floor(Math.random() * bad.length);
  const finalEmbed = new EmbedBuilder()
    .setColor(colorMessage)
    .setImage(bad[badMath]);
  message.channel.send({embed: [finalEmbed]});
}
};