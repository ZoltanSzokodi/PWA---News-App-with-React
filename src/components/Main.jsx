import React from 'react'
import '../styles/Main.css'

function Main() {
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
        <div className="card">Card</div>
        <div className="card">Card</div>
        <div className="card">Card</div>
        <div className="card">Card</div>
      </div>
    </main>
  )
}

export default Main
