import React, { useEffect, useState } from 'react'
import { uuid } from 'uuidv4';
import { ThemeProvider } from '../context/ThemeContext'
import ContentWrap from './ContentWrap'
import Header from './Header'
import Sidenav from './Sidenav'
import Main from './Main'
import Footer from './Footer'
import '../styles/Home.css'


function Home() {
  const [articlesArr, setArticlesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState({ src: '/static/media/us.f4cc0b5e.svg', country: "us" });
  const [menuState, setMenuState] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  // ********************************** FETCH TOP HEADLINES ***********************************

  useEffect(() => {
    const getHeadlines = async (country, category, srckey) => {
      const APIKey = '1f9659798f1841bb962c9bc56cc559a2';
      const categ = category !== 'all' ? '&category=' + category : '';
      const srck = srckey !== null ? 'q=' + srckey + '&' : '';
      const url = `https://newsapi.org/v2/top-headlines?${srck}country=${country}${categ}`;
      const headers = { "X-Api-Key": APIKey };

      try {
        let response = await fetch(url, { headers });
        let data = await response.json();
        let dataWithKeys = [];

        data.articles.forEach(article => {
          dataWithKeys.push({ ...article, uuid: uuid() })
        })

        setArticlesArr(dataWithKeys)

      } catch (err) { console.log(err) }
    }
    getHeadlines(selectedCountry.country, selectedCategory, searchKeyword)
    // in case these state props change go and fetch data again
  }, [selectedCountry, selectedCategory, searchKeyword])


  // when opening an article jump to the top os the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [selectedArticle])

  // show loader when selecting a country, category or searching
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => { setIsLoading(false) }, 1500);
  }, [selectedCategory, selectedCountry, searchKeyword])


  // *************************** EVENT LISTENERS **********************************


  // ------------------------ CLICK AND OPEN AN ARTICLE ---------------------------
  const handleArticleSelect = id => {
    let selectedArticle;
    articlesArr.forEach(article => {
      if (article.uuid === id) {
        selectedArticle = article
      }
    })
    setSelectedArticle(selectedArticle)
  };

  // ------------------------ GO BACK FROM OPENED ARTICLE -------------------------
  const handleGoBack = () => {
    setSelectedArticle(null)
  };

  // ------------------------ SELECT A NEWS CATEGORY ------------------------------
  const handleCategorySelect = id => {
    const idLc = id.toLowerCase();
    setSelectedCategory(idLc)
    // when we are inside an article and we select a category from the sidenav this exits the article
    setSelectedArticle(null)
    setMenuState(false)
  };

  // ------------------------ SELECT A COUNTRY ------------------------------------
  const handleCountrySelect = flagobj => {
    setSelectedCountry(flagobj)
  };

  // ------------------------ OPEN / CLOSE SIDENAV --------------------------------
  const handleToggleMenu = () => {
    setMenuState(!menuState)
  };

  // ------------------------ HANDLE SEARCH ---------------------------------------
  const handleSearch = e => {
    setSearchKeyword(e.target.value)
    setSelectedArticle(null)
  }

  return (
    <ThemeProvider>
      <ContentWrap>
        <div className="menu-icon" onClick={handleToggleMenu}>
          <i className="fas fa-bars menu-hamburger"></i>
        </div>
        <Header handleSearch={handleSearch} />
        <Sidenav
          handleCategorySelect={handleCategorySelect}
          handleToggleMenu={handleToggleMenu}
          menuState={menuState}
          selectedCountry={selectedCountry}
        />

        <Main
          handleArticleSelect={handleArticleSelect}
          handleGoBack={handleGoBack}
          handleCountrySelect={handleCountrySelect}
          articlesArr={articlesArr}
          selectedArticle={selectedArticle}
          isLoading={isLoading}
        />
        <Footer />
      </ContentWrap>
    </ThemeProvider >
  )
}

export default Home;
