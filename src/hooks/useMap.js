import { useState, useEffect } from 'react';
import * as dotenv from 'dotenv';
import mapbox from 'mapbox-gl';

dotenv.config();
mapbox.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const SUBDIVISION_ZOOM = 5;
const CITY_ZOOM = 8;
const MAX_ZOOM = 22;

const useMap = (mapContainerRef, dbLocations) => {
  const [loading, setLoading] = useState(false);

  const addLocation = (map, sourceId, zoomType, geometry) => {
    const { layers } = map.getStyle();
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
        geometry,
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
      firstSymbolId,
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

  useEffect(() => {
    const map = new mapbox.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/camshum/ckelpfv9h06sh19lj50a6u7us',
      center: [0, 40],
      zoom: 1.5,
    });

    async function loadOverlay() {
      setLoading(true);
      const locations = (await dbLocations.once('value')).val();
      const countries = locations.country;
      const regions = locations.region;
      const places = locations.place;

      Object.keys(countries).forEach((id) => addLocation(
        map,
        countries[id].name,
        SUBDIVISION_ZOOM,
        countries[id].geojson,
      ));
      setLoading(false);

      Object.keys(regions).forEach((id) =>
         addLocation(map, regions[id].name, CITY_ZOOM, regions[id].geojson));

      Object.keys(places).forEach((id) => 
        addLocation(map, places[id].name, MAX_ZOOM, places[id].geojson));
      setLoading(false);
    }

    loadOverlay();

    // Disable rotation
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return loading;
};

export default useMap;

// TODO: Simplify this logic into single tree traversal function
// const getRegions = (countries, regions) => {
//   const regionsArr = [];
//   Object.keys(countries).map(async (id) => {
//     const { name, children } = countries[id];
//     (children || []).map((id) => {
//       if (id[0] === '1') {
//         regionsArr.push(`${regions[id].name} ${name}`);
//       }
//     });
//   });
//   return regionsArr;
// };

// const getCities = (countries, regions, places) => {
//   const cities = [];
//   Object.keys(countries).map(async (id) => {
//     const { name, children } = countries[id];
//     (children || []).map((id) => {
//       if (id[0] === '1') {
//         const regionName = regions[id].name;
//         const regionChildren = regions[id].children;
//         (regionChildren || []).map((id) => {
//           cities.push(`${places[id].name} ${regionName} ${name}`);
//         });
//       } else if (id[0] === '2') {
//         cities.push(`${places[id].name} ${name}`);
//       }
//     });

//     if ((children || []).length === 0) {
//       cities.push(name);
//     }
//   });

//   return cities;
// };

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
