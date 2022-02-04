import { Interaction } from "discord.js";

import { CommandList } from "../../commands/_CommandList";

/**
 * Handles the INTERACTION_CREATE event from Discord. Checks if the interaction is
 * an application command, and if there is a matching command, and runs it.
 *
 * @param {Interaction} interaction The interaction payload from Discord.
 */
export const onInteraction = async (interaction: Interaction) => {
  if (!interaction.isCommand()) {
    return;
  }

  const target = CommandList.find(
    (command) => command.data.name === interaction.commandName
  );

  if (!target) {
    console.error("This should never happen, but a bad command was received!");
    return;
  }

  await target.run(interaction);
};
