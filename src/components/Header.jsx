import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toggleClassesWdarkMode } from '../functions/helpers'
import { AuthContext } from '../Auth'
import app from '../base';
import '../styles/Header.css'

function Header({ darkMode }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <header className={toggleClassesWdarkMode(darkMode, "header")}>
      <div className="header__search">Search...</div>
      <div className="header__login-out">
        {currentUser ?
          <Link className="header__login-out-btn" to="/" onClick={() => app.auth().signOut()}>log out</Link> :
          <Link className="header__login-out-btn" to="/login">log in</Link>}
        <Link className="header__login-out-btn" to="/signup">sign up</Link>
      </div>
    </header>
  );
}

export default Header;

