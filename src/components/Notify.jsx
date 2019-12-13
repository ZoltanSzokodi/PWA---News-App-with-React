import React from 'react'
import '../styles/Notify.css'

function Alert({ status, message }) {
  return (
    <div className={status === null ? "hide" : "notify"}>
      <div className={status === "success" ? "success" : "fail"}>{message}</div>
    </div>
  );
}

export default Alert;
