type Response<T>={
    success:boolean,
    data:T
}
interface User{
    name:string
} 
const user={
    name:'rashid'
}
const res:Response<User>={
    success:true,
    data:user
}