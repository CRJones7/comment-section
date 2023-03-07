import React from "react";
import CommentForm from "./Form";


const Comment = ({ 
    comment, 
    replies, 
    isReply, 
    currentUser, 
    deleteComment, 
    selectedComment, 
    setSelectedComment, 
    handleComment,
    editComment,
}) => {

    const {id, userName, parentCommentID, userID, body, createdAt} = comment

    const canEditAndDelete = currentUser === userID
    const replying = selectedComment && selectedComment.type === "reply" && selectedComment.id === id
    const editing =  selectedComment && selectedComment.type === "edit" && selectedComment.id === id
    const replyId = parentCommentID ? parentCommentID : id
  return(
    <>
    <div className={!isReply ? "commentBlock" : 'responseBlock'}>
      <div className="commentContent">
        <div className={!isReply ? "commenterName" : "respondersName"}>{userName}:</div>
        {!editing ? 
        <div className="commentBody">{body}</div> 
        : 
            <CommentForm 
                label="Update" 
                handleSubmit={(text) => editComment(text, id)}
                canCancel
                initialText={body}
                handleCancel={() => setSelectedComment(null)}
                /> 
        }
        <div className="commentAction">
            {!isReply && 
            <div 
            className="commentActionBtn"
            onClick={() => setSelectedComment({id: id, type: 'reply'})}
            >
                Reply
            </div>}
            {canEditAndDelete && 
            <div 
            className="commentActionBtn"
            onClick={() => setSelectedComment({id: id, type: 'edit'})}
            >
                Edit
            </div>}
            {canEditAndDelete && 
                <div 
                    className="commentActionBtn" 
                    onClick={() => deleteComment(id)}>
                    Delete
                </div>}
        </div>
        {replying && 
            <CommentForm 
                label="Reply" 
                handleSubmit={(text) => handleComment(text, replyId)}/> }
      </div>
    </div>
    <div className="responseBlocks">
    {replies.length > 0 && (
        <div>
            {replies.map((resp, idx) => {
                let indent = (idx * 4) + 10
             return(
                <div key={resp.id} style={{marginLeft: indent}}>
                   <Comment 
                        comment={resp} 
                        key={resp.id} 
                        replies={[]} 
                        isReply={true} 
                        currentUser={currentUser} 
                        deleteComment={deleteComment}
                        editComment={editComment}
                        selectedComment={selectedComment}
                        setSelectedComment={setSelectedComment}
                        handleSubmit={handleComment}
                        parentCommentID={id}
                        />
                </div> 
                  )
            })}
        </div>
      )}
      </div>
    </>
  )
}

export default Comment;