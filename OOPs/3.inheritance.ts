class Human{
    talk(){}
    walk(){}
    jump(){}
}
class superHuman extends Human{
    fly(){}
}
const superman = new superHuman()
superman.fly()
superman.jump()// superman object extended from human, so all abiliies of human will also available in super human
const me=new Human()
me.jump()//me.fly() is not available, bcz I just human, cant fly and not available that method in human

//so here inheritance happened, superhuman got abilities through inheritance through extend from human.

//Inheritance is the mechanism by which a class acquires the properties and behaviors of another class.