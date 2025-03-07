module.exports = {
    name: "iwmv", 
    description: "Money Vector...", 
    execute(message, args){
        const cmdFile = require('../../functions/embedFile.js'); 
        cmdFile.vectorEmbed(message, "You've been visited by the money Vector. Good fortune will come to you, but only if you say 'Invest Well, Money Vector'", "none", "89VXDO3.jpg"); 
    },
};