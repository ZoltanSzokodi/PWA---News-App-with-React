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

  const scrollTop = () => {
    return window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const scrollDown = () => {
    return window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={toggleClassesWdarkMode(darkMode, "header")}>
      <div className="header__search-container">
        <input className="search-input" type="text" placeholder="Search.." name="search" onChange={handleSearch} />
      </div>
      <div className="header__arrows-container">
        <i className={toggleClassesWdarkMode(darkMode, "fas fa-arrow-circle-up up-arrow")} onClick={scrollTop}></i>
        <i className={toggleClassesWdarkMode(darkMode, "fas fa-arrow-circle-down down-arrow")} onClick={scrollDown}></i>
      </div>
    </header>
  );
}

export default Header;

