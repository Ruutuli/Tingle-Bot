import { join } from "path";

import { Season } from "../../interfaces/weather/names/Season";

/**
 * Module to generate the season icon attachment.
 *
 * @param {Season} season The season.
 * @returns {string} The icon filepath.
 */
export const getSeasonIcon = (season: Season): string => {
  const fileName = `${season.toLowerCase()}.png`;
  const filePath = join(process.cwd(), "src", "assets", "seasons", fileName);
  return filePath;
};
