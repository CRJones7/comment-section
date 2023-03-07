
export const getComments = async () => {
    let data = localStorage.getItem("commentList")
    return JSON.parse(data)
}

export const addComment = async (text, parentCommentID = null) => {
    return{
        id: Math.random().toString(36).substring(2,9),
        parentCommentID,
        userID: 1, // mock since no backend exisits
        userName: "Jenny", // mock since no backend exisits
        body: text,
        createdAt: new Date().toISOString()
    }
}

export const deleteCommentApi = async () => {
    return
}

export const updateComment = async () => {
    return
}   