import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvcAExjtNCiV2JmcI1VOCrtorug0nFUcA",
  authDomain: "pixelpulse-ba99b.firebaseapp.com",
  projectId: "pixelpulse-ba99b",
  storageBucket: "pixelpulse-ba99b.firebasestorage.app",
  messagingSenderId: "638102653894",
  appId: "1:638102653894:web:dd1a4fa34577d8ed0a00c7",
  measurementId: "G-GC1CH8SJ75"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);