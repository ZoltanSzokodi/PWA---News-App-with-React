import React from 'react'
import '../styles/Notify.css'

function Alert(props) {
  return (
    <div className={props.status === null ? "hide" : "notify"}>
      <div className={props.status === "success" ? "success" : "fail"}>{props.message}</div>
    </div>
  )
}

export default Alert;
