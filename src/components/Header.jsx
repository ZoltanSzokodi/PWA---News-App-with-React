import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { toggleClassesWdarkMode } from '../functions/helpers'
// import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'
// import { config } from '../firebase';
import '../styles/Header.css'

function Header({ handleSearch }) {
  // const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <header className={toggleClassesWdarkMode(darkMode, "header")}>
      <div className="header__search-container">
        <input className="search-input" type="text" placeholder="Search.." name="search" onChange={handleSearch} />
      </div>
    </header>
  );
}

export default Header;

