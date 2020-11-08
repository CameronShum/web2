import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dotenv from 'dotenv';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import mapbox from 'mapbox-gl';
import { SectionDivider } from 'components';

const CITY_ZOOM = 6;
const SUBDIVISION_ZOOM = 2;
dotenv.config();
mapbox.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const TravelsPage = ({ db }) => {
  const [loading, setLoading] = useState(false);
  const mapContainerRef = useRef(null);
  const dbLocations = db.child('travel/locations');

  useEffect(() => {
    const map = new mapbox.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/camshum/ckelpfv9h06sh19lj50a6u7us',
      center: [0, 20],
      zoom: 1,
    });

    async function loadOverlay() {
      const locations = (await dbLocations.once('value')).val();
      const countries = locations.country;
      const regions = locations.region;
      const places = locations.place;

      setLoading(true);
      const countryGeojson = await Promise.all(
        Object.keys(countries).map(async (id) => {
          const res = await axios.get(
            'https://nominatim.openstreetmap.org/search.php',
            {
              params: {
                q: countries[id].name,
                format: 'geojson',
                polygon_geojson: 1,
                polygon_threshold: 0.004,
              },
            }
          );

          if (res.status === 200) {
            return {
              name: countries[id].name,
              geojson: res.data.features[0].geometry,
            };
          }
        })
      );

      countryGeojson.forEach((data) =>
        addLocation(map, data.name, data.geojson)
      );

      setLoading(false);

      // map.on('zoom', () => {
      //   const zoom = map.getZoom();
      //   if (zoom > CITY_ZOOM) {
      //     map.setLayoutProperty('city', 'visibility', 'visible');
      //     map.setLayoutProperty('subdivision', 'visibility', 'none');
      //     map.setLayoutProperty('country', 'visibility', 'none');
      //   } else if (zoom > SUBDIVISION_ZOOM) {
      //     map.setLayoutProperty('city', 'visibility', 'none');
      //     map.setLayoutProperty('subdivision', 'visibility', 'visible');
      //     map.setLayoutProperty('country', 'visibility', 'none');
      //   } else {
      //     map.setLayoutProperty('city', 'visibility', 'none');
      //     map.setLayoutProperty('subdivision', 'visibility', 'none');
      //     map.setLayoutProperty('country', 'visibility', 'visible');
      //   }
      // });
    }

    loadOverlay();

    // Disable rotation
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const addLocation = (map, type, geometry) => {
    const layers = map.getStyle().layers;
    let firstSymbolId = '';
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol') {
        firstSymbolId = layers[i].id;
        break;
      }
    }

    map.addSource(type, {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: geometry,
      },
    });

    map.addLayer(
      {
        id: type,
        type: 'fill',
        source: type,
        layout: {},
        paint: {
          'fill-color': '#F44336',
          'fill-opacity': 0.4,
        },
      },
      firstSymbolId
    );
  };

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
  opacity: ${(props) => (props.isLoading ? '0.7' : '1')};
  pointer-events: ${(props) => props.isLoading && 'none'};
`;

const Map = styled.div`
  height: 600px;
  width: 1200px;

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
