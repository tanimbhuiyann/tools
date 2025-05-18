// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjP7jc2mKE3YIfMlnI-jxvAVv60vswzTM",
  authDomain: "bm-tools-76d4d.firebaseapp.com",
  projectId: "bm-tools-76d4d",
  storageBucket: "bm-tools-76d4d.firebasestorage.app",
  messagingSenderId: "712442224556",
  appId: "1:712442224556:web:6924d8c61189b2467c6409",
  measurementId: "G-HHM9XLBV43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);