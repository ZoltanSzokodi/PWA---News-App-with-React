import React from 'react'
import '../styles/Flag.css'

function Flag(props) {
  return <img className="flag" src={props.flag} alt={props.flag} />;
}

export default Flag
