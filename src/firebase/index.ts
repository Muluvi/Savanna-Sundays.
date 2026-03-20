
'use client';

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';
import { firebaseConfig } from './config';

let analytics: Analytics | null = null;

export function initializeFirebase() {
  const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  // Initialize Analytics only on the client side
  if (typeof window !== 'undefined') {
    isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(firebaseApp);
      }
    });
  }

  return { firebaseApp, firestore, auth, analytics };
}

export * from './provider';
export * from './auth/use-user';
export * from './firestore/use-collection';
export * from './firestore/use-doc';

// Helper to get instances for non-hook usage
export const getFirebaseApp = () => {
  const apps = getApps();
  return apps.length > 0 ? apps[0] : initializeApp(firebaseConfig);
};
