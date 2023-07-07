interface comment{
    id:number |  string,
    userCommentId : number |string,
    postId : number | string,
    content: number | string | File
    time: Date
}

export default comment