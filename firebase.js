import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCztdACVqSGySZ_Pen3-5o-T9TvuZfHOEg",
    authDomain: "netflix-clone-build-2389.firebaseapp.com",
    projectId: "netflix-clone-build-2389",
    storageBucket: "netflix-clone-build-2389.appspot.com",
    messagingSenderId: "396349024573",
    appId: "1:396349024573:web:984c7692c17cebce047d54",
    measurementId: "G-PC9XNTPDBV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;