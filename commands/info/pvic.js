module.exports = { 
    name: 'project', 
    description: 'Info for Project Victor', 
    execute(message, args){ 
        const cmdFile = require(`../../functions/infoFile.js`); 
        if (args[0] === 'victor'){ 
            cmdFile.projectvic(message, args)
        };
    },
};