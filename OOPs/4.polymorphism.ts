// 1. Method over riding
class Car{
    start(){
        return 'strating.....'
    }
    redButton(){
        return 'lights on'
    }
}
class BMW extends Car{
    blueButton(){
        return 'light on'
    }
    redButton(): string {// here we overrided the method redButton()
        return 'Sports mode'
    }
}


// 2. Method over loading
interface Human{
hello():string
hello(greet:string):string
}

class Person{
    hello(){
        return 'hello from person'
    }
}
class Men implements Human{
    hello(greet?:string): string {
        return `hey buddy,${greet}`
    }
    
}
// Polymorphism is the ability of different objects to respond to the same method call in different ways.