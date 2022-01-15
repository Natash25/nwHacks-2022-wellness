// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import * as auth from 'firebase/compat/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAZZMrXuLnJ1U9jrxlwL3exuKckmB0GmJI",
    authDomain: "react-firebase-nurt.firebaseapp.com",
    projectId: "react-firebase-nurt",
    storageBucket: "react-firebase-nurt.appspot.com",
    messagingSenderId: "45216345243",
    appId: "1:45216345243:web:81e6cd393ee16f66c0aa3e",
    measurementId: "G-G3E6VVJQSM"
};

class Firebase {
    constructor() {
        // const app = initializeApp({
        //     apiKey: "AIzaSyAZZMrXuLnJ1U9jrxlwL3exuKckmB0GmJI",
        //     authDomain: "react-firebase-nurt.firebaseapp.com",
        //     projectId: "react-firebase-nurt",
        //     storageBucket: "react-firebase-nurt.appspot.com",
        //     messagingSenderId: "45216345243",
        //     appId: "1:45216345243:web:81e6cd393ee16f66c0aa3e",
        //     measurementId: "G-G3E6VVJQSM"
        // });
        // const analytics = getAnalytics(app);
        firebase.initializeApp(config);

        this.auth = firebase.auth();
    }

    // Auth API: interface for React components that will connect to Firebase API - to be consumed
    // todo: async and needs error handling
    createUserWithEmailPass = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    };

    // todo: async and needs error handling
    signInWithEmailPass = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }

    signOut = () => {
        this.auth.signOut();
    }

    resetPassword = (email) => {
        this.auth.sendPasswordResetEmail(email);
    }

    updatePassword = (password) => {
        this.auth.currentUser.updatePassword(password);
    }
}

export default Firebase;