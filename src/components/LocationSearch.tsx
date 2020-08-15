import React, { useState } from "react";
import { colors, fonts } from "../common/styles";

import styled from "styled-components";

const Label = styled.label`
  font-size: ${fonts.medium};
  margin-right: 20px;
`;

const Input = styled.input`
  font-size: ${fonts.medium};
  margin-right: 20px;
`;

const Button = styled.input`
  font-size: ${fonts.medium};
  background: ${colors.yellow};
  border: 1px solid ${colors.darkGrey};
`;

interface IHeaderComponent {
  setLocation: (location: string) => void;
  location: string;
}

export const LocationSearch: React.FC<IHeaderComponent> = ({
  setLocation,
  location,
}) => {
  const [newLocation, setNewLocation] = useState<string>(location);

  return (
    <div>
      <Label htmlFor="citySearch">Search Weather</Label>
      <Input
        type="text"
        id="citySearch"
        name="citySearch"
        value={newLocation}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewLocation(e.target.value)
        }
      />
      <Button
        type="button"
        value="GO"
        onClick={() => setLocation(newLocation)}
      />
    </div>
  );
};

export default LocationSearch;
