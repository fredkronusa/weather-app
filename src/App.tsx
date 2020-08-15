import React from "react";
import WeatherContainer from "./containers/WeatherContainer";
import styled from "styled-components";

const Section = styled.div`
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <Section className="App">
      <WeatherContainer />
    </Section>
  );
}

export default App;
