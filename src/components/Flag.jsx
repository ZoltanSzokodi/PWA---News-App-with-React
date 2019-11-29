import React from 'react'
import '../styles/Flag.css'

function Flag(props) {
  return (
    <div onClick={() => props.onCountrySelect(props.id)}>
      <img className="flag" src={props.flag} alt={props.flag} />
    </div>
  );
}

export default Flag
