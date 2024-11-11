// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE4vvk7Ruj9X5sQs2RFbAYwoOSxxbWGKc",
  authDomain: "mujeres-escrituras.firebaseapp.com",
  projectId: "mujeres-escrituras",
  storageBucket: "mujeres-escrituras.firebasestorage.app",
  messagingSenderId: "167512144314",
  appId: "1:167512144314:web:174d03e256d7fbe1f08583",
  measurementId: "G-Q4K6BLRVMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);