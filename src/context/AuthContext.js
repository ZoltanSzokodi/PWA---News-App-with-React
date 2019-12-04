import React, { useEffect, useState, createContext } from 'react'
import { config } from '../firebase'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    config.auth().onAuthStateChanged(setCurrentUser);
  }, [])
  console.log(currentUser)

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};


