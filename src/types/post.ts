interface post {
    id: number | string ,
    userId: number,
    content: string | File | number;
    time:Date
}

export default post