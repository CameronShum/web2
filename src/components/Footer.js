import React from "react";
import styled from "@emotion/styled";

import heart from "../images/heart.svg";

const Footer = () => (
  <FooterContainer>
    <div>Built with </div>
    <a href="https://github.com/cameronshum/web2">
      <img src={heart} alt="love" style={{ margin: "0 5px " }} />
    </a>
    <div>by Cameron Shum</div>
  </FooterContainer>
);

export default Footer;

//
//  STYLES
//

const FooterContainer = styled.div`
  margin: 40px 0 20px 0;
  color: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
`;
