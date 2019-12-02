import React from 'react'
import MainFlags from './MainFlags'
import ArticleContent from './ArticleContent'
import Article from './Article'
import Loader from './Loader'
import { toggleClassesWdarkMode } from '../functions/helpers'
import '../styles/Main.css'

function Main(props) {
  const {
    handleCountrySelect,
    handleArticleSelect,
    handleGoBack,
    articlesArr,
    selectedArticle,
    isLoading,
    darkMode
  } = props;

  const allArticles = (
    <React.Fragment>
      <div className="main-header">
        <div className="main-header__heading">Hello User</div>
        <div className="main-header__updates">Recent Items</div>
      </div>

      <MainFlags handleCountrySelect={handleCountrySelect} />

      <div className="main-articles">
        {/* render all the fetched articles */}
        {articlesArr.map(article => (
          <Article
            key={article.uuid}
            article={article}
            handleArticleSelect={handleArticleSelect}
            darkMode={darkMode}
          />
        ))}
      </div>
    </React.Fragment>
  );

  // single article that has been clicked on
  const oneArticle = <ArticleContent selectedArticle={selectedArticle} handleGoBack={handleGoBack} darkMode={darkMode} />

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
