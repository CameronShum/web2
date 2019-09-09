import React from "react";
import styled from "@emotion/styled";
import LandingPage from "./LandingPage";
import BuildPage from "./BuildPage";

const App = () => (
  <Global>
    <LandingPage />
    <BuildPage />
  </Global>
);

export default App;

//
// STYLES
//

const Global = styled.div`
  font-family: "Reem Kufi";
`;
