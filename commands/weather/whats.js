module.exports = {
    name: "whats",
    description: 'Contains all commands beginning in whats',
    execute(message, args) {
        if (args[0] === 'the' && args[1] === 'weather' && args[2] === 'in') {
            const cmdFile = require(`../functions/weatherFile.js`);
            const longCommand = "yes";
            cmdFile.weatherCommand(message, args, longCommand);
        } else if (args[0] === 'my' && args[1] === 'name') {
            const cmdFile = require(`../functions/embedFile.js`);
            cmdFile.vectorEmbed(message, message.author.username + "!", "none", "iRYMXPz.gif");
        }
    },
};