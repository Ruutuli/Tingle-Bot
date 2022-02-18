import { Precipitation } from "../../interfaces/weather/Precipitation";

export const precipitations: Precipitation[] = [
  {
    name: "Blizzard",
    temps: ["Cold", "Freezing", "Frigid"],
    winds: ["Strong", "Gale", "Storm", "Hurricane"],
    emote: "❄️",
  },
  {
    name: "Cinder Storm",
    temps: "any",
    winds: ["Strong", "Gale", "Storm", "Hurricane"],
    emote: "🔥",
  },
  {
    name: "Cloudy",
    temps: "any",
    winds: ["Gale", "Strong", "Fresh", "Moderate", "Breeze", "Calm"],
    emote: "☁️",
  },
  {
    name: "Fog",
    temps: "any",
    winds: ["Gale", "Strong", "Fresh", "Moderate", "Breeze", "Calm"],
    emote: "🌫️",
  },
  {
    name: "Hail",
    temps: "any",
    winds: "any",
    emote: "☁️🧊",
  },
  {
    name: "Heat Lightning",
    temps: ["Warm", "Hot", "Scorching", "Heat Wave"],
    winds: "any",
    emote: "🌡️⚡",
  },
  {
    name: "Heavy Rain",
    temps: [
      "Brisk",
      "Cool",
      "Mild",
      "Perfect",
      "Warm",
      "Hot",
      "Scorching",
      "Heat Wave",
    ],
    winds: ["Gale", "Strong", "Fresh", "Moderate", "Breeze", "Calm"],
    emote: "🌧️",
  },
  {
    name: "Heavy Snow",
    temps: ["Chilly", "Cold", "Freezing", "Frigid"],
    winds: ["Gale", "Strong", "Fresh", "Moderate", "Breeze", "Calm"],
    emote: "🌨️",
  },
  {
    name: "Light Rain",
    temps: [
      "Brisk",
      "Cool",
      "Mild",
      "Perfect",
      "Warm",
      "Hot",
      "Scorching",
      "Heat Wave",
    ],
    winds: ["Gale", "Strong", "Fresh", "Moderate", "Breeze", "Calm"],
    emote: "☔",
  },
  {
    name: "Light Snow",
    temps: ["Chilly", "Cold", "Freezing", "Frigid"],
    winds: ["Gale", "Strong", "Fresh", "Moderate", "Breeze", "Calm"],
    emote: "🌨️",
  },
  {
    name: "Partly Cloudy",
    temps: "any",
    winds: ["Gale", "Strong", "Fresh", "Moderate", "Breeze", "Calm"],
    emote: "⛅",
  },
  {
    name: "Rain",
    temps: [
      "Brisk",
      "Cool",
      "Mild",
      "Perfect",
      "Warm",
      "Hot",
      "Scorching",
      "Heat Wave",
    ],
    winds: ["Gale", "Strong", "Fresh", "Moderate", "Breeze", "Calm"],
    emote: "🌧️",
  },
  {
    name: "Rainbow",
    temps: "any",
    winds: ["Gale", "Strong", "Fresh", "Moderate", "Breeze", "Calm"],
    emote: "🌈",
  },
  {
    name: "Sleet",
    temps: ["Brisk", "Chilly"],
    winds: "any",
    emote: "☁️🧊",
  },
  {
    name: "Snow",
    temps: ["Chilly", "Cold", "Freezing", "Frigid"],
    winds: ["Gale", "Strong", "Fresh", "Moderate", "Breeze", "Calm"],
    emote: "🌨️",
  },
  {
    name: "Sun Shower",
    temps: [
      "Brisk",
      "Cool",
      "Mild",
      "Perfect",
      "Warm",
      "Hot",
      "Scorching",
      "Heat Wave",
    ],
    winds: ["Gale", "Strong", "Fresh", "Moderate", "Breeze", "Calm"],
    emote: "🌦️",
  },
  {
    name: "Sunny",
    temps: "any",
    winds: "any",
    emote: "☀️",
  },
  {
    name: "Thundersnow",
    temps: ["Chilly", "Cold", "Freezing", "Frigid"],
    winds: "any",
    emote: "🌨️⚡",
  },
  {
    name: "Thunderstorm",
    temps: [
      "Brisk",
      "Cool",
      "Mild",
      "Perfect",
      "Warm",
      "Hot",
      "Scorching",
      "Heat Wave",
    ],
    winds: "any",
    emote: "⛈️",
  },
];
