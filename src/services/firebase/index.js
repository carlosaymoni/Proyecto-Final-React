import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyCqWjxc5blUzJOSvyqFkQMsQwIux4mRaDQ",
  authDomain: "ecommerce-lego.firebaseapp.com",
  projectId: "ecommerce-lego",
  storageBucket: "ecommerce-lego.appspot.com",
  messagingSenderId: "736976945941",
  appId: "1:736976945941:web:5e8a16f2ba7b7f962b9f1c"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)