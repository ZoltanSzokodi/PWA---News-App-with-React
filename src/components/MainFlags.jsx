import React from 'react'
import Flag from './Flag'
import { flagsArr } from '../functions/helpers'
import '../styles/MainFlags.css'

function MainFlags({ handleCountrySelect }) {
  return (
    <div className="main-flags-wrapper">
      {/* render the flag images */}
      <div className="main-flags">
        {flagsArr.map(flag => (
          <Flag
            key={flag.country}
            flag={flag}
            handleCountrySelect={handleCountrySelect} />
        ))}
      </div>
    </div>
  );
}

export default MainFlags;
