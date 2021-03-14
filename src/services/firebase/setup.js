import firebase from 'firebase/app'
import *  as firebaseui from "firebaseui"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdVf9qqEtoOIn5umMemggZ5L69RXw61sQ",
    authDomain: "expenses-255da.firebaseapp.com",
    projectId: "expenses-255da",
    storageBucket: "expenses-255da.appspot.com",
    messagingSenderId: "190533114423",
    appId: "1:190533114423:web:0c0d780615698593497db2",
    measurementId: "G-YMFC6NSFSY"
  };


  const uiConfig = {
    signInOptions: [
     firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl:"/Dashboard"
    // Other config options...
  };


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

db.settings({

    timestampsInSnapshots:true,
})
export {auth,db};

export const startUi = (elementId) => {

    const ui = new firebaseui.auth.AuthUI(auth);
    ui.start(elementId, uiConfig);

}