import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, Redirect } from 'react-router-dom'
import { config } from '../firebase';
import { toggleNotification } from '../functions/helpers'
import defaultUserImg from '../img/default-profile-picture.jpg'
import '../styles/UserAccount.css'

function UserAccount() {
  const { currentUser, signOut } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [status, setSatus] = useState(null);
  const [message, setMessage] = useState(null);

  // console.log(currentUser)

  // ------------------------- EVENT HANDLERS --------------------------

  const handleNameChange = e => {
    setUserName(e.target.value)
  }

  const handleEmailChange = e => {
    setUserEmail(e.target.value)
  }

  const resetNotification = () => {
    setTimeout(() => {
      setSatus(null)
      setMessage(null)
    }, 3000);
  }

  // ------------------------- SUBMIT NEW CREDENTIALS ------------------

  const updateName = () => {
    if (userName.length < 5) {
      setSatus("fail")
      setMessage("Name must be at lest 5 chars")
      resetNotification()
    } else {
      currentUser.updateProfile({
        displayName: userName
      }).then(function () {
        setSatus("success")
        setMessage("Name updated successfully")
        resetNotification()
      }).catch((error) => {
        console.log(error)
        setSatus("fail")
        setMessage(error.message)
        resetNotification()
      });
    }
  };

  // --------------------------------------------------------------
  const updateEmail = () => {
    currentUser.updateEmail(userEmail).then(() => {
      console.log("EMAIL update SUCCESS")
      setSatus("success")
      setMessage("Email updated successfully")
      resetNotification()
    }).catch(error => {
      console.log("EMAIL update FAIL", error)
      setSatus("fail")
      setMessage(error.message)
      resetNotification()
    });
  }

  // _______________________________________________________________
  const sendResetPassword = () => {
    config.auth().sendPasswordResetEmail(currentUser.email).then(() => {
      console.log("email sent")
      setSatus("success")
      setMessage("A password reset email has been sent.")
      resetNotification()
    }).catch(error => {
      console.log("something went wrong", error)
      setSatus("fail")
      setMessage(error.message)
      resetNotification()
    });
  }

  // --------------------------------------------------------------
  const deleteUser = () => {
    currentUser.delete().then(() => {
      console.log("user deleted")
      setSatus("success")
      setMessage("User deleted")
      resetNotification()
    }).catch(error => {
      console.log("something went wrong", error)
      setSatus("fail")
      setMessage(error.message)
      resetNotification()
    });
  }

  // const updatePassword = () => {
  //   currentUser.updatePassword("654321").then(function () {
  //     console.log("PASSWORD update SUCCESS")
  //     signOut()
  //   }).catch(function (error) {
  //     console.log("PASSWORD update FAILED", error)
  //   });
  // }  

  return (
    <div className="user-wrapper">

      {/* if there is no current user protect this route with redirect */}
      {currentUser === null ? <Redirect to="/" /> : null}

      <div className="user__details">

        <div className="user__details--photo-container">
          <img className="user__details-photo" src={defaultUserImg} alt="user" />
        </div>

        {/* <Notify status={"success"} message={"yuppyy"}></Notify> */}
        {toggleNotification(status, message)}

        <div className="user__details--credentials-container">
          <div className="user-name">
            <label>name</label>
            <input className="user-input" type="text" htmlFor="name" onChange={handleNameChange} />
            <button className="submit-btn" onClick={updateName}>submit</button>
          </div>
          <div className="user-email">
            <label>email</label>
            <input className="user-input" type="email" htmlFor="email" onChange={handleEmailChange} />
            <button className="submit-btn" onClick={updateEmail}>submit</button>
          </div>
          <div className="user-password">
            <span>change password</span>
            <button className="submit-btn" onClick={sendResetPassword}>submit</button>
          </div>
          <div className="user-delete">
            <span>delete account</span>
            <button className="submit-btn" onClick={deleteUser}>delete</button>
          </div>
          <Link className="go-back" to="/"><i className="fas fa-angle-left" /> Go back</Link>
        </div>

      </div>
    </div>
  );
}

export default UserAccount;
