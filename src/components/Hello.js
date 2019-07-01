import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const HelloText = styled.p`
  width: 100%;
  padding-left: 20px;
  font-family: "Reem Kufi";
  font-weight: normal;
  font-size: 35px;

  color: #f4511e;
`;

const Name = styled.h1`
  padding-left: 20px;
  margin: -10px 0;
  font-family: "Reem Kufi";
  font-weight: normal;
  font-size: 50px;

  color: #f4511e;
`;

const Hello = () => (
  <Container>
    <HelloText>Hello, I'm</HelloText>
    <Name>Cameron</Name>
    <Name>Shum</Name>
  </Container>
);

export default Hello;
