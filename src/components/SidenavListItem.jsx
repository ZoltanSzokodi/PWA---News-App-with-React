import React, { useContext } from 'react'
import { toggleClassesWdarkMode } from '../functions/helpers'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/SidenavListItem.css'

function SidenavListItem({ handleCategorySelect, id }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <li className={toggleClassesWdarkMode(darkMode, "sidenav__list-item")} onClick={() => handleCategorySelect(id)}>{id}</li>
    </React.Fragment>
  )
}

export default SidenavListItem;
