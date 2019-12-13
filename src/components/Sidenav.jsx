import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toggleClassesActiveAndDarkMode, toggleClassesWdarkMode } from '../functions/helpers'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'
import SidenavListItem from './SidenavListItem'
import defaultUserImg from '../img/default-profile-picture.jpg'
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
  const { currentUser, signOut } = useContext(AuthContext);

  console.log(currentUser)
  return (
    // toggle menu according to menuStae
    <aside className={toggleClassesActiveAndDarkMode(menuState, darkMode)}>

      <div className="sidenav__account-container">
        <div className={toggleClassesWdarkMode(darkMode, "sidenav__account")}>
          <img className={toggleClassesWdarkMode(darkMode, "sidenav__account-user-picture")} src={currentUser && currentUser.photoURL !== null ? currentUser.photoURL : defaultUserImg} alt="user" />
          <span className="sidenav__account-user-name">{currentUser ? " | " + currentUser.displayName : " | signed out"}</span>
        </div>

        <div className={toggleClassesWdarkMode(darkMode, "sidenav__close-icon")} onClick={handleToggleMenu}>
          <i className="fas fa-times"></i>
        </div>
      </div>

      <div className="sidenav__login-container">

        {/* depending on the current user status display "sign in" or "sign out" */}
        {currentUser ?
          (<Link className={toggleClassesWdarkMode(darkMode, "sidenav__login-btn")} to="/" onClick={signOut}>sign out</Link>)
          :
          (<Link className={toggleClassesWdarkMode(darkMode, "sidenav__login-btn")} to="/login">sign in</Link>)}

        {/* depending on the current user's provider id display "account" or don't */}
        <Link className={toggleClassesWdarkMode(darkMode, "sidenav__login-btn")} style={currentUser && currentUser.providerData[0].providerId === "password" ? { display: "flex" } : { display: "none" }} to="/account">account</Link>
      </div>

      <div className="sidenav__options-container">
        <div className={toggleClassesWdarkMode(darkMode, "sidenav__switch")}>
          <i className="fas fa-sun sun-icon"></i>
          <label className="switch">
            <input type="checkbox" onChange={handleToggleDarkMode} />
            <span className="slider round"></span>
          </label>
          <i className="fas fa-moon moon-icon"></i>
        </div>

        <div className={toggleClassesWdarkMode(darkMode, "sidenav__nav-selected-country")}>
          <img className={toggleClassesWdarkMode(darkMode, "sidenav__nav-selected-country-flag")} src={selectedCountry.src} alt={selectedCountry.country} />
        </div>
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
