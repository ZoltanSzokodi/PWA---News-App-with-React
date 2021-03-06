import React, { useContext } from 'react'
import { toggleClassesWdarkMode } from '../functions/helpers'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/Article.css'

function Article(props) {
  const {
    urlToImage,
    title,
    uuid,
    description
  } = props.article;

  const { darkMode } = useContext(ThemeContext);

  // filter out scenarios when there is no src for article image
  const displayImage = urlToImage !== null && <img className="article-image" src={urlToImage} alt="banner" />

  return (
    <div className={toggleClassesWdarkMode(darkMode, "article")} onClick={() => props.handleArticleSelect(uuid)}>
      {displayImage}
      <h2 className="article-h2">{title}</h2>
      <h3 className="article-h3">{description}</h3>
    </div>
  );
}

export default Article;
