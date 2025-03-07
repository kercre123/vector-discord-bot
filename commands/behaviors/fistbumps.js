module.exports = {
    name: "fistbump", 
    description: "Give or recieve a fistbump from Vector", 
    execute(message, args){
        const cmdFile = require('../../functions/embedFile.js'); 
        if(args[0] === "request"){ 
            cmdFile.vectorEmbed(message, "none", "none", "BM37Qpv.gif"); 
        } else if(args[0] === "give"){
            cmdFile.vectorEmbed(message, "none", "none", "Kssed7q.gif"); 
        }
    },
};