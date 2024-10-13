import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

const  API_BASE_URL = import.meta.env.VITE_API_KEY;
const  AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const  PROJECTID = import.meta.env.VITE_PROJECTID;
const  STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const  MESSAGING_SENDERID = import.meta.env.VITE_MESSAGING_SENDERID;
const APPID = import.meta.env.VITE_APPID;
const MEASUREMENTID = import.meta.env.VITE_MEASUREMENTID;



const app = initializeApp({
    apiKey: API_BASE_URL,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECTID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDERID,
    appId: APPID,
    measurementId: MEASUREMENTID
  });

export const auth = getAuth();

export default app;
export const db = getFirestore(app);
export const auth = getAuth();
export default app;