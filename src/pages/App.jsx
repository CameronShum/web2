import React from 'react';
import styled from 'styled-components';
import { Footer } from 'components';
import LandingPage from './LandingPage';
import ProjectsPage from './ProjectsPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
import GlobalStyles from './GlobalStyles';

const App = () => (
  <Global>
    <GlobalStyles />
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
  font-family: 'Reem Kufi';
`;
