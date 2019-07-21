import React from "react";
import styled from "@emotion/styled";

import { Window } from "../components/built";

const BuildPage = () => {
  // const [current, setCurrent] = useState(0);

  return (
    <Container>
      <Window handleClick={num => () => console.log(num)} />
    </Container>
  );
};

export default BuildPage;

//
//  Begin Styling
//

const Container = styled.div`
  padding: 40px 0;
  background: #fff8e1;
`;
