/**
 * Module to select a random value from an array.
 *
 * @param {any[]} array The array to select from.
 * @returns {any} The selected value.
 */
export const getRandomValue = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};
