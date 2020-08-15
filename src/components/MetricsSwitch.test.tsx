import * as React from "react";

import MetricsSwitchComponent from "./MetricsSwitch";
import { render } from "@testing-library/react";

const mockSetLocation = jest.fn();

describe("<MetricsSwitchComponent />", () => {
  // SNAPSHOT
  it("should match snapshot", async () => {
    const { asFragment } = render(
      <MetricsSwitchComponent
        setIsCelsius={() => mockSetLocation()}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
