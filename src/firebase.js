import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAtHiY1F1ve__nBF3U4pU3devL4_0ETd7M",
    authDomain: "clone-e75af.firebaseapp.com",
    databaseURL: "https://clone-e75af.firebaseio.com",
    projectId: "clone-e75af",
    storageBucket: "clone-e75af.appspot.com",
    messagingSenderId: "637698537946",
    appId: "1:637698537946:web:e22c5719137ccfd26e68e3",
    measurementId: "G-LELRN0EP9S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth } ;