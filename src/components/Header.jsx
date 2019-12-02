import React from 'react'
import '../styles/Header.css'
import { toggleClassesWdarkMode } from '../functions/helpers'

function Header({ darkMode }) {
  return (
    <header className={toggleClassesWdarkMode(darkMode, "header")}>
      <div className="header__search">Search...</div>
      <button className="header__signin">sign in</button>
    </header>
  );
}

export default Header;

