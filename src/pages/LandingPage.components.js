import styled from "@emotion/styled";

// prettier-ignore
export const Container = styled.div`
  width: 100%;
  height: auto;
  background: white;
  border-radius: 0 0 35px 35px;
  padding-bottom: 20px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TextDiv = styled.div`
  font-family: Reem Kufi;
  font-size: 40px;
  color: #3949ab;
`;

export const ComponentContainer = styled.div`
  width: 100%;
  min-height: ${props => props.height};
  height: auto;

  display: flex;
  align-items: ${props => (props.align ? "center" : "flex-start")};
  justify-content: ${props => (props.justify ? "center" : "flex-start")};
`;

export const Circle = styled.div`
  background: white;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.size};
  margin-top: ${props => props.marginTop};
`;

// prettier-ignore
export const Contact = styled.div`
  position: absolute;
  top: 0; right: 0;

  padding: 3px 8px;
  margin: 5px;

  background: none;
  border: 2px solid #e57373;
  border-radius: 5px;
  cursor: pointer;

  p {
    font-family: "Reem Kufi";
    font-size: 14px;
    color: #ffcdd2;
  }
`;

// prettier-ignore
export const TopGradient = styled.div`
  position: absolute;
  top: 0; right: 0;
  background: none;

  img {
    width: 300px;
  }
`;
