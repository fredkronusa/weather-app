import { getCurrentForecastUrl, getWeeklyForecastUrl } from "./config";

describe("getWeeklyForecastUrl", () => {
  it("returns the weekly forecast url ", () => {
    expect(getWeeklyForecastUrl("melbourne")).toContain("city=melbourne");
    expect(getWeeklyForecastUrl("sydney")).toContain("city=sydney");
  });
});

describe("getCurrentForecastUrl", () => {
  it("returns the weekly forecast url ", () => {
    expect(getCurrentForecastUrl("melbourne")).toContain("city=melbourne");
    expect(getCurrentForecastUrl("perth")).toContain("city=perth");
  });
});
