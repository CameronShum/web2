import React from "react";
import styled from "@emotion/styled";

import CarouselBubbles from "./CarouselBubbles";

import cardInfo from "../../constants/cardInfo";

import leftIcon from "./assets/chevron-left.svg";
import rightIcon from "./assets/chevron-right.svg";

const Card = ({ img, date, desc, link }) => (
  <div style={{ width: 275, margin: "0 5px" }}>
    <CardContainer>
      <object data={img} type="image/svg+xml" aria-label="build icon" />
      <Text>{date}</Text>
      <Text style={{ padding: "10px 0" }}>{desc}</Text>
      <LearnMore href={link}>Learn More</LearnMore>
    </CardContainer>
  </div>
);

const Carousel = ({ index, setCurrent }) => (
  <FlexCol>
    <Title>{cardInfo[index].title}</Title>
    <CarouselContainer>
      <ArrowIcon
        src={leftIcon}
        alt="left-icon"
        onClick={setCurrent(index - 1)}
        hide={index === 0}
      />
      {Card(cardInfo[index])}
      <ArrowIcon
        src={rightIcon}
        alt="right-icon"
        onClick={setCurrent(index + 1)}
        hide={index === cardInfo.length - 1}
      />
    </CarouselContainer>
    <CarouselBubbles
      current={index}
      length={cardInfo.length}
      setCurrent={setCurrent}
    />
  </FlexCol>
);

export default Carousel;

//    {console.log`}
//  Begin Styling
//

const ArrowIcon = styled.img`
  height: 24px;
  width: 24px;
  visibility: ${props => (props.hide ? "hidden" : "visible")};
  cursor: pointer;
`;

const CardContainer = styled.div`
  min-height: 200px;
  height: auto;
  width: 275px;
  padding: 10px;
  box-sizing: border-box;

  background: #fffae8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const CarouselContainer = styled.div`
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LearnMore = styled.a`
  font-size: 14px;
  color: #37474e;
`;

const Title = styled.div`
  width: 275px;
  height: 80px;
  margin-bottom: -5px;
  font-size: 30px;
  color: #ffca28;

  display: flex;
  align-items: flex-end;
`;

const Text = styled.p`
  font-size: 18px;
  color: #37474e;
`;
