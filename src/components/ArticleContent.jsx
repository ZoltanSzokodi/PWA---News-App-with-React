import React from 'react'
import '../styles/ArticleContent.css'

function ArticleContent(props) {
  return (
    <div className="article__content">
      <h1>I am an articel</h1>
      <p>{props.selectedArticle.content}</p>
      <button onClick={props.deSelect}>Go Back</button>
    </div>
  )
}

export default ArticleContent
