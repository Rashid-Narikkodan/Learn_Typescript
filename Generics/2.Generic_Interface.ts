//create a shape for the object res
interface ApiResponse<T>{
    data:T
    success:boolean
}


type Product={ // create a type for product
    name:string
    price:number
}
type User={
    name:string
    age:number
}


const product:Product = { // Just create a product for example
    name:'somthing',
    price:3999
}
const user:User = {
    name:'somthing',
    age:17
}


const res: ApiResponse<Product>={
    data:product,
    success:true
}
const userRes: ApiResponse<User>={
    data:user,
    success:true
}

//Both will work perfectly fine, bcz we use generics in interface of ApiResponse