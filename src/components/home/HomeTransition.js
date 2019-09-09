import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Typist from "react-typist";
import { items } from "../../constants/skills";

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
  width: 100%;
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BigText = styled.h1`
  font-weight: normal;
  font-size: 40px;
  color: #e53935;
`;

const SmallText = styled.p`
  font-weight: normal;
  font-size: 20px;
  color: #ef9a9a;
  cursor: pointer;
`;

export default HomeTransition;
