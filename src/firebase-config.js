// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy6bIaVncDYy_xOKJ0RJhqOxO5kZrWzgs",
  authDomain: "todo-list-project-7d862.firebaseapp.com",
  projectId: "todo-list-project-7d862",
  storageBucket: "todo-list-project-7d862.appspot.com",
  messagingSenderId: "1000947795650",
  appId: "1:1000947795650:web:39ca4fe5b9a5d6ec3c5d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);