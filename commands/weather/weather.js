module.exports = {
    name: "weather",
    description: 'This command tells the weather for a given ZIP code. USA only',
    execute(message, args) {
      const cmdFile = require(`../functions/weatherFile.js`);
      const longCommand = "no";
      cmdFile.weatherCommand(message, args, longCommand);
    },
};