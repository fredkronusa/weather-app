import * as React from "react";

import LocationSearch from "./LocationSearch";
import { render } from "@testing-library/react";

const mockSetLocation = jest.fn();

describe("<LocationSearch />", () => {
  // SNAPSHOT
  it("should match snapshot", async () => {
    const { asFragment } = render(
      <LocationSearch
        setLocation={() => mockSetLocation()}
        location="melbourne"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should set the input field ", async () => {
    const { container } = render(
      <LocationSearch
        setLocation={() => mockSetLocation()}
        location="melbourne"
      />
    );
    const citySearch = container.querySelector("input");
    expect(citySearch?.value).toBe("melbourne");
  });
});
