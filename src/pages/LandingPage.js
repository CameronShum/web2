import React from "react";

import {
  Circle,
  ComponentContainer,
  Container,
  FlexRow,
  SectionTitle,
  TextDiv,
  TopGradient,
  SectionContainer
} from "./LandingPage.components";
import { HomeTransition, Hello } from "../components/index";
import gradient from "../images/coverImg.svg";
import sections from "../constants/sections";

const RenderSections = ({ name, color }) => (
  <SectionTitle color={color} href={`#${name}`} key={name}>
    <FlexRow>
      <Circle color={color} size={50} style={{ marginTop: -10 }} />
      <div style={{ marginLeft: 10 }}>{name}</div>
    </FlexRow>
  </SectionTitle>
);

const LandingPage = () => (
  <div style={{ backgroundColor: "#FFF8E1" }}>
    <Container>
      <TopGradient>
        <img src={gradient} alt="top gradient" />
      </TopGradient>
      <ComponentContainer height="250px" align>
        <Hello />
      </ComponentContainer>
      <ComponentContainer height="250px" align justify>
        <TextDiv>Design</TextDiv>
        <TextDiv style={{ padding: "0px 10px", color: "#EF9A9A" }}>+</TextDiv>
        <HomeTransition />
      </ComponentContainer>
      <SectionContainer>{sections.map(RenderSections)}</SectionContainer>
    </Container>
  </div>
);

export default LandingPage;
