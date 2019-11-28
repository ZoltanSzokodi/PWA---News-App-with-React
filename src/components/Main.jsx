import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainOverview from './MainOverview'
import ArticleContent from './ArticleContent'
import Article from './Article'
// import { uuid } from 'uuidv4';
import '../styles/Main.css'

function Main(props) {
  console.log(props.articlesArr)
  return (
    <main className="main">
      <div className="main-header">
        <div className="main-header__heading">Hello User</div>
        <div className="main-header__updates">Recent Items</div>
      </div>
      <MainOverview />

      {props.selectedArticle === null ? <div className="main-articles">
        {props.articlesArr.map(article => (
          <Article key={article.uuid} article={article} onSelect={props.onSelect} />
        ))}
      </div> : <ArticleContent selectedArticle={props.selectedArticle} deSelect={props.deSelect} />}


    </main>
  )
}

export default Main
