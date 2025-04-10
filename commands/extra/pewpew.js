module.exports = {
    name: "pew", 
    description: "Pew pew!", 
    execute(message, args){
        const cmdFile = require('../../functions/embedFile.js'); 
        if(args[0] === "pew"){
            cmdFile.vectorEmbed(message, "none", "none", "kkl2NxA.gif")
        }
    },
};