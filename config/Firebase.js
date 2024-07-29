// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB54yrvb2OhnGAU87Nz75PBzX0o_PYJJLA",
  authDomain: "react-native-login-6a1e4.firebaseapp.com",
  projectId: "react-native-login-6a1e4",
  storageBucket: "react-native-login-6a1e4.appspot.com",
  messagingSenderId: "234437134489",
  appId: "1:234437134489:web:e000e38f727839cc9e5008",
  measurementId: "G-755R5G38N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log('Firebase Auth initialized:', auth);

export {app, auth};


