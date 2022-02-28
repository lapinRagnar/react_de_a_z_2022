// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
   return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password) {
   return signInWithEmailAndPassword(auth, email, password)
}

export function logout() {
    return signOut(auth)
}

// custom hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState()
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
        return unsub
    }, [])
    return currentUser
}


