import React from 'react'
import MainFlags from './MainFlags'
import ArticleContent from './ArticleContent'
import Article from './Article'
import Loader from './Loader'
import '../styles/Main.css'

function Main(props) {

  const allArticles = (
    <React.Fragment>
      <div className="main-header">
        <div className="main-header__heading">Hello User</div>
        <div className="main-header__updates">Recent Items</div>
      </div>
      <MainFlags onCountrySelect={props.onCountrySelect} />
      <div className="main-articles">
        {props.articlesArr.map(article => (
          <Article key={article.uuid} article={article} onSelect={props.onSelect} />
        ))}
      </div>
    </React.Fragment>
  );

  const selectedArticle = <ArticleContent selectedArticle={props.selectedArticle} deSelect={props.deSelect} />
  const renderArticles = () => {
    return props.selectedArticle === null ? allArticles : selectedArticle
  }

  return (
    <main className="main">
      {props.isLoading ? <Loader /> : renderArticles()}
    </main >
  )
}

export default Main
