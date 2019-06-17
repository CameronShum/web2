import React from "react";
import styled from "@emotion/styled";
import { HomeTransition, Hello } from "./components/index";

// prettier-ignore
const Container = styled.div`
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const TextDiv = styled.div`
  font-family: Reem Kufi;
  font-size: 40px;
  color: #3949ab;
`;

function App() {
  return (
    <Container>
      <Hello />
      <FlexRow>
        <TextDiv>Design</TextDiv>
        <TextDiv style={{ padding: "0px 10px" }}>+</TextDiv>
        <HomeTransition style={{ width: 180 }} />
      </FlexRow>
    </Container>
  );
}

export default App;
