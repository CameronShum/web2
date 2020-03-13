import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { Card, Carousel, Window, SectionDivider } from "components";

import cardInfo from "constants/cardInfo";

import BumbleB from "images/BumbleB.svg";
import Laptop from "images/Laptop.svg";
import Phone from "images/Phone.svg";
import Rover from "images/Rover.svg";
import Skateboard2 from "images/Skateboard2.svg";
import Skateboard1 from "images/Skateboard1.svg";
import Sticker from "images/Sticker.svg";
import left from "images/projectsLeft.svg";
import right from "images/projectsRight.svg";

const images = [Laptop, BumbleB, Phone, Rover, Sticker];
const images2 = [Skateboard1, Skateboard2];

const desktopImages = [
  Laptop,
  BumbleB,
  Phone,
  Rover,
  Sticker,
  Skateboard1,
  Skateboard2
];

// Get Window dimensions
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const CarouselItems = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowDimensions.width > 1500) {
    return 3;
  }
  if (windowDimensions.width > 1200) {
    return 2;
  } else {
    return 1;
  }
};

const ProjectsPage = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = num => () => {
    setCurrent(num);
  };

  return (
    <Container id="Projects">
      <SectionDivider sectionName={"Projects"} />
      <Title>Projects</Title>
      <DesktopWindow>
        <Window
          onClick={handleClick}
          images={desktopImages}
          current={current}
          numItems={CarouselItems()}
        />
      </DesktopWindow>
      <MobileWindow>
        <Window
          onClick={handleClick}
          images={images}
          current={current}
          numItems={CarouselItems()}
        />
      </MobileWindow>
      <Carousel
        items={cardInfo}
        numItems={CarouselItems()}
        card={Card}
        index={current}
        setCurrent={handleClick}
        leftIcon={left}
        rightIcon={right}
      />
      <MobileWindow>
        <Window
          onClick={handleClick}
          images={images2}
          current={current - 5}
          offset={5}
          numItems={CarouselItems()}
        />
      </MobileWindow>
    </Container>
  );
};

export default ProjectsPage;

//
//  STYLING
//

const Container = styled.div`
  padding: 20px 20px;

  @media (min-width: 800px) {
    padding: 20px 200px;
  }
`;

const DesktopWindow = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: block;
  }
`;

const MobileWindow = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`;

const Text = styled.p`
  font-size: 40px;
  color: #ffb300;
`;

const Title = styled(Text)`
  font-size: 60px;
  margin-left: 10px;
`;
