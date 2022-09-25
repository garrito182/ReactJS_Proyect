import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDy8TGsVPynnyVL_cF6-R-DWhnFUvbu-4c",
    authDomain: "reactjs-proyect.firebaseapp.com",
    projectId: "reactjs-proyect",
    storageBucket: "reactjs-proyect.appspot.com",
    messagingSenderId: "743056552381",
    appId: "1:743056552381:web:f1c88b9fcce98acd4be2d4",
    measurementId: "G-MJB8WM4F02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);