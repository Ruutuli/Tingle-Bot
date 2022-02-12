import { Client } from "discord.js";

import { IntentOptions } from "./config/IntentOptions";
import { handleEvents } from "./events/handleEvents";
import { WeatherCache } from "./interfaces/WeatherCache";
import { getWeatherForecast } from "./modules/getWeatherForecast";
import { loadChannels } from "./modules/loadChannels";

(async () => {
  const BOT = new Client({ intents: IntentOptions });

  const CACHE: WeatherCache = {
    Rudania: getWeatherForecast("Rudania"),
    Inariko: getWeatherForecast("Inariko"),
    Vhintl: getWeatherForecast("Vhintl"),
    channels: await loadChannels(BOT),
  };

  handleEvents(BOT, CACHE);

  await BOT.login(process.env.DISCORD_TOKEN as string);
})();
