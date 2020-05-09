import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Card = ({ title, Image, date, desc, link }) => (
  <FlexCol>
    <Title>{title}</Title>
    <div>
      <CardContainer>
        <Image />
        <Text style={{ width: 150, textAlign: 'center' }}>{date}</Text>
        <Text style={{ padding: '10px 0' }}>{desc}</Text>
        {link && <LearnMore href={link}>See More</LearnMore>}
      </CardContainer>
    </div>
  </FlexCol>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  Image: PropTypes.element.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Card.defaultProps = {
  link: '',
};

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

  @media (min-width: 800px) {
    width: 350px;
    min-height: 250px;
  }
`;

const FlexCol = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LearnMore = styled.a`
  width: 70px;

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

const Text = styled.p`
  font-size: 18px;
  color: #37474e;

  @media (min-width: 800px) {
    font-size: 22px;
  }
`;
