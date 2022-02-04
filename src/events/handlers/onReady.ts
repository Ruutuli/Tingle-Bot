import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Client } from "discord.js";

import { CommandList } from "../../commands/_CommandList";

/**
 * Handler for the READY event from Discord. Logs that the bot is connected,
 * then registers the guild slash commands.
 *
 * @param {Client} BOT The bot's Discord instance.
 */
export const onReady = async (BOT: Client) => {
  console.log("Connected to Discord!");

  const rest = new REST({ version: "9" }).setToken(
    process.env.DISCORD_TOKEN as string
  );

  const commandData = CommandList.map((command) => command.data.toJSON());

  await rest.put(
    Routes.applicationGuildCommands(
      BOT.user?.id || "oopsie whoopsie",
      process.env.HOME_GUILD_ID as string
    ),
    { body: commandData }
  );

  console.log("Registered Commands!");
};
