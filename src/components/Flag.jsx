import React from 'react'
import '../styles/Flag.css'

function Flag({ handleCountrySelect, id, flag }) {
  // fetch headlinse from the selected country
  return (
    <div onClick={() => handleCountrySelect(id)}>
      <img className="flag" src={flag} alt={flag} />
    </div>
  );
}

export default Flag;
