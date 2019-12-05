import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { toggleClassesActiveAndDarkMode, toggleClassesWdarkMode } from '../functions/helpers'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'
import { config } from '../firebase';
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
  const { currentUser } = useContext(AuthContext);


  // --------------------------------- EXPERIMENTS PROFILE UPDATE ------------------------------

  const signOut = () => {
    return config.auth().signOut();
  }

  const updateName = () => {
    currentUser.updateProfile({
      displayName: "Szabesz"
    }).then(function () {
      console.log("NAME update SUCCESS")
      window.location.reload(true)
    }).catch(function (error) {
      console.log("NAME update FAIL", error)
    });
  }
  // --------------------------------------------------------------
  const updatePassword = () => {
    currentUser.updatePassword("654321").then(function () {
      console.log("PASSWORD update SUCCESS")
      signOut()
    }).catch(function (error) {
      console.log("PASSWORD update FAILED", error)
    });
  }
  // either of the 2 is enough
  const sendResetPassword = () => {
    config.auth().sendPasswordResetEmail(currentUser.email).then(function () {
      console.log("email sent")
      signOut()
    }).catch(function (error) {
      console.log("something went wrong", error)
    });
  }
  // --------------------------------------------------------------
  const updateEmail = () => {
    currentUser.updateEmail("zoltan@hotmail.com").then(function () {
      console.log("EMAIL update SUCCESS")
    }).catch(function (error) {
      console.log("EMAIL update FAIL", error)
    });
  }
  // --------------------------------------------------------------
  const deleteUser = () => {
    currentUser.delete().then(function () {
      console.log("user deleted")
    }).catch(function (error) {
      console.log("something went wrong", error)
    });
  }






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
        <Link className={toggleClassesWdarkMode(darkMode, "sidenav__login-btn")} style={currentUser && currentUser.providerData[0].providerId === "password" ? { display: "flex" } : { display: "none" }} to="/">account</Link>

      </div>

      <button onClick={updateName}>UPDATE NAME</button>
      <button onClick={updatePassword}>UPDATE PASSWORD</button>
      <button onClick={sendResetPassword}>RESET PW EMAIL</button>
      <button onClick={updateEmail}>UPDATE EMAIL</button>
      <button onClick={deleteUser}>DELETE USER</button>




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
          <span className={toggleClassesWdarkMode(darkMode, "sidenav__nav-selected-country-name")}>{selectedCountry.country}</span>
          <img className={toggleClassesWdarkMode(darkMode, "sidenav__nav-selected-country-flag")} src={selectedCountry.src} alt={selectedCountry.country} />
        </div>
      </div>

      <div className={toggleClassesWdarkMode(darkMode, "sidenav__menu-name")}>
        <h3>Article Categories</h3>
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
