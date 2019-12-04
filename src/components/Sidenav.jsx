import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toggleClassesActiveAndDarkMode, toggleClassesWdarkMode } from '../functions/helpers'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'
import { config } from '../firebase';
import SidenavListItem from './SidenavListItem'
import userPicture from '../img/30.jpg'
import '../styles/Sidenav.css'

function Sidenav(props) {
  const sidenavOptions = ["All", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];
  const {
    menuState,
    handleToggleMenu,
    handleCategorySelect,
    selectedCountry
  } = props;

  const { darkMode, handleToggleDarkMode } = useContext(ThemeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    // toggle menu according to menuStae
    <aside className={toggleClassesActiveAndDarkMode(menuState, darkMode)}>
      <div className={toggleClassesWdarkMode(darkMode, "sidenav__close-icon")} onClick={handleToggleMenu}>
        <i className="fas fa-times"></i>
      </div>

      <div className={toggleClassesWdarkMode(darkMode, "sidenav__account")}>
        <img className={toggleClassesWdarkMode(darkMode, "sidenav__account-user-picture")} src={currentUser ? currentUser.photoURL : userPicture} alt="user" />
        <span className="sidenav__account-user-name">{currentUser ? " | " + currentUser.displayName : " | signed out"}</span>
      </div>

      <div className="sidenav__login-out">
        {currentUser ? (
          <Link className="sidenav__login-out-btn" to="/" onClick={() => config.auth().signOut()}>sign out</Link>) : (
            <Link className="sidenav__login-out-btn" to="/login">sign in</Link>)}
      </div>

      <div className="sidenav__switch">
        <h4>{darkMode ? "Light theme" : "Dark theme"}</h4>
        <label className="switch">
          <input type="checkbox" onChange={handleToggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className={toggleClassesWdarkMode(darkMode, "sidenav__nav-selected-country")}>
        <h4>Country ({selectedCountry.country})</h4>
        <img className="sidenav__nav-selected-country-flag" src={selectedCountry.src} alt={selectedCountry.country} />
      </div>

      <div className={toggleClassesWdarkMode(darkMode, "sidenav__nav-categories-title")}>
        <h4>Categories <i className="fas fa-sort-down"></i></h4>
      </div>

      {/* render the category oprions in the navigation */}
      <ul className="sidenav__list">
        {sidenavOptions.map(option => (
          <SidenavListItem
            key={option}
            id={option}
            handleCategorySelect={handleCategorySelect}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Sidenav;
