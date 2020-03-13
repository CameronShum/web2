import React from "react";
import styled from "@emotion/styled";

import { Heart } from "images/navigation";

const Footer = () => (
  <FooterContainer>
    <Text width={70}>Built with </Text>
    <a href="https://github.com/cameronshum/web2">
      <Heart style={{ margin: "0 5px " }} />
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
