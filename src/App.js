import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import ContentWrap from './components/ContentWrap'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Footer from './components/Footer'
// import data from './data/data';
import './App.css';

function App() {
  const [articlesArr, setArticlesArr] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [menuState, setMenuState] = useState(false);

  // ---------------------------------- FETCH DATA -------------------------------------

  // useEffect(() => {
  //   const getHeadlines = async (country, category) => {
  //     const APIKey = '1f9659798f1841bb962c9bc56cc559a2'
  //     const categ = category !== 'all' ? '&category=' + category : '';
  //     const url = `https://newsapi.org/v2/top-headlines?country=${country}${categ}`;
  //     const headers = { "X-Api-Key": APIKey };

  //     try {
  //       let response = await fetch(url, { headers });
  //       let data = await response.json();
  //       let dataWithKeys = [];

  //       data.articles.forEach(article => {
  //         dataWithKeys.push({ ...article, uuid: uuid() })
  //       })

  //       setArticlesArr(dataWithKeys)
  //     } catch (err) { console.log(err) }
  //   }
  //   getHeadlines(selectedCountry, selectedCategory)
  // }, [selectedCountry, selectedCategory])

  // ------------------------------- EVENT LISTENERS ----------------------------------

  const selectArticle = id => {
    // console.log(id)
    let selectedArticle;
    articlesArr.forEach(article => {
      if (article.uuid === id) {
        selectedArticle = article
      }
    })
    setSelectedArticle(selectedArticle)
  };

  const deSelectArticle = () => {
    setSelectedArticle(null)
  };

  const selectCategory = id => {
    const idLc = id.toLowerCase();
    setSelectedCategory(idLc)
  };

  const selectCountry = id => {
    setSelectedCountry(id)
  }

  const toggleMenu = () => {
    setMenuState(!menuState)
    console.log(menuState)
  }

  return (
    <ContentWrap>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars header__menu"></i>
      </div>
      <Header />
      <Sidenav onSelect={selectCategory} menuState={menuState} toggleMenu={toggleMenu} />
      <Main
        articlesArr={articlesArr}
        selectedArticle={selectedArticle}
        onSelect={selectArticle}
        deSelect={deSelectArticle}
        onCountrySelect={selectCountry} />
      <Footer />
    </ContentWrap>
  )
}

export default App;
