import { ICurrentForecast, IWeeklyForecast } from "../interfaces/Weather";

// TODO: make this hidden as a environment variable in the pipeline injection
const apiKey = "e4671e41414e4f659a3da840512b61ea";

export const getWeeklyForecastUrl = (city: string) => {
  return `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=au&days=7&key=${apiKey}`;
};

export const getCurrentForecastUrl = (city: string) => {
  return `https://api.weatherbit.io/v2.0/current?city=${city}&country=AU&key=${apiKey}`;
};

export const initialWeeklyForecast: IWeeklyForecast = {
  weeklyForecast: [] as any,
};

export const initialCurrentForecast: ICurrentForecast = {
  city: "",
  weather: {} as any,
  precipitation: "0",
  humidity: "0",
  wind: "",
  date: "",
  temperature: 0,
  uv: "0",
};
