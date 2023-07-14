interface post {
    id: number | string ,
    userId: number,
    content: string | File | number;
    create_at:Date
}

export default post