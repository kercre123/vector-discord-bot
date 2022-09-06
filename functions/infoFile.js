module.exports = {
infoMain: function infoMain(message, args) {
      //this part gets ram usage, deal with this later
      //var exec = require('child_process').exec, child;
      //child = exec("free -h | grep Mem | awk '{print $2}' | tr -d '[:space:]'",
      //function (error, stdout, stderr) {
      //  let memOne = stdout;
      //var exec = require('child_process').exec, child;
      //child = exec("free -h | grep Mem | awk '{print $3}' | tr -d '[:space:]'",
      //function (error, stdout, stderr) {
      //  let memTwo = stdout;
      //});
    //});
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let uptime = `${days} days (${hours} hours and ${minutes} minutes)`;
    const finalEmbed = new Discord.MessageEmbed()
      .setColor(colorMessage)
      .setTitle("Vector Bot Information")
      .addField("Servers I am on:", `\`${client.guilds.cache.size}\``, false)
      .addField("Owner:", "`Wire#4823`")
      .addField("Uptime:", `\`${uptime}\``, false)
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(finalEmbed);
  }
};