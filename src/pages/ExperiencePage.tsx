import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { SectionDivider, Carousel } from 'components';

import experience from 'constants/experience';

import JobBackground from 'images/background/JobBackground';
import Left from 'images/navigation/LeftArrow';
import Right from 'images/navigation/RightArrow';

// Reverse items to display most recent first

const EXPERIENCE_ITEMS = experience.toReversed();

interface CardProps {
  title: string;
  company: string;
  descOfWork: string[];
  toolsUsed: string[];
}

// TODO: style object
const Card = ({ title, company, descOfWork, toolsUsed }: CardProps) => {
  const renderDescription = (description: string) => (
    <FlexRow
      style={{ margin: '10px 0', fontSize: 18, color: '#616161' }}
      key={description}
    >
      <div style={{ marginTop: 7, marginRight: 4 }}>
        <Bullet />
      </div>
      {description}
    </FlexRow>
  );

  const renderTools = (tool: string) => <Tag key={tool}>{tool}</Tag>;

  return (
    <CardContainer key={title + company}>
      <FlexCol>
        <FlexRow
          style={{
            marginBottom: 30,
            alignitems: 'center',
            justifyContent: 'center',
          }}
        >
          <Background>
            <JobBackground />
          </Background>
          <CompanyText>{company}</CompanyText>
        </FlexRow>
        <Text style={{ textDecoration: 'underline' }}>{title}</Text>
        <FlexCol>{descOfWork.map(renderDescription)}</FlexCol>
        <FlexRow style={{ flexWrap: 'wrap', marginTop: 15 }}>
          {toolsUsed.map(renderTools)}
        </FlexRow>
      </FlexCol>
    </CardContainer>
  );
};

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
          LeftIcon={StyledLeft}
          RightIcon={StyledRight}
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

const Bullet = styled.div`
  min-height: 5px;
  min-width: 5px;
  border-radius: 100%;
  background: #757575;
`;

const CardContainer = styled.div`
  min-height: 400px;
  height: auto;
  width: 275px;
  margin-top: 30px;

  @media (min-width: 800px) {
    width: 600px;
  }
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

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
`;

const StyledLeft = styled(Left)`
  stroke: #7c4dff;
`;

const StyledRight = styled(Right)`
  stroke: #7c4dff;
`;

const Tag = styled.div`
  padding: 5px;
  margin: 0 5px 5px 0;
  background: #9575cd;
  border-radius: 3px;

  color: white;
`;

const Text = styled.p`
  font-size: 25px;
`;

const Title = styled.p`
  font-size: 60px;
  color: #7c4dff;
  margin-left: 10px;
`;
