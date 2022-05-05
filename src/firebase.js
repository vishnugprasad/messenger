// import firebase from "firebase";

import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZeCOQ54ukvDVd_yWiFAb1Iqh8NTAIeTE",
    authDomain: "messagingapp-10126.firebaseapp.com",
    projectId: "messagingapp-10126",
    storageBucket: "messagingapp-10126.appspot.com",
    messagingSenderId: "514034630",
    appId: "1:514034630:web:8456ae961835e266b940c7",
    measurementId: "G-7KE631DGC5"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp);
  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider(); // for google authentication

  // export {auth,provider};
  export default db;
   