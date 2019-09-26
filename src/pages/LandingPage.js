import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import {
  Circle,
  ComponentContainer,
  Container,
  TextDiv,
  TopGradient,
  SectionContainer
} from "./LandingPage.components";
import { HomeTransition, Hello } from "../components/index";
import gradient from "../images/coverImg.svg";
import sections from "../constants/sections";

const RenderSections = ({ name, color }, index) => {
  const [show, setShow] = useState(true);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, value => 1 - value * 3);

  useEffect(() => yRange.onChange(v => setShow(v >= 0)));

  return (
    <SectionTitle color={color} href={`#${name}`} key={name}>
      <SectionDiv>
        <Circle color={color} size={50} style={{ marginTop: -10 }} />
        <SectionName style={{ opacity: yRange }} show={show}>
          {name}
        </SectionName>
      </SectionDiv>
    </SectionTitle>
  );
};

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

//
//  STYLES
//

const SectionDiv = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const SectionName = styled(motion.div)`
  margin-left: 10px;
  transition: 0.2s ease-in-out;
  display: ${props => (props.show ? "block" : "none")};
`;

const SectionTitle = styled(motion.a)`
  padding-left: 10px;

  font-size: 35px;
  color: ${props => props.color};
  text-decoration: none;
  transition: 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;
