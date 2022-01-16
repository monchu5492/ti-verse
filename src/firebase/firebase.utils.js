import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//
const config = {
  apiKey: "AIzaSyCOUeaU1efB5CQfleoKRw34-13R9URp0to",
  authDomain: "ti-verse.firebaseapp.com",
  projectId: "ti-verse",
  storageBucket: "ti-verse.appspot.com",
  messagingSenderId: "601603738801",
  appId: "1:601603738801:web:5bb99bda368e0c1935a690",
  measurementId: "G-1SCKV8Y9B0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
