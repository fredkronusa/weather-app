import {
  convertStringToDate,
  createCurrentForecastData,
  createWeeklyForecastData,
  getDatePart,
  getFullDate,
  getTemperature,
} from "./utils";

import { ICurrentForecast } from "./../interfaces/weather";
import { ICurrentForecastResponse } from "./../interfaces/Weather";
import { IWeeklyForecastResponse } from "../interfaces/Weather";

const weeklyForecastMockData = {
  city_name: "Melbourne",
  data: [
    { max_temp: 16, min_temp: 8 },
    { max_temp: 12, min_temp: 4 },
  ],
};

const currentForecastMockData = {
  city_name: "Melbourne",
  weather: {} as any,
  precip: 80,
  rh: 10,
  wind_spd: 10,
  wind_cdir: "NE",
  ob_time: "2020-08-15",
  temp: 12,
  uv: 2,
};

describe("createWeeklyForecastData", () => {
  it("returns the object mapped for coding", () => {
    const payload = createWeeklyForecastData(
      weeklyForecastMockData as IWeeklyForecastResponse
    );
    expect(payload.weeklyForecast.length).toBe(2);
  });
});

describe("createWeeklyForecastData", () => {
  it("returns the object mapped for coding", () => {
    const payload = createCurrentForecastData(
      currentForecastMockData as ICurrentForecastResponse
    );
    expect(payload.city).toBe("Melbourne");
  });
});

describe("convertStringToDate", () => {
  it("returns a date object", () => {
    const date = convertStringToDate(currentForecastMockData.ob_time);
    expect(date).toBeInstanceOf(Date);
  });
});

describe("getFullDate", () => {
  it("returns a formated date string", () => {
    const fullDate = getFullDate(
      convertStringToDate(currentForecastMockData.ob_time)
    );
    expect(fullDate).toBe("Saturday, August 15th");
  });
});

describe("getFullDate", () => {
  it("returns a formated day string", () => {
    const weekday = getDatePart(
      convertStringToDate(currentForecastMockData.ob_time),
      "weekday"
    );
    expect(weekday).toBe("Saturday");
  });
  it("returns a today date string", () => {
    const weekday = getDatePart(
      convertStringToDate(currentForecastMockData.ob_time),
      "weekday",
      true
    );
    expect(weekday).toBe("Today");
  });
});

describe("getTemperature", () => {
  it("returns a formated temperature in celsius", () => {
    const temp = getTemperature(currentForecastMockData.temp, true);
    expect(temp).toBe("12°");
  });
  it("returns a formated temperature in fahrenheit", () => {
    const temp = getTemperature(currentForecastMockData.temp, false);
    expect(temp).toBe("54°");
  });
});
