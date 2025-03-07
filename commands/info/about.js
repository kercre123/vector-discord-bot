module.exports = {
    name: 'about', 
    description: 'about this discord bot', 
    execute(message, args){
        const cmdFile = require('../../functions/infoFile.js'); 
        cmdFile.aboutbot(message, args)
    },
};