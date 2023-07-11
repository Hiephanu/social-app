enum statusFriend {"accept", "reject" , "await"}

interface friendship{

    id:string |number,
    userIdSend :string | number,
    userIDRecieve:string |number,
    status: statusFriend
}

export default friendship