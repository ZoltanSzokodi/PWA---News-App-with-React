import React, { useState, createContext } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode)
  };

  return (
    <ThemeContext.Provider value={{ darkMode, handleToggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};