import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//
const config = {
  apiKey: "AIzaSyD78MDf_GiDO1gQHTfPBYGkSI0dWEsXGPI",
  authDomain: "new-ti-verse.firebaseapp.com",
  projectId: "new-ti-verse",
  storageBucket: "new-ti-verse.appspot.com",
  messagingSenderId: "373298190620",
  appId: "1:373298190620:web:56a82bd02426cd311802d9",
  measurementId: "G-SMZFZWY58X",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
