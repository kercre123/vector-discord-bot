module.exports = {
    name: "goodnight", 
    description: "Good Night!", 
    execute(message, args){
        const cmdFile = require("../../functions/embedFile.js"); 
        cmdFile.vectorEmbed(message, "Good night, "  + message.author.username + "!", "none", "OWaCtCZ.gif");
    },
};