import React from "react";
import styled from "@emotion/styled";
import { SectionDivider } from "../components";

const ExperiencePage = () => {
  return (
    <Container id="Experience">
      <SectionDivider sectionName={"Experience"} />
      <Title>Experience</Title>
    </Container>
  );
};

export default ExperiencePage;

//
//  STYLING
//

const Container = styled.div`
  padding: 20px 20px;
`;

const Text = styled.p`
  font-size: 40px;
  color: #7c4dff;
`;

const Title = styled(Text)`
  font-size: 54px;
  margin-left: 10px;
`;
