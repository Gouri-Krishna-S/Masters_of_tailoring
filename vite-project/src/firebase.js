import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { useAuthState } from 'react-firebase-hooks/auth';

const app = initializeApp({
    apiKey: "AIzaSyDBgNwcXHZl-4byjqjDZxgcg8JY91_bG8Y",
    authDomain: "noooo-f4358.firebaseapp.com",
    projectId: "noooo-f4358",
    storageBucket: "noooo-f4358.appspot.com",
    messagingSenderId: "659729609465",
    appId: "1:659729609465:web:df2f500f49f9063bbf6828",
    measurementId: "G-ZF3N13955R"
  });
  export const auth = getAuth();
  export default app;
 