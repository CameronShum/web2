import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const items = ["Hardware.", "Mechanics.", "Software."];

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BigText = styled.h1`
  margin: -10px 0;
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
    const interval = setInterval(() => {
      setCurrent(current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [current]);

  // TODO: add a rotation like transition between utems
  return (
    <Container style={style}>
      <SmallText onClick={handleUp}>{items[currentRelative(0)]}</SmallText>
      <BigText>{items[currentRelative(1)]}</BigText>
      <SmallText onClick={handleDown}>{items[currentRelative(2)]}</SmallText>
    </Container>
  );
};

export default HomeTransition;
