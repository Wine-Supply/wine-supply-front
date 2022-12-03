// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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
export const storage = getStorage();

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

// Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.jpg');

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL});
  
  setLoading(false);
  alert("Uploaded file");
}