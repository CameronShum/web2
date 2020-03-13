import React from "react";
import styled from "@emotion/styled";
import { SectionDivider } from "../components";

import email from "images/mail.svg";
import github from "images/github.svg";
import instagram from "images/instagram.svg";
import linkedin from "images/linkedin.svg";
import document from "images/file-text.svg";

import contactInfo from "constants/contactInfo";

const renderContact = ({ type, name, link }) => {
  let img;
  switch (type) {
    case "Email":
      img = email;
      break;
    case "Github":
      img = github;
      break;
    case "Instagram":
      img = instagram;
      break;
    case "LinkedIn":
      img = linkedin;
      break;
    case "Document":
      img = document;
      break;
    default:
      img = null;
      break;
  }

  return (
    <ContactLink href={link} key={link}>
      <ContactContainer>
        {img && <img src={img} alt={type} style={{ flex: 1 }} />}
        <ContactText>{name}</ContactText>
      </ContactContainer>
    </ContactLink>
  );
};

const ContactPage = () => (
  <Container id={"Contact"}>
    <SectionDivider sectionName={"Contact"} />
    <Title>Contact</Title>
    <FlexCol>{contactInfo.map(renderContact)}</FlexCol>
  </Container>
);

export default ContactPage;

//
// STYLING
//

const ContactContainer = styled.div`
  width: 100%;
  height: 50px;

  background: #0097a7;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transform: scale(1.05);
  }

  img {
    margin: 0 10px;
  }

  @media (min-width: 800px) {
    width: auto;
    margin-left: 10px;
  }
`;

const ContactLink = styled.a`
  text-decoration: none;
  margin-bottom: 15px;
`;

const ContactText = styled.div`
  width: 275px;

  border: 0px;
  font-size: 25px;
  color: white;

  @media (min-width: 800px) {
    width: auto;
    margin-right: 15px;
  }
`;

const Container = styled.div`
  padding: 20px 20px;

  @media (min-width: 800px) {
    padding: 20px 200px;
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    margin-top: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.p`
  font-size: 60px;
  color: #00bfa5;
  margin-left: 10px;
`;
