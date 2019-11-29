import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainFlags from './MainFlags'
import ArticleContent from './ArticleContent'
import Article from './Article'
// import { uuid } from 'uuidv4';
import '../styles/Main.css'

function Main(props) {
  console.log(props.articlesArr)

  const allArticles = (
    <React.Fragment>
      <div className="main-header">
        <div className="main-header__heading">Hello User</div>
        <div className="main-header__updates">Recent Items</div>
      </div>
      <MainFlags />
      <div className="main-articles">
        {props.articlesArr.map(article => (
          <Article key={article.uuid} article={article} onSelect={props.onSelect} />
        ))}
      </div>
    </React.Fragment>
  );

  const selectedArticle = <ArticleContent selectedArticle={props.selectedArticle} deSelect={props.deSelect} />

  return (

    <main className="main">
      {props.selectedArticle === null ? allArticles : selectedArticle}

    </main >
  )
}

export default Main
