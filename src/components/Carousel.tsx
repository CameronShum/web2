import React from 'react';
import styled from 'styled-components';
import CarouselBubbles from './CarouselBubbles';

interface titleProp {
  title: string;
}

// All carousel items must contain a title field (maybe necessary to convert title => key)
const renderCards = <T extends titleProp>(
  card: (props: T) => React.JSX.Element,
  items: T[],
  index: number,
  numItems: number,
) => {
  const cards = [];
  for (let i = 0; i < numItems; i++) {
    cards.push(
      <CardContainer key={items[index + i].title}>
        {card(items[index + i])}
      </CardContainer>,
    );
  }
  return cards;
};

interface CarouselProps<T> {
  items: T[];
  numItems?: number;
  card: (prop: T) => React.JSX.Element;
  index: number;
  setCurrent: (num: number) => () => void;
  LeftIcon: React.ComponentType;
  RightIcon: React.ComponentType;
}

const Carousel = <T extends titleProp>({
  items,
  numItems = 1,
  card,
  index,
  setCurrent,
  LeftIcon,
  RightIcon,
}: CarouselProps<T>) => (
  <CarouselContainer>
    <CarouselScrollContainer>
      <ArrowIcon onClick={setCurrent(index - 1)} hide={index === 0}>
        <LeftIcon />
      </ArrowIcon>
      {renderCards(card, items, index, numItems)}
      <ArrowIcon
        onClick={setCurrent(index + 1)}
        hide={index === items.length - numItems}
      >
        <RightIcon />
      </ArrowIcon>
    </CarouselScrollContainer>
    <CarouselBubbles
      current={index}
      length={items.length}
      setCurrent={setCurrent}
      numItems={numItems}
    />
  </CarouselContainer>
);

export default Carousel;

const ArrowIcon = styled.div<{ hide: boolean }>`
  height: 24px;
  width: 24px;
  visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
  cursor: pointer;
`;

const CardContainer = styled.div`
  padding: 0 10px;
`;

const CarouselScrollContainer = styled.div`
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CarouselContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
