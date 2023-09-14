import React, { useCallback } from 'react';
import styled from 'styled-components';

interface CarouselBubblesProp {
  current: number;
  length: number;
  setCurrent: (newCurr: number) => () => void;
  numItems: number;
}

const CarouselBubbles = ({
  current,
  length,
  setCurrent,
  numItems,
}: CarouselBubblesProp) => {
  const generateAmount = useCallback(() => {
    const arr = [];
    for (let i = 0; i <= length - numItems; i++) {
      arr.push(i);
    }
    return arr;
  }, [length, numItems]);

  const renderBubble = useCallback(
    (index: number) => (
      <Bubble
        $active={current === index}
        onClick={setCurrent(index)}
        key={index}
      />
    ),
    [current, setCurrent],
  );

  return <Container>{generateAmount().map(renderBubble)}</Container>;
};

export default CarouselBubbles;

const Bubble = styled.div<{ $active: boolean }>`
  width: ${(props) => (props.$active ? 13 : 10)}px;
  height: ${(props) => (props.$active ? 13 : 10)}px;
  margin: 0 5px;

  border-radius: 100%;
  cursor: pointer;

  background: ${(props) => (props.$active ? 'white' : '#C5CED1')};
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
