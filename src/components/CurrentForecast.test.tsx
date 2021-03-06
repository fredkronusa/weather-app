import * as React from "react";

import CurrentForecastComponent from "./CurrentForecast";
import { ICurrentForecast } from "../interfaces/Weather";
import { render } from "@testing-library/react";

const currentForecastMockData: ICurrentForecast = {
  city: "Melbourne",
  weather: {
    icon: "123",
    description: "foggy",
  },
  precipitation: "12%",
  humidity: "15%",
  wind: "my wind",
  date: "Tuesday, April 15th",
  temperature: 12,
  uv: "12",
};

describe("<CurrentForecastComponent />", () => {
  // SNAPSHOT
  it("should match snapshot", async () => {
    const { asFragment } = render(
      <CurrentForecastComponent
        currentForecast={currentForecastMockData}
        isCelsius={true}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
