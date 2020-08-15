import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CarouselBubbles from './CarouselBubbles';

const RenderCards = (card, items, index, numItems) => {
  let cards = [];
  for (let i = 0; i < numItems; i++) {
    cards.push(
      <div style={{ padding: '0 10px' }}>{card(items[index + i])}</div>
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
  LeftIcon,
  RightIcon,
  ...styles
}) => (
  <FlexCol style={{ marginBottom: 20 }}>
    <CarouselContainer styles={styles}>
      <ArrowIcon onClick={setCurrent(index - 1)} hide={index === 0}>
        <LeftIcon />
      </ArrowIcon>
      {RenderCards(card, items, index, numItems)}
      <ArrowIcon
        onClick={setCurrent(index + 1)}
        hide={index === items.length - numItems}
      >
        <RightIcon />
      </ArrowIcon>
    </CarouselContainer>
    <CarouselBubbles
      current={index}
      length={items.length}
      setCurrent={setCurrent}
      numItems={numItems}
    />
  </FlexCol>
);

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  numItems: PropTypes.number,
  card: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  setCurrent: PropTypes.func.isRequired,
  LeftIcon: PropTypes.element.isRequired,
  RightIcon: PropTypes.element.isRequired,
};

Carousel.defaultProps = {
  numItems: 1,
};

export default Carousel;

//
//  STYLES
//

const ArrowIcon = styled.div`
  height: 24px;
  width: 24px;
  visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
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
