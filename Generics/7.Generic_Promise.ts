async function fetchUser<T>(id:number):Promise<T>{
    return fetch('/').then(res=>res.json())
}
type User={
    name:string
    age:number
}
type Response<T>={
    success:boolean
    data:T
}
const user = fetchUser<Response<User>>(2)