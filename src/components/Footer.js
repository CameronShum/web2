import React from "react";
import styled from "@emotion/styled";

import heart from "images/heart.svg";

const Footer = () => (
  <FooterContainer>
    <Text width={70}>Built with </Text>
    <a href="https://github.com/cameronshum/web2">
      <img src={heart} alt="love" style={{ margin: "0 5px " }} />
    </a>
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

const Text = styled.div`
  width: ${props => props.width}px;
  text-align: center;
`;
