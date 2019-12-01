import React from 'react'
import '../styles/Footer.css'

function Footer({ darkMode }) {
  return (
    <footer className={darkMode ? "footer footer--dark" : "footer"}>
      <div className="footer__copyright">&copy; 2020 MTH</div>
      <div className="footer__signature">Made with love for React</div>
    </footer>
  );
}

export default Footer;
