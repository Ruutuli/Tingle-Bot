const Discord = require('discord.js');
const scheduler = require('node-schedule');

const { prefix, token, rudania, inariko, vhintl } = require('./config.json');

const main = require('./utils/main');
const { fetchWeather } = require('./utils/weather');
const { getSeason } = require('./utils/season');

const client = new Discord.Client();
client.login(token);

client.once('ready', () => {
  scheduler.scheduleJob('* 13 18 * * *', function() {
    

    client.channels.cache.get(rudania).send(new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Daily Weather Forecast')
      .setDescription(fetchWeather('rudania', getSeason()))
    );
    client.channels.cache.get(inariko).send(new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Daily Weather Forecast')
      .setDescription(fetchWeather('inariko', getSeason()))
    );
    client.channels.cache.get(vhintl).send(new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Daily Weather Forecast')
      .setDescription(fetchWeather('vhintl', getSeason()))
    );
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
