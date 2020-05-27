const weatherConditions = require('../resources/weather-conditions.json');

function fetchWeather(location, season) {
  const locationWeatherObject = weatherConditions[location];
  if (!locationWeatherObject) {
    return `Could not find weather for location: ${location}`;
  }
  const locationSeasonWeatherObject = locationWeatherObject[season];
  if (!locationSeasonWeatherObject) {
    return `Could not find weather for season the provided season: ${season}`;
  }

  const keys = Object.keys(locationSeasonWeatherObject)
  const maxNumber = keys[keys.length - 1];

  let randomNumber = Math.ceil(Math.random() * maxNumber);

  let weatherObj
  while (randomNumber <= maxNumber && !weatherObj) {
    weatherObj = locationSeasonWeatherObject[randomNumber];
    randomNumber++;
  }
  if (!weatherObj) {
    return `No weather could be found for ${location} and ${season}`;
  }
  return `\n Temperature: ${weatherObj.temp} \n wind: ${weatherObj.wind} \n Percipitation: ${weatherObj.percipitation}`
}

module.exports = { fetchWeather }
