import React from 'react'
import SidenavListItem from './SidenavListItem'
import '../styles/Sidenav.css'

function Sidenav({ menuState, handleToggleMenu, handleCategorySelect }) {
  const sidenavOptions = ["All", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];

  return (
    // toggle menu according to menuStae
    <aside className={menuState ? "sidenav active" : "sidenav"}>
      <div className="sidenav__close-icon" onClick={handleToggleMenu}>
        <i className="fas fa-times sidenav__brand-close"></i>
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
