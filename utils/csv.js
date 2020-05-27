const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const weatherConditions = require('../resources/weather-conditions.json');
const obj = {};
fs.createReadStream(path.join(__dirname, '..', 'resources', 'data.csv'))
  .pipe(csv())
  .on('data', (row) => {
    const rolls = row.Roll.split(' ');
    const roll = rolls[rolls.length - 1];
    obj[roll] = {
      temp: row.Temp,
      wind: row.Wind,
      percipitation: row.Percipitation
    }
  })
  .on('end', () => {
    weatherConditions['inariko']['fall'] = obj;
    weatherConditions['inariko']['spring'] = obj;
    fs.writeFile(path.join(__dirname, '..', 'resources', 'weather-conditions.json'), JSON.stringify(weatherConditions, null, 2), (err) => {
      console.log(err);
    });
    console.log('CSV file successfully processed');
  });
