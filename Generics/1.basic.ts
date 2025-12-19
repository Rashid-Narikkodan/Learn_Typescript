function greet(name:string,age:any){ //here we gave age as any, thats not standerd and its a bad practice 
    return `I am ${name},I am ${age} years old`
}
const greeting = greet('rashid','23')//age is any (no type checking)



// 1.Solved with Generics
function greetWithGenerics<Type>(name:string,age:Type){
    return `I am ${name},I am ${age} years old`
}

// 2. call by passing generic type in <>
const greetingWithGenerics = greetWithGenerics<number>('rashid',23)//age is the type that we assign through generics


// 3. call without pass genric type in <>, 
// now TS will inferred the "23" as string, so <Type> is become <string>
const g = greetWithGenerics('rashid','23')


// 4.we can  also pass multiple parameters in generics, also return value is a array
function multiGenerics<NameType,AgeType>(name:NameType,age:AgeType):(NameType|AgeType)[]{
   return [name,age]
}
multiGenerics('rashid',78)//inferred the Types automatically

// 5.default generics
function defaultGeneric<T = string>(success:T):T{
    return success
}
const defaultGenWithoutType=defaultGeneric(1)
const defaultGenWithType=defaultGeneric('true')