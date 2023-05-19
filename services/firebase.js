// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoUvIG0FGy8mmXUIWLnUkUH-f4cv26THg",
  authDomain: "academico-62b8d.firebaseapp.com",
  projectId: "academico-62b8d",
  storageBucket: "academico-62b8d.appspot.com",
  messagingSenderId: "934897678032",
  appId: "1:934897678032:web:85d6acc2a8c4acc57b90d5",
  measurementId: "G-2YXQXRTT23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);