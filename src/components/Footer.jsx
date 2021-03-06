import React from 'react';
import styled from 'styled-components';

import { Heart } from 'images/navigation';

const Footer = () => (
  <FooterContainer>
    <Text width={70}>Built with</Text>
    <HeartContainer href="https://github.com/cameronshum/web2">
      <Heart />
    </HeartContainer>
    <Text width={125}>by Cameron Shum</Text>
  </FooterContainer>
);

export default Footer;

//
//  STYLES
//

const FooterContainer = styled.div`
  height: 40px;
  margin: 40px 0 20px 0;
  color: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeartContainer = styled.a`
  margin-right: 5px;
`;

const Text = styled.div`
  width: ${(props) => props.width}px;
  text-align: center;
`;
