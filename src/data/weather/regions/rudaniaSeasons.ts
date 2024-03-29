import { RegionRestriction } from "../../../interfaces/weather/regions/RegionRestriction";

export const rudaniaSeasons: RegionRestriction[] = [
  {
    season: "Winter",
    temps: ["Cold", "Chilly", "Brisk", "Cool", "Mild", "Perfect"],
    wind: [
      "Calm",
      "Breeze",
      "Moderate",
      "Fresh",
      "Strong",
      "Gale",
      "Storm",
      "Hurricane",
    ],
    precipitation: [
      "Cloudy",
      "Fog",
      "Hail",
      "Heavy Rain",
      "Light Rain",
      "Light Snow",
      "Partly Cloudy",
      "Rain",
      "Rainbow",
      "Sleet",
      "Snow",
      "Sun Shower",
      "Sunny",
      "Thunderstorm",
    ],
    special: ["Flood", "Meteor Shower", "Rock Slide", "Blight Rain"],
  },
  {
    season: "Spring",
    temps: ["Brisk", "Cool", "Mild", "Perfect", "Warm", "Hot", "Scorching"],
    wind: [
      "Calm",
      "Breeze",
      "Moderate",
      "Fresh",
      "Strong",
      "Gale",
      "Storm",
      "Hurricane",
    ],
    precipitation: [
      "Cinder Storm",
      "Cloudy",
      "Fog",
      "Hail",
      "Heavy Rain",
      "Light Rain",
      "Partly Cloudy",
      "Rain",
      "Rainbow",
      "Sun Shower",
      "Sunny",
      "Thunderstorm",
    ],
    special: [
      "Drought",
      "Fairy Circle",
      "Flower Bloom",
      "Jubilee",
      "Meteor Shower",
      "Muggy",
      "Blight Rain",
    ],
  },
  {
    season: "Summer",
    temps: ["Mild", "Perfect", "Warm", "Hot", "Scorching", "Heat Wave"],
    wind: [
      "Calm",
      "Breeze",
      "Moderate",
      "Fresh",
      "Strong",
      "Gale",
      "Storm",
      "Hurricane",
    ],
    precipitation: [
      "Cinder Storm",
      "Cloudy",
      "Fog",
      "Hail",
      "Heat Lightning",
      "Heavy Rain",
      "Light Rain",
      "Partly Cloudy",
      "Rain",
      "Rainbow",
      "Sleet",
      "Sun Shower",
      "Sunny",
      "Thunderstorm",
    ],
    special: [
      "Drought",
      "Fairy Circle",
      "Flood",
      "Flower Bloom",
      "Jubilee",
      "Meteor Shower",
      "Muggy",
      "Rock Slide",
      "Blight Rain",
    ],
  },
  {
    season: "Fall",
    temps: ["Cold", "Chilly", "Brisk", "Cool", "Mild", "Perfect"],
    wind: [
      "Calm",
      "Breeze",
      "Moderate",
      "Fresh",
      "Strong",
      "Gale",
      "Storm",
      "Hurricane",
    ],
    precipitation: [
      "Cinder Storm",
      "Cloudy",
      "Fog",
      "Hail",
      "Heat Lightning",
      "Heavy Rain",
      "Light Rain",
      "Light Snow",
      "Partly Cloudy",
      "Rain",
      "Rainbow",
      "Sleet",
      "Sun Shower",
      "Sunny",
      "Thunderstorm",
    ],
    special: [
      "Drought",
      "Fairy Circle",
      "Flower Bloom",
      "Meteor Shower",
      "Muggy",
      "Rock Slide",
      "Blight Rain",
    ],
  },
];
