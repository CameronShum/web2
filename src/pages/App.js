import React from "react";
import styled from "@emotion/styled";
import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import ExperiencePage from "./ExperiencePage";
import ContactPage from "./ContactPage";
import { Footer } from "../components";

const App = () => (
  <Global>
    <LandingPage />
    <ProjectsPage />
    <ExperiencePage />
    <ContactPage />
    <Footer />
  </Global>
);

export default App;

//
// STYLES
//

const Global = styled.div`
  font-family: "Reem Kufi";
`;
