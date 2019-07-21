import React from "react";
import styled from "@emotion/styled";

import BumbleB from "./assets/BumbleB.svg";
import Laptop from "./assets/Laptop.svg";
import Phone from "./assets/Phone.svg";
import Rover from "./assets/Rover.svg";
import Skateboard1 from "./assets/Skateboard.svg";
import Skateboard2 from "./assets/Skateboard1.svg";
import Sticker from "./assets/Sticker.svg";

const images = [
  BumbleB,
  Laptop,
  Phone,
  Rover,
  Skateboard1,
  Skateboard2,
  Sticker
];

// const Shelf = () => (
//   <div>
//     <ShelfBar />
//     <FlexRow justify style={{ padding: "0 20px" }}>
//       <ShelfLegs />
//       <ShelfLegs />
//     </FlexRow>
//   </div>
// );

const Window = ({ handleClick }) => {
  const renderImages = (img, index) => (
    <BuildImages>
      <object
        data={img}
        type="image/svg+xml"
        // key={img}
        onClick={handleClick(index)}
        aria-label="build icon"
      />
      {/* <img src={img} /> */}
    </BuildImages>
  );
  return (
    <Container>
      <FlexCol>
        <FlexRow justify wrap>
          {images.map(renderImages)}
        </FlexRow>
        {/* <Shelf /> */}
      </FlexCol>
    </Container>
  );
};

//
//  Begin Styling
//

const Container = styled.div`
  height: auto;
  width: 85%;
  margin: auto;
  padding: 30px;
  box-sizing: border-box;

  background: #ffecb3;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

// const ShelfBar = styled.div`
//   margin: auto;
//   width: 100%;
//   height: 15px;
//   background: #a1887f;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

//   z-index: 1;
// `;

// const ShelfLegs = styled.div`
//   width: 15px;
//   height: 30px;
//   background: #8d6e63;
// `;

const BuildImages = styled.div`
  flex: 1;
  padding-left: 2px;
  margin-bottom: 60px;

  border-bottom: 15px solid #a1887f;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  object {
    margin-bottom: -10px;
    cursor: pointer;
    height: 80px;
    :hover {
      transform: scale(1.25);
    }
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: ${props => (props.justify ? "space-between" : "")};
  flex-wrap: ${props => (props.wrap ? "wrap" : "")};
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Window;
