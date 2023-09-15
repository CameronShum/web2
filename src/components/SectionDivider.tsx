import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sections from 'constants/sections';

const FindSection = (sectionName: string) => {
  for (let i = 0; i < sections.length; i++) {
    const { name, color } = sections[i];
    if (sectionName === name) {
      return color;
    }
  }
  return '#FFFFFF';
};

const SectionDivider = ({ sectionName }: { sectionName: string }) => {
  const color = useMemo(() => FindSection(sectionName), [sectionName]);

  const renderCircle = useCallback(
    ({ name, color }: { name: string; color: string }) => (
      <a href={`#${name}`} key={name}>
        <Circle $active={name === sectionName} $color={color} />
      </a>
    ),
    [sectionName],
  );

  return (
    <FlexRow>
      <Bar $color={color} />
      {sections.map(renderCircle)}
      <Bar $color={color} />
    </FlexRow>
  );
};

SectionDivider.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

export default SectionDivider;

const Bar = styled.div<{ $color: string }>`
  width: 50px;
  height: 3px;

  background: ${(props) => props.$color};
  opacity: 0.5;
`;

const Circle = styled.div<{ $active: boolean; $color: string }>`
  height: 20px;
  width: 20px;
  margin: 0 3px;
  border-radius: 100%;

  opacity: ${(props) => (props.$active ? 1 : 0.2)};
  background-color: ${(props) => props.$color};
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
