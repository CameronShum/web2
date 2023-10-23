import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from 'constants/firebase';
import { getDatabase, get, ref } from 'firebase/database';
import { Geometry } from 'geojson';

const app = firebase.initializeApp(firebaseConfig);

const db = getDatabase(app);

interface LocationEntry {
  name: string;
  type: 'country' | 'place' | 'region';
  children?: string[];
  geojson: Geometry;
}
export interface ProcessedDatabase {
  country: { [s: string]: LocationEntry };
  place: { [s: string]: LocationEntry };
  region: { [s: string]: LocationEntry };
}

const FirebaseProvider = ({
  children,
}: {
  children: (db?: ProcessedDatabase) => React.ReactNode;
}) => {
  const [database, setDatabase] = useState<ProcessedDatabase | undefined>(
    undefined,
  );

  useEffect(() => {
    let active = true;
    load();
    return () => {
      active = false;
    };

    async function load() {
      const res = await get(ref(db, 'root/travel/locations'));
      if (!active) {
        return;
      }
      setDatabase(res.val());
    }
  }, []);

  return <>{children(database)}</>;
};

export default FirebaseProvider;
