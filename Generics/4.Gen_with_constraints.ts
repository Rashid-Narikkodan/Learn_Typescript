//Generics With Constraints
function greet<T extends { size: number }>(user:T):T{ //here we check that the comming T should be and extends of other data Type
    return user
}
greet(new Set<string>(['2']))

// <T extends Type>
// <T extends {length:number}> check that is T is extends of {length:number}


class User<T extends string>{
    private store:T[] = []
    constructor(item:T){
        this.store.push(item)
    }
}
const s=new User('some items')