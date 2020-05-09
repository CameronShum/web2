import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { HomeTransition, Hello } from 'components/index';
import CoverImage from 'images/background/CoverImage';
import sections from 'constants/sections';
import {
  Circle,
  ComponentContainer,
  Container,
  TextDiv,
  TopGradient,
  SectionContainer,
} from './LandingPage.components';

const RenderSections = ({ name, color }) => {
  return (
    <SectionTitle color={color} href={`#${name}`} key={name}>
      <SectionDiv>
        <Circle color={color} size={50} />
        <SectionName>{name}</SectionName>
      </SectionDiv>
    </SectionTitle>
  );
};

RenderSections.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const LandingPage = () => (
  <div style={{ backgroundColor: '#FFF8E1' }}>
    <Container>
      <TopGradient>
        <CoverImage />
      </TopGradient>
      <ComponentContainer height="250px" align>
        <Hello />
      </ComponentContainer>
      <ComponentContainer height="250px" align justify>
        <TextDiv>Design</TextDiv>
        <TextDiv style={{ padding: '0px 10px', color: '#EF9A9A' }}>+</TextDiv>
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

const SectionDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SectionName = styled.div`
  margin-left: 10px;
  transition: 0.2s ease-in-out;
`;

const SectionTitle = styled.a`
  padding-left: 10px;
  margin-top: -10px;

  font-size: 35px;
  color: ${(props) => props.color};
  text-decoration: none;
  transition: 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;
