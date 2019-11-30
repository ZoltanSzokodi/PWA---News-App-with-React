import React from 'react'
import '../styles/SidenavListItem.css'

function SidenavListItem({ handleCategorySelect, id }) {
  return (
    <div onClick={() => handleCategorySelect(id)}>
      <li className="sidenav__list--item">{id}</li>
    </div>
  )
}

export default SidenavListItem;
