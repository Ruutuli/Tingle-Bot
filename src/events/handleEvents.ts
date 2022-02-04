import { Client } from "discord.js";

import { onInteraction } from "./handlers/onInteraction";
import { onReady } from "./handlers/onReady";

/**
 * Mounts listeners for the Discord gateway events.
 *
 * @param {Client} BOT The bot's discord instance.
 */
export const handleEvents = (BOT: Client) => {
  BOT.on("ready", async () => await onReady(BOT));

  BOT.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction)
  );
};
