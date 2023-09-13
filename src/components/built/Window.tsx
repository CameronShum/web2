import React from 'react';
import styled from 'styled-components';

interface WindowProps {
  onClick: (index: number) => () => void;
  images: React.FunctionComponent[];
  current: number;
  offset?: number;
  numItems: number;
}

const Window = ({
  onClick,
  images,
  current,
  offset = 0,
  numItems,
}: WindowProps) => {
  const maxItems = images.length + offset - numItems;

  const renderImages = (Image: React.FunctionComponent, index: number) => {
    const carouselIndex = index + offset > maxItems ? maxItems : index + offset;
    return (
      // TODO: Memoize function
      <BuildImages active={current === index} onClick={onClick(carouselIndex)}>
        <Image />
      </BuildImages>
    );
  };

  return (
    <Container>
      <FlexCol>
        <FlexRow>{images.map(renderImages)}</FlexRow>
      </FlexCol>
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  padding: 30px;
  box-sizing: border-box;

  background: #fffae8;
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

const BuildImages = styled.div<{ active: boolean }>`
  flex: 1;
  margin: 0 -4px 60px 0;
  border-bottom: 15px solid #a1887f;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.5);
  z-index: 1;
  cursor: ${(props) => !props.active && 'pointer'};

  display: flex;
  align-items: flex-end;
  justify-content: center;
  svg {
    padding: 0 5px;
    margin-bottom: -10px;

    transform: ${(props) => (props.active ? 'scale(1.2)' : 'scale(1.1)')};
    :hover {
      transform: scale(1.2);
    }
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Window;
