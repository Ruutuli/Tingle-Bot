import { Wind } from "../../interfaces/weather/Wind";

export const winds: Wind[] = [
  {
    name: "Calm",
    lowSpeed: 0,
    highSpeed: 1,
    emote: "😌",
  },
  {
    name: "Breeze",
    lowSpeed: 2,
    highSpeed: 12,
    emote: "🎐",
  },
  {
    name: "Moderate",
    lowSpeed: 13,
    highSpeed: 30,
    emote: "🍃",
  },
  {
    name: "Fresh",
    lowSpeed: 31,
    highSpeed: 40,
    emote: "🌬️",
  },
  {
    name: "Strong",
    lowSpeed: 41,
    highSpeed: 62,
    emote: "💫",
  },
  {
    name: "Gale",
    lowSpeed: 63,
    highSpeed: 87,
    emote: "💨",
  },
  {
    name: "Storm",
    lowSpeed: 88,
    highSpeed: 117,
    emote: "🌀",
  },
  {
    name: "Hurricane",
    lowSpeed: 118,
    highSpeed: 150,
    emote: "🌪️",
  },
];
