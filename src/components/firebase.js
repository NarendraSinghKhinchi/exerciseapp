// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth ,signOut ,signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // for authentication
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API ,
  authDomain: "fitnessworld-ee27b.firebaseapp.com",
  projectId: "fitnessworld-ee27b",
  storageBucket: "fitnessworld-ee27b.appspot.com",
  messagingSenderId: "19114513426",
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth ,signOut ,signInWithPopup ,provider} ;