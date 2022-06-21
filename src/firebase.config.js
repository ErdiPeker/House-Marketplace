import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHSX5q8qV6OHsdrPjHaFKPqr-LWnwwA0Q",
  authDomain: "house-marketplace-app-ebde4.firebaseapp.com",
  projectId: "house-marketplace-app-ebde4",
  storageBucket: "house-marketplace-app-ebde4.appspot.com",
  messagingSenderId: "625106946966",
  appId: "1:625106946966:web:04260227da92d0ed986bb7",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
