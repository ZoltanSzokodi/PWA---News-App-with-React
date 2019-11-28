import React, { useState, useEffect } from 'react';
import ContentWrap from './components/ContentWrap'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Footer from './components/Footer'
import data from './data/data';
import './App.css';

function App() {
  const [articlesArr, setArticlesArr] = useState([])

  // useEffect(() => {
  //   const getHeadlines = async () => {
  //     const APIKey = '1f9659798f1841bb962c9bc56cc559a2'
  //     // const categ = category !== undefined ? '&category=' + category : '';
  //     const url = `https://newsapi.org/v2/top-headlines?country=us`;
  //     const headers = { "X-Api-Key": APIKey };

  //     try {
  //       let response = await fetch(url, { headers });
  //       let data = await response.json();
  //       setArticlesArr(data.articles)
  //     } catch (err) { console.log(err) }
  //   }
  //   getHeadlines()
  // }, [])

  return (
    <ContentWrap>
      <div className="menu-icon">
        <i className="fas fa-bars header__menu"></i>
      </div>
      <Header />
      <Sidenav />
      <Main articlesArr={data.articles} />
      <Footer />
    </ContentWrap>
  )
}

export default App;
