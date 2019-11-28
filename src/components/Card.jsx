import React from 'react'
import '../styles/Card.css'

function Card(props) {
  return <div className="card">
    <h2>{props.title}</h2>
    <h4>{props.description}</h4>
  </div>;
}

export default Card
