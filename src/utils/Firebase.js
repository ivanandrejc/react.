// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2qTSabTrwjUWWMRjYL3z5F9b_GNWGezw",
  authDomain: "test-9615b.firebaseapp.com",
  projectId: "test-9615b",
  storageBucket: "test-9615b.appspot.com",
  messagingSenderId: "541217979738",
  appId: "1:541217979738:web:a14d8d5c70e93c7b19c763",
  measurementId: "G-3214CTNWKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);