// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJI-ao6idNe4H4y_DcY7buMlTYlziJw4s",
  authDomain: "reviv-93958.firebaseapp.com",
  projectId: "reviv-93958",
  storageBucket: "reviv-93958.appspot.com",
  messagingSenderId: "164852211648",
  appId: "1:164852211648:web:4e478337872e7006b3f225",
  measurementId: "G-ETTEV0MFRT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize other Firebase services if needed
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
