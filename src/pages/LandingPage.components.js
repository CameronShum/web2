import styled from "@emotion/styled";

export const Circle = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 100%;
  background-color: ${props => props.color};
`;

export const ComponentContainer = styled.div`
  width: 100%;
  min-height: ${props => props.height};
  height: auto;

  display: flex;
  align-items: ${props => (props.align ? "center" : "flex-start")};
  justify-content: ${props => (props.justify ? "center" : "flex-start")};
`;

// prettier-ignore
export const Container = styled.div`
  width: 100%;
  height: auto;
  background: white;
  padding-bottom: 20px;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexRowWidth = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 800px) {
    flex-direction: column;
  }
`;

export const SectionContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    margin: 50px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const TextDiv = styled.div`
  font-size: 40px;
  color: #e53935;

  @media (min-width: 800px) {
    font-size: 50px;
  }
`;

// prettier-ignore
export const TopGradient = styled.div`
  position: absolute;
  top: 0; right: 0;
  
  background: none;
  pointer-events: none;

  img {
    width: 300px;
    @media(min-width: 800px){
      width: 500px;
    }
  }
`;
