import { SlashCommandBuilder } from "@discordjs/builders";

import { ForecastChoices } from "../config/ForecastChoices";
import { Command } from "../interfaces/commands/Command";
import { RegionName } from "../interfaces/weather/names/RegionName";
import { generateWeatherEmbed } from "../modules/generateWeatherEmbed";
import { getWeatherForecast } from "../modules/getWeatherForecast";
import { generateBanner } from "../modules/images/generateBanner";
import { getSeasonIcon } from "../modules/images/getSeasonIcon";

export const forecast: Command = {
  data: new SlashCommandBuilder()
    .setName("forecast")
    .setDescription("Get the weather forecast for a specific region.")
    .addStringOption((option) =>
      option
        .setName("region")
        .setDescription("The region to get a forecast for.")
        .setRequired(true)
        .addChoices(ForecastChoices)
    ),
  run: async (interaction) => {
    await interaction.deferReply();
    const region = interaction.options.getString("region", true) as RegionName;
    const forecast = getWeatherForecast(region);
    const embed = generateWeatherEmbed(forecast);
    if (forecast) {
      const seasonIcon = getSeasonIcon(forecast.season);
      embed.setThumbnail(seasonIcon.attachmentString);
      const banner = await generateBanner(forecast);
      embed.setImage(banner.attachmentString);
      await interaction.editReply({
        embeds: [embed],
        files: [seasonIcon.filePath, banner.filePath],
      });
      return;
    }

    await interaction.editReply({ embeds: [embed] });
  },
};
