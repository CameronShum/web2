import React from "react";
import styled from "@emotion/styled";

import BumbleB from "./assets/BumbleB.svg";
import Laptop from "./assets/Laptop.svg";
import Phone from "./assets/Phone.svg";
import Rover from "./assets/Rover.svg";
import Skateboard1 from "./assets/Skateboard.svg";
import Skateboard2 from "./assets/Skateboard1.svg";
import Sticker from "./assets/Sticker.svg";

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
    img: Skateboard1,
    date: "May 19 - Now",
    desc:
      "A second electric skateboard, built to perform better than version 1",
    link: "./skateboard/v2"
  },
  {
    title: "Sticker Factory.",
    img: Skateboard1,
    date: "Sep. 18 - Dec. 18",
    desc: "A children's toy that creates stickers from a drawing",
    link: "./stickerfactory"
  }
];

const Card = (title, img, date, desc, link) => (
  <div>
    <Title>{title}</Title>
    <CardContainer>
      <object data={img} type="image/svg+xml" aria-label="build icon" />
      <Text>Date: {date}</Text>
      <Text>About: {desc} </Text>
      <LearnMore href={link}>Learn More</LearnMore>
    </CardContainer>
  </div>
);

const Carousel = ({ index }) => {};

//
//  Begin Styling
//

const CardContainer = styled.div`
  min-height: 200px;
  height: auto;
  padding: 10px;
`;

const Title = styled.p`
  font-family: "Reem Kufi";
  font-size: 48px;
  color: #ffca28;
`;

const Text = styled.p`
  font-family: "Reem Kufi";
  font-size: 18px;
  color: #37474e;
`;

const LearnMore = styled.a`
  font-family: "Reem Kufi";
  font-size: 14px;
  color: #37474e;
`;
