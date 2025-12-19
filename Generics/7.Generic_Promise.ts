async function fetchUser<T>(id:number):Promise<T>{
    return fetch('/').then(res=>res.json())
}
type User={
    id:number
    name:string
}
const user = fetchUser<User>(2)