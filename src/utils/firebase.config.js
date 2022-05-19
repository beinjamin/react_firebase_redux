import firebase from "firebase/compat/app";
import "firebase/compat/auth";



const app = firebase.initializeApp ( {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-95036.firebaseapp.com",
  projectId: "react-firebase-redux-95036",
  storageBucket: "react-firebase-redux-95036.appspot.com",
  messagingSenderId: "512387560812",
  appId: "1:512387560812:web:a8f63a534b34b0029eef49"
});


export const auth = app.auth();


export default app;

