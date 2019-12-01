import React from 'react'
import '../styles/Header.css'

function Header({ darkMode }) {
  return (
    <header className={darkMode ? "header header--dark" : "header"}>
      <div className="header__search">Search...</div>
      <button className="header__signin">sign in</button>
    </header>
  );
}

export default Header;

