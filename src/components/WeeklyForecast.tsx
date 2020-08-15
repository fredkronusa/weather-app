import { colors, fonts } from "../common/styles";
import {
  convertStringToDate,
  getDatePart,
  getTemperature,
} from "../utils/utils";

import { IForecastData } from "../interfaces/Weather";
import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: space-between;
  max-width: 1200px;
  padding-left: 0;
`;

const Li = styled.li`
  justify-content: space-between;
  text-align: center;
`;

const Weekday = styled.p`
  font-weight: bold;
`;

const MaxTemp = styled.span`
  font-size: ${fonts.small};
`;

const MinTemp = styled(MaxTemp)`
  color: ${colors.grey};
  margin-left: 10px;
`;

const UvIndex = styled.span`
  color: ${colors.grey};
  display: block;
`;

const Img = styled.img`
  display: block;
`;

interface IWeeklyForecastComponent {
  weeklyForecast: IForecastData[];
  isCelsius?: boolean;
}

export const WeeklyForecastComponent: React.FC<IWeeklyForecastComponent> = ({
  weeklyForecast,
  isCelsius = true,
}) => {
  return (
    <Ul aria-label="weekly weather">
      {weeklyForecast.map((item: IForecastData, i: number) => (
        <Li key={`forecast-${i}`}>
          <Weekday>
            {getDatePart(
              convertStringToDate(item.valid_date),
              "weekday",
              i === 0
            )}
          </Weekday>
          <Img
            src={`/images/icons/${item.weather.icon}.png`}
            alt={item.weather.description}
          />
          <MaxTemp aria-label="Max Temp">
            {getTemperature(item.max_temp, isCelsius)}
          </MaxTemp>
          <MinTemp aria-label="Min Temp">
            {getTemperature(item.min_temp, isCelsius)}
          </MinTemp>
          <UvIndex aria-label="UX Index">UV Index {item.uv.toFixed()}</UvIndex>
        </Li>
      ))}
    </Ul>
  );
};

export default WeeklyForecastComponent;
