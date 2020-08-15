import React from "react";
import { fonts } from "../common/styles";
import styled from "styled-components";

const Label = styled.label`
  font-size: ${fonts.medium};
`;

const Input = styled.input`
  font-size: ${fonts.medium};
  margin-left: 20px;
`;

interface IHeaderComponent {
  setIsCelsius: (isCelsius: boolean) => void;
}

export const MetricsSwitchComponent: React.FC<IHeaderComponent> = ({ setIsCelsius }) => {
  return (
    <div>
      <Input
        type="radio"
        id="celsius"
        name="unitType"
        value="celsius"
        defaultChecked
        onChange={() => setIsCelsius(true)}
      />
      <Label htmlFor="celsius">{"\u2103"}</Label>
      <Input
        type="radio"
        id="fahrenheit"
        name="unitType"
        value="fahrenheit"
        onChange={() => setIsCelsius(false)}
      />
      <Label htmlFor="fahrenheit">{"\u2109"}</Label>
    </div>
  );
};

export default MetricsSwitchComponent;
