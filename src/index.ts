import { Client } from "discord.js";

import { IntentOptions } from "./config/IntentOptions";
import { handleEvents } from "./events/handleEvents";

(async () => {
  const BOT = new Client({ intents: IntentOptions });

  handleEvents(BOT);

  await BOT.login(process.env.DISCORD_TOKEN as string);
})();
