import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBur5M61oxayyeXsrW0ExAmQKXMZP_GbNk",
    authDomain: "clone-279e9.firebaseapp.com",
    projectId: "clone-279e9",
    storageBucket: "clone-279e9.appspot.com",
    messagingSenderId: "77091826603",
    appId: "1:77091826603:web:a6f82bf21cbfaae3a9c0ee",
    measurementId: "G-586QLWGE3G",
});

const db = firebaseApp.firestore();
const auth= firebase.auth();

export {db, auth};