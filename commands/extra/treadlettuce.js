module.exports = {
    name: "tread", 
    description: "Get the lettuce Vector", 
    execute(message, args){
        const cmdFile = require('../../functions/embedFile.js'); 
        if(args[0] === "lettuce"){
            cmdFile.vectorEmbed(message, "The last thing you’d want in your Anki catered lunch is someone’s tread dust. But as it turns out, that might be what you get.", "none", "QkwcKaK.png"); 
        }; 
    },
};