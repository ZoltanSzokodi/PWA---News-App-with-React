import React from 'react'
import '../styles/SidenavListItem.css'

function SidenavListItem({ handleCategorySelect, id, darkMode }) {
  return (
    <div onClick={() => handleCategorySelect(id)}>
      <li className={darkMode ? "sidenav__list-item sidenav__list-item--dark" : "sidenav__list-item"}>{id}</li>
    </div>
  )
}

export default SidenavListItem;
