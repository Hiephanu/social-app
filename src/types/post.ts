interface post {
    name: String,
    avatar: String,
    verified: boolean,
    content: any | String,
    create_at:Date,
    image: String |undefined|null,
    video: String |undefined|null,
}

export default post