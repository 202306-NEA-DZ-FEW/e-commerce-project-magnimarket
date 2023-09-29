// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQX-p8E5RSeJlCpoSi4QJndU2o8k-mOqs",
  authDomain: "magnimarket-756c4.firebaseapp.com",
  projectId: "magnimarket-756c4",
  storageBucket: "magnimarket-756c4.appspot.com",
  messagingSenderId: "894982287307",
  appId: "1:894982287307:web:afd9c2e8c610cf8ac1104e",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
