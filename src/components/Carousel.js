import React from "react";
import styled from "@emotion/styled";
import CarouselBubbles from "./CarouselBubbles";

const RenderCards = (card, items, index, numItems) => {
  let cards = [];
  for (let i = 0; i < numItems; i++) {
    cards.push(
      <div style={{ padding: "0 10px" }}>{card(items[index + i])}</div>
    );
  }
  return cards;
};

const Carousel = ({
  items,
  numItems = 1,
  card,
  index,
  setCurrent,
  leftIcon,
  rightIcon,
  ...styles
}) => (
  <FlexCol style={{ marginBottom: 20 }}>
    <CarouselContainer styles={styles}>
      <ArrowIcon
        src={leftIcon}
        alt="left-icon"
        onClick={setCurrent(index - 1)}
        hide={index === 0}
      />
      {RenderCards(card, items, index, numItems)}
      <ArrowIcon
        src={rightIcon}
        alt="right-icon"
        onClick={setCurrent(index + 1)}
        hide={index === items.length - numItems}
      />
    </CarouselContainer>
    <CarouselBubbles
      current={index}
      length={items.length}
      setCurrent={setCurrent}
      numItems={numItems}
    />
  </FlexCol>
);

export default Carousel;

//
//  STYLES
//

const ArrowIcon = styled.img`
  height: 24px;
  width: 24px;
  visibility: ${props => (props.hide ? "hidden" : "visible")};
  cursor: pointer;
`;

const CarouselContainer = styled.div`
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
