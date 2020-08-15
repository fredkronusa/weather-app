import * as React from "react";

import { ICurrentForecast, IWeeklyForecast } from "../interfaces/Weather";

import WeeklyForecastComponent from "./weeklyForecast";
import { render } from "@testing-library/react";

const currentForecastMockData: IWeeklyForecast[] = [
  {
    max_temp: 15,
    min_temp: 12,
    uv: 3,
    valid_date: "2020-08-15",
    weather: {
      icon: "123",
      description: "foggy",
    },
  },
  {
    max_temp: 15,
    min_temp: 12,
    uv: 3,
    valid_date: "2020-08-15",
    weather: {
      icon: "123",
      description: "foggy",
    },
  },
];

describe("<WeeklyForecastComponent />", () => {
  // SNAPSHOT
  it("should match snapshot", async () => {
    const { asFragment } = render(
      <WeeklyForecastComponent
        weeklyForecast={currentForecastMockData}
        isCelsius={true}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
