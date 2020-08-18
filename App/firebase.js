import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDfzOGPBhe0w2vGhWZw6YSAzZGqq-3A__w",
    authDomain: "chat-app-bb5d5.firebaseapp.com",
    databaseURL: "https://chat-app-bb5d5.firebaseio.com",
    projectId: "chat-app-bb5d5",
    storageBucket: "chat-app-bb5d5.appspot.com",
    messagingSenderId: "1037746554794",
    appId: "1:1037746554794:web:c959b815849aaf2b614dd3",
    measurementId: "G-FLDV0E2CK9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database =  firebaseApp.firestore();
const authorization = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {database, authorization, provider};