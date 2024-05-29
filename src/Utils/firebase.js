// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDpg-YjwSzacOkKVg0uP_F31xp3mRZteQ",
  authDomain: "netflixgpt-c78d0.firebaseapp.com",
  projectId: "netflixgpt-c78d0",
  storageBucket: "netflixgpt-c78d0.appspot.com",
  messagingSenderId: "237039404366",
  appId: "1:237039404366:web:0b277fca281fb42fea8a1f",
  measurementId: "G-YN50V262CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth=getAuth();