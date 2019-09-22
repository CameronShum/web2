import React from "react";
import styled from "@emotion/styled";

const Card = ({ title, img, date, desc, link }) => (
  <FlexCol>
    <Title>{title}</Title>
    <div style={{ width: 275, margin: "0 5px" }}>
      <CardContainer>
        <img src={img} alt={"project-icon"} />
        <Text style={{ width: 100 }}>{date}</Text>
        <Text style={{ padding: "10px 0" }}>{desc}</Text>
        {link && <LearnMore href={link}>See More</LearnMore>}
      </CardContainer>
    </div>
  </FlexCol>
);

export default Card;

//
//  STYLES
//

const CardContainer = styled.div`
  min-height: 200px;
  height: auto;
  width: 275px;
  padding: 10px;
  box-sizing: border-box;

  background: #fffae8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const FlexCol = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LearnMore = styled.a`
  font-size: 14px;
  color: #37474e;
`;

const Title = styled.div`
  margin-bottom: -5px;
  font-size: 30px;
  color: #ffca28;

  display: flex;
  align-items: flex-end;
`;

const Text = styled.p`
  font-size: 18px;
  color: #37474e;
`;
