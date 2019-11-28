import React from 'react'
import '../styles/Header.css'

function Header(props) {
  return (
    <header className="header">
      <div className="header__search">Search...</div>
      <div className="header__avatar">Your face</div>
    </header>
  )
}

export default Header

