/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Card, Carousel, Window, SectionDivider } from 'components';

import cardInfo from 'constants/cardInfo';
import * as Icons from 'images/projects';

const images = [
  Icons.Laptop,
  Icons.BumbleB,
  Icons.Phone,
  Icons.Rover,
  Icons.Sticker,
];
const images2 = [Icons.Skateboard1, Icons.Skateboard2];

const desktopImages = [
  Icons.Laptop,
  Icons.BumbleB,
  Icons.Phone,
  Icons.Rover,
  Icons.Sticker,
  Icons.Skateboard1,
  Icons.Skateboard2,
];

// Get Window dimensions
const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const CarouselItems = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowDimensions.width > 1500) {
    return 3;
  }
  if (windowDimensions.width > 1200) {
    return 2;
  }
  return 1;
};

const ProjectsPage = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = useCallback(
    (num: number) => () => {
      setCurrent(num);
    },
    [],
  );

  return (
    <Container id="Projects">
      <SectionDivider sectionName="Projects" />
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
`;
