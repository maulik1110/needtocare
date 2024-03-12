// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8uRQ8ENAMNcz-FeZ9H4z-yCEhBpYmIew",
  authDomain: "vite-contact-app-1de2d.firebaseapp.com",
  projectId: "vite-contact-app-1de2d",
  storageBucket: "vite-contact-app-1de2d.appspot.com",
  messagingSenderId: "327994939941",
  appId: "1:327994939941:web:c7a42c132958d0d514bdcc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)