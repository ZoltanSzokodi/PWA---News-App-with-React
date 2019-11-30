import React from 'react'
import Flag from './Flag'
import '../styles/MainFlags.css'
import de from '../img/de.svg'
import fr from '../img/fr.svg'
import gb from '../img/gb.svg'
import it from '../img/it.svg'
import kr from '../img/kr.svg'
import pl from '../img/pl.svg'
import ru from '../img/ru.svg'
import se from '../img/se.svg'
import tr from '../img/tr.svg'
import us from '../img/us.svg'
import hu from '../img/hu.svg'
import ca from '../img/ca.svg'
import cn from '../img/cn.svg'
import be from '../img/be.svg'
import cz from '../img/cz.svg'
import gr from '../img/gr.svg'
import hk from '../img/hk.svg'
import ind from '../img/in.svg'

// the country flags and short names that are required in the url
const flagsArr = [
  { src: de, country: "de" },
  { src: fr, country: "fr" },
  { src: gb, country: "gb" },
  { src: it, country: "it" },
  { src: kr, country: "kr" },
  { src: pl, country: "pl" },
  { src: ru, country: "ru" },
  { src: se, country: "se" },
  { src: tr, country: "tr" },
  { src: us, country: "us" },
  { src: hu, country: "hu" },
  { src: ca, country: "ca" },
  { src: cn, country: "cn" },
  { src: be, country: "be" },
  { src: cz, country: "cz" },
  { src: gr, country: "gr" },
  { src: hk, country: "hk" },
  { src: ind, country: "in" }
];

function MainFlags(props) {
  return (
    <div className="main-flags-wrapper">
      {/* render the flag images */}
      <div className="main-flags">
        {flagsArr.map(flag => (
          <Flag
            key={flag.country}
            id={flag.country}
            flag={flag.src}
            handleCountrySelect={props.handleCountrySelect} />
        ))}
      </div>
    </div>
  );
}

export default MainFlags;
