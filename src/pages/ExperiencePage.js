import React, { useState } from "react";
import styled from "@emotion/styled";
import { SectionDivider, Carousel } from "../components";

import experience from "../constants/experience";

import jobBG from "../images/jobBG.svg";
import left from "../images/experienceLeft.svg";
import right from "../images/experienceRight.svg";

const Card = ({ title, company, descOfWork, toolsUsed }) => {
  const renderDescription = description => (
    <FlexRow
      style={{ margin: "10px 0", fontSize: 18, color: "#616161" }}
      key={description}
    >
      <div style={{ marginTop: 7, marginRight: 4 }}>
        <Bullet />
      </div>
      {description}
    </FlexRow>
  );

  const renderTools = tool => <Tag key={tool}>{tool}</Tag>;

  return (
    <CardContainer key={descOfWork}>
      <FlexCol>
        <FlexRow
          style={{
            marginBottom: 30,
            alignitems: "center",
            justifyContent: "center"
          }}
        >
          <Background src={jobBG} />
          <CompanyText>{company}</CompanyText>
        </FlexRow>
        <Text style={{ textDecoration: "underline" }}>{title}</Text>
        <FlexCol>{descOfWork.map(renderDescription)}</FlexCol>
        <FlexRow style={{ flexWrap: "wrap", marginTop: 15 }}>
          {toolsUsed.map(renderTools)}
        </FlexRow>
      </FlexCol>
    </CardContainer>
  );
};

const ExperiencePage = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = num => () => {
    setCurrent(num);
  };
  return (
    <Container id="Experience">
      <SectionDivider sectionName={"Experience"} />
      <Title>Experience</Title>
      <FlexCol>
        <Carousel
          items={experience}
          card={Card}
          index={current}
          setCurrent={handleClick}
          leftIcon={left}
          rightIcon={right}
        />
      </FlexCol>
    </Container>
  );
};

export default ExperiencePage;

//
//  STYLING
//

const Background = styled.img`
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
  width: 290px;
  margin-top: 30px;
`;

const Container = styled.div`
  padding: 20px 20px;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
`;

const CompanyText = styled.p`
  font-size: 50px;
  color: #7e57c2;
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
