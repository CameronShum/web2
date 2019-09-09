import React, { useState } from "react";
import styled from "@emotion/styled";

import { Window, Carousel } from "../components";

import BumbleB from "../images/BumbleB.svg";
import Laptop from "../images/Laptop.svg";
import Phone from "../images/Phone.svg";
import Rover from "../images/Rover.svg";
import Skateboard2 from "../images/Skateboard2.svg";
import Skateboard1 from "../images/Skateboard1.svg";
import Sticker from "../images/Sticker.svg";

const images = [
  BumbleB,
  Laptop,
  Phone,
  Rover,
  Skateboard1,
  Skateboard2,
  Sticker
];

const BuildPage = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = num => () => {
    setCurrent(num);
  };

  return (
    <Container>
      <Text style={{ fontSize: 54 }}>Projects</Text>
      <Window onClick={handleClick} images={images} current={current} />
      <Carousel index={current} setCurrent={handleClick} />
    </Container>
  );
};

export default BuildPage;

//
//  Begin Styling
//

const Container = styled.div`
  padding: 20px 20px;
  background: white;
`;

const Text = styled.p`
  font-size: 40px;
  color: #ffb300;
`;
