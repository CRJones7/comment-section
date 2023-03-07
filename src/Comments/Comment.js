import React from "react";


const Comment = ({key, comment}) => {
    const {id, userName, userID, body} = comment


  return(
    <div className="commentBlock">
      <div className="commentContent">
        <div className="commenterName">{userName}:</div>
        <div className="commentBody">{body}</div>
      </div>
    </div>
  )
}

export default Comment;