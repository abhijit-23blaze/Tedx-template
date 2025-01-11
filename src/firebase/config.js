import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase config object
  apiKey: "AIzaSyDN2bxzpoRJAMEy_fCWwuVWouD6N-8Jsho",
  authDomain: "tedx-aa06e.firebaseapp.com",
  projectId: "tedx-aa06e",
  storageBucket: "tedx-aa06e.firebasestorage.app",
  messagingSenderId: "257712079962",
  appId: "1:257712079962:web:57c1dc9191e03967ab4463",
  measurementId: "G-8KYJPPS7NY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);