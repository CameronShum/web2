import React from "react";

import {
  Container,
  FlexRow,
  TextDiv,
  ComponentContainer,
  Circle,
  Contact
} from "./LandingPage.components";
import { HomeTransition, Hello } from "../components/index";

function LandingPage() {
  return (
    <div style={{ backgroundColor: "#FFF8E1" }}>
      <Container>
        <Contact>
          <p>Contact</p>
        </Contact>
        <ComponentContainer height="250px" align>
          <Hello />
        </ComponentContainer>
        <ComponentContainer height="250px" align justify>
          <FlexRow>
            <TextDiv>Design</TextDiv>
            <TextDiv style={{ padding: "0px 10px" }}>+</TextDiv>
            <HomeTransition style={{ width: 180 }} />
          </FlexRow>
        </ComponentContainer>
        <ComponentContainer align justify style={{ flex: 1 }}>
          <TextDiv>I...</TextDiv>
        </ComponentContainer>
      </Container>
      <ComponentContainer align justify style={{ flexDirection: "column" }}>
        <Circle size="50px" marginTop="-20px" />
        <Circle size="30px" marginTop="-5px" />
        <Circle size="20px" />
      </ComponentContainer>
    </div>
  );
}

export default LandingPage;
