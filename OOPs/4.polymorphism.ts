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
class Men{
    hello():number;
    hello(greet:string):string;

    hello<T>(greet?:T):T|number{
        if(typeof greet !== 'string') return 0
        else return greet
    }
    
}
const men = new Men()
console.log(men.hello())
console.log(men.hello('Good morning'))
// Polymorphism is the ability of different objects to respond to the same method call in different ways.
