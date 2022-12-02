// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCz3Tamyyw5rKq1RbDpPHvPqKXrOh0oYAA",
  authDomain: "wine-supply-33aee.firebaseapp.com",
  projectId: "wine-supply-33aee",
  storageBucket: "wine-supply-33aee.appspot.com",
  messagingSenderId: "873792538748",
  appId: "1:873792538748:web:8f21275d4c31dbb74521f9",
  measurementId: "G-7RPQF4QF5X",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// firebase.auth().useDeviceLanguage();
// const analytics = getAnalytics(app);
