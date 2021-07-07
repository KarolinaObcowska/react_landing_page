import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyATtRFjzwzchRDdacaN1Lz0rNV-6hfTmVU",
    authDomain: "react-landing-page-54238.firebaseapp.com",
    databaseURL: "https://react-landing-page-54238-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-landing-page-54238",
    storageBucket: "react-landing-page-54238.appspot.com",
    messagingSenderId: "580236870786",
    appId: "1:580236870786:web:0e9746198a5996d3bca09b",
    measurementId: "G-MK1HLQ2GZS"
  };
  // Initialize Firebase
  var firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebaseApp.firestore();

  export { db };