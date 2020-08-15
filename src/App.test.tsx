import App from "./App";
import React from "react";
import { render } from "@testing-library/react";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  //const linkElement = getByText(/Search weather/i);
  //expect(linkElement).toBeInTheDocument();
});
