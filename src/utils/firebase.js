// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore"
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
export const db = initializeApp(firebaseConfig);
export default firebase


