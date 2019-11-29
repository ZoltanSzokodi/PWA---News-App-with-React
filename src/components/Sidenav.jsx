import React from 'react'
import SidenavListItem from './SidenavListItem'
import '../styles/Sidenav.css'

function Sidenav(props) {
  const sidenavOptions = ["All", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];

  return (
    <aside className={props.menuState ? "sidenav active" : "sidenav"}>
      <div className="sidenav__close-icon" onClick={props.toggleMenu}>
        <i className="fas fa-times sidenav__brand-close"></i>
      </div>

      <ul className="sidenav__list">
        {sidenavOptions.map(option => (
          <SidenavListItem key={option} id={option} onSelect={props.onSelect} />
        ))}
      </ul>
    </aside>
  )
}

export default Sidenav
