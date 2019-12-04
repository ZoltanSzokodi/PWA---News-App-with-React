import React, { useContext } from 'react'
import { toggleClassesActiveAndDarkMode, toggleClassesWdarkMode } from '../functions/helpers'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'
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
        <span>{currentUser ? currentUser.displayName : "Please log in"}</span>
      </div>

      {/* toggle dark mode */}
      <div className="sidenav__switch">
        <h4>{darkMode ? "Light theme" : "Dark theme"}</h4>
        <label className="switch">
          <input type="checkbox" onChange={handleToggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className={darkMode ? "sidenav__nav-selected-country sidenav__nav-selected-country--dark" : "sidenav__nav-selected-country"}>
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
