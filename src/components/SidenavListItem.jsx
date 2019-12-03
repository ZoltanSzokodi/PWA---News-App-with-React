import React, { useContext } from 'react'
import { toggleClassesWdarkMode } from '../functions/helpers'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/SidenavListItem.css'

function SidenavListItem({ handleCategorySelect, id }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div onClick={() => handleCategorySelect(id)}>
      <li className={toggleClassesWdarkMode(darkMode, "sidenav__list-item")}>{id}</li>
    </div>
  )
}

export default SidenavListItem;
