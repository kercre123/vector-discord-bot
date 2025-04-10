module.exports = {
    name: 'uptime', 
    description: 'The uptime of the bot', 
    execute(message, args){
        const cmdFile = require('../../functions/infoFile.js');
        cmdFile.botuptime(message, args)
    },
};