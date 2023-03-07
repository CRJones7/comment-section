import React, { useEffect, useState } from 'react';
import { getComments, addComment,  deleteCommentApi, updateComment} from '../api';
import Comment from "./Comment"
import CommentForm from "./Form"
const Comments = () => {
    const [comments, setComments] = useState([])
    const [selectedComment, setSelectedComment] = useState(null)

    useEffect(() => {
        
    }, [])
    useEffect(() => {
        getComments().then(data => {
            setComments(data)
        })
    }, [])

    //generate array of all parent comments
    const parentComments = comments.length > 0 && comments.filter(
        (comment) => comment.parentCommentID === null
    )
    // method to filter out replies and sort them newest to oldest
    const filterdReplies = (commentID) => {
        return comments.filter(comment => comment.parentCommentID === commentID).sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    }

    // adding comment handler
    const handleComment = (text, parentCommentID) => {
        console.log('comment', text, parentCommentID)
        addComment(text, parentCommentID).then((comment) => {
            setComments([comment, ...comments]);
            setSelectedComment(null)
        })
    }

    // delete
    const deleteComment = (id) => {
        deleteCommentApi(id).then(() => {
            const updatedComments = comments.filter((comment) => comment.id !== id);
            setComments(updatedComments)

        })
    }

    const editComment = (text, id) => {
        updateComment().then(() => {
            const updatedComments = comments.map((comment) => {
                if(comment.id === id){
                    return {...comment, body: text}
                }
                return comment
            })
            setComments(updatedComments)
            setSelectedComment(null)
        })
    }

    return(
      <div className="commentsList">
        <h3 className='commentsListTitle'>Comments</h3>
        <CommentForm label="Write Comment" handleSubmit={handleComment}/>
        <div>
        {comments.length > 0 && parentComments.map((com, idx) => {
            return(
                    <Comment 
                    key={com.id} 
                    currentUser={1} 
                    comment={com} 
                    replies={filterdReplies(com.id)} 
                    isReply={false} 
                    deleteComment={deleteComment}
                    editComment={editComment}
                    selectedComment={selectedComment}
                    setSelectedComment={setSelectedComment}
                    handleComment={handleComment}
                    />
            )
        })}
        </div>
        
      </div>
    )
  }
  
  export default Comments;