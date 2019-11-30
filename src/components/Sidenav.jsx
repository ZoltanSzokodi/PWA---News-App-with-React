import React from 'react'
import SidenavListItem from './SidenavListItem'
import '../styles/Sidenav.css'
import userPicture from '../img/30.jpg'

function Sidenav({ menuState, handleToggleMenu, handleCategorySelect }) {
  const sidenavOptions = ["All", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];

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

      <div className="sidenav__nav-name">
        <h4>Categories</h4>
        <i className="far fa-newspaper"></i>
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
