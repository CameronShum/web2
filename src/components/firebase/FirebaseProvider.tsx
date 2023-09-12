import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from 'constants/firebase';

firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref('root');

const FirebaseProvider = ({
  children,
}: {
  children: (db: firebase.database.Reference) => React.JSX.Element;
}) => <>{children(db)}</>;

export default FirebaseProvider;
