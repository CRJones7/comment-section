import React, { useState } from "react";

const CommentForm = ({label, handleSubmit, canCancel = false, initialText = '', handleCancel}) => {
    const [text, setText] = useState(initialText)

    const onSubmit = e => {
        e.preventDefault()
        handleSubmit(text)
        setText("")
    }
    return (
        <form onSubmit={onSubmit}>
          <textarea className="commentTextArea" value={text} onChange={(e) => setText(e.target.value)}/>
          <div className="formBtnGrp">
          <button disabled={text.length === 0} className="commentSubmitBtn">{label}</button>
          {canCancel && (
            <button 
                type="button" 
                className="commentSubmitBtn cancelBtn" 
                onClick={handleCancel}>
                Cancel
            </button>
          )
          }
          </div>
        </form>
    )
}

export default CommentForm