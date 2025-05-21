// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMsmIFyC8bZyfZXoc3G2JwtczvUPmRDgM",
  authDomain: "freelancer-marketplase.firebaseapp.com",
  projectId: "freelancer-marketplase",
  storageBucket: "freelancer-marketplase.firebasestorage.app",
  messagingSenderId: "27129076590",
  appId: "1:27129076590:web:68b92b9a916c6157d33f7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
  export const auth = getAuth(app);