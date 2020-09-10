import firebase from "firebase";

const firebaseConfig = {
    apiKey: "************",
    authDomain: "********.firebaseapp.com",
    databaseURL: "https://*********.firebaseio.com",
    projectId: "**********",
    storageBucket: "*********.appspot.com",
    messagingSenderId: "637698537946",
    appId: "*:*********:web:**************",
    measurementId: "*-*********"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth } ;
