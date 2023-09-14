import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { SectionDivider, Carousel } from 'components';

import experience from 'constants/experience';

import JobBackground from 'images/background/JobBackground';

// Reverse items to display most recent first

const EXPERIENCE_ITEMS = experience.toReversed();

interface CardProps {
  title: string;
  company: string;
  descOfWork: string[];
  toolsUsed: string[];
}

const Card = ({ title, company, descOfWork, toolsUsed }: CardProps) => {
  const renderDescription = useCallback(
    (description: string) => (
      <DescriptionContainer key={description}>
        • {description}
      </DescriptionContainer>
    ),
    [],
  );

  const renderTools = useCallback(
    (tool: string) => <Tag key={tool}>{tool}</Tag>,
    [],
  );

  return (
    <CardContainer key={title + company}>
      <CardHeader>
        <Background>
          <JobBackground />
        </Background>
        <CompanyText>{company}</CompanyText>
      </CardHeader>
      <ExperienceTitle>{title}</ExperienceTitle>
      <FlexCol>{descOfWork.map(renderDescription)}</FlexCol>
      <TagContainer>{toolsUsed.map(renderTools)}</TagContainer>
    </CardContainer>
  );
};

// TODO: Create summary card in D3 that uses tags + frequency to color an image
// TODO: Generate random polygons using algorithm: generate random number of points from 1-20, randomly place them on a 30x60px grid, join each of them together, randomly round each corner
const ExperiencePage = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = useCallback(
    (num: number) => () => {
      setCurrent(num);
    },
    [],
  );
  return (
    <Container id="Experience">
      <SectionDivider sectionName="Experience" />
      <Title>Experience</Title>
      <FlexCol>
        <Carousel
          items={EXPERIENCE_ITEMS}
          card={Card}
          index={current}
          setCurrent={handleClick}
        />
      </FlexCol>
    </Container>
  );
};

export default ExperiencePage;

const Background = styled.div`
  position: absolute;
  z-index: -1;
`;

const CardContainer = styled.div`
  min-height: 400px;
  height: auto;
  width: 275px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    width: 600px;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 30;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CompanyText = styled.p`
  font-size: 50px;
  color: #7e57c2;
`;

const Container = styled.div`
  padding: 20px 20px;

  @media (min-width: 800px) {
    padding: 20px 200px;
  }
`;

const DescriptionContainer = styled.div`
  margin: 10px 0;
  display: flex;

  font-size: 18;
  color: #616161;
`;

const ExperienceTitle = styled.div`
  font-size: 25px;
  text-decoration: underline;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tag = styled.div`
  padding: 5px;
  margin: 0 5px 5px 0;
  background: #9575cd;
  border-radius: 3px;

  color: white;
`;

const TagContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.p`
  font-size: 60px;
  color: #7c4dff;
  margin-left: 10px;
`;
