import React from 'react'
import SidenavListItem from './SidenavListItem'
import '../styles/Sidenav.css'
import userPicture from '../img/30.jpg'

function Sidenav(props) {
  const sidenavOptions = ["All", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];
  const {
    menuState,
    handleToggleMenu,
    handleCategorySelect,
    selectedCountry
  } = props;

  return (
    // toggle menu according to menuStae
    <aside className={menuState ? "sidenav active" : "sidenav"}>
      <div className="sidenav__close-icon" onClick={handleToggleMenu}>
        <i className="fas fa-times sidenav__brand-close"></i>
      </div>

      <div className="sidenav__account">
        <img className="sidenav__account--user-picture" src={userPicture} alt="user" />
        <span>Ben Smith</span>
      </div>

      <div className="sidenav__nav-selected-country">
        <h4>Country ({selectedCountry.country})</h4>
        <img className="sidenav__nav-selected-country--flag" src={selectedCountry.src} alt={selectedCountry.country} />
      </div>

      <div className="sidenav__nav-categories-title">
        <h4>Categories <i className="fas fa-sort-down"></i></h4>
      </div>

      {/* render the category oprions in the navigation */}
      <ul className="sidenav__list">
        {sidenavOptions.map(option => (
          <SidenavListItem
            key={option}
            id={option}
            handleCategorySelect={handleCategorySelect} />
        ))}
      </ul>
    </aside>
  );
}

export default Sidenav;
