import React from 'react'
import '../styles/Article.css'

function Article(props) {

  const displayImage = props.article.urlToImage !== null && <img className="article-image" src={props.article.urlToImage} alt="banner" />

  return (
    <div className="article" onClick={() => props.onSelect(props.article.uuid)}>
      {displayImage}
      <h2 className="article-h2">{props.article.title}</h2>
      <h3 className="article-h3">{props.article.description}</h3>
    </div>
  );
}

export default Article
