import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Typist from "react-typist";
import { items } from "constants/skills";

const mod = (x, n) => ((x % n) + n) % n;

const HomeTransition = ({ style }) => {
  const [current, setCurrent] = useState(0);
  const currentRelative = offset => mod(current + offset, items.length);

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
      <SmallText>{items[currentRelative(0)]}</SmallText>
      <BigText>{renderText(items[currentRelative(1)])}</BigText>
      <SmallText>{items[currentRelative(2)]}</SmallText>
    </Container>
  );
};

//
//  Begin Styling
//

const Container = styled.div`
  width: 180px;
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 800px) {
    width: 300px;
  }
`;

const BigText = styled.h1`
  font-weight: normal;
  font-size: 40px;
  color: #e53935;
  @media (min-width: 800px) {
    font-size: 50px;
  }
`;

const SmallText = styled.p`
  font-weight: normal;
  font-size: 20px;
  color: #ef9a9a;

  @media (min-width: 800px) {
    font-size: 30px;
  }
`;

export default HomeTransition;
