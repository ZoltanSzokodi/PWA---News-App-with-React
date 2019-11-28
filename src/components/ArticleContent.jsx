import React from 'react'
import '../styles/ArticleContent.css'

function ArticleContent(props) {
  return (
    <div className="article__content">
      <img className="article__content-image" src={props.selectedArticle.urlToImage} alt="article-image" />
      <h2 className="article__content-title">{props.selectedArticle.title}</h2>
      <p className="article__content-real">{props.selectedArticle.content}</p>
      <p className="article__content-fake">{props.selectedArticle.dummyText}</p>
      <p className="article__content-fake">{props.selectedArticle.dummyText}</p>
      <p className="article__content-fake">{props.selectedArticle.dummyText}</p>
      <button onClick={props.deSelect}>Go Back</button>
    </div>
  )
}

export default ArticleContent
