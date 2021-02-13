import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBM1hbqWJ99FhIPav6Wr6dBDwYF9srr7g0",
    authDomain: "sbolsec-marioplan.firebaseapp.com",
    projectId: "sbolsec-marioplan",
    storageBucket: "sbolsec-marioplan.appspot.com",
    messagingSenderId: "81984103661",
    appId: "1:81984103661:web:1d1e80754180deca7fd8e4",
    measurementId: "G-STMWM5SC3W"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;