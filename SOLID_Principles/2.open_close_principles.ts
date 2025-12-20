class Human{
    walk(){
        return 'can walk'
    }
    talk(){
        return 'can talk'
    }
}

//now we shouldn't modify the class Human to achive anotehr feature liek flying
//Instead create a class with extends Human

class SuperHuman extends Human{
    fly(){
        return 'flying....'
    }
}
//now superhuman can talk,walk and also fly, we just extended talk and walk from human