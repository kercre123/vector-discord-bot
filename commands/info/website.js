module.exports = {
    name: 'website', 
    description: 'Shows the website for the bot', 
    execute(message, args){
        const cmdFile = require('../../functions/infoFile.js'); 
        cmdFile.botwebsite(message, args)
    },
};