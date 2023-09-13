import React from 'react';
import { FirebaseProvider, Footer } from 'components';
import LandingPage from './LandingPage';
import ProjectsPage from './ProjectsPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
import GlobalStyles from './GlobalStyles';
import TravelsPage from './TravelsPage';
import { ProcessedDatabase } from 'components/firebase/FirebaseProvider';

const App = () => (
  <FirebaseProvider>
    {(db?: ProcessedDatabase) => (
      <>
        <GlobalStyles />
        <LandingPage />
        <ProjectsPage />
        <ExperiencePage />
        <TravelsPage db={db} />
        <ContactPage />
        <Footer />
      </>
    )}
  </FirebaseProvider>
);

export default App;
