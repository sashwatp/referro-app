// src/firebase-config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBNmzBBIoIJuDEvfN_VZiXtr2TSYa2Wb3A",
    authDomain: "referro-development.firebaseapp.com",
    projectId: "referro-development",
    storageBucket: "referro-development.appspot.com",
    messagingSenderId: "908822341590",
    appId: "1:908822341590:web:725edb069d1e62bf2ae677",
    measurementId: "G-HD8PXXFTGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
