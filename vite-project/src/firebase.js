import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { useAuthState } from 'react-firebase-hooks/auth';

const app = initializeApp({
    apiKey: "AIzaSyDDpDHRqZKsXAENAL4Zh3Imb5Th_F7vndU",
    authDomain: "masteroftailoring-53370.firebaseapp.com",
    projectId: "masteroftailoring-53370",
    storageBucket: "masteroftailoring-53370.appspot.com",
    messagingSenderId: "720844154178",
    appId: "1:720844154178:web:dd1c98aa19d50e603994db",
    measurementId: "G-XFV5FKP3XE"
  });
  export const auth = getAuth();
  export default app;
 