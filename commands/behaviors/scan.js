module.exports = {
    name: "scan", 
    description: "a", 
    execute(message, args){
        const cmdFile = require("../../functions/embedFile.js"); 
        cmdFile.vectorEmbed(message, "none", "none", "2yhyxFh.gif"); 
    },
};