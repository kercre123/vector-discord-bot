module.exports = {
    name: "nyoom", 
    description: "nyoooommm", 
    execute(message, args){
        const cmdFile = require('../../functions/embedFile.js'); 
        cmdFile.vectorEmbed(message, "none", "none", "pX6A9On.png")
    },
};