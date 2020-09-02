import React from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from 'constants/firebase';

firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref('root');

const FirebaseProvider = ({ children }) => <>{children(db)}</>;

FirebaseProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default FirebaseProvider;
