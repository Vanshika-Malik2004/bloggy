// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNOBqTXofChBZ1EFbkbk9oVtb1a1YnLDs",
  authDomain: "bloggy-da9af.firebaseapp.com",
  projectId: "bloggy-da9af",
  storageBucket: "bloggy-da9af.appspot.com",
  messagingSenderId: "973260860839",
  appId: "1:973260860839:web:d1572e49d4b28f8c5e1a82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
