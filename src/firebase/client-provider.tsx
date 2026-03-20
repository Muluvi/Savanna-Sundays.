
'use client';

import React, { useMemo } from 'react';
import { FirebaseProvider } from './provider';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener';
import { initializeFirebase } from './index';

/**
 * Client-side provider that initializes Firebase and wraps the app with necessary contexts.
 * Ensures Firebase is only initialized once on the client.
 */
export const FirebaseClientProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // Initialize Firebase only once on the client using useMemo
  const { firebaseApp, firestore, auth } = useMemo(() => initializeFirebase(), []);

  return (
    <FirebaseProvider firebaseApp={firebaseApp} firestore={firestore} auth={auth}>
      <FirebaseErrorListener />
      {children}
    </FirebaseProvider>
  );
};
