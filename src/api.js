export const getComments = async () => {
    return [
        {
            id: '1',
            userName: 'Ericka',
            parentCommentID: null,
            userID: 1,
            body: "Hi, Im Ericka!"
        },
        {
            id: '2',
            userName: 'Laurin',
            parentCommentID: null,
            userID: 2,
            body: "Hi, Im Laurin!"
        },
        {
            id: '3',
            userName: 'Taylor',
            parentCommentID: null,
            userID: 3,
            body: "Hey everyone what are your thoughts on Pizza?"
        },
        {
            id: '4',
            userName: 'Christopher',
            parentCommentID: '3',
            userID: 4,
            body: "I'm a pizza fanatic!!"
        },
        {
            id: '5',
            userName: 'Laurin',
            parentCommentID: '3',
            userID: 2,
            body: "Pizza's my passion!"
        },
        {
            id: '6',
            userName: 'Danny',
            parentCommentID: '1',
            userID: 5,
            body: "Hey everyone, Im Danny."
        },
        {
            id: '7',
            userName: 'John',
            parentCommentID: null,
            userID: 6,
            body: "Happy to be here, Im John."
        },
        {
            id: '8',
            userName: 'Christopher',
            parentCommentID: '7',
            userID: 4,
            body: "Welcome John!"
        },
       

    ]
}