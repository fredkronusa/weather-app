export interface IWeeklyForecastResponse {
  city_name: string;
  data: IForecastData[];
}

export interface IWeeklyForecast {
  weeklyForecast: IForecastData[];
}

export interface IWeather {
  description: string;
  icon: string;
}

export interface IForecastData {
  max_temp: number;
  min_temp: number;
  uv: number;
  valid_date: string;
  weather: IWeather;
}

export interface ICurrentForecastResponse {
  city_name: string;
  weather: IWeather;
  precip: number;
  rh: number;
  wind_spd: number;
  wind_cdir: string;
  ob_time: string;
  temp: number;
  uv: number;
}

export interface ICurrentForecast {
  city: string;
  weather: IWeather;
  precipitation: string;
  humidity: string;
  wind: string;
  date: string;
  temperature: number;
  uv: string;
}
