import { MessageEmbed } from "discord.js";

import { WeatherForecast } from "../interfaces/weather/WeatherForecast";

/**
 * Parses a weather forecast into a Discord message embed.
 *
 * @param {WeatherForecast} forecast The forecast to parse.
 * @returns {MessageEmbed} A Discord message embed.
 */
export const generateWeatherEmbed = (
  forecast: WeatherForecast | null
): MessageEmbed => {
  if (!forecast) {
    return new MessageEmbed()
      .setTitle("Error")
      .setDescription("No forecast was generated.");
  }

  const weatherEmbed = new MessageEmbed();
  weatherEmbed.setTitle(`${forecast.region}'s Daily Weather Forecast`);

  let emoteString = forecast.temperature.emote + forecast.wind.emote;

  weatherEmbed.addField(
    "Temperature",
    `${forecast.temperature.fahrenheit}°F / ${forecast.temperature.celsius}°C [${forecast.temperature.name}]`
  );
  weatherEmbed.addField(
    "Wind",
    `${forecast.wind.name} [${forecast.wind.lowSpeed} - ${forecast.wind.highSpeed}kph]`
  );

  if (forecast.precipitation) {
    weatherEmbed.addField("Precipitation", `${forecast.precipitation.name}`);
    emoteString += forecast.precipitation.emote;
  }
  if (forecast.special) {
    weatherEmbed.addField("Description", `${forecast.special.description}`);
    emoteString += forecast.special.emote;
  }
  // TODO: Add season icon and banner image

  weatherEmbed.setDescription(emoteString);

  return weatherEmbed;
};
