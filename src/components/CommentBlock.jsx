import React, { useState, useEffect, useContext } from 'react'
import defaultUserImg from '../img/default-profile-picture.jpg'
import { toggleClassesWdarkMode } from '../functions/helpers'
import { uuid } from 'uuidv4';
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'
import firebase from '../firebase'
import '../styles/CommentBlock.css'


function CommentBlock(props) {
  const { title } = props.selectedArticle;

  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);

  const [comments, setComments] = useState([]);
  const [newCommentBody, setNewCommentBody] = useState("");

  // Initializing the database 
  const db = firebase.firestore();

  // ------------------------------------- FETCH ALL COMMENTS --------------------------------
  const fetchComments = async () => {
    // if there is no current user do not fetch comments
    if (currentUser !== null) {
      const data = await db.collection("comments").get();
      let commentsArray = [];
      data.docs.map(doc => commentsArray.push({ ...doc.data(), comment_id: doc.id }))

      // first I am pushing the comments from the db into an array which I sort according to their time stamp in order to render them in the correct order
      setComments(commentsArray.sort((a, b) => a.timestamp - b.timestamp));
    }
    return;
  };

  useEffect(() => {
    fetchComments()
  }, [])

  // ------------------------------------ UPDATE COMMENTS DB ----------------------------------
  // sending the new comment to the db
  const addComment = () => {
    const commentArea = document.querySelector(".comment-input-body");
    const comment = {
      timestamp: Date.now(),
      article_title: title,
      comment_body: newCommentBody,
      user_id: currentUser.uid,
      user_name: currentUser.displayName
    }

    db.collection("comments").add(comment)
      .catch(error => console.log(error))

    // after every comment submit we fetch the comments again
    fetchComments()
    commentArea.value = ""
    setNewCommentBody("")
  }

  // deleting a comment
  const deleteComment = e => {
    const id = e.target.getAttribute("data-id")
    console.log(id)
    db.collection("comments").doc(id).delete()
    fetchComments()
  }

  // listenig to textarea changes
  const handleChange = e => {
    setNewCommentBody(e.target.value)
  }

  // console.log(comments)

  return (
    <React.Fragment>
      <div className={toggleClassesWdarkMode(darkMode, "comments__input-container")}>
        <h3 className="comment-title">COMMENTS</h3>
        <textarea className={toggleClassesWdarkMode(darkMode, "comment-input-body")} name="comment" wrap="hard" onChange={handleChange} required></textarea>
        <button className="comment-btn" onClick={addComment} disabled={newCommentBody === "" && true}><i className="fas fa-plus"></i></button>
      </div>

      <div className={toggleClassesWdarkMode(darkMode, "comments__output-container")}>
        <ul className="comments-list">
          {comments.map(comment => (
            (comment.article_title === title) &&
            <li className="comment" key={uuid()}>
              <div className="comment__credentials">
                <img className="comment__credentials--img" src={defaultUserImg} alt="photo" />
                <span className="comment__credentials--name">{comment.user_name}</span>
              </div>

              <div className={toggleClassesWdarkMode(darkMode, "comment-output-body")}>{comment.comment_body}</div>

              {currentUser && (currentUser.uid === comment.user_id) &&
                <div className="comment__change">
                  <i className="far fa-trash-alt delete" data-id={comment.comment_id} onClick={deleteComment}></i>
                </div>}

            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default CommentBlock;
