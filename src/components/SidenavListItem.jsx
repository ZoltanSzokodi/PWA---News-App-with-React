import React from 'react'
import '../styles/SidenavListItem.css'

function SidenavListItem(props) {
  return (
    <div onClick={() => props.onSelect(props.id)}>
      <li className="sidenav__list-item">{props.id}</li>
    </div>
  )
}

export default SidenavListItem
