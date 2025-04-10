module.exports = {
    name: "ahoy", 
    description: "AHOY!", 
    execute(message, args){
        const cmdFile = require('../../functions/embedFile.js'); 
        cmdFile.vectorEmbed(message, "none", "none", "lIQlMrh.jpeg"); 
    },
};