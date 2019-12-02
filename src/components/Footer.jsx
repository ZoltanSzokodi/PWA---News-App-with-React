import React from 'react'
import '../styles/Footer.css'
import { toggleClassesWdarkMode } from '../functions/helpers'

function Footer({ darkMode }) {
  return (
    <footer className={toggleClassesWdarkMode(darkMode, "footer")}>
      <div className="footer__copyright">&copy; 2020 Zszokodi</div>
      <div className="footer__signature">Made with love and <i className="fab fa-react"></i></div>
    </footer>
  );
}

export default Footer;
