// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "use your own api",
  authDomain: "use your own api",
  projectId: "use your own api",
  storageBucket:  "use your own api",
  messagingSenderId:  "use your own api",
  appId:  "use your own api",
  measurementId:  "use your own api",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);