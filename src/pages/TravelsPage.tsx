import React, { useRef } from 'react';
import styled from 'styled-components';

import { SectionDivider } from 'components';
import { ProcessedDatabase } from 'components/firebase/FirebaseProvider';
import useMap from 'hooks/useMap';

const TravelsPage = ({ db }: { db?: ProcessedDatabase }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const loading = useMap(mapContainerRef, db);

  return (
    <Container id="Travels">
      <SectionDivider sectionName="Travels" />
      <Title>Travels</Title>
      <MapContainer $isLoading={loading}>
        {loading ? (
          <Loading>Loading...</Loading>
        ) : (
          <LoadingContainer $isLoading={loading}>
            <Map ref={mapContainerRef} />
          </LoadingContainer>
        )}
      </MapContainer>
      <Caption>Red regions are places I have visited. Try zooming in!</Caption>
    </Container>
  );
};

export default TravelsPage;

const Caption = styled.div`
  width: 100%;
  color: #a1a1a1;

  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 20px 20px;

  @media (min-width: 800px) {
    padding: 20px 200px;
  }
`;

const Loading = styled.div`
  position: absolute;
  z-index: 2;

  font-size: 30px;
`;

const LoadingContainer = styled.div<{ $isLoading: boolean }>`
  width: 100%;
  opacity: ${(props) => (props.$isLoading ? '0.7' : '1')};
  pointer-events: ${(props) => props.$isLoading && 'none'};
`;

const Map = styled.div`
  height: 600px;
  width: 100%;

  border-radius: 10px;
  border: none;
`;

const MapContainer = styled.div<{ $isLoading: boolean }>`
  position: relative;
  width: 100%;

  cursor: ${(props) => props.$isLoading && 'progress'};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 60px;
  color: #039be5;
`;
