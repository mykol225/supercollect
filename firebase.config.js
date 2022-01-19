import firebase from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEV8iZdXoXc1wbqb5qQ9rCGkoxyA_J-rM",
  authDomain: "supercollect-72c3a.firebaseapp.com",
  projectId: "supercollect-72c3a",
  storageBucket: "supercollect-72c3a.appspot.com",
  messagingSenderId: "852012790320",
  appId: "1:852012790320:web:0f6b8cb5eff0e415b5b3f5",
  measurementId: "G-QLZNC80Q1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.filestore()

export default db;