import React, { useContext } from 'react'
import firebase, { uiConfig } from '../firebase'
import { withRouter, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import '../styles/Login.css'

function Login() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="login-wrapper">
      <div className="login-dialog">
        <h2 className="login-title">Please choose your login account</h2>
        {currentUser ? (
          <Redirect to="/" />
        ) : (
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          )}
        <Link className="login-goBack" to="/" ><i className="fas fa-angle-left"></i> Go back</Link>
      </div>
    </div>
  )
}

export default withRouter(Login);