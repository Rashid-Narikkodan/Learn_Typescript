function greet(name:string,age:any){ //here we gave age as any, thats not standerd and its a bad practice 
    return `I am ${name},I am ${age} years old`
}
const greeting = greet('rashid','23')//age is any (no type checking)



//Solved with Generics
function greetWithGenerics<Type>(name:string,age:Type){
    return `I am ${name},I am ${age} years old`
}
const greetingWithGenerics = greetWithGenerics<number>('rashid',23)//age is the type that we assign through generics
