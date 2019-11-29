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

const flagsArr = [{ src: de, country: "de" }, { src: fr, country: "fr" }, { src: gb, country: "gb" }, { src: it, country: "it" }, { src: kr, country: "kr" }, { src: pl, country: "pl" }, { src: ru, country: "ru" }, { src: se, country: "se" }, { src: tr, country: "tr" }, { src: us, country: "us" }, { src: hu, country: "hu" }, { src: ca, country: "ca" }];


function MainFlags(props) {
  return (
    <div className="main-flags">
      {flagsArr.map(flag => (
        <Flag
          key={flag.country}
          id={flag.country}
          flag={flag.src}
          onCountrySelect={props.onCountrySelect} />
      ))}
    </div>
  )
}

export default MainFlags
