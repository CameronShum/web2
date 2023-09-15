import React from 'react';
import styled from 'styled-components';

export interface CardProps {
  title: string;
  Image: React.FunctionComponent;
  date: string;
  desc: string;
  link?: string;
}

const Card = ({ title, Image, date, desc, link }: CardProps) => (
  <a href={link}>
    <CardContainer>
      <Title>{title}</Title>
      <CardContent>
        <Image />
        <DateText>{date}</DateText>
        <DescText>{desc}</DescText>
        {link && <LearnMore>See More</LearnMore>}
      </CardContent>
    </CardContainer>
  </a>
);

export default Card;

const CardContainer = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContent = styled.div`
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

  @media (min-width: 800px) {
    width: 350px;
    min-height: 250px;
  }
`;

const DateText = styled.p`
  width: 150px;
  font-size: 18px;
  color: #37474e;
  text-align: center;

  @media (min-width: 800px) {
    font-size: 22px;
  }
`;

const DescText = styled.p`
  font-size: 18px;
  color: #37474e;
  padding: 10px 0;

  @media (min-width: 800px) {
    font-size: 22px;
  }
`;

const LearnMore = styled.text`
  text-align: center;
  font-size: 14px;
  color: #37474e;
`;

const Title = styled.div`
  margin-bottom: -5px;
  font-size: 30px;
  color: #ffca28;

  display: flex;
  justify-content: center;

  @media (min-width: 800px) {
    font-size: 40px;
  }
`;
