
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDditAucmLIBCD6XFAiUfhoMhZsF9z5e5Q",
  authDomain: "social-app-65974.firebaseapp.com",
  projectId: "social-app-65974",
  storageBucket: "social-app-65974.appspot.com",
  messagingSenderId: "633005243560",
  appId: "1:633005243560:web:829eed07afb0b279c1169d",
  measurementId: "G-9K98R0674P"
  };
const app= firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const fireStoreCore = firebase.firestore();
const db = getFirestore(app);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {fireStoreCore,projectAuth,timestamp,db,auth,provider}