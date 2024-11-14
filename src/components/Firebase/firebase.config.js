// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcczvfpTPBO_9chFt2PsebVqoh2G4MvpI",
  authDomain: "gon-news-auth.firebaseapp.com",
  projectId: "gon-news-auth",
  storageBucket: "gon-news-auth.firebasestorage.app",
  messagingSenderId: "996907044555",
  appId: "1:996907044555:web:f835318ddbd7d718d4154e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
