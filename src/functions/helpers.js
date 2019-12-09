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

import React from 'react'
import Notify from '../components/Notify'

// array for the country select
export const flagsArr = [
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

// getting rid of unvanted chars in publishedAt str
export const publishTime = time => {
  let published = time.split("");
  published.map((char, i) => {
    if (char === "T" || char === "Z") {
      published.splice(i, 1, " ")
    }
  })
  return published;
};

// toggle classes according to darkMode
export const toggleClassesWdarkMode = (mode, className) => {
  if (mode) {
    return `${className} ${className}--dark`;
  } else {
    return className;
  }
};

// toggle combinations of sidenav acive state and darkMode
export const toggleClassesActiveAndDarkMode = (menuSt, mode) => {
  let classes;
  if (menuSt && mode) {
    classes = "sidenav active sidenav--dark";
  } else if (!menuSt && mode) {
    classes = "sidenav sidenav--dark";
  } else if (menuSt && !mode) {
    classes = "sidenav active";
  } else if (!menuSt && !mode) {
    classes = "sidenav";
  }
  return classes;
};

// toggle notification
export const toggleNotification = (status, message) => {
  return <Notify status={status} message={message} />
}