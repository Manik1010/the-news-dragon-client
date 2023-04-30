import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    // const user = {displayName: 'Allha Vorosa'};
    // const user = null;
    const [user, setUser] = useState(null);
    //reload korle login page cole ase....
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password);
        
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (loginUser) => {
            console.log('inside User', loginUser);
            setUser(loginUser);
            setLoading(false);
            // if (loginUser) {
            //   // User is signed in, see docs for a list of available properties
            //   // https://firebase.google.com/docs/reference/js/firebase.User
            //   const uid = user.uid;
            //   // ...
            // } else {
            //   // User is signed out
            //   // ...
            // }
            return () => {
                unsubscribe();
            }
          });
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;