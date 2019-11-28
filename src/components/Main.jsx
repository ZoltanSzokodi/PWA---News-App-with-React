import React from 'react'
import Card from './Card'
import { uuid } from 'uuidv4';
import '../styles/Main.css'

function Main(props) {
  console.log(props.articlesArr)
  return (
    <main className="main">
      <div className="main-header">
        <div className="main-header__heading">Hello User</div>
        <div className="main-header__updates">Recent Items</div>
      </div>

      <div className="main-overview">
        <div className="overviewcard">
          <div className="overviewcard__icon">Overview</div>
          <div className="overviewcard__info">Card</div>
        </div>
        <div className="overviewcard">
          <div className="overviewcard__icon">Overview</div>
          <div className="overviewcard__info">Card</div>
        </div>
        <div className="overviewcard">
          <div className="overviewcard__icon">Overview</div>
          <div className="overviewcard__info">Card</div>
        </div>
        <div className="overviewcard">
          <div className="overviewcard__icon">Overview</div>
          <div className="overviewcard__info">Card</div>
        </div>
      </div>

      <div className="main-cards">
        {props.articlesArr.map(card => (
          <Card key={uuid()} title={card.title} desctiption={card.desctiption} />
        ))}
      </div>
    </main>
  )
}

export default Main
