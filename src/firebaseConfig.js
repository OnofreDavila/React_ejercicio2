// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj0QXYh7DCdcMQpwOBUdPyfg6CIcAqXRc",
  authDomain: "reactfirebase-2a3ca.firebaseapp.com",
  projectId: "reactfirebase-2a3ca",
  storageBucket: "reactfirebase-2a3ca.firebasestorage.app",
  messagingSenderId: "559338654545",
  appId: "1:559338654545:web:24998f087381858e89e170",
  measurementId: "G-Y9R7564LVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializacion de firestore
const firestore = getFirestore(app);

export { firestore, collection, getDocs, doc, deleteDoc };