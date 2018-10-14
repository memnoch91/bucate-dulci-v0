import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAzNVrta8bY2Jv13PDbN2Z_qoRSsvc9-P4",
    authDomain: "bucate-dulci.firebaseapp.com",
    databaseURL: "https://bucate-dulci.firebaseio.com",
    projectId: "bucate-dulci",
    storageBucket: "bucate-dulci.appspot.com",
    messagingSenderId: "364087614825"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});
// firebase.storage().settings({timestampsInSnapshots: true});

export default firebase;
