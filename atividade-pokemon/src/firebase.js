
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmBnG_8hHExm8kcY1-Ma9lkL80PduNSGI",
  authDomain: "pokemon-extra.firebaseapp.com",
  projectId: "pokemon-extra",
  storageBucket: "pokemon-extra.firebasestorage.app",
  messagingSenderId: "958560674056",
  appId: "1:958560674056:web:c8d50e8c2a7ec0c19c0cbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };