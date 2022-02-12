import { Special } from "../../interfaces/weather/Special";

export const specials: Special[] = [
  {
    name: "Avalanche",
    temps: ["Chilly", "Cold", "Freezing", "Frigid"],
    winds: "any",
    precipitations: ["Snow"],
    description:
      "There has been an avalanche and some roads are blocked! Travel to and from this village today is impossible.",
    emote: "🏔️",
  },
  {
    name: "Blight Rain",
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
    precipitations: ["Rain"],
    description:
      "Blighted rain falls from the sky, staining the ground and creating sickly maroon-tinged puddles... if you roll for gathering today you must also `/tableroll blightrain` to see if you get infected! If you miss doing this roll with your gather, blighting will be automatic.",
    emote: "🌧️🧿",
  },
  {
    name: "Drought",
    temps: ["Scorching", "Heat Wave"],
    winds: "any",
    precipitations: ["Sunny"],
    description:
      "A drought has dried up the smaller vegetation surrounding the village... any plants or mushrooms rolled today are found dead and will not be gathered.",
    emote: "🌵",
  },
  {
    name: "Fairy Circle",
    temps: "any",
    winds: "any",
    precipitations: "any",
    description:
      "Fairy circles have popped up all over Hyrule! All residents and visitors may use `/tableroll fairycircle` to gather mushrooms today!",
    emote: "🍄",
  },
  {
    name: "Flood",
    temps: [
      "Cold",
      "Chilly",
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
    precipitations: ["Rain"],
    description:
      "There has been a Flood! Travelling to and from this village is impossible today due to the danger.",
    emote: "🌊",
  },
  {
    name: "Flower Bloom",
    temps: ["Perfect", "Warm", "Hot", "Scorching", "Heat Wave"],
    winds: "any",
    precipitations: "any",
    description:
      "An overabundance of plants and flowers have been spotted growing in and around the village! All residents and visitors may `/tableroll flowerbloom` to gather today!",
    emote: "🌼",
  },
  {
    name: "Jubilee",
    temps: "any",
    winds: "any",
    precipitations: "any",
    description:
      "Fish are practically jumping out of the water! All residents and visitors may `/tableroll jubilee` to catch some fish!",
    emote: "🐟",
  },
  {
    name: "Meteor Shower",
    temps: "any",
    winds: "any",
    precipitations: ["Sunny"],
    description:
      "Shooting starts have been spotted streaking through the sky! Quick, all residents and visitors make a wish and use `/tableroll meteorshower` for a chance to find a star fragment!",
    emote: "☄️",
  },
  {
    name: "Muggy",
    temps: ["Perfect", "Warm", "Hot", "Scorching", "Heat Wave"],
    winds: "any",
    precipitations: ["Rain", "Fog", "Cloudy"],
    description:
      "Oof! Sure is humid today! Critters are out and about more than usual. All residents and visitors may use `/tableroll muggy` to catch some critters!",
    emote: "🐛",
  },
  {
    name: "Rock Slide",
    temps: "any",
    winds: "any",
    precipitations: "any",
    description:
      "Oh no there's been a rock slide! Travelling to and from this village is impossible today. All residents and visitors may use `/tableroll rockslide` to help clear the road! You might just find something interesting while you work...",
    emote: "⛏️",
  },
];
