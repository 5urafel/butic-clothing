import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDuchPEBXkavYmvLQALEnxhLl4ZClGmnRs",
  authDomain: "butic-db.firebaseapp.com",
  projectId: "butic-db",
  storageBucket: "butic-db.appspot.com",
  messagingSenderId: "64565451811",
  appId: "1:64565451811:web:829acdd02e923e4be4a596",
  measurementId: "G-1L05W5F2WS",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
