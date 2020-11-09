import React, { useRef } from 'react';
import styled from 'styled-components';
import { FirebaseProvider, Footer } from 'components';
import LandingPage from './LandingPage';
import ProjectsPage from './ProjectsPage';
import ExperiencePage from './ExperiencePage';
import TravelsPage from './TravelsPage';
import ContactPage from './ContactPage';
import GlobalStyles from './GlobalStyles';

const App = () => {
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const travelsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <FirebaseProvider>
      {(db) => (
        <Global>
          <GlobalStyles />
          <LandingPage
            projectsRef={projectsRef}
            experienceRef={experienceRef}
            travelsRef={travelsRef}
            contactRef={contactRef}
          />
          <ProjectsPage projectsRef={projectsRef} />
          <ExperiencePage experienceRef={experienceRef} />
          <TravelsPage db={db} travelsRef={travelsRef} />
          <ContactPage contactRef={contactRef} />
          <Footer />
        </Global>
      )}
    </FirebaseProvider>
  );
};

export default App;

//
// STYLES
//

const Global = styled.div`
  font-family: 'Reem Kufi';
`;
