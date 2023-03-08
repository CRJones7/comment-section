import React, { useEffect, useState } from 'react';
import { getComments, addComment,  deleteCommentApi, updateComment} from '../api';
import Comment from "./Comment"
import CommentForm from "./Form"
const Comments = () => {
    const [comments, setComments] = useState([])
    const [selectedComment, setSelectedComment] = useState(null)

    const storeData = (comments) => {
            setComments(comments)
            let stringified = JSON.stringify(comments)
            window.localStorage.setItem("commentList", stringified)
            setSelectedComment(null)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try{
            let data = await getComments()
            if(data){
                setComments(data)
            }else{
                setComments([])
            }
        }catch{
            console.log("Error Fetching Data")
        }
        
    }

    //generate array of all parent comments
    const parentComments = comments.length > 0 && comments.filter(
        (comment) => comment.parentCommentID === null
    )
    // method to filter out replies and sort them newest to oldest
    const filterdReplies = (commentID) => {
        return comments.filter(comment => comment.parentCommentID === commentID).sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    }

    // adding comment handler
    const handleComment = async (text, parentCommentID) => {
        try{
            let resp = await addComment(text, parentCommentID)
            storeData([resp, ...comments])
        }catch{
            console.log("Error Adding Comment")
        }
        
    }

    // delete
    const deleteComment = async (id) => {
        try{
            await deleteCommentApi(id)

            const updatedComments = comments.filter((comment) => comment.id !== id);
            storeData(updatedComments)
            
        }catch{
            console.log("Error deleting comment")
        }
        
    }

    const editComment = async (text, id) => {
        try{
            await updateComment()
            const updatedComments = comments.map((comment) => {
                if(comment.id === id){
                    return {...comment, body: text}
                }
                return comment
            })
            
            storeData(updatedComments)
        }catch{
            console.log("Error saving Changes ")
        } 
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