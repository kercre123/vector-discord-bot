module.exports = {
    name: 'credits', 
    description: 'Shows the credits for the bot', 
    execute(message, args){
        const cmdFile = require('../../functions/infoFile.js')
        cmdFile.botcredits(message, args)
    }
}