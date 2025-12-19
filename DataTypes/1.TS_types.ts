// 1. Tuple
const user:[string,number] = ['rashid',17] //[string,number] array with fixed size and fixed types for indexes is tuple

// 2. any
const antType:any = 'anything'
const antType2:any = 0 // typescript will not check type if we set it to any, so no type safty 

// 3. unknown
const result:unknown = 'any result'
const result1:unknown = {result:'anything'} // here also any type can use but wwee should use narrowing after unkniwn use, so TS will check our type then

// 4. never
function errorHandler():never{ // here will never return a value, so do never
    throw new Error('error message')
}

// 5. void 
function validation():void{ // here we use return but no values, so can use void to say no value is returning
    if(!true)return
}

// 6. enum type
enum Status{
    Success = 'success',
    Fail='fail'
}
const res={
    success:true,
    status:Status.Success
}