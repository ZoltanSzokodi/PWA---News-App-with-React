import React from 'react'
import SidenavListItem from './SidenavListItem'
import '../styles/Sidenav.css'
import userPicture from '../img/30.jpg'

function Sidenav(props) {
  const sidenavOptions = ["All", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];
  const {
    menuState,
    handleToggleMenu,
    handleToggleDarkMode,
    handleCategorySelect,
    selectedCountry,
    darkMode
  } = props;

  const toggleClasses = () => {
    let classes;
    if (menuState && darkMode) {
      classes = "sidenav active sidenav--dark";
    } else if (!menuState && darkMode) {
      classes = "sidenav sidenav--dark";
    } else if (menuState && !darkMode) {
      classes = "sidenav active";
    } else if (!menuState && !darkMode) {
      classes = "sidenav";
    }
    return classes;
  }
  // { darkMode ? "sidenav__close-icon sidenav__close-icon--dark" : "sidenav__close-icon" }
  return (
    // toggle menu according to menuStae
    <aside className={toggleClasses()}>
      <div className={darkMode ? "sidenav__close-icon sidenav__close-icon--dark" : "sidenav__close-icon"} onClick={handleToggleMenu}>
        <i className="fas fa-times"></i>
      </div>

      <div className={darkMode ? "sidenav__account sidenav__account--dark" : "sidenav__account"}>
        <img className={darkMode ? "sidenav__account-user-picture sidenav__account-user-picture--dark" : "sidenav__account-user-picture"} src={userPicture} alt="user" />
        <span>Ben Smith</span>
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

      <div className={darkMode ? "sidenav__nav-categories-title sidenav__nav-categories-title--dark" : "sidenav__nav-categories-title"}>
        <h4>Categories <i className="fas fa-sort-down"></i></h4>
      </div>

      {/* render the category oprions in the navigation */}
      <ul className="sidenav__list">
        {sidenavOptions.map(option => (
          <SidenavListItem
            key={option}
            id={option}
            handleCategorySelect={handleCategorySelect}
            darkMode={darkMode}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Sidenav;
