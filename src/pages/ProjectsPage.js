import React, { useState } from "react";
import styled from "@emotion/styled";

import { Carousel, Window, SectionDivider } from "../components";

import BumbleB from "../images/BumbleB.svg";
import Laptop from "../images/Laptop.svg";
import Phone from "../images/Phone.svg";
import Rover from "../images/Rover.svg";
import Skateboard2 from "../images/Skateboard2.svg";
import Skateboard1 from "../images/Skateboard1.svg";
import Sticker from "../images/Sticker.svg";

const images = [Laptop, BumbleB, Phone, Rover, Sticker];

const images2 = [Skateboard1, Skateboard2];

const ProjectsPage = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = num => () => {
    setCurrent(num);
  };

  return (
    <Container id="Projects">
      <SectionDivider sectionName={"Projects"} />
      <Title>Projects</Title>
      <Window onClick={handleClick} images={images} current={current} />
      <Carousel index={current} setCurrent={handleClick} />
      <Window onClick={handleClick} images={images2} current={current} />
    </Container>
  );
};

export default ProjectsPage;

//
//  STYLING
//

const Container = styled.div`
  padding: 20px 20px;
`;

const Text = styled.p`
  font-size: 40px;
  color: #ffb300;
`;

const Title = styled(Text)`
  font-size: 54px;
  margin-left: 10px;
`;
