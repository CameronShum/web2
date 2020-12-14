import React from 'react';
import styled from 'styled-components';
import { FirebaseProvider, Footer } from 'components';
import LandingPage from './LandingPage';
import ProjectsPage from './ProjectsPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
import GlobalStyles from './GlobalStyles';

const sectionNumber = 4;

const TravelsPage = React.lazy(
  () => new Promise(
    (resolve) => setTimeout(resolve, sectionNumber * 300),
  ).then(() => import('./TravelsPage')),
);

const App = () => (
  <FirebaseProvider>
    {(db) => (
      <Global>
        <GlobalStyles />
        <LandingPage />
        <ProjectsPage />
        <ExperiencePage />
        <React.Suspense fallback={<h1>Loading…</h1>}>
          <TravelsPage db={db} />
        </React.Suspense>
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
