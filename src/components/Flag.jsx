import React from 'react'
import '../styles/Flag.css'

function Flag({ handleCountrySelect, flag }) {
  // fetch headlinse from the selected country
  return (
    <div onClick={() => handleCountrySelect(flag)}>
      <img className="flag" src={flag.src} alt={flag.country} />
    </div>
  );
}

export default Flag;
