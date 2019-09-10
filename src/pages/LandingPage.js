import React from "react";

import {
  Circle,
  ComponentContainer,
  Container,
  FlexCol,
  FlexRow,
  SectionTitle,
  TextDiv,
  TopGradient
} from "./LandingPage.components";
import { HomeTransition, Hello } from "../components/index";
import gradient from "../images/coverImg.svg";
import sections from "../constants/sections";

const RenderSections = ({ name, color }) => (
  <FlexRow style={{ cursor: "pointer" }} key={name}>
    <Circle color={color} size={50} style={{ marginTop: -10 }} />
    <SectionTitle color={color} href={`#${name}`}>
      {name}
    </SectionTitle>
  </FlexRow>
);

const LandingPage = () => (
  <div style={{ backgroundColor: "#FFF8E1" }}>
    <Container>
      <TopGradient>
        <img src={gradient} alt="top gradient" />
      </TopGradient>
      <ComponentContainer height="250px" align style={{ marginTop: 50 }}>
        <Hello />
      </ComponentContainer>
      <ComponentContainer height="250px" align justify>
        <TextDiv>Design</TextDiv>
        <TextDiv style={{ padding: "0px 10px", color: "#EF9A9A" }}>+</TextDiv>
        <HomeTransition style={{ width: 180 }} />
      </ComponentContainer>
      <FlexCol style={{ paddingLeft: 20 }}>
        {sections.map(RenderSections)}
      </FlexCol>
    </Container>
  </div>
);

export default LandingPage;
