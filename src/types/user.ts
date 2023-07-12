export interface getUser{
    id:number | string,
    name:string,
    email:string,
    password:string,
    time:Date,
    role:string,
    phoneNumber:string,
    avata:string
}
export interface postUser{
    name:string,
    email:string,
    password:string,
    time:Date,
    role:string,
    phoneNumber:string,
    avata:string
}