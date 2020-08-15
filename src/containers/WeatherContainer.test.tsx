import * as React from "react";

import WeatherContainer from "./WeatherContainer";
import { render } from "@testing-library/react";

describe("<WeatherContainer />", () => {
  // SNAPSHOT
  it("should match snapshot", async () => {
    const { asFragment } = render(<WeatherContainer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
