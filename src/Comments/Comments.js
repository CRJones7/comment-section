import React, { useEffect, useState } from 'react';
import { getComments } from '../api';
import Comment from "./Comment"

const Comments = () => {
    const [comments, setComments] = useState([])
    const parentComments = comments.length > 0 && comments.filter(
        (comment) => comment.parentCommentID === null
    )
    useEffect(() => {
        getComments().then(data => {
            setComments(data)
        })
    }, [])

    return(
      <div className="commentsList">
        <h3 className='commentsListTitle'>Comments</h3>
        <div>
        {comments.length > 0 && parentComments.map((com, idx) => {
            return(
            
                    <Comment key={com.id} comment={com}/>
               
            )
        })}
        </div>
        
      </div>
    )
  }
  
  export default Comments;