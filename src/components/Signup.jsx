import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import app from '../base'

function Signup({ history }) {
  const handleSignUp = useCallback(async event => {
    event.preventDefault()
    const { email, password } = event.target.elements;

    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
      history.push("/")
    } catch (error) {
      console.log(error)
    }
  }, [history]);

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default withRouter(Signup);
