import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-GV6-NcOu5UVIRXjh-ouEsQ1oG6ZazTE",
  authDomain: "portfolio-b91c8.firebaseapp.com",
  projectId: "portfolio-b91c8",
  storageBucket: "portfolio-b91c8.appspot.com",
  messagingSenderId: "555049032364",
  appId: "1:555049032364:web:71b6b51562ca7367dc5d09"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);