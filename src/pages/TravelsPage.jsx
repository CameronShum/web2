import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import mapbox from 'mapbox-gl';

import { SectionDivider } from 'components';

mapbox.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const TravelsPage = ({ db }) => {
  const [travels, setTravels] = useState({});
  const mapContainerRef = useRef(null);
  const places = db.child('travel/places');

  useEffect(() => {
    places.once('value').then((snapshot) => setTravels(snapshot.val()));
    const map = new mapbox.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/camshum/ckelpfv9h06sh19lj50a6u7us',
      center: [0, 20],
      zoom: 1,
    });

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container id="Travels">
      <SectionDivider sectionName="Travels" />
      <Title>Travels</Title>
      <MapContainer>
        <Map ref={mapContainerRef} />
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

const Map = styled.div`
  height: 600px;
  width: 1200px;

  border-radius: 10px;
`;

const MapContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 60px;
  color: #039be5;
  margin-left: 10px;
`;
