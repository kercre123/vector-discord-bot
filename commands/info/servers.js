module.exports = {
    name: 'servers', 
    description: 'The total of servers the bot is in', 
    execute(message, args){
        const cmdFile = require('../../functions/infoFile.js'); 
        cmdFile.botservers(message, args)
    },
};