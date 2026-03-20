'use client';

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';
import { firebaseConfig } from './config';

let analytics: Analytics | null = null;

const isPlaceholderKey = (key: string) => !key || key === 'AIzaSy_demo_key';

/**
 * Initializes Firebase services with safety guards for prototype environments.
 * Prevents crashes caused by placeholder API keys.
 */
export function initializeFirebase() {
  const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const firestore = getFirestore(firebaseApp);
  
  // Auth is initialized but remains optional and guarded
  let auth: Auth | null = null;
  try {
    if (!isPlaceholderKey(firebaseConfig.apiKey)) {
      auth = getAuth(firebaseApp);
    }
  } catch (e) {
    console.warn("Firebase Auth skipped: Invalid or placeholder API key.");
  }

  // Initialize Analytics only on the client side and only if a valid API key exists
  if (typeof window !== 'undefined' && !isPlaceholderKey(firebaseConfig.apiKey)) {
    isSupported().then((supported) => {
      if (supported) {
        try {
          analytics = getAnalytics(firebaseApp);
        } catch (e) {
          console.warn("Firebase Analytics skipped: Invalid or placeholder API key.");
        }
      }
    });
  }

  return { firebaseApp, firestore, auth };
}

/**
 * Safe accessor for the Analytics instance.
 */
export const getAnalyticsInstance = () => analytics;

export * from './provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './auth/use-user';

// Helper to get instances for non-hook usage
export const getFirebaseApp = () => {
  const apps = getApps();
  return apps.length > 0 ? apps[0] : initializeApp(firebaseConfig);
};
