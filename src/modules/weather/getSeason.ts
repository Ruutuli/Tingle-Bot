import { Season } from "../../interfaces/weather/names/Season";

/**
 * Module to get the season based on today's date.
 * Winter: Dec 21 - March 20.
 * Spring: March 21 - June 20.
 * Summer: June 21st - September 22.
 * Fall: September 23 - December 21.
 *
 * @returns {Season} The season name.
 */
export const getSeason = (): Season => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();

  if (month < 3 || (month === 3 && day < 21) || (month === 12 && day > 20)) {
    return "Winter";
  }
  if (month < 6 || (month === 6 && day < 21)) {
    return "Spring";
  }
  if (month < 9 || (month === 9 && day < 23)) {
    return "Summer";
  }
  return "Fall";
};
