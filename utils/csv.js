const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const weatherConditions = require('../resources/weather-conditions.json');
const obj = {};
fs.createReadStream(path.join(__dirname, '..', 'resources', 'vhintl2.csv'))
  .pipe(csv())
  .on('data', (row, a) => {
    console.log(row)
    // const rolls = row.Roll.split(' ');
    // const roll = rolls[rolls.length - 1];
    // obj[roll] = {
    //   temp: row.Temp,
    //   wind: row.Wind,
    //   percipitation: row.Percipitation,
    //   description: row.DESCRIPTION,
    //   emoji: row.EMOJI
    // }
  })
  .on('end', () => {
    // weatherConditions['vhintl']['winter'] = obj;
    // weatherConditions['vhintl']['fall'] = obj;
    // weatherConditions['vhintl']['spring'] = obj;
    // fs.writeFile(path.join(__dirname, '..', 'resources', 'weather-conditions.json'), JSON.stringify(weatherConditions, null, 2), (err) => {
    //   console.log(err);
    // });
    console.log('CSV file successfully processed');
  });
