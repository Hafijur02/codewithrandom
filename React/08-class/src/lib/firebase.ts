import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9oxz8jPgKA8cgm-32pgrcQqPtA8TaBc8",
  authDomain: "socialmedia-f661c.firebaseapp.com",
  projectId: "socialmedia-f661c",
  storageBucket: "socialmedia-f661c.appspot.com",
  messagingSenderId: "156833274450",
  appId: "1:156833274450:web:0a6fb3a1d6a1049fccdd8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const bucket = getStorage(app)