// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7FH5vS7j2wvN4DJOU1y3dkfLv6JISyPE",
  authDomain: "nyoba-web-kelas.firebaseapp.com",
  projectId: "nyoba-web-kelas",
  storageBucket: "nyoba-web-kelas.appspot.com",
  messagingSenderId: "95717200064",
  appId: "1:95717200064:web:920a57dc0280620e2fdd25",
  measurementId: "G-VGWE5KPP7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();