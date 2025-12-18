interface Power{
    fly():string
}
interface BatmobPower{
    superSpeed():string
}
class Batman implements Power{
    fly(){
        return 'batman is flying'
    }
}
class BatMob implements Power,BatmobPower{
    fly(){
        return 'batmob is flying....'
    }
    superSpeed(){
        return 'super speed activated'
    }
}

//Clients should not be forced to depend on interfaces they do not use.

//An interface must be small, specific, and role-focused.
//If a class is required to implement methods that are irrelevant to its responsibility,
//the interface is poorly designed.