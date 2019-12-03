import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { toggleClassesWdarkMode } from '../functions/helpers'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'
import app from '../firebase';
import '../styles/Header.css'

function Header(props) {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);

  // const [searchInput, setSearchInput] = useState(null);

  // const handleChange = e => {
  //   setSearchInput(e.target.value)
  // }

  // console.log(currentUser)

  return (
    <header className={toggleClassesWdarkMode(darkMode, "header")}>
      <div className="header__search-container">
        <input className="search-input" type="text" placeholder="Search.." name="search" onChange={props.handleSearch} />
        {/* <button className="search-btn" onClick={() => props.handleSearch(searchInput)}><i className="fa fa-search"></i></button> */}
      </div>
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

