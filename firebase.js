import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBnfdbFhjSmQoQK0NO7sGrb9kCi2NTy5Fo",
    authDomain: "estore-184f1.firebaseapp.com",
    projectId: "estore-184f1",
    storageBucket: "estore-184f1.appspot.com",
    messagingSenderId: "909712154611",
    appId: "1:909712154611:web:c70a6a142c263de7f17c86",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}


// const db = app.firestore();
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db, firebase };