import React from "react";
import styled from "@emotion/styled";

const CarouselBubbles = ({ current, length, setCurrent }) => {
  const generateAmount = () => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(i);
    }
    return arr;
  };

  const renderBubble = index => (
    <Bubble active={current === index} onClick={setCurrent(index)} />
  );

  return <Container>{generateAmount().map(renderBubble)}</Container>;
};

export default CarouselBubbles;

//
//  Begin Styling
//

const Bubble = styled.div`
  width: ${props => (props.active ? 15 : 10)}px;
  height: ${props => (props.active ? 15 : 10)}px;
  margin: 0 5px;

  border-radius: 100%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  background: ${props => (props.active ? "white" : "#CFD8DC")};
`;

const Container = styled.div`
  min-width: 100px;
  width: auto;
  height: 25px;
  margin-top: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
