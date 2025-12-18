interface Flyable{
    fly():string
}

class Bird{
    walk(){
        return 'can walk'
    }
}

class Eagle extends Bird implements Flyable{
    fly():string{
        return 'eagle can fly'
    }
    sight(){
        return 'high eye sight'
    }
}

class Penguin extends Bird {
    swim(){
        return 'swimming...'
    }
    fly(){
        throw new Error('penguin cant fly')
    }
}

const eagle = new Eagle()
const penguin = new Penguin()
console.log(penguin.swim())

//The Liskov Substitution Principle (LSP) states that 
// objects of a superclass should be replaceable by 
// objects of a subclass without altering the correctness of the program.