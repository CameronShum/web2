import React from 'react';
import styled from 'styled-components';
import { Heart } from 'images/navigation';

const Footer = () => (
  <FooterContainer>
    <Text>Built with</Text>
    <HeartContainer href="https://github.com/cameronshum/web2">
      <Heart />
    </HeartContainer>
    <Text>by Cameron Shum</Text>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.div`
  margin: 40px 0 20px 0;
  color: #a1a1a1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeartContainer = styled.a`
  margin-right: 5px;
`;

const Text = styled.div`
  text-align: center;
`;
