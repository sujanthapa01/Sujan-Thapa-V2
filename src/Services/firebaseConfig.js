// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqbo_d_pEloVpeNwhTg7GF2iEzppdjg9E",
  authDomain: "sujanthapav2.firebaseapp.com",
  projectId: "sujanthapav2",
  storageBucket: "sujanthapav2.appspot.com",
  messagingSenderId: "727424049634",
  appId: "1:727424049634:web:b88f3a7ece34c0437759bb",
  measurementId: "G-WNTENCG8TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth instance
export const auth = getAuth(app);
