// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuY7UIrwjS09xn1prU9RNxFDPuJ2LNpoc",
  authDomain: "react-course-21ba1.firebaseapp.com",
  projectId: "react-course-21ba1",
  storageBucket: "react-course-21ba1.appspot.com",
  messagingSenderId: "313075358205",
  appId: "1:313075358205:web:0363af2cbadc962d646194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);