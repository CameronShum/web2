import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import mapbox from 'mapbox-gl';

import { SectionDivider } from 'components';

const ZOOM_THRESHOLD = 3;

mapbox.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const TravelsPage = ({ db }) => {
  const mapContainerRef = useRef(null);
  const places = db.child('travel/places');

  useEffect(() => {
    const map = new mapbox.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/camshum/ckelpfv9h06sh19lj50a6u7us',
      center: [0, 20],
      zoom: 1,
    });

    async function loadCountries() {
      const travels = (await places.once('value')).val();
      highlightMap(map, Object.keys(travels));
    }

    loadCountries();

    // Disable rotation
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const highlightMap = (map, countries) => {
    // Source: https://docs.mapbox.com/mapbox-gl-js/example/geojson-layer-in-stack/
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol') {
        firstSymbolId = layers[i].id;
        break;
      }
    }

    map.on('load', () => {
      map.addLayer(
        {
          id: 'countries',
          source: {
            type: 'vector',
            url: 'mapbox://camshum.0f58vqqm',
          },
          'source-layer': 'ne_10m_admin_0_countries-ak1gzi',
          type: 'fill',
          layout: {
            // make layer visible by default
            visibility: 'visible',
          },
          paint: {
            'fill-color': '#F44336',
            'fill-opacity': 0.4,
          },
        },
        firstSymbolId
      );

      map.setFilter('countries', ['in', 'ADM0_A3_IS'].concat(countries));

      map.on('zoom', () => {
        if (map.getZoom() > ZOOM_THRESHOLD) {
          map.setLayoutProperty('countries', 'visibility', 'none');
        } else {
          map.setLayoutProperty('countries', 'visibility', 'visible');
        }
      });
    });
  };

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
  border: none;
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
