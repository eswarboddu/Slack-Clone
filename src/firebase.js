import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQQxASQcTbYugvR3UfmfRfmpYDA57MZQw",
    authDomain: "slack-project-87217.firebaseapp.com",
    projectId: "slack-project-87217",
    storageBucket: "slack-project-87217.appspot.com",
    messagingSenderId: "840457749576",
    appId: "1:840457749576:web:bd66ed387bf1470ad1447d",
    measurementId: "G-HV1R8SHGWN"
  };

//initialize firebase app
const firebaseapp = firebase.initializeApp(firebaseConfig);

//initialize db
const db = firebaseapp.firestore(); //firestore is real time db

//export the db
export default db;
