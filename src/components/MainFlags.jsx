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
import hu from '../img/tr.svg'
import ca from '../img/us.svg'

const flagsArr = [de, fr, gb, it, kr, pl, ru, se, tr, us, hu, ca];

function MainFlags() {
  return (
    <div className="main-flags">
      {flagsArr.map(flag => (
        <Flag key={flag} flag={flag} />
      ))}
    </div>
  )
}

export default MainFlags
