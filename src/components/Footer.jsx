import React, { useContext } from 'react'
import { toggleClassesWdarkMode } from '../functions/helpers'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/Footer.css'

function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={toggleClassesWdarkMode(darkMode, "footer")}>
      <div className="footer__copyright">&copy; 2020 Zszokodi</div>
      <div className="footer__signature">Made with love and <i className="fab fa-react"></i></div>
    </footer>
  );
}

export default Footer;
