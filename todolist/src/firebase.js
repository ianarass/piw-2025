import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'; // Para o Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyBYduHEtooowzuoHawfU6kdx1WpAoHJp9E",
  authDomain: "todolist-2416e.firebaseapp.com",
  projectId: "todolist-2416e",
  storageBucket: "todolist-2416e.firebasestorage.app",
  messagingSenderId: "1071058100417",
  appId: "1:1071058100417:web:875c759e4a0804b3e13440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Pega a referência para o nosso banco de dados
const db = getDatabase(app);

export { db };
