const Discord = require('discord.js');
const scheduler = require('node-schedule');

const { prefix, token } = require('./config.json');

const main = require('./utils/main');
const { fetchWeather } = require('./utils/weather');
const { getSeason } = require('./utils/season');

const client = new Discord.Client();
client.login(token);

client.once('ready', () => {
  scheduler.scheduleJob('0 0 9 * * *', function() {
    console.log({
      Inariko: fetchWeather('inariko', getSeason()),
      Rudania: fetchWeather('rudania', getSeason()),
      Vhintl: fetchWeather('vhintl', getSeason()),
    });
  });
  console.log('Ready!')
})

client.on('message', message => {
  if (message.content.startsWith('^roll')) {
      const contentsArray = message.content.split(' ');

      const diceResult = main.diceRoller(contentsArray[1])
      message.reply(`Tingle, Tingle! Kooloo-Limpah! \n ${diceResult}`)
  }

  if (message.content.startsWith('^weather')) {
    const [, location, season] = message.content.toLowerCase().split(' ');
    if (!location) {
      message.reply('Location must be provided');
    }

    if (!season) {
      message.reply('Season must be provided');
    }

    const weatherString = fetchWeather(location, season);
    message.reply(weatherString);
  }
})
