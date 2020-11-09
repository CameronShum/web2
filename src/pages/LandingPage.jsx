import React from 'react';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import RightArrow from 'images/navigation/RightArrow';
import sections from 'constants/sections';

const container = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
  hover: { scale: 0.98 },
};

const LandingPage = () => {
  const renderSections = ({
    name, color, secondaryColor, Icon,
  }) => (
    <a href={`#${name}`} key={name}>
      <SectionButton
        color={color}
        secondary={secondaryColor}
        whileHover="hover"
        variants={item}
      >
        <Icon />
        <SectionTitle>{name}</SectionTitle>
      </SectionButton>
    </a>
  );

  return (
    <Container>
      <NameContainer>
        <Name>Cameron Shum</Name>
        <Descriptors>Design. Front-end. Back-end.</Descriptors>
      </NameContainer>
      <SectionContainer variants={container} initial="hidden" animate="show">
        {sections.map(renderSections)}
      </SectionContainer>
      <Jumper
        animate={{ y: [0, 15] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        href="#Projects"
      >
        <div>
          <RightArrow />
        </div>
      </Jumper>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Descriptors = styled.div`
  color: #747474;
  font-size: 20px;
`;

const Jumper = styled(motion.a)`
  position: absolute;
  bottom: 20px;
  margin: auto;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    transform: rotate(90deg);
  }
`;

const Name = styled.div`
  font-size: 40px;
`;

const NameContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
`;

const SectionButton = styled(motion.div)`
  width: 250px;
  height: 80px;
  margin: 10px;
  padding-left: 30px;

  box-sizing: border-box;

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background-color: ${(props) => props.secondary};
  transition: 0.1s ease-in-out;
  cursor: pointer;
  font-size: 20pt;

  display: flex;
  align-items: center;

  :hover {
    color: ${(props) => props.color};
    box-shadow: none;
  }
`;

const SectionContainer = styled(motion.div)`
  width: 80%;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    width: 60%;
  }
`;

const SectionTitle = styled.div`
  padding-left: 30px;
`;
