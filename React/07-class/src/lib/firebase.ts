import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9Vq_bha9HALvttqCvSiL3IjED2UgMGwQ",
  authDomain: "expensetracker-b0375.firebaseapp.com",
  projectId: "expensetracker-b0375",
  storageBucket: "expensetracker-b0375.appspot.com",
  messagingSenderId: "785448839275",
  appId: "1:785448839275:web:450743874dfedcfc3b692e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
