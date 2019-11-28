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

  useEffect(() => {
    const getHeadlines = async () => {
      const APIKey = '1f9659798f1841bb962c9bc56cc559a2'
      // const categ = category !== undefined ? '&category=' + category : '';
      const url = `https://newsapi.org/v2/top-headlines?country=us`;
      const headers = { "X-Api-Key": APIKey };

      try {
        let response = await fetch(url, { headers });
        let data = await response.json();
        let dataWithKeys = [];

        data.articles.forEach(article => {
          dataWithKeys.push({ ...article, uuid: uuid() })
        })
        // console.log(indexedData)

        setArticlesArr(dataWithKeys)
      } catch (err) { console.log(err) }
    }
    getHeadlines()
  }, [])

  const selectArticle = (id) => {
    // console.log(id)
    let selectedArticle;
    articlesArr.forEach(article => {
      if (article.uuid === id) {
        selectedArticle = article
      }
    })

    setSelectedArticle(selectedArticle)
  }

  const deSelectArticle = () => {
    setSelectedArticle(null)
  }

  return (

    <ContentWrap>
      <div className="menu-icon">
        <i className="fas fa-bars header__menu"></i>
      </div>
      <Header />
      <Sidenav />
      <Main articlesArr={articlesArr} selectedArticle={selectedArticle} onSelect={selectArticle} deSelect={deSelectArticle} />
      <Footer />
    </ContentWrap>

  )
}

export default App;
