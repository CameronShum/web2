import React from 'react';
import { FirebaseProvider, Footer } from 'components';
import firebase from 'firebase';
import LandingPage from './LandingPage';
import ProjectsPage from './ProjectsPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
import GlobalStyles from './GlobalStyles';
import TravelsPage from './TravelsPage';

const App = () => (
  <FirebaseProvider>
    {(db: firebase.database.Reference) => (
      <>
        <GlobalStyles />
        <LandingPage />
        <ProjectsPage />
        <ExperiencePage />
        <React.Suspense fallback={<h1>Loading…</h1>}>
          <TravelsPage db={db} />
        </React.Suspense>
        <ContactPage />
        <Footer />
      </>
    )}
  </FirebaseProvider>
);

export default App;
