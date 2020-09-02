import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const TravelsPage = ({ db }) => {
  const [travels, setTravels] = useState({});
  const places = db.child('travel/places');

  useEffect(
    () => places.once('value').then((snapshot) => setTravels(snapshot.val())),
    []
  );

  // TODO: Add env specifications to use mapbox api key

  return <div />;
};

TravelsPage.propTypes = {
  db: PropTypes.instanceOf(firebase.database()).isRequired,
};

export default TravelsPage;
