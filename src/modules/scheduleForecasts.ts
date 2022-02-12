import { scheduleJob } from "node-schedule";

import { WeatherCache } from "../interfaces/WeatherCache";

import { generateWeatherEmbed } from "./generateWeatherEmbed";
import { getWeatherForecast } from "./getWeatherForecast";

/**
 * Schedules a CRON job for sending weather forecasts to the appropriate channels.
 *
 * @param {WeatherCache} CACHE The weather cache.
 */
export const scheduleForecasts = (CACHE: WeatherCache) => {
  // Run daily at 5AM PST to get 8AM EST.
  scheduleJob("0 0 5 * * *", async () => {
    console.log("Sending forecast!");
    CACHE.Rudania = getWeatherForecast("Rudania");
    CACHE.Inariko = getWeatherForecast("Inariko");
    CACHE.Vhintl = getWeatherForecast("Vhintl");

    const rudania = await generateWeatherEmbed(CACHE.Rudania);
    await CACHE.channels.Rudania.send(rudania);
    const inariko = await generateWeatherEmbed(CACHE.Inariko);
    await CACHE.channels.Inariko.send(inariko);
    const vhintl = await generateWeatherEmbed(CACHE.Vhintl);
    await CACHE.channels.Vhintl.send(vhintl);
  });
};
