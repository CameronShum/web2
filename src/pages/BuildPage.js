import React, { useState } from "react";
import styled from "@emotion/styled";

import { Window, Carousel } from "../components";

import BumbleB from "./assets/BumbleB.svg";
import Laptop from "./assets/Laptop.svg";
import Phone from "./assets/Phone.svg";
import Rover from "./assets/Rover.svg";
import Skateboard2 from "./assets/Skateboard2.svg";
import Skateboard1 from "./assets/Skateboard1.svg";
import Sticker from "./assets/Sticker.svg";

const images = [
  BumbleB,
  Laptop,
  Phone,
  Rover,
  Skateboard1,
  Skateboard2,
  Sticker
];

const CardInfo = [
  {
    title: "BumbleB.",
    img: BumbleB,
    date: "Jan. 19 - Mar. 19",
    desc: "A fitness robot that tracks and rewards physical activity.",
    link: "./bumbleb"
  },
  {
    title: "some Code.",
    img: Laptop,
    date: "Jan. 19 - Now",
    desc:
      "A collection of code, from Python text parsers to front-end web apps to backend servers.",
    link: "https://github.com/cameronshum"
  },
  {
    title: "an Automated Text Message sender.",
    img: Phone,
    date: "Feb. 19",
    desc: "A program that sends text messages from a file",
    link: "https://github.com/CameronShum/Automated-Text-Message-Sending"
  },
  {
    title: "a Lunar Rover design.",
    img: Rover,
    date: "Jan. 19",
    desc:
      "A design for a lunar rover to survive the harsh conditions of the moon",
    link: "./rover"
  },
  {
    title: "an Electric Skateboard.",
    img: Skateboard1,
    date: "Sep. 16 - Apr. 17",
    desc: "Electric skateboard built and programmed from scratch",
    link: "./skateboard/v1"
  },
  {
    title: "an Electric Skateboard.",
    img: Skateboard2,
    date: "May 19 - Now",
    desc:
      "A second electric skateboard, built to perform better than version 1",
    link: "./skateboard/v2"
  },
  {
    title: "Sticker Factory.",
    img: Sticker,
    date: "Sep. 18 - Dec. 18",
    desc: "A children's toy that creates stickers from a drawing",
    link: "./stickerfactory"
  }
];

const BuildPage = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = num => () => {
    setCurrent(num);
  };

  return (
    <Container>
      <Text>have</Text>
      <Text style={{ fontSize: 54 }}>Built</Text>
      <Window onClick={handleClick} images={images} current={current} />
      <Carousel index={current} setCurrent={handleClick} cardInfo={CardInfo} />
    </Container>
  );
};

export default BuildPage;

//
//  Begin Styling
//

const Container = styled.div`
  padding: 20px 20px;
  background: #fff8e1;
`;

const Text = styled.p`
  font-family: Reem Kufi;
  font-size: 40px;
  color: #ffb300;
`;
