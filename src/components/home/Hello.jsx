import React from 'react';
import styled from '@emotion/styled';

const Hello = () => (
  <Container>
    <HelloText>Hello, I&apos;m</HelloText>
    <Name>Cameron</Name>
    <Name>Shum.</Name>
  </Container>
);

//
//  Begin Styling
//

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  padding-left: 20px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 800px) {
    margin-top: 100px;
    padding-left: 100px;
  }
`;

const HelloText = styled.div`
  width: 100%;
  font-size: 35px;
  color: #ef9a9a;
  @media (min-width: 800px) {
    font-size: 50px;
  }
`;

const Name = styled.p`
  font-size: 50px;
  color: #f4511e;
  @media (min-width: 800px) {
    font-size: 80px;
  }
`;

export default Hello;
