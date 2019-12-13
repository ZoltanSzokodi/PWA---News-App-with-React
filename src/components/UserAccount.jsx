import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, Redirect } from 'react-router-dom'
import firebase, { storage } from '../firebase'
import { toggleNotification } from '../functions/helpers'
import defaultUserImg from '../img/default-profile-picture.jpg'
import Loader from './Loader'
import '../styles/UserAccount.css'

function UserAccount() {
  const { currentUser } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [progressBar, setProgressBar] = useState(0);
  const [uploadInProgress, setUploadInProgress] = useState(false);
  const [status, setSatus] = useState(null);
  const [message, setMessage] = useState(null);

  // ------------------------- EVENT HANDLERS --------------------------
  const resetNotification = () => {
    setTimeout(() => {
      setSatus(null)
      setMessage(null)
    }, 3000);
  };

  const handleNameChange = e => {
    setUserName(e.target.value)
  };

  const handleEmailChange = e => {
    setUserEmail(e.target.value)
  };

  const handleImageChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setUserImage(image)
    }
  };

  const handleImageUpload = () => {
    if (userImage === null) {
      setSatus("fail")
      setMessage("Please select an image")
      resetNotification()
    } else {
      const uploadTask = storage.ref(`images/${userImage.name}`).put(userImage);
      uploadTask.on("state_changed",
        snapshot => {
          // progress func...
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgressBar(progress)
          setUploadInProgress(true)
        },
        error => {
          console.log(error)
          setSatus("fail")
          setMessage("Something went wrong")
          resetNotification()
        },
        () => {
          // complete function - retrive image URL
          storage.ref("images").child(userImage.name).getDownloadURL()
            .then(url => currentUser.updateProfile({ photoURL: url }))
          setSatus("success")
          setMessage("Your profile picture is updated")
          resetNotification()
          setProgressBar(0)
          setUploadInProgress(false)
        }
      )
    }
  };

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
  };

  // _______________________________________________________________
  const sendResetPassword = () => {
    firebase.auth().sendPasswordResetEmail(currentUser.email).then(() => {
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
  };

  // --------------------------------------------------------------
  const deleteUser = () => {
    currentUser.delete().then(() => {
      console.log("user deleted")
    }).catch(error => {
      console.log("something went wrong", error)
    });
  };

  // const updatePassword = () => {
  //   currentUser.updatePassword("654321").then(function () {
  //     console.log("PASSWORD update SUCCESS")
  //     signOut()
  //   }).catch(function (error) {
  //     console.log("PASSWORD update FAILED", error)
  //   });
  // }  

  console.log(currentUser)

  return (
    <div className="user-wrapper">
      {/* the currentUser data is asynchronous, until data is retrived show loader */}
      {currentUser === null ? <Loader /> :

        <div className="user__details">

          {/* if a user with different providerId than pw opens "/account" manually, redirect to "/" */}
          {currentUser.providerData[0].providerId !== "password" && <Redirect to="/" />}

          <div className="user__details-photo-container">
            <img className="user__details-photo" src={currentUser.photoURL !== null ? currentUser.photoURL : defaultUserImg} alt="user" />
            <div className="user__details-photo--upload">
              <input className="choose-photo" type="file" onChange={handleImageChange} />
              <button className="upload-photo" onClick={handleImageUpload}>upload</button>
              <progress className="progress-bar" style={uploadInProgress ? { display: "block" } : { display: "none" }} value={progressBar} max="100" />
            </div>
          </div>

          {/* <Notify status={"success"} message={"yuppyy"}></Notify> */}
          {toggleNotification(status, message)}

          <div className="user__details-credentials-container">
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

        </div>}
    </div>
  );
}

export default UserAccount;
