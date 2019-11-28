import React from 'react'
import '../styles/ContentWrap.css'

function ContentWrap(props) {
  return (
    <div className="grid-container">
      {props.children}
    </div>
  )
}

export default ContentWrap
