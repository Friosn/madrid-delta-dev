// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyA37M415sYtBfEOuirZssi7wpOees6MbOM',
  authDomain: 'pruebas-d2e03.firebaseapp.com',
  projectId: 'pruebas-d2e03',
  storageBucket: 'pruebas-d2e03.appspot.com',
  messagingSenderId: '227258748648',
  appId: '1:227258748648:web:00373be011386cb844035d',
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
