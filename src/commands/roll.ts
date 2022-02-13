import { SlashCommandBuilder } from "@discordjs/builders";

import { Command } from "../interfaces/commands/Command";
import { errorHandler } from "../utils/errorHandler";

export const roll: Command = {
  data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription("Roll dice!")
    .addIntegerOption((option) =>
      option
        .setName("number")
        .setDescription("How many dice do you want to roll?")
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(100)
    )
    .addIntegerOption((option) =>
      option
        .setName("sides")
        .setDescription("What sided dice do you want to roll?")
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(100)
    ),
  run: async (interaction) => {
    try {
      await interaction.deferReply();
      const number = interaction.options.getInteger("number", true);
      const sides = interaction.options.getInteger("sides", true);

      let rolled = 0;
      let sum = 0;
      let result = "";

      while (rolled < number) {
        rolled++;
        const roll = Math.ceil(Math.random() * sides);
        result += `${roll} `;
        sum += roll;
      }

      await interaction.editReply(
        `You rolled ${number}d${sides}:\n\`${result.trim()}\` => ${sum}`
      );
    } catch (err) {
      const response = await errorHandler(err, "roll command");
      await interaction.editReply(response);
    }
  },
};
