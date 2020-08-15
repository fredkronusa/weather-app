import { ICurrentForecast, IWeeklyForecast } from "../interfaces/Weather";
import React, { useEffect, useState } from "react";
import {
  createCurrentForecastData,
  createWeeklyForecastData,
} from "../utils/utils";
import {
  getCurrentForecastUrl,
  getWeeklyForecastUrl,
  initialCurrentForecast,
  initialWeeklyForecast,
} from "../config/config";

import CurrentForecastComponent from "../components/CurrentForecast";
import LocationSearchComponent from "../components/LocationSearch";
import MetricsSwitchComponent from "../components/MetricsSwitch";
import WeeklyForecastComponent from "../components/WeeklyForecast";
import { colors } from "../common/styles";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: ${colors.lightGrey};
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  align-items: center;
`;

const Spinner = styled.img`
  margin: 0 auto;
  display: block;
`;

const WeatherContainer = () => {
  const [currentForecast, setCurrentForecast] = useState<ICurrentForecast>(
    initialCurrentForecast
  );
  const [weeklyForecast, setWeeklyForecast] = useState<IWeeklyForecast>(
    initialWeeklyForecast
  );

  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [location, setLocation] = useState<string>("Melbourne");

  useEffect(() => {
    setLoading(true);

    const getWeeklyForecastData = async () => {
      const weatherInfo = await fetch(getWeeklyForecastUrl(location));
      const response = await weatherInfo.json();
      setWeeklyForecast(createWeeklyForecastData(response));
    };

    const getCurrentForecastData = async () => {
      const weatherInfo = await fetch(getCurrentForecastUrl(location));
      const response = await weatherInfo.json();
      setCurrentForecast(createCurrentForecastData(response.data[0]));
    };

    getWeeklyForecastData();
    getCurrentForecastData();
  }, [location]);

  useEffect(() => {
    if (weeklyForecast.weeklyForecast.length && currentForecast.city) {
      setLoading(false);
    }
  }, [weeklyForecast, currentForecast]);

  return (
    <div>
      <HeaderWrapper>
        <LocationSearchComponent
          location={location}
          setLocation={setLocation}
        />
        <MetricsSwitchComponent setIsCelsius={setIsCelsius} />
      </HeaderWrapper>

      {!loading ? (
        <>
          <CurrentForecastComponent
            currentForecast={currentForecast}
            isCelsius={isCelsius}
          />
          <WeeklyForecastComponent
            weeklyForecast={weeklyForecast.weeklyForecast}
            isCelsius={isCelsius}
          />
        </>
      ) : (
        <Spinner src={"images/spinner.gif"} alt="loading" />
      )}
    </div>
  );
};

export default WeatherContainer;
