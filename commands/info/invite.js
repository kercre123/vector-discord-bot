module.exports = { 
    name: "invite", 
    description: "An invitation of the official bot", 
    execute(message, args){
        const cmdFile = require('../../functions/infoFile.js'); 
        cmdFile.botinvite(message, args)
    },
};