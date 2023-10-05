import { createContext, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const authContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const regester = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

const updateUser = (name, photoUrl) => updateProfile(auth.currentUser, {
    displayName: name, photoURL: photoUrl
})

const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
    return signOut(auth);
}

const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        })
        return () => unSubscribe();
    }, [])


    const authInfo = {
        regester,
        updateUser,
        logIn,
        logOut,
        logInWithGoogle,
        currentUser
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;