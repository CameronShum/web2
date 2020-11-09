import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sections from 'constants/sections';

const FindSection = (sectionName) => {
  for (let i = 0; i < sections.length; i++) {
    const { name, color } = sections[i];
    if (sectionName === name) {
      return color;
    }
  }
  return null;
};

const SectionDivider = ({ sectionName }) => {
  const color = FindSection(sectionName);

  const renderCircle = (circle) => (
    <a href={`#${circle.name}`} key={circle.name}>
      <Circle color={circle.color} active={circle.name === sectionName} />
    </a>
  );

  return (
    <FlexRow>
      <Bar color={color} />
      {sections.map(renderCircle)}
      <Bar color={color} />
    </FlexRow>
  );
};

SectionDivider.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default SectionDivider;

//
// STYLING
//

const Bar = styled.div`
  width: 50px;
  height: 3px;

  background: ${(props) => props.color};
  opacity: 0.5;
`;

const Circle = styled.div`
  height: 20px;
  width: 20px;
  margin: 0 3px;
  border-radius: 100%;

  opacity: ${(props) => (props.active ? 1 : 0.2)};
  background-color: ${(props) => props.color};
  transition: 0.2s ease-in-out;

  :hover {
    opacity: 0.5;
  }
`;

const FlexRow = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
