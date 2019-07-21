import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Typist from "react-typist";

const items = ["Hardware.", "Mechanics.", "Software."];

const mod = (x, n) => ((x % n) + n) % n;

const HomeTransition = ({ style }) => {
  const [current, setCurrent] = useState(0);
  const currentRelative = offset => mod(current + offset, items.length);

  const handleUp = () => {
    let next = current - 1;
    if (next === -1) next = items.length - 1;
    setCurrent(next);
  };

  const handleDown = () => {
    let next = current + 1;
    if (next === items.length) next = 0;
    setCurrent(next);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent(current + 1);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [current]);

  const renderText = string => (
    <Typist avgTypingDelay={40} key={string}>
      {string}
      <Typist.Backspace count={items[currentRelative(1)].length} delay={1000} />
    </Typist>
  );

  // TODO: add a rotation like transition between items
  return (
    <Container style={style}>
      <SmallText onClick={handleUp}>{items[currentRelative(0)]}</SmallText>
      <BigText>{renderText(items[currentRelative(1)])}</BigText>
      <SmallText onClick={handleDown}>{items[currentRelative(2)]}</SmallText>
    </Container>
  );
};

//
//  Begin Styling
//

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BigText = styled.h1`
  font-family: "Reem Kufi";
  font-weight: normal;
  font-size: 40px;
  color: #3949ab;
`;

const SmallText = styled.p`
  font-family: "Reem Kufi";
  font-weight: normal;
  font-size: 20px;
  color: #3949ab;
  cursor: pointer;
`;

export default HomeTransition;
