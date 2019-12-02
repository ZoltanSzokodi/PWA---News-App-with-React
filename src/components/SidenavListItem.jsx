import React from 'react'
import { toggleClassesWdarkMode } from '../functions/helpers'
import '../styles/SidenavListItem.css'

function SidenavListItem({ handleCategorySelect, id, darkMode }) {
  return (
    <div onClick={() => handleCategorySelect(id)}>
      <li className={toggleClassesWdarkMode(darkMode, "sidenav__list-item")}>{id}</li>
    </div>
  )
}

export default SidenavListItem;
