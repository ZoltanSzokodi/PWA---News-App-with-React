import React, { useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import { config, uiConfig } from '../firebase'
import { AuthContext } from '../context/AuthContext'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

function Login() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="login-dialog">
      {currentUser ? (
        <Redirect to="/" />
      ) : (
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={config.auth()} />
        )}
    </div>
  )
}

export default withRouter(Login);