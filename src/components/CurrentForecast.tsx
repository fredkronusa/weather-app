import { colors, fonts } from "../common/styles";

import { ICurrentForecast } from "../interfaces/Weather";
//import { ICurrentForecast } from "../interfaces/weather";
import React from "react";
import { getTemperature } from "../utils/utils";
import styled from "styled-components";

const Location = styled.h2`
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: ${fonts.xLarge};
  font-weight: normal;
`;

const LineItems = styled.span`
  color: ${colors.darkGrey};
  font-size: ${fonts.small};
  display: block;
`;

const Temperature = styled.div`
  margin-top: 40px;
  font-size: ${fonts.large};
  float: left;
  margin-right: 50px;
  /* TODO: handle this on a app level */
  @media only screen and (max-width: 3760px) {
    margin-left: 40px;
  }
`;

const Img = styled.img`
  float: left;
`;

const TempDisplay = styled.div`
  width: 100%;
  display: inline-block;
`;

const TempDisplayLeft = styled.div`
  width: 50%;
  float: left;
`;

const TempDisplayRight = styled(TempDisplayLeft)`
  margin-top: 20px;
`;

const InfoDisplay = styled.div`
  margin-left: 30px;
`;

interface ICurrentForecastComponent {
  currentForecast: ICurrentForecast;
  isCelsius: boolean;
}

export const CurrentForecastComponent: React.FC<ICurrentForecastComponent> = ({
  currentForecast,
  isCelsius,
}) => {
  return (
    <>
      <InfoDisplay>
        <Location>{currentForecast.city}</Location>
        <LineItems>{currentForecast.date}</LineItems>
        <LineItems>{currentForecast.weather.description}</LineItems>
      </InfoDisplay>
      <TempDisplay>
        <TempDisplayLeft>
          <Img
            src={`/images/icons/${currentForecast.weather.icon}.png`}
            alt={currentForecast.weather.description}
          />
          <Temperature
            aria-label={`current temperature in ${
              isCelsius ? "Celsius" : "Fahrenheit"
            } is `}
          >
            {getTemperature(currentForecast.temperature, isCelsius, true)}
            {isCelsius ? "\u2103" : "\u2109"}
          </Temperature>
        </TempDisplayLeft>
        <TempDisplayRight>
          <LineItems>Precipitation: {currentForecast.precipitation}</LineItems>
          <LineItems>Humidity: {currentForecast.humidity}</LineItems>
          <LineItems>Windy: {currentForecast.wind}</LineItems>
          <LineItems>Uv: {currentForecast.uv}</LineItems>
        </TempDisplayRight>
      </TempDisplay>
    </>
  );
};

export default CurrentForecastComponent;
