import React, { useEffect, useState, createContext } from 'react'
// import { config } from '../firebase'
import firebase from '../firebase'
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, [])

  const signOut = () => {
    return firebase.auth().signOut();
  }

  // console.log(currentUser)

  return (
    <AuthContext.Provider value={{ currentUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};


