import React, { useContext } from 'react'
import { toggleClassesWdarkMode } from '../functions/helpers'
import { ThemeContext } from '../context/ThemeContext'
import MainFlags from './MainFlags'
import ArticleContent from './ArticleContent'
import Article from './Article'
import Loader from './Loader'
// import bannerVideo from '../img/globe-compressed.mp4'
import '../styles/Main.css'

function Main(props) {
  const {
    handleCountrySelect,
    handleArticleSelect,
    handleGoBack,
    articlesArr,
    selectedArticle,
    isLoading
  } = props;

  const { darkMode } = useContext(ThemeContext);

  const allArticles = (
    <React.Fragment>
      <div className="main-header">
        {/* <video autoPlay muted loop className="banner-video">
          <source src={bannerVideo} type="video/mp4" />
        </video> */}
      </div>

      <MainFlags handleCountrySelect={handleCountrySelect} />

      <div className="main-articles">
        {/* render all the fetched articles */}
        {articlesArr.map(article => (
          <Article
            key={article.uuid}
            article={article}
            handleArticleSelect={handleArticleSelect}
          />
        ))}
      </div>
    </React.Fragment>
  );

  // single article that has been clicked on
  const oneArticle = <ArticleContent selectedArticle={selectedArticle} handleGoBack={handleGoBack} />

  // if an article was clicked on render that article, else render all the articles
  const renderArticles = () => {
    return selectedArticle === null ? allArticles : oneArticle;
  }

  return (
    <main className={toggleClassesWdarkMode(darkMode, "main")}>
      {/* on page load first show the loader/spinner (3s) */}
      {isLoading ? <Loader /> : renderArticles()}
    </main >
  );
}

export default Main;
