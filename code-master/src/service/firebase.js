
import firebase from 'firebase'
import "firebase/auth"
// import { initializeApp } from "@firebase/app";
// import { getAuth, GoogleAuthProvider } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC443ZyOfCo1M1M60HVRkU7ptcF8mXwujk",
    authDomain: "oddaj-rzeczy-41c62.firebaseapp.com",
    databaseURL: "https://oddaj-rzeczy-41c62-default-rtdb.firebaseio.com",
    projectId: "oddaj-rzeczy-41c62",
    storageBucket: "oddaj-rzeczy-41c62.appspot.com",
    messagingSenderId: "580191037545",
    appId: "1:580191037545:web:8dec6398a5ecb8fc699af8"
};

firebase.initializeApp(firebaseConfig)

const fbProvider = new firebase.auth.FacebookAuthProvider();

export const fbAuth = () => {
    return firebase.auth().signInWithPopup(fbProvider) 
}

export const auth = firebase.auth;