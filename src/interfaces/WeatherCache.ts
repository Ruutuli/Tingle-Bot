import { WeatherForecast } from "./weather/WeatherForecast";

export interface WeatherCache {
  Rudania: WeatherForecast | null;
  Inariko: WeatherForecast | null;
  Vhintl: WeatherForecast | null;
}
