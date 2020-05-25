const main=require('./main')
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    //console.log(message.content)
    
    if (message.content.startsWith('^roll')) {
        const contentsArray = message.content.split(' ');
        // send back "Pong." to the channel the message was sent in
        const diceResult = main.diceRoller(contentsArray[1])
        message.reply(`Tingle, Tingle! Kooloo-Limpah! \n ${diceResult}`)
    }

})

client.login(token);


