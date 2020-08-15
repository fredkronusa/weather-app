import {
  ICurrentForecast,
  ICurrentForecastResponse,
  IWeeklyForecast,
  IWeeklyForecastResponse,
} from "../interfaces/Weather";

export const createWeeklyForecastData = (
  response: IWeeklyForecastResponse
): IWeeklyForecast => {
  return {
    weeklyForecast: response.data,
  };
};

export const createCurrentForecastData = (
  response: ICurrentForecastResponse
): ICurrentForecast => {
  return {
    city: response.city_name,
    weather: response.weather,
    precipitation: `${response.precip}%`,
    humidity: `${response.rh}%`,
    // wind provided in m/s so need to convert to kph
    wind: `${(response.wind_spd * 3.6).toFixed(1)} Kph ${response.wind_cdir}`,
    date: getFullDate(convertStringToDate(response.ob_time)),
    temperature: response.temp,
    uv: response.uv.toFixed(),
  };
};

export const convertStringToDate = (date: string): Date => {
  return new Date(date);
};

export const getFullDate = (date: Date): string => {
  return `${getDatePart(date, "weekday")}, ${getDatePart(
    date,
    "month"
  )} ${date.getDate()}${getDateChar(date.getDate())}`;
};

const getDateChar = (day: Number) => {
  switch (day) {
    case 1:
    case 21:
    case 31:
      return "st";
    case 2:
    case 22:
      return "nd";
    case 3:
    case 23:
      return "rd";
    default:
      return "th";
  }
};

export const getDatePart = (
  date: Date,
  type: string,
  isToday?: boolean
): string => {
  return isToday
    ? "Today"
    : date.toLocaleDateString("en-US", { [type]: "long" });
};

export const getTemperature = (
  temperature: number,
  isCelsius: boolean,
  isCurrent?: boolean
): string => {
  const temp = isCelsius ? temperature : (temperature * 9) / 5 + 32;
  return `${temp.toFixed()}${isCurrent ? "" : "\u00b0"}`;
};
