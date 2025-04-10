module.exports = {
    name: "cool", 
    description: "The cool shades GIF", 
    execute(message, args){
        const cmdFile = require('../../functions/embedFile.js'); 
        if(args[0] === "shades"){
            cmdFile.vectorEmbed(message, "none", "none", "QJGsLMG.jpg"); 
        }; 
    },
};