import React from 'react';
import styled from 'styled-components';
import { FirebaseProvider, Footer } from 'components';
import LandingPage from './LandingPage';
import ProjectsPage from './ProjectsPage';
import ExperiencePage from './ExperiencePage';
import TravelsPage from './TravelsPage';
import ContactPage from './ContactPage';
import GlobalStyles from './GlobalStyles';

const App = () => (
  <FirebaseProvider>
    {(db) => (
      <Global>
        <GlobalStyles />
        <LandingPage />
        <ProjectsPage />
        <ExperiencePage />
        <TravelsPage db={db} />
        <ContactPage />
        <Footer />
      </Global>
    )}
  </FirebaseProvider>
);

export default App;

//
// STYLES
//

const Global = styled.div`
  font-family: 'Reem Kufi';
`;
