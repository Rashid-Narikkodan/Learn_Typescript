class Cache<T>{
    private store:T[]=[]
    constructor(item:T){
        this.store.push(item)
    }
    getAll():T[]{
        return this.store
    }
}

const cache = new Cache(4) //inferred
const cache1 = new Cache<string>('something') //manually type generics
console.log(cache.getAll())
console.log(cache1.getAll())