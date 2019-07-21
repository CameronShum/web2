import React from "react";
import styled from "@emotion/styled";

const Hello = () => (
  <Container>
    <HelloText>Hello, I'm</HelloText>
    <Name>Cameron</Name>
    <Name>Shum</Name>
  </Container>
);

//
//  Begin Styling
//

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HelloText = styled.p`
  width: 100%;
  font-family: "Reem Kufi";
  font-size: 35px;

  color: #f4511e;
`;

const Name = styled.p`
  font-family: "Reem Kufi";
  font-size: 50px;

  color: #f4511e;
`;

export default Hello;
