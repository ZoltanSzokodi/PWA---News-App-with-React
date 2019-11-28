import React from 'react';
import ContentWrap from './components/ContentWrap'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Footer from './components/Footer'
import data from './data/data';
import './App.css';

function App() {
  console.log(data)
  return (
    <ContentWrap>
      <div className="menu-icon">
        <i className="fas fa-bars header__menu"></i>
      </div>
      <Header />
      <Sidenav />
      <Main />
      <Footer />
    </ContentWrap>
  )
}

export default App;
