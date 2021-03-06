import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselBubbles = ({
  current, length, setCurrent, numItems,
}) => {
  const generateAmount = () => {
    const arr = [];
    for (let i = 0; i <= length - numItems; i++) {
      arr.push(i);
    }
    return arr;
  };

  const renderBubble = (index) => (
    <Bubble
      active={current === index}
      onClick={setCurrent(index)}
      key={index}
    />
  );

  return <Container>{generateAmount().map(renderBubble)}</Container>;
};

CarouselBubbles.propTypes = {
  numItems: PropTypes.number,
  current: PropTypes.number.isRequired,
  setCurrent: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

CarouselBubbles.defaultProps = {
  numItems: 1,
};

export default CarouselBubbles;

//
//  Begin Styling
//

const Bubble = styled.div`
  width: ${(props) => (props.active ? 13 : 10)}px;
  height: ${(props) => (props.active ? 13 : 10)}px;
  margin: 0 5px;

  border-radius: 100%;
  cursor: pointer;

  background: ${(props) => (props.active ? 'white' : '#C5CED1')};
`;

const Container = styled.div`
  min-width: 100px;
  width: auto;
  height: 25px;
  margin-top: 10px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
