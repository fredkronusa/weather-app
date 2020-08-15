import * as React from "react";

import LocationSearchComponent from "./LocationSearch";
import { render } from "@testing-library/react";

const mockSetLocation = jest.fn();

describe("<LocationSearchComponent />", () => {
  // SNAPSHOT
  it("should match snapshot", async () => {
    const { asFragment } = render(
      <LocationSearchComponent
        setLocation={() => mockSetLocation()}
        location="melbourne"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set the input field ", async () => {
    const { container } = render(
      <LocationSearchComponent
        setLocation={() => mockSetLocation()}
        location="melbourne"
      />
    );
    const citySearch = container.querySelector("input");
    expect(citySearch?.value).toBe("melbourne");
  });
});
