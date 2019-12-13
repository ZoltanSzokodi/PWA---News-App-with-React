import React from 'react'
import '../styles/ContentWrap.css'

function ContentWrap({ children }) {
  return (
    <div className="grid-container">
      {children}
    </div>
  );
}

export default ContentWrap;
