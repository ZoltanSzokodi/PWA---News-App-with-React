import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__search">Search...</div>
      <button className="header__signin">sign in</button>
    </header>
  );
}

export default Header;

