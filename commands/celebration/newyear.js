module.exports = {
    name: "new", 
    description: "Say hello to the new year with Vector!", 
    execute(message, args){
        const cmdFile = require('../../functions/embedFile.js'); 
        if(args[0] === "year"){ 
            cmdFile.vectorEmbed(message, "none", "none", "lO6gS43.gif");
        }; 
    },
}; 