import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dotenv from 'dotenv';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import mapbox from 'mapbox-gl';
import { SectionDivider } from 'components';

const SUBDIVISION_ZOOM = 5;
const CITY_ZOOM = 8;
const MAX_ZOOM = 22;
dotenv.config();
mapbox.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

// TODO: Simplify this logic into single tree traversal function
const getRegions = (countries, regions) => {
  const regionsArr = [];
  Object.keys(countries).map(async (id) => {
    const { name, children } = countries[id];
    (children || []).map((id) => {
      if (id[0] === '1') {
        regionsArr.push(`${regions[id].name} ${name}`);
      }
    });
  });
  return regionsArr;
};

const getCities = (countries, regions, places) => {
  const cities = [];
  Object.keys(countries).map(async (id) => {
    const { name, children } = countries[id];
    (children || []).map((id) => {
      if (id[0] === '1') {
        const regionName = regions[id].name;
        const regionChildren = regions[id].children;
        (regionChildren || []).map((id) => {
          cities.push(`${places[id].name} ${regionName} ${name}`);
        });
      } else if (id[0] === '2') {
        cities.push(`${places[id].name} ${name}`);
      }
    });

    if ((children || []).length === 0) {
      cities.push(name);
    }
  });

  return cities;
};

// Use for search in the future

// const getGeojson = async (searchArr) => {
//   const geojson = await Promise.all(
//     searchArr.map(async (value) => {
//       const res = await axios.get(
//         'https://nominatim.openstreetmap.org/search',
//         {
//           params: {
//             q: value,
//             format: 'geojson',
//             polygon_geojson: 1,
//             polygon_threshold: 0.004,
//             limit: 1
//           },
//         }
//       );

//       if (res.status === 200) {
//         let index = 0;
//         let feature = res.data.features[index];

//         while (feature && feature.properties.category !== 'boundary') {
//           index += 1;
//           feature = res.data.features[index];
//         }

//         return {
//           name: value,
//           geojson: feature.geometry,
//         };
//       } else {
//         return;
//       }
//     })
//   );
//   return geojson;
// };

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
      setLoading(true);
      const locations = (await dbLocations.once('value')).val();
      const countries = locations.country;
      const regions = locations.region;
      const places = locations.place;

      Object.keys(countries).forEach((id) =>
        addLocation(
          map,
          countries[id].name,
          SUBDIVISION_ZOOM,
          countries[id].geojson
        )
      );
      setLoading(false);

      Object.keys(regions).forEach((id) =>
        addLocation(map, regions[id].name, CITY_ZOOM, regions[id].geojson)
      );

      Object.keys(places).forEach((id) =>
        addLocation(map, places[id].name, MAX_ZOOM, places[id].geojson)
      );
      setLoading(false);
    }

    loadOverlay();

    // Disable rotation
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const addLocation = (map, sourceId, zoomType, geometry) => {
    const layers = map.getStyle().layers;
    let firstSymbolId = '';
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol') {
        firstSymbolId = layers[i].id;
        break;
      }
    }

    map.addSource(sourceId, {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: geometry,
      },
    });

    map.addLayer(
      {
        id: sourceId,
        type: 'fill',
        source: sourceId,
        layout: {},
        paint: {
          'fill-color': '#F44336',
          'fill-opacity': 0.2,
        },
      },
      firstSymbolId
    );

    map.on('zoom', () => {
      const zoom = map.getZoom();
      if (zoom > zoomType) {
        map.setLayoutProperty(sourceId, 'visibility', 'none');
      } else {
        map.setLayoutProperty(sourceId, 'visibility', 'visible');
      }
    });
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
