import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyCdofrCk23TNIG3kmFkQ8dsZdecAiYWDJA",
    authDomain: "react-redux-firebase-46c4d.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-46c4d.firebaseio.com",
    projectId: "react-redux-firebase-46c4d",
    storageBucket: "react-redux-firebase-46c4d.appspot.com",
    messagingSenderId: "293904618646",
    appId: "1:293904618646:web:90b772b536715948"
  };

// Initialize Firebase with a default Firebase project
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;