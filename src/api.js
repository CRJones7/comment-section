export const getComments = async () => {
    return [
        {
            id: '1',
            userName: 'Ericka',
            parentCommentID: null,
            userID: 1,
            body: "Hi, Im Ericka!",
            createdAt: "2023-03-07T19:48:55+0000"
        },
        {
            id: '2',
            userName: 'Laurin',
            parentCommentID: null,
            userID: 2,
            body: "Hi, Im Laurin!",
            createdAt: "2023-03-07T19:49:55+0000"
        },
        {
            id: '3',
            userName: 'Taylor',
            parentCommentID: null,
            userID: 3,
            body: "Hey everyone what are your thoughts on Pizza?",
            createdAt: "2023-03-07T19:49:55+0000"
        },
        {
            id: '4',
            userName: 'Christopher',
            parentCommentID: '3',
            userID: 4,
            body: "I'm a pizza fanatic!!",
            createdAt: "2023-03-07T19:50:55+0000"
        },
        {
            id: '5',
            userName: 'Laurin',
            parentCommentID: '3',
            userID: 2,
            body: "Pizza's my passion!",
            createdAt: "2023-03-07T19:51:55+0000"
        },
        {
            id: '6',
            userName: 'Danny',
            parentCommentID: '1',
            userID: 5,
            body: "Hey everyone, Im Danny.",
            createdAt: "2023-03-07T19:49:55+0000"
        },
       

    ]
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