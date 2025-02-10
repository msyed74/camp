// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyA5nqjpMrRnoQXwMth50YRvkN2QOXdvM",
  authDomain: "camp-69c15.firebaseapp.com",
  projectId: "camp-69c15",
  storageBucket: "camp-69c15.firebasestorage.app",
  messagingSenderId: "557735113830",
  appId: "1:557735113830:web:2c2ab8c7b9d31abb0429a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export {auth ,db};
