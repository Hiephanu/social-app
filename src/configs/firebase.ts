
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ7DHMLiPhz6y9wQj-lvCgK0jDQNoYch8",
  authDomain: "moneymanagement-c6783.firebaseapp.com",
  databaseURL: "https://moneymanagement-c6783-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "moneymanagement-c6783",
  storageBucket: "moneymanagement-c6783.appspot.com",
  messagingSenderId: "723534972049",
  appId: "1:723534972049:web:a6eb38a3ac6b5a0a70eb30",
  measurementId: "G-GG7B90PFRY"
  };
  const app= firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const fireStoreCore = firebase.firestore();
const db = getFirestore(app);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {fireStoreCore,projectAuth,timestamp,db,auth,provider}