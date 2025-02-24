// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRArfrn9pskeuOQtqDH8apzIwSvtzi2eA",
  authDomain: "terhal-suitcase.firebaseapp.com",
  projectId: "terhal-suitcase",
  storageBucket: "terhal-suitcase.firebasestorage.app",
  messagingSenderId: "429343417777",
  appId: "1:429343417777:web:d44baf0c0ac93f2a1b4990",
  measurementId: "G-4CT32D4D6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };