// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjzWpufCY7Ue2hrZ926E9slRtc1w7wa80",
  authDomain: "fir-fe4a8.firebaseapp.com",
  projectId: "fir-fe4a8",
  storageBucket: "fir-fe4a8.firebasestorage.app",
  messagingSenderId: "548094243562",
  appId: "1:548094243562:web:c9de2fec0043a42e301d93",
  measurementId: "G-SET6W4NKR1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
