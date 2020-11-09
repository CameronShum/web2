import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { SectionDivider } from 'components';
import useMap from 'hooks/useMap';

const TravelsPage = ({ db }) => {
  const mapContainerRef = useRef(null);
  const dbLocations = db.child('travel/locations');
  const loading = useMap(mapContainerRef, dbLocations);

  return (
    <Container id="Travels">
      <SectionDivider sectionName="Travels" />
      <Title>Travels</Title>
      <MapContainer isLoading={loading}>
        {loading && <Loading>Loading...</Loading>}
        <LoadingContainer isLoading={loading}>
          <Map ref={mapContainerRef} />
        </LoadingContainer>
      </MapContainer>
    </Container>
  );
};

TravelsPage.propTypes = {
  db: PropTypes.instanceOf(firebase.database()).isRequired,
};

export default TravelsPage;

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

const LoadingContainer = styled.div`
  width: 100%;
  opacity: ${(props) => (props.isLoading ? '0.7' : '1')};
  pointer-events: ${(props) => props.isLoading && 'none'};
`;

const Map = styled.div`
  height: 600px;
  width: 100%;

  border-radius: 10px;
  border: none;
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;

  cursor: ${(props) => props.isLoading && 'progress'};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 60px;
  color: #039be5;
  margin-left: 10px;
`;
