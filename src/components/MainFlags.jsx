import React from 'react'
import Flag from './Flag'
import flagsArr from '../data/flagsArr'
import '../styles/MainFlags.css'

function MainFlags(props) {
  return (
    <div className="main-flags-wrapper">
      {/* render the flag images */}
      <div className="main-flags">
        {flagsArr.map(flag => (
          <Flag
            key={flag.country}
            flag={flag}
            handleCountrySelect={props.handleCountrySelect} />
        ))}
      </div>
    </div>
  );
}

export default MainFlags;
